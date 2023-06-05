import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllbooks } from '../data/books.js';
import { bookCard } from './common.js';

const dashboardTemplate = (books) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        ${books.length > 0 ? html`
        <ul class="other-books-list">
            ${books.map(bookCard)}
        </ul>` : html`
        <!-- Display paragraph: If there are no books in the database -->
        <p class="no-books">No books in database!</p>`}
    
    </section>
`;

export async function dashboardPage(ctx) {
    const books = await getAllbooks();
    ctx.render(dashboardTemplate(books));

}