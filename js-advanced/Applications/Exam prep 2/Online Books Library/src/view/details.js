import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById, getLikesByBookId, getMyLikedBookId, likedBook } from "../data/books.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (book, isOwner, onDelete, likes, showLikeButton, onLike) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
    
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${bookControlsTemplate(book,isOwner,onDelete)}

                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${likeControlsTemplate(showLikeButton, onLike)}
    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${likes}</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;

const bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;
    } else {
        return null;
    }
}

const likeControlsTemplate = (showLikeButton, onLike) =>{
    if(showLikeButton){
        return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`;
    } else {
        return null;
    }
}


export async function detailsPage(ctx) {
    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    const userId = getUserData()?._id;
    const isOwner = book._ownerId === userId;
    const likes = await getLikesByBookId(bookId);
    const myLikes = userId && await getMyLikedBookId(bookId, userId);
    const showLikeButton = !isOwner && !myLikes && userId;

    ctx.render(detailsTemplate(book, isOwner, onDelete, likes, showLikeButton, onLike))

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${book.title}`);
        if (choice) {
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await likedBook(bookId);
        ctx.page.redirect(`/details/${bookId}`);
    }
}