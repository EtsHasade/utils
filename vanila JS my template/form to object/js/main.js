'use strict';

document.body.onload = init;

function init(){
    console.log('init!');
}

function handleFormData(ev, elForm) {
    ev.preventDefault()
    console.log('elForm', elForm.elements);
    
    window.formElement = new FormData(ev.target)
    console.log("🚀 ~ file: main.js ~ line 13 ~ handleFormData ~ formElement", formElement)
    console.log("🚀 ~ file: main.js ~ line 1 ~ handleFormData ~ ev.target", ev.target)
    
    


    
}
