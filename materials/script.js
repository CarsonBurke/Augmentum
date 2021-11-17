// Call init() on load

window.addEventListener('load', init)

function init() {

    // Find theme and set as it. If not theme set to light
    if (!localStorage.theme) localStorage.theme = 'light'
    setTheme(localStorage.theme)
}

// General

function wait(miliseconds) {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, miliseconds)
    })
}

// General UI functions

function toggleUI(id1, id2) {

    // Show and hide using ids

    hideEl(id1)
    showEl(id2)
}

function showEl(id) {

    // Find el with id and show it

    const el = document.getElementById(id)
    el.classList.remove('hidden')
}

function hideEl(id) {

    // Firn el with id and hide it

    const el = document.getElementById(id)
    el.classList.add('hidden')
}



// Theme functions

function toggleTheme() {

    // Find current theme

    const theme = localStorage.theme

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

    localStorage.theme = theme

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