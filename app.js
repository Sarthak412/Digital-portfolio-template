console.log('Its working baby')

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}    

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-color').href = 'style.css'
    }

    if(mode == 'dark'){
        document.getElementById('theme-color').href = 'dark.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-color').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}