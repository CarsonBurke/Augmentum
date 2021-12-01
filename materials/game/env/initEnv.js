function initEnv() {

    // Hide home UI

    const homeUI = document.getElementById('home')
    homeUI.classList.add('hidden')

    // Show menuButton

    const menuButton = document.getElementById('menuButton')
    menuButton.classList.remove('hidden')

    // Stop if there is already a game

    if (game) return

    //

    const playButton = document.getElementById('playButton')
    playButton.innerHTML = '<span class="material-icons">play_arrow</span>Resume'

    // Create a new game and initialize it

    game = new Game()
    game.init()
}