const logoName = document.getElementById("logo-name"), body = document.querySelector("body"), navbar = document.querySelector("nav"); function ajax(t, e, n, r, i) { var o = new XMLHttpRequest; o.open(t, e), o.setRequestHeader("Accept", "application/json"), o.onreadystatechange = function () { o.readyState === XMLHttpRequest.DONE && (200 === o.status ? (r(o.response, o.responseType), document.querySelectorAll(".btn-email").forEach((t => { let e = e => getComputedStyle(t).getPropertyValue(e); t.classList.contains("active") || (t.classList.add("active"), gsap.to(t, { keyframes: [{ "--left-wing-first-x": 50, "--left-wing-first-y": 100, "--right-wing-second-x": 50, "--right-wing-second-y": 100, duration: .2, onComplete() { gsap.set(t, { "--left-wing-first-y": 0, "--left-wing-second-x": 40, "--left-wing-second-y": 100, "--left-wing-third-x": 0, "--left-wing-third-y": 100, "--left-body-third-x": 40, "--right-wing-first-x": 50, "--right-wing-first-y": 0, "--right-wing-second-x": 60, "--right-wing-second-y": 100, "--right-wing-third-x": 100, "--right-wing-third-y": 100, "--right-body-third-x": 60 }) } }, { "--left-wing-third-x": 20, "--left-wing-third-y": 90, "--left-wing-second-y": 90, "--left-body-third-y": 90, "--right-wing-third-x": 80, "--right-wing-third-y": 90, "--right-body-third-y": 90, "--right-wing-second-y": 90, duration: .2 }, { "--rotate": 50, "--left-wing-third-y": 95, "--left-wing-third-x": 27, "--right-body-third-x": 45, "--right-wing-second-x": 45, "--right-wing-third-x": 60, "--right-wing-third-y": 83, duration: .25 }, { "--rotate": 60, "--plane-x": -8, "--plane-y": 40, duration: .2 }, { "--rotate": 40, "--plane-x": 45, "--plane-y": -300, "--plane-opacity": 0, duration: .375, onComplete() { setTimeout((() => { t.removeAttribute("style"), gsap.fromTo(t, { opacity: 0, y: -8 }, { opacity: 1, y: 0, clearProps: !0, duration: .3, onComplete() { t.classList.remove("active") } }) }), 1800) } }] }), gsap.to(t, { keyframes: [{ "--text-opacity": 0, "--border-radius": 0, "--left-wing-background": e("--primary-dark"), "--right-wing-background": e("--primary-dark"), duration: .11 }, { "--left-wing-background": e("--primary"), "--right-wing-background": e("--primary"), duration: .14 }, { "--left-body-background": e("--primary-dark"), "--right-body-background": e("--primary-darkest"), duration: .25, delay: .1 }, { "--trails-stroke": 171, duration: .22, delay: .22 }, { "--success-opacity": 1, "--success-x": 0, duration: .2, delay: .15 }, { "--success-stroke": 0, duration: .15 }] })) }))) : i(o.status, o.response, o.responseType)) }, o.send(n) } window.addEventListener("DOMContentLoaded", (function () { var t = document.getElementById("contact-form"), e = document.getElementById("status"); function n() { t.reset() } function r() { e.classList.add("error"), e.innerHTML = "There was a problem. Please try again." } t.addEventListener("submit", (function (e) { e.preventDefault(); var i = new FormData(t); ajax(t.method, t.action, i, n, r) })) })); const backToTopBtn = $("#backToTopBtn"); $(window).scroll((function () { $(window).scrollTop() > 300 ? backToTopBtn.addClass("show") : backToTopBtn.removeClass("show") })), backToTopBtn.on("click", (function (t) { t.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "300") }));

// Carousel arrow button functionality
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
const projectsCarousel = document.getElementById('projects-carousel');

function updateCarouselArrows() {
  if (!projectsCarousel) return;
  const maxScroll = projectsCarousel.scrollWidth - projectsCarousel.clientWidth - 1; // fudge for float rounding
  if (projectsCarousel.scrollLeft <= 0) {
    leftArrow.classList.add('disabled');
  } else {
    leftArrow.classList.remove('disabled');
  }
  if (projectsCarousel.scrollLeft >= maxScroll) {
    rightArrow.classList.add('disabled');
  } else {
    rightArrow.classList.remove('disabled');
  }
}

if (leftArrow && rightArrow && projectsCarousel) {
  leftArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (!leftArrow.classList.contains('disabled')) {
      projectsCarousel.scrollBy({ left: -projectsCarousel.clientWidth, behavior: 'smooth' });
    }
  });
  rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (!rightArrow.classList.contains('disabled')) {
      projectsCarousel.scrollBy({ left: projectsCarousel.clientWidth, behavior: 'smooth' });
    }
  });
  projectsCarousel.addEventListener('scroll', updateCarouselArrows);
  // Initial state
  updateCarouselArrows();
}