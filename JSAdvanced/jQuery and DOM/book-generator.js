/**
 * Created by Hris on 23.10.2016 г..
 */

let createBook = (function () {
    let id = 1;
    return function (selector, title, author, isbn) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();
        let bookContainer = $('<div></div>');
        let pTitle = $('<p class="title"></p>');
        let pAuthor = $('<p class="author"></p>');
        let pIsbn = $('<p class="isbn"></p>');
        let btnSelect = $('<button>Select</button>');
        let btnDeselect = $('<button>Deselect</button>');

        bookContainer.attr('id', 'book' + id);
        id++;
        bookContainer.attr('style', 'border: medium none');
        pTitle.text(title);
        pAuthor.text(author);
        pIsbn.text(isbn);

        pTitle.appendTo(bookContainer);
        pAuthor.appendTo(bookContainer);
        pIsbn.appendTo(bookContainer);
        btnSelect.appendTo(bookContainer);
        btnDeselect.appendTo(bookContainer);

        btnSelect.on("click", function (event) {
            bookContainer.css("border", "2px solid blue");
        });

        btnDeselect.on("click", function (event) {
            bookContainer.css("border", "none");
        });


        bookContainer.appendTo(fragment);
        container.append(fragment);
    }
})();