function initEnv() {

    hideEl('home')
    showEl('gameUI')

    // Stop if there is already a game

    if (game) return

    //

    const playButton = document.getElementById('playButton')
    playButton.addEventListener('click', function() { game.unPause() })
    playButton.innerHTML = '<span class="material-icons">play_arrow</span>Resume'

    //

    const gameDescription = document.getElementById('gameDescription')

    gameDescription.innerHTML = `Your goal is to build a new company town on this land plot, using the workers to produce oil.
    <br><br>
    This will attract of environmentalists. Create turrets to defend your production.
    <br><br>
    Remember, our shareholders are counting on you.`

    // Create a new game and initialize it

    game = new Game()
    game.init()

    //

    runEnv()
}