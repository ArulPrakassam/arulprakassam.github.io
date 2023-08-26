const toggleBtn = document.querySelector(".toggle-icon");
const asidebar = document.querySelector(".asidebar");
const closeBtn = document.querySelector(".close-icon");
const navLinks = document.querySelectorAll(".nav-links li");
const projectsMainPageContainer = document.querySelector(
  ".main-project-page .projects-container"
);
const projectsContainer = document.querySelector(".projects-container");
const filterArea = document.querySelector(".filter-area");
const buffer = document.querySelector(".buffer");

const modal = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-modal");
const contact = document.getElementById("contact");
const contactBtn = document.querySelector(".contact-btn");

//asidebar
toggleBtn.addEventListener("click", () => {
  asidebar.style.right = "0";
});
closeBtn.addEventListener("click", () => {
  asidebar.style.right = "-300px";
});

//closing the asidebar when the navlink is clicked
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    asidebar.style.right = "-300px";
  });
});

//modal content open and close
contact.addEventListener("click", () => {
  modal.style.display = "grid";
  document.documentElement.style.setProperty("overflow", "hidden");
});
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    modal.style.display = "grid";
    document.documentElement.style.setProperty("overflow", "hidden");
  });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.documentElement.style.removeProperty("overflow");
});

//for buffer
window.addEventListener("DOMContentLoaded", () => {
  //when initial loading buffer shows then add overflow hidden
  document.documentElement.style.setProperty("overflow", "hidden");
  buffer.style.display = "none";
  //after make buffer display none and make remove overflow
  if (buffer.style.display === "none") {
    document.documentElement.style.removeProperty("overflow");
  }
});

//projects section
const fetchData = async (container) => {
  try {
    //adding container style display block to display "Loading..." in center

    //this loading is used for any API errors
    container.style.display = "block";
    container.innerHTML = `<div class="projects-loading-buffer">Loading...</div>`;

    const response = await fetch("./API/api.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data, container) => {
  const totalProjects = data
    .map((item) => {
      const { title, link, img, category } = item;
      return `<a href="${link}" target="_blank">
    <div class="single-project">
      <div class="project-img">
          <img
          src="${img}"
          alt="${title}"
          loading="lazy"
          /> 
        
      </div>
      <div class="project-title">
        <p class="project-name">${title}</p>
        <div class="category">
        ${category
          .map((categoryOne) => {
            return `<p class="category-name">${categoryOne}</p>`;
          })
          .join("")}
        </div>
      </div>
    </div>
  </a>`;
    })
    .join("");

  //removing the style display block and adding grid to show the project items
  container.style.display = "grid";

  //adding projects
  container.innerHTML = totalProjects;
};

//creating unique filter buttons
const categories = (data, projectsMainPageContainer) => {
  let categories = new Set();
  data.forEach(({ category }) => {
    for (let tag of category) {
      categories.add(tag);
    }
  });

  const sortedCategories = ["All", ...categories].sort();
  const categoriesItems = sortedCategories
    .map((item) => {
      return ` <button class="filter-btn">${item}</button>`;
    })
    .join("");
  filterArea.innerHTML = categoriesItems;

  document.querySelectorAll(".filter-btn").forEach((filterBtn) => {
    //adding the style of selected to "All" button when the page loads first
    if (filterBtn.textContent === "All") {
      filterBtn.style.borderColor = "#ff6a28";
      filterBtn.style.color = "#ff6a28";
    }
    filterBtn.addEventListener("click", (e) => {
      //this is used to remove the style from all buttons add a new style to the clicked button
      removeButtonStyle(e);
      filterProjects(
        data,
        e.currentTarget.textContent,
        projectsMainPageContainer
      );
    });
  });
};

//used for filtering projects using buttons
const filterProjects = (data, name, projectsMainPageContainer) => {
  if (name === "All") {
    displayData(data, projectsMainPageContainer);
  } else {
    const filteredData = data.filter((item) => item.category.includes(name));
    displayData(filteredData, projectsMainPageContainer);
  }
};

const removeButtonStyle = (e) => {
  document.querySelectorAll(".filter-btn").forEach((filterBtn) => {
    filterBtn.style.borderColor = "#ff692833";
    filterBtn.style.color = "#171412";
  });
  e.currentTarget.style.borderColor = "#ff6a28";
  e.currentTarget.style.color = "#ff6a28";
};

//check for the container in project main page, if not available means then it is home page projects container
const start = async () => {
  if (projectsMainPageContainer) {
    //project main page
    const data = await fetchData(projectsMainPageContainer);
    displayData(data, projectsMainPageContainer);
    categories(data, projectsMainPageContainer);
    return;
  }
  if (projectsContainer) {
    //home page projects container
    const data = await fetchData(projectsContainer);
    displayData(data.slice(0, 4), projectsContainer);
  }
};

start();

//year
document.querySelector(".year").textContent = new Date().getFullYear();
