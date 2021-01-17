let ready = false
const vidReady = (player, paused, reConnectAttempts, io, $router, roomId) => {
	setInterval(() => {
		if (!ready) {
			if (
				player.getPlayerState() == 1 ||
				player.getPlayerState() == -1 ||
				player.getPlayerState() == 5
			) {
				if (paused) player.pauseVideo()
				else player.playVideo()
				ready = true
				io.emit(roomId, { vidReady: ready })
			} else {
				ready = false
				reConnectAttempts++

				console.log('reconnecting... ' + reConnectAttempts + 'e attempt')
				if (reConnectAttempts == 300) {
					ready = true
					$router.push(
						'/room/roomAction=join/error=room%20timed%20out/join=none'
					)
				}
			}
		}
	}, 70)

	setInterval(() => {
		if (ready == true) {
			return true
		} else {
			return false
		}
	}, 70)
}

module.exports = vidReady
