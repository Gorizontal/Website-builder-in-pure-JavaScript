import {col, row} from './utils.js'

function title (block) { 
    return row(col(`<h1>${block.value}</h1>`))
}

function text (block) {
    return row(col(`<p>${block.value}</p>`))
}

function columns (block) {

    const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
    return `
    <div class="row">
            ${html.join('')}
        </div>    `
}



function image (block) {
    return `
    <div class="row">
        <img src ='${block.value}'>
    </div>
    `
}

export const templates = {
    title: title,
    text: text,
    image: image,
    columns: columns
}