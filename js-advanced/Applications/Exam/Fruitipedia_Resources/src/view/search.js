import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFruit } from '../data/fruit.js';

let searchTemplate = (onSearch, result, query) => html`

<section id="search">

    <div class="form">
        <h2>Search</h2>
        <form class="search-form" .value=${query || ''}>
            <input type="text" name="search" id="search-input" .value=${query || ''} />
            <button @click=${onSearch} class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
    ${result.length > 0
        ? html`${result.map(r => resultTemplate(r))}`
        : html`<p class="no-result">No result.</p>`}

    </div>
    </div>
</section>





`;

let resultTemplate = (fruit) => html`
<!-- <a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a> -->


<!--If there are matches display a div with information about every fruit-->
<div class="fruit">
    <img src="./images/fruit 1.png" alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/dashboard/${fruit._id}/edit">More Info</a>

`;


export async function searchPage(ctx) {
    // console.log('searchPage');
    //let query = ctx.querystring.split('=')[1];

    //let result = await getAllFruit(query);
    ctx.render(searchTemplate(onSearch, result));

    function onSearch(ev) {
        ev.preventDefault();
        let input = document.querySelector('[name="search"]').value;
        ctx.page.redirect('/search?title=' + input);
    }
}