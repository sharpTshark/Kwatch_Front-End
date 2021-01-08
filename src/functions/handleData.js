const handleData = (data, player, vidDuration, io) => {
    if (data.pauseVideo) {
        player.pauseVideo()
    }
    if (data.playVideo) {
        player.playVideo()
    }
    if (data.loadVideoById) {
        player.loadVideoById(data.loadVideoById)
        setInterval(() => vidDuration = player.getDuration(), 1000);
    }
    if (data.seekTo) {
        player.seekTo(data.seekTo, true)
    }
    if (data.barChanged) {
        player.seekTo(data.barChanged, true)
    }
    if (data.sendVidTime) {
        io.emit('testroom', {
            seek: {
                time: player.getCurrentTime(),
                socketId: data.sendVidTime
            }
        })
    }
}

module.exports = handleData