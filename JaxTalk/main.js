// NavBar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const commentArea = document.querySelector('.comment-area');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
);

// Comment
function showComment() {
    commentArea.classList.remove("hide");
}

function hideComment() {
    commentArea.classList.add("hide");
}