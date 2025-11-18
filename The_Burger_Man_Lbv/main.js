/* ===============================
   Footer: Year dynamically
=============================== */
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* ===============================
   Theme Toggle (Dark / Light)
=============================== */
const themeBtn = document.getElementById("theme-toggle");

// Load theme from storage if exists
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  if (themeBtn) themeBtn.textContent = "🌞";
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeBtn.textContent = "🌞";
      localStorage.setItem("theme", "light");
    } else {
      themeBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
}

/* ===============================
   Mobile Menu Toggle
=============================== */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
  });
}

/* ===============================
   Slider Functionality
=============================== */
const sliders = document.querySelectorAll(".slides");

sliders.forEach(slides => {
  const images = slides.querySelectorAll("img");
  let index = 0;

  if (images.length === 0) return;

  const show = i =>
    images.forEach((img, n) => (img.style.display = n === i ? "block" : "none"));

  show(index);

  const next = slides.parentElement.querySelector(".next");
  const prev = slides.parentElement.querySelector(".prev");

  if (next) {
    next.addEventListener("click", () => {
      index = (index + 1) % images.length;
      show(index);
    });
  }

  if (prev) {
    prev.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      show(index);
    });
  }

  setInterval(() => {
    index = (index + 1) % images.length;
    show(index);
  }, 5000);
});

/* ===============================
   Enquiry Form Validation
=============================== */
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const requiredFields = ["name", "phone", "email", "items"];
    for (let field of requiredFields) {
      if (!document.getElementById(field).value.trim()) {
        alert("⚠️ Please complete all required fields.");
        return;
      }
    }

    alert("✅ Thank you! Your enquiry has been submitted.");
    enquiryForm.reset();
  });
}

/* ===============================
   Contact Form Validation
=============================== */
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const required = ["cname", "cemail", "csubject", "cmessage"];
    for (let field of required) {
      if (!document.getElementById(field).value.trim()) {
        alert("⚠️ Please complete all required fields.");
        return;
      }
    }

    alert("📩 Message sent successfully!");
    contactForm.reset();
  });
}
