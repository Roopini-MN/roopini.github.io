//scroll to top
document.querySelector(".footer-back-to-top").addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});

//show job description
document.querySelectorAll(".company-card").forEach((element) => {
  element.addEventListener("click", () => {
    const toggleEle = element.querySelector(".job-description");
    toggleEle.classList.toggle("show");
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navbarItems = document.getElementById("navbar-items");

// Toggle menu
menuToggle.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

// Close menu after clicking nav links
document.querySelectorAll(".navbar-items a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarItems.classList.remove("active");
  });
});

//email
emailjs.init("uYckj7x8ZpMCBahGF");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_w8fo4ru", "template_h5g6e4o", this).then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send email");
      });
  });
