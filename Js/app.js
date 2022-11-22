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

//works section

const url = "./API/api.json";
const projectCenter = document.querySelector(".project-center");

const fetchData = async () => {
  projectCenter.innerHTML = '<div class="loading">Loading...</div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    projectCenter.innerHTML = `<p class="error">There was an error...</p>`;
  }
};

//display data
const displayData = (data) => {
  let displayMenu = data
    .map((item) => {
      const { title, link, img, tags } = item;
      //used to create tags
      let tagNames = tags.map(function (tagItems) {
        return `<span class="tag">${tagItems}</span>`;
      });

      tagNames = tagNames.join(" ");
      return `<a href=${link} target="_blank">
          <article class="project-container">
            <div class="img-container">
              <img
                src=${img}
                alt=${title}
              />
            </div>
            <div class="project-content">
              <div class="project-item-title">
                <h5>${title}</h5>
              </div>
              <div class="tags">
                ${tagNames}
              </div>
            </div>
          </article></a
        >`;
    })
    .join(" ");

  projectCenter.innerHTML = displayMenu;
};
const start = async () => {
  const data = await fetchData();
  displayData(data.slice(0, 3));
};

start();
