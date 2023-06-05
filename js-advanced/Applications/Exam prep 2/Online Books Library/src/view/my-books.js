import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../data/books.js';
import { getUserData } from '../utils.js';
import { bookCard } from './common.js';

const myBooksTemplate = (books) => html`
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        ${books.length > 0 ? html`
        <!-- Display ul: with list-items for every user's books (if any) -->
        <ul class="my-books-list">
            ${books.map(bookCard)}
        </ul>
        `: html`
        <!-- Display paragraph: If the user doesn't have his own books  -->
        <p class="no-books">No books in database!</p>
        `}
    
    </section>
`;

export async function myBooksPage(ctx) {
    const userData = getUserData();
    const books = await getMyBooks(userData._id);

    ctx.render(myBooksTemplate((books)));

}