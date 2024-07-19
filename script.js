const menuIcon = document.querySelector(".menu-icon");
const mblNavItems = document.querySelector(".mobile-nav-items");
const navLoginBtn = document.querySelectorAll(".nav-login-btn");
const mblLoginBtn = document.querySelector(".mbl-login-btn");
const navGetStartedBtn = document.querySelectorAll(".nav-getStarted-btn");
const mblGetStartedBtn = document.querySelector(".mbl-getStarted-btn");
const navHome = document.querySelector(".nav-home");
const navPricing = document.querySelector(".nav-pricing");
const pricingSubheroGetStartedBtn = document.querySelector(
  ".pricing-sub-hero-get-started-btn"
);
const secBtnLink = document.querySelector(".hero-a");
const heroPrimaryBtn = document.querySelector(".hero-primary-btn");
const footerLogo = document.querySelector(".footer-logo");

// Mutual FUNCTIONS - Mutual FUNCTIONS - Mutual FUNCTIONS - Mutual FUNCTIONS -
const openLoginPage = function () {
  window.open("login.html", "_blank");
};

const openSignupPage = function () {
  window.open("signup.html", "_blank");
};

navLoginBtn.forEach(function (btn) {
  btn.addEventListener("click", openLoginPage);
});
mblLoginBtn.addEventListener("click", openLoginPage);

navGetStartedBtn.forEach(function (btn) {
  btn.addEventListener("click", openSignupPage);
});
mblGetStartedBtn.addEventListener("click", openSignupPage);

navHome.addEventListener("click", function () {
  window.location.href = "index.html";
});

navPricing.addEventListener("click", () => {
  window.location.href = "pricing.html";
});

if (footerLogo) {
  footerLogo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// main tab - main tab - main tab - main tab - main tab - main tab - main tab -
if (secBtnLink) {
  secBtnLink.addEventListener("mouseover", function () {
    document.querySelector(".lazyloaded").style.transform = "scale(0.9)";
  });
}

if (secBtnLink) {
  secBtnLink.addEventListener("mouseout", function () {
    document.querySelector(".lazyloaded").style.transform = "";
  });
}

if (heroPrimaryBtn) {
  heroPrimaryBtn.addEventListener("click", () => {
    window.location.href = "pricing.html";
  });
}
menuIcon.addEventListener("click", function () {
  mblNavItems.classList.toggle("show");
});

// Pricing tab Pricing tab Pricing tab Pricing tab Pricing tab Pricing tab Pricing tab
if (pricingSubheroGetStartedBtn) {
  pricingSubheroGetStartedBtn.addEventListener("click", openSignupPage);
}
