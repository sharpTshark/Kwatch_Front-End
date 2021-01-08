const ready = (ready, player, paused, reConnectAttempts, io, $router) => {
    setInterval(() => {
        if (!ready) {
            if (player.getPlayerState() == 1 || player.getPlayerState() == -1 || player.getPlayerState() == 5) {
                if (paused) player.pauseVideo()
                else player.playVideo()
                ready = true
                io.emit('testroom', { vidReady: ready });
            } else {
                ready = false
                reConnectAttempts++
                
                console.log('reconnecting... '+reConnectAttempts+'e attempt');
                if (reConnectAttempts == 300) {
                    ready = true
                    $router.push('/room/roomAction=join/error=room%20timed%20out/join=none')
                }
            }
        }
    }, 70);
}
module.exports = ready