// Call init() on load

window.addEventListener('load', init)

function init() {

    // Find theme and set as it

    const theme = localStorage.getItem('theme')
    setTheme(theme)
}

// General

function wait(miliseconds) {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, miliseconds)
    })
}

// General UI functions

function toggleUI(id1, id2) {

    // Configure elements based on ids

    const el1 = document.getElementById(id1)
    const el2 = document.getElementById(id2)

    //

    el1.classList.add('hidden')
    el2.classList.remove('hidden')
}


// Theme functions

function toggleTheme() {

    // Find current theme

    const theme = localStorage.getItem('theme')

    // If theme is light

    if (theme == 'light') {

        // Set to dark

        setTheme('dark')
    } else {

        // Set to light

        setTheme('light')
    }
}

function setTheme(theme) {

    // Set recorded theme as theme, style body accordingly

    localStorage.setItem('theme', theme)

    if (theme == 'dark') {

        document.body.classList.add('darkMode')
    } else {

        document.body.classList.remove('darkMode')
    }

    // Config themeButton content

    const themeButtonContent = {
        light: `
        <span class="material-icons">
        light_mode
        </span>
        Toggle theme
        `,
        dark: `
        <span class="material-icons">
        dark_mode
        </span>
        Toggle theme
        `
    }

    // Set themeButton content based on theme

    const themeButton = document.getElementById('themeButton')
    themeButton.innerHTML = themeButtonContent[theme]

    // Inform new theme

    return theme
}