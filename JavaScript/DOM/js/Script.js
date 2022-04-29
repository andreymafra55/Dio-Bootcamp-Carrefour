function changemode(){
    changeClasses()
    changeText()
}

function changeClasses(){
    button.classList.toggle(darkmodeclass)
    h1.classList.toggle(darkmodeclass)
    body.classList.toggle(darkmodeclass)
    footer.classList.toggle(darkmodeclass)
}

function changeText(){
    const lightmode = "Light Mode"
    const darkmode = "Dark Mode"
    
    if(body.classList.contains(darkmodeclass)){
        button.innerHTML = lightmode
        h1.innerHTML = darkmode + "ON"
        return
    }

    button.innerHTML = darkmode
    h1.innerHTML = lightmode + "ON"

}

const darkmodeclass = "dark-mode"
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0]


button.addEventListener('click',changemode)