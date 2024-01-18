//Elements needed to change the displayed content
const hero = document.querySelector(".hero");
const pageTitle = document.querySelector("h1");
const cardContainers = document.querySelectorAll(".card-container");
const ctaButton = document.querySelector("button");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobileMenu = document.querySelector(".fa-xmark");

/*
DONE
Request 1 - Change welcome message on click
*/
hero.addEventListener("click", () => {
  pageTitle.textContent =
    pageTitle.textContent === "Have a Good Time!"
      ? "Welcome Message"
      : "Have a Good Time!";
});

/*
DONE
Request 2: Click to Show/Close Menu.
When the user clicks the menu at the top-right corner, show the hidden mobile menu. After
that, the user can click the close button to hide it.
*/
hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

/*
DONE
Request 3: Click to Show More Content Boxes.
There are some more content boxes waiting to show. When the user clicks the Call-to-Action
button, show those hidden content boxes.
*/
ctaButton.addEventListener("click", () => {
  cardContainers[1].classList.remove("hidden");
});
