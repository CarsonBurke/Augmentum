function initEnv() {

    // Hide home UI

    const homeUI = document.getElementById('home')
    homeUI.classList.add('hidden')

    // Show menuButton

    const menuButton = document.getElementById('menuButton')
    menuButton.classList.remove('hidden')

    // Iterate based on gameCount

    let i = 0
    while (i < gameCount) {

        // Create a new game

        const game = new Game()
        game.init()

        i++
    }

}