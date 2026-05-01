// navbar icon

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navdar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove hoggle icon
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight,
  );
};
const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();

  // حط الرابط الجديد بتاعك هنا في السطر اللي تحت ده
  fetch("https://formspree.io/f/mykozjjb", {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      alert("Thanks for your message! I will get back to you soon.");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form");
    }
  });
};
