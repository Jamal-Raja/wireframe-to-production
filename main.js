// Handles the dropdown menu toggle: opens/closes the menu and switches the button icon between hamburger and X
const toggleBtn = document.querySelector('.dropdown-toggle')
const toggleBtnIcon= document.querySelector('.dropdown-toggle i')
const dropdDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropdDownMenu.classList.toggle('open')
    const isOpen = dropdDownMenu.classList.contains('open')

    toggleBtnIcon.className = isOpen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Changes the theme between dark/light and switches the button icon between sun and moon 
const themeToggleBtn = document.querySelector('.theme-toggle')
const themeToggleBtnIcon = document.querySelector('.theme-toggle i')
const currentTheme = document.documentElement.getAttribute("data-theme")

themeToggleBtn.onclick = function () {
    if (document.documentElement.getAttribute("data-theme") == "light") {
        document.documentElement.setAttribute("data-theme", "dark")
        themeToggleBtnIcon.classList.remove('fa-moon')
        themeToggleBtnIcon.classList.add('fa-sun')
    }
    else { 
        document.documentElement.setAttribute("data-theme", "light")
        themeToggleBtnIcon.classList.remove('fa-sun')
        themeToggleBtnIcon.classList.add('fa-moon')
    }
}