const handleData = (data, player, io, roomId) => {
    if (data.pauseVideo) {
        player.pauseVideo()
    }
    if (data.playVideo) {
        player.playVideo()
    }
    if (data.seekTo) {
        player.seekTo(data.seekTo, true)
    }
    if (data.barChanged) {
        player.seekTo(data.barChanged, true)
    }
    if (data.sendVidTime) {
        io.emit(roomId, {
            seek: {
                time: player.getCurrentTime(),
                socketId: data.sendVidTime
            }
        })
    }
}

module.exports = handleData