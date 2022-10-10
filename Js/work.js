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

//menu items
const menu = [
  {
    title: "Arul Prakassam Portfolio",
    link: "https://arulprakassam.github.io/",
    tags: ["HTML", "CSS", "JS"],
    category: ["HTML & CSS", "JS"],
    img: "./assets/Arul-Prakassam-portfolio.jpg",
  },
  {
    title: "SEO Agency",
    link: "https://seo-agency-project.netlify.app/",
    tags: ["HTML", "CSS"],
    category: ["HTML & CSS", "JS"],
    img: "./assets/SEO-agency-html-css-project.jpg",
  },

  {
    title: "Simple Portfolio",
    link: "https://arul-portfolio-project.netlify.app/",
    tags: ["HTML", "CSS"],
    category: ["HTML & CSS", "JS"],
    img: "./assets/simple-portfolio-html-css-project.jpg",
  },

  {
    title: "Switch2Knowledge Website",
    link: "https://www.switch2knowledge.com/",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "./assets/Switch2knowledge-website.jpg",
  },

  {
    title: "YouTube channel",
    link: "https://www.youtube.com/channel/UCzz1ofQIE6VJm73BSOkgxUw",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "./assets/Switch2knowledge-youtube-channel.jpg",
  },
  {
    title: "GPA & CGPA CALCULATOR",
    link: "https://gpa-cgpa-calculator-project.netlify.app/",
    tags: ["JS"],
    category: [`JS`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVt3cwdUKI7CD92i7hZYY5h9tU5NDb35w15lbr-BW7G9PW88EHiD6qEAHw0qNTkFdaUZHPApAl3utznton_68UT8ejzQqwxQ4Y8hUibC42__9rBK_Gpkk5uRQ6YpmyWLhmGM4p57NKbu433-A8zPiJL1qq8UYf-7wLDXM4Ede1mc5Awvk1DGsiSxSI/s1424/gpa-cgpa-calculator.jpg",
  },
  {
    title: "How to create subdomains in Google doamins?",
    link: "https://www.youtube.com/watch?v=1CxeesX1Ybg",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://1.bp.blogspot.com/-RYohLfHwoWk/YPQvE_KA16I/AAAAAAAAB3E/HYQUckqlcM8udM_7oSy9R6LOgdDwXtCdgCLcBGAsYHQ/s1280/make-subdomains-in-google-domains.webp",
  },
  {
    title: "How to setup Email forwarding from google domains?",
    link: "https://www.youtube.com/watch?v=OXaxvWQAOLI",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://1.bp.blogspot.com/-iogHnMU4H88/YLt0_jj8gDI/AAAAAAAABes/5j_prm03j_kY8EzD9NZfj2rw-hswy0x2gCLcBGAsYHQ/s1280/How-to%2Bsetup-free-custom-email-from-Google-Domains.webp",
  },
  {
    title: "How to get sitelinks for your website in google search?",
    link: "https://www.youtube.com/watch?v=tOJeYYqLnNM",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ01Ca2WWMYz6KB9nc-45TmGmdeVt30r8HRMKbhJoPv7si04bLIPvHbuuS1HyP17JYW534tGXK2iJX3jPeS-lyrfk07cw8pXmIb5qRYfbp_ZBNNyfkKpx1az3NO0JkTVydRT4XcQEGGE_ooGUM-dTduoXInvu3W7iTdhLKIRFNhjkZ5JrC-FWmdq7V/s1280/How%20to%20get%20sitelinks%20for%20your%20website%20in%20google%20search.webp",
  },
  {
    title: "Use indexnow protocol to index your webpages to Bing and Yandex",
    link: "https://www.youtube.com/watch?v=Ep2pJo2_DJc",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEjDVB8TMfk9EwdvMHHWlOE6xeRahCyK_qUE5WcvezfMkCfAULPEo2Le8KvigZRvgAOXjsLK397k1sSYOdS2NSCZFvwjhECc1VcOk9N6hJ0gJN4cOlRYCWbaOtLJy-AffCpQVo7nwksc2geF1FuDQ5XOqFGtck7Yg620cm30apbVQm6ZYGTBy8UbfYu2=s1280",
  },
  {
    title: "10 unknown websites of google.com",
    link: "https://www.youtube.com/watch?v=pKMf0Gdm_9k",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPmq-f4VVKnTU_Kqgedntx_yDHc85ViWqqAbdUHRzm45QG5Xt2FK_4A8kd4o253kPguphNobYGIAqY4GQ1E8JHlMXSilGY_dHP9hH0_y-j_jxGK0fLgEEkzcYzneUqvdr6e6r5_LeND5m6-6GbM5GiK2fLtZqDdqtAKnUWc8H3fw1hwBajVUq5H6Cl/s1280/10%20unknown%20websites%20of%20google.com.webp",
  },
  {
    title: "What is URL shortener and how URL shortener work?",
    link: "https://www.youtube.com/watch?v=sH_fzxkyk80",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://1.bp.blogspot.com/-rCpLQLX6ts0/YQBQOVTDLSI/AAAAAAAAB6s/QBOYRQpKuBsHTNW2vE8h6C2VM_uB_iZHgCLcBGAsYHQ/s1280/working-of-url-shortener.webp",
  },
  {
    title: "How to buy an unique domain name?",
    link: "https://www.youtube.com/watch?v=5IAD5ztIR5k",
    tags: ["YouTube"],
    category: [`YouTube`],
    img: "https://1.bp.blogspot.com/-GHh9cT5hrtw/YMDQusuhl0I/AAAAAAAABgI/xEjdQIbepdAYA__AOFOeuLWqd5rdO8pZACLcBGAsYHQ/s1280/7-steps-to-buy-a-unique-domain-name.webp",
  },

  {
    title: "Tips for ON Page SEO",
    link: "https://www.switch2knowledge.com/2021/08/tips-for-on-page-seo-for-beginners.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-V02T9_S2zyI/YSkWmksh_KI/AAAAAAAAB-o/0yV8VjA3KLMv59tzt2UruHKBNn28gJCugCLcBGAsYHQ/s1280/on%2Bpage%2Bseo%2Bfor%2Bbeginners.webp",
  },

  {
    title: "Off Page SEO Techniques",
    link: "https://www.switch2knowledge.com/2021/09/off-page-seo-techniques-and-six-effective-tips-for-beginners.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-tjgd_C4H1pY/YS_C7K9Nu4I/AAAAAAAAB-4/i3Vb00SmnCAfteomVidhJMy8YH76rtlrACLcBGAsYHQ/s1280/on-page-seo-techniques.webp",
  },

  {
    title: "Technical SEO tips",
    link: "https://www.switch2knowledge.com/2021/09/7-beginner-seo-tips-for-technical-seo.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-Hh71Z006NPg/YUI9lpQF1GI/AAAAAAAACAE/tCQmkPoJ7MQ79u5QtDLgAnYuYjmfAfYZACLcBGAsYHQ/s1280/technical%2BSEO%2Bfor%2Bbeginners.jpg",
  },

  {
    title: "Different types of SEO practices",
    link: "https://www.switch2knowledge.com/2021/09/different-types-of-seo-practices-and-techniques-for-beginner-websites.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-i4Gv_nmqzeE/YU3nB0vbO0I/AAAAAAAACCY/XNd88mFlb4sU3JU6zOfIwKaDV6sdS_nCgCLcBGAsYHQ/s602/Different%2BTypes%2Bof%2BSEO%2BPractices.webp",
  },

  {
    title: "What is URL shortener and how does it work?",
    link: "https://www.switch2knowledge.com/2021/07/what-is-url-shortener-and-how-does-it-work-and-its-pros-and-cons.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-rCpLQLX6ts0/YQBQOVTDLSI/AAAAAAAAB6s/QBOYRQpKuBsHTNW2vE8h6C2VM_uB_iZHgCLcBGAsYHQ/s1280/working-of-url-shortener.webp",
  },

  {
    title: "Best free YouTube shorts editing software",
    link: "https://www.switch2knowledge.com/2021/11/best-free-youtube-shorts-video-editing-software.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEgBZJkHPkkMnba6dXIC_rXZ3W5bwzqXwzZW9N2VQw8htoZPjntofvRsza3Kf3PlreT48izwsILiXyMpOMBfLPSW9JgklXvxZ69XcKS0AT0XEcTqgLWZQ60KSnuIaHtFHupf3leBa6HSdRHf70kg5iKGlLkJdpwO__mKHzeMUXZAZhj5jQfeqJ4Vlp45=s1280",
  },

  {
    title: "What is google sandbox and how it works?",
    link: "https://www.switch2knowledge.com/2021/11/what-is-google-sandbox-and-how-it-works-in-google-ranking.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEj6drlv8nB9pyArLonv09r1S3o07JQQeYNUd2Zzg4DAj1x8BKUPq9c_wU94vc9IiGlBxeLg8u_6wmN_lzXuvZ8Zkw6Na1OhIXg6YEJuxs2l5ZBMnLhX_aEHvL-g97UrTz-aWvY2fbnPpHAmDZcrE8oA7kDrsJVd683V1e6BSxWrkiP_B1pIy6tFeumS=s1280",
  },

  {
    title: "Google Honeymoon effect on ranking new webpages",
    link: "https://www.switch2knowledge.com/2022/01/google-honeymoon-effect-on-ranking-new-webpages.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEiKS5yOhZkCcz5bm2W1gZv__5E3GLZ-cvmDyYPcRH-QEUutIotN_6nHRwg8EeiIR0ek4Xr2qlj1YdHuarYX8FyfBuV6OKcBtrT1O2GdVVyejTM3-7yCKCsUqEfkmFZBAYKJMgFEjKR2ViR-Slsfwl-_TEcZAq9b_dHzx4qFKmphaQsjL0PSCIwJ6Z_X=s1280",
  },

  {
    title: "Major Google search algorithm updates",
    link: "https://www.switch2knowledge.com/2022/02/major-google-search-algorithm-updates.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju1VAKG2qIKAPr8JAXFWr363TFuV_ih0DoO1jdU7ajvboAy8HmcOJG9TuJH4jfCmzoh_nObAMJC6Ssl_0P-V3RxUeRItwucxKfVE5eqCq0AzcIDXx9wTJ2I41PQt6NSl4Fstgv6-aDxoxH_EtCAuEVXMu46aVU_cQgtzakMt5WmM_fnYby77NC6wpr/s1280/Major Google search Algorithm updates.webp",
  },

  {
    title: "How to find your post position in Google SERPs",
    link: "https://www.switch2knowledge.com/2022/06/how-to-find-your-post-position-in-google-serps.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7O4jv7_ggs4CFdRsGso7ECpZ_raxLcaYQ0MXd53sQL3aN2NUwuSTZeiGYjljmeWAWJgGmUcGRcW3qNPORlIgdpUNAdO6hfCHyoiNa3R70LasDRPrgevIZnr3o8jrTtwgb2y4N2K9ETH9zQwyR83MWW6PfE_XDTlZ6pAJJkYfq0EgqeJXm7-pXiNai/s1134/How%20to%20find%20your%20Post%20Position%20in%20Google%20SERPs.webp",
  },

  {
    title: "How to rank a blogger website?",
    link: "https://www.switch2knowledge.com/2022/04/how-to-rank-blogger-website-in-google.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigSY_TGeUaRAE1HeZHTtynZScLimBEAj15oozu_3buo6eLjCRTuwNUkiG3zLcTq6-WWWg6zeDKlG57LxmO2ti7W_Zwp8X6J7WYoPZVQEtG-V8ZuIuj69EGwdUBDMWdBXW2uftWgwSL_guA6ByppU2-I7oCS6Iuj3OlhHG7aD-Nwj_SbFdO4SHorC-X/s1156/How%20to%20rank%20a%20blogger%20website.webp",
  },

  {
    title: "Tips to get google adsense approval for website",
    link: "https://www.switch2knowledge.com/2021/08/tips-to-get-google-adsense-approval-in-2021-for-your-website.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-9lbhDe8W0ek/YQ-2Jo9-FkI/AAAAAAAAB9A/ObXEwXOrIP4BGNG7c98rXzOjNR0-9_IowCLcBGAsYHQ/s1280/tips-to-get-google-adsense-approval-for-website-in-2021.webp",
  },
  {
    title: "Will adsense approve blogspot domain names?",
    link: "https://www.switch2knowledge.com/2021/02/will-adsense-approve-blogspot-domain-names.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhifmttV9PaDVvRX0Er-JNP6rYy2A7ZEGRjJfhye3R3M5lgzQdH9OLrzB29wbLTv7BjrTjtPVWDz-YdMvPWLrOKM2CwmBK295jt-0tK5DDcSEsExKLAmfd35EA9qhpxooYeZhpo3L1Aba3UKpVcuHWHYKPctN9SKyDge3Y0TfnYpRRGng9sFOsv8hRs/s1280/will%20adsense%20approve%20blogspot%20domain%20names.webp",
  },
  {
    title: "Effect of updating date on posts in google ranking",
    link: "https://www.switch2knowledge.com/2022/07/updating-date-on-posts-will-improve-google-ranking.html ",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglXYW52oq-9NNPgthYxsJBWlF-N0hUT1PdkhbSDupyEktcNzqM0suAbH9cvXIiEVJguTmcC-7reTk6RwrcCO7edhPveWLFOy8PcTfX7HdhS_ItirGC11a4HnacZmYAwZDNROXlNeFmUo-1gfY02jnEotIIsQaWY5iud91gkCRIjD7jG13HhAtG0WpD/s1076/updating%20date%20on%20posts%20will%20improve%20google%20ranking.webp",
  },
  {
    title: "Three types of search queries in search engines",
    link: "https://www.switch2knowledge.com/2021/04/three-types-of-search-queries-in-search-engines.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-FSjRAFGdC3Q/YIwKspu05nI/AAAAAAAABRo/1xm7nRR_uMMjI3y13CcLvuTW6lB6e2B9wCLcBGAsYHQ/s640/searching-in-the-web%2B.jpg",
  },
  {
    title: "How to remove website name from post titles in blogger?",
    link: "https://www.switch2knowledge.com/2021/05/how-to-remove-website-name-from-the-post-titles-in-blogger.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-SLWlOhmWGkE/YLJgAW-YpGI/AAAAAAAABbA/3d16Y3C-40MywWJEXQxb8GZz1HmIrbylwCLcBGAsYHQ/s622/remove-website-title-from-blog-post.webp",
  },
  {
    title: "How to add article schema markup for blogger?",
    link: "https://www.switch2knowledge.com/2021/06/how-to-add-article-schema-markup-for-blogger-sites.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-N-TVsgevJZU/YM4nHochqqI/AAAAAAAABr0/_j8whSkaO1MQk1RIqRrDooW6YwJFxJmKQCLcBGAsYHQ/s514/article-markup-for-blogger.webp",
  },
  {
    title: "How to create subdomains in google domains?",
    link: "https://www.switch2knowledge.com/2021/07/how-to-create-subdomains-in-google-domains.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-RYohLfHwoWk/YPQvE_KA16I/AAAAAAAAB3E/HYQUckqlcM8udM_7oSy9R6LOgdDwXtCdgCLcBGAsYHQ/s1280/make-subdomains-in-google-domains.webp",
  },
  {
    title: "How to setup email forwarding from google domains?",
    link: "https://www.switch2knowledge.com/2021/06/how-to-setup-free-custom-email-for-websites-from-google-domains.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-iogHnMU4H88/YLt0_jj8gDI/AAAAAAAABes/5j_prm03j_kY8EzD9NZfj2rw-hswy0x2gCLcBGAsYHQ/s1280/How-to%2Bsetup-free-custom-email-from-Google-Domains.webp",
  },
  {
    title: "How to choose best domain name registrar?",
    link: "https://www.switch2knowledge.com/2021/06/how-to-choose-best-domain-registrar-to-buy-a-best-domain.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-X8zXjvkvhU8/YLZ4RnehLbI/AAAAAAAABc0/jKqH5-QUYooGuT8g2j1BBN0D9-k6uL9UwCLcBGAsYHQ/s1280/How-to-choose-domain-name-registrar-for-you.webp",
  },
  {
    title: "How to buy an unique domain name?",
    link: "https://www.switch2knowledge.com/2021/06/do-these-things-before-buying-unique-domain-name.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-GHh9cT5hrtw/YMDQusuhl0I/AAAAAAAABgI/xEjdQIbepdAYA__AOFOeuLWqd5rdO8pZACLcBGAsYHQ/s1280/7-steps-to-buy-a-unique-domain-name.webp",
  },
  {
    title: "How to create google web stories?",
    link: "https://www.switch2knowledge.com/2021/06/how-to-create-google-web-stories-for-wordpress-or-blogger-and-earn-money-by-monetizing-stories.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-t988_38BeHs/YNiiXI85e1I/AAAAAAAABuw/6oy396nXjPoXAamhglq2c7Mw_OA5Z98GACLcBGAsYHQ/s642/Earning-money-by-creating-web-stories.webp",
  },
  {
    title: "How to add open graph tags and twitter cards for blogger?",
    link: "https://www.switch2knowledge.com/2021/05/open-graph-tags-and-twitter-card-for-blogger-or-blogspot.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-gV3LcpqEQNc/YMI5BYOn5oI/AAAAAAAABjI/9HjSS1Gt4bM5rURsjcFpz5t18PhKu3BIQCLcBGAsYHQ/s1280/open-graph-tags-and-twitter-cards-for-blogger.webp",
  },
  {
    title: "How to search in google like a Pro?",
    link: "https://www.switch2knowledge.com/2021/04/how-to-search-in-google-like-a-pro-and-search-operators-in-google-2021-updated.html",
    tags: ["Content Writing", "SEO"],
    category: [`Content Writing & SEO`],
    img: "https://1.bp.blogspot.com/-MjH3_QPOuWs/YMI6VaVw88I/AAAAAAAABjQ/-f1xhB784PUOvMZGOlBprHhSRVMDwDmRgCLcBGAsYHQ/s1280/how%2Bto%2Buse%2Bgoogle%2Bsearch%2Blike%2Ba%2Bpro.webp",
  },
];

const projectPage = document.querySelector(".project-page");
const buttonContainer = document.querySelector(".filter-buttons");

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

displayMenuItems(menu);

//search filter
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  let menu1 = menu.filter((item) => {
    return item.title.toLowerCase().includes(inputValue.toLowerCase()); //returns the array if the condition is true
  });
  displayMenuItems(menu1);
});

function displayMenuButtons() {
  //used to create categories
  let categories = [];
  let uniqueCategories = menu.map((item) => {
    item.category.forEach((itemOne) => {
      categories.push(itemOne);
    });
  });

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

displayMenuButtons();
