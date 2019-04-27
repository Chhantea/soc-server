module.exports = function (io) {
    users = [];
    var  count=0;
    io.on('connection', function(socket) {
        socket.on('create', function(room) {
            socket.join(room);
        });
        console.log(io.sockets.adapter.rooms );
        count++;
        io.sockets.emit('client', {c: count});
        socket.on('setUsername', function(data) {
            console.log(data);

            if(users.indexOf(data) > -1) {
                socket.emit('userExists', data + ' username is taken! Try some other username.');
            } else {
                users.push(data);
                socket.emit('userSet', {username: data});
            }
        });
        socket.on('msg', function(data) {
            //Send message to everyone
            console.log(io.sockets.adapter.rooms );
            io.sockets.emit('newmsg', data);
        });
        socket.on('disconnect', function (reason) {
            count--;
            io.sockets.emit('client', {c: count});
            if (reason === 'io server disconnect') {
                socket.connect();
            }
        });
        socket.on('stream',function(image){
            console.log("out stream",image);
            socket.broadcast.emit('stream',image);
        });

    });

}