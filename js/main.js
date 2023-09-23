

let menu_buttons = document.querySelectorAll(".menu a");
let view_screens = document.querySelectorAll(".view-screen")

for( let i = 0 ; i < menu_buttons.length ; i++){
    
    menu_buttons[i].addEventListener('click', () => {
        
        // ele.classList.add('active')
        menu_buttons.forEach(ele => {
            ele.classList.remove('active')
        })

        menu_buttons[i].classList.add('active')

        view_screens.forEach(ele => {
            ele.classList.remove('visible')
        })

        view_screens[i].classList.add('visible')
    })


}

let buttons = document.querySelectorAll(".button-content")
let iframe_screen = document.getElementById("iframe-screen")
let iframe = document.getElementById("myframe")
let close_iframe_screen = document.getElementById("close-iframe")



buttons.forEach(ele => {
    ele.addEventListener('click', () => {
        iframe_screen.classList.add("show-iframe-screen");
        iframe.classList.add("show-iframe");
        close_iframe_screen.classList.add("show-close-iframe");
        iframe.contentWindow.document.location.href=ele.getAttribute('data-screen-name');


        close_iframe_screen.addEventListener('click', () => {
            iframe_screen.classList.remove("show-iframe-screen");
            iframe.classList.remove("show-iframe");
            close_iframe_screen.classList.remove("show-close-iframe");
        })

    })
})








// ============== TEXT EDITING CONTROLLER ==============


let toolbaroptions = [
    ["bold","italic","underline","strike"],
    [{header:[1,2,3,4,5,6,false]}],
    [{list:"ordered"},{list:"bullet"}],
    [{script:"sub"},{script:"super"}],
    [{indent:"+1"},{indent:"-1"},'blockquote',],
    [{align:[]}],
    [{size:["small" , "large" , "huge" , false]}],
    ["image","link","video","formula"],
    [{color:[]},{background:[]}],
    [{font:[]}],
    [{ 'direction': 'rtl' }], 
    ['clean']

]

var quill_ltr = new Quill('#editor-ltr', {

    modules: {
        toolbar: toolbaroptions

    },
    theme: 'snow'
});


var quill_rtl = new Quill('#editor-rtl', {

    modules: {
        toolbar: toolbaroptions

    },
    theme: 'snow'
});



quill_rtl.format('direction', 'rtl');
quill_rtl.format('align', 'right');

// Return the HTML content of the editor
function getQuillHtml_ltr() { console.log(quill_ltr.root.innerHTML); }
function getQuillHtml_rtl() { console.log(quill_rtl.root.innerHTML); }

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ar'}, 'google_translate_element');
  }