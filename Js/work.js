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

//project section

const url = "./API/api.json";

const projectPage = document.querySelector(".project-page");
const buttonContainer = document.querySelector(".filter-buttons");
const mainProjectContainer = document.querySelector(".main-project-container");

//used to display the items
function displayMenuItems(menuItems) {
  if (menuItems.length < 1) {
    projectPage.innerHTML = `<h6>Sorry, no projects matched your search</h6>`;
    return;
  }
  //used to create tags
  let displayMenu = menuItems.map(function (item) {
    let tags = item.tags.map(function (tagItems) {
      return `<span class="tag">${tagItems}</span>`;
    });

    tags = tags.join("");

    //used to create html
    return `<a href=${item.link} target="_blank">
          <article class="project-container">
            <div class="img-container">
              <img
                src=${item.img}
                alt=${item.title}
              />
            </div>
            <div class="project-content">
              <div class="project-item-title">
                <h5>${item.title}</h5>
              </div>
              <div class="tags">
                ${tags}
              </div>
            </div>
          </article></a
        >`;
  });
  displayMenu = displayMenu.join("");
  projectPage.innerHTML = displayMenu;
}

//search filter

const searchFunction = (menu) => {
  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("keyup", () => {
    const inputValue = searchInput.value;
    let menu1 = menu.filter((item) => {
      return item.title.toLowerCase().includes(inputValue.toLowerCase()); //returns the array if the condition is true
    });
    displayMenuItems(menu1);
  });
};

function displayMenuButtons(menu) {
  //used to create categories
  let categories = [];
  let uniqueCategories = menu.map((item) => {
    item.category.forEach((itemOne) => {
      categories.push(itemOne);
    });
  });
  categories.sort();
  categories = ["All", ...new Set(categories)];

  //adding category buttons
  const categoryBtns = categories
    .map(function (category) {
      return ` <button class="filter-btn" type="button" data-id='${category}'>${category}</button>`;
    })
    .join("");

  buttonContainer.innerHTML = categoryBtns;

  //filtering items when the user press the particular button
  const filterBtns = buttonContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      //dataset which is used to catch the particular button with the particular value (value should be same as in the menu array) which is set in the button html using data-id='value'

      const menuCategory = menu.filter(function (menuItem) {
        const displayValue = menuItem.category.includes(category);
        if (displayValue) {
          return menuItem;
        }
      });

      if (category === "All") {
        displayMenuItems(menu);
        searchInput.value = "";
      } else {
        displayMenuItems(menuCategory);
        searchInput.value = "";
      }
    });
  });
}

const fetchData = async () => {
  projectPage.innerHTML = '<div class="loading">Loading...</div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    mainProjectContainer.innerHTML = `<p class="error">There was an error...</p>`;
  }
};

const start = async () => {
  const data = await fetchData();
  displayMenuItems(data);
  displayMenuButtons(data);
  searchFunction(data);
};

start();
