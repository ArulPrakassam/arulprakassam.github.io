//for nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});

//for year
const year = new Date().getFullYear();
const yearElement = document.querySelector(".year");
const text = document.createTextNode(year);

yearElement.appendChild(text);

//back to top section

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

//going to the top
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth", //making smooth behavior
  });
};

backToTopButton.addEventListener("click", goToTop);

//about page

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    //remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    //hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
