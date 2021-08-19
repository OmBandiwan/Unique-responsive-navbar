const navSub = () => {
  const hamburger = document.querySelector(".hamBurger");
  const nav = document.querySelector(".navLinks");

  //adding event listner to recognize clicking
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("navLinks-active");
    hamburger.classList.toggle("toggle");
  });
  //hamBurger Animation
};

navSub();
