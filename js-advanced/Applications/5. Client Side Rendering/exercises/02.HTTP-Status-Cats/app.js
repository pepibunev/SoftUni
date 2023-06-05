import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const cardTemplates = (data) => html`
    <ul>
       <img
           src=".images/${data.imageLocation}.jpg"
           wodth="250"
           height="250"
           alt="Card imag cap"
        />
        <div class"info">
            <button class="showBtn" @click = ${onClick} > Show status code </button>
            <div class="status" style="display: none" id=${data.id}>
                 <h4>${data.statusCode}</h4>
                 <p>${data.statusMessage}</p>
        </div>
    </ul>

`

const allTemplates = (data) => html`
    <ul>${data.map((cat) => cardTemplates(cat))}</ul>
`

const renderCatsComponent = (data) => {
    render(allTemplates(data), documnet.getElementById('allCats'))
}
renderCatsComponent(cats);

function onClick(event) {
   const cat = event.target.parentNode;
   const result = cat.querySelector('.status').style.displayl;

   if (result === 'block') {
    cat.querySelector('.showBtn').textContent = 'Show status code';
    cat.querySelector('.status').style.display = 'none';
   } else {
    cat.querySelector('.showBtn').textContent = 'Hide status code';
    cat.querySelector('.status').style.display = 'block';
   }
}