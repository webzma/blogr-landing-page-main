class Elements {
  constructor({
    name,
    titles = [],
  }) {
    this.name = name;
    this.titles = titles;
  };
};

let product = new Elements({
  name: "Products",
  titles: [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations"
  ],
});

let company = new Elements({
  name: "Company",
  titles: [
    "About",
    "Team",
    "Blog",
    "Careers",
  ],
});

let connect = new Elements({
  name: "Connect",
  titles: [
    "Contact",
    "Newslatter",
    "LinkedIn",
  ],
});

const btnProduct = document.getElementById("product");
const btnCompany = document.getElementById("company");
const btnConnect = document.getElementById("connect");
const bar = document.getElementById("bar");

document.addEventListener("click", e => {
  if (e.target.outerHTML === "<a href=\"#\">Product</a>") {
    const htmlCode = `
      <ul class="header-bar-list">
        <li>
          <a href="#" class="link">${product.titles[0]}</a>
        </li>
        <li>
          <a href="#" class="link">${product.titles[1]}</a>
        </li>
        <li>
          <a href="" class="link">${product.titles[2]}</a>
        </li>
        <li>
          <a href="" class="link">${product.titles[3]}</a>
        </li>
      </ul>
    `;

    if (!bar.classList.contains("header-bar-active")) {
      bar.classList.add("header-bar-active");
      bar.innerHTML = htmlCode;
    } else {
      bar.classList.remove("header-bar-active");
    }
  }
  if (e.target.outerHTML === "<a href=\"#\">Company</a>") {
     const htmlCode = `
      <ul class="header-bar-list">
        <li>
          <a href="#" class="link">${company.titles[0]}</a>
        </li>
        <li>
          <a href="#" class="link">${company.titles[1]}</a>
        </li>
        <li>
          <a href="" class="link">${company.titles[2]}</a>
        </li>
        <li>
          <a href="" class="link">${company.titles[3]}</a>
        </li>
      </ul>
    `;
    if (!bar.classList.contains("header-bar-active")) {
      bar.classList.add("header-bar-active");
      bar.innerHTML = htmlCode;
    } else {
      bar.classList.remove("header-bar-active");
    }
  }
  if (e.target.outerHTML === "<a href=\"#\">Connect</a>") {
    const htmlCode = `
      <ul class="header-bar-list">
        <li>
          <a href="#" class="link">${connect.titles[0]}</a>
        </li>
        <li>
          <a href="#" class="link">${connect.titles[1]}</a>
        </li>
        <li>
          <a href="" class="link">${connect.titles[2]}</a>
        </li>
      </ul>
    `;
    if (!bar.classList.contains("header-bar-active")) {
      bar.classList.add("header-bar-active");
      bar.innerHTML = htmlCode;
    } else {
      bar.classList.remove("header-bar-active");
    }
  }
});
