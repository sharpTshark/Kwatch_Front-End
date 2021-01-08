const wait = async (duration) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

module.exports = wait