const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close the mobile menu once a link is picked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Live visitor count, served by GoatCounter's public counter endpoint.
// Stays hidden if the site's "allow visitor counter" setting isn't on yet, or the request fails.
const footerVisitors = document.querySelector("#footerVisitors");
const visitorCount = document.querySelector("#visitorCount");
if (footerVisitors && visitorCount) {
  fetch("https://gauravmishra.goatcounter.com/counter/TOTAL.json")
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((data) => {
      visitorCount.textContent = data.count;
      footerVisitors.classList.add("is-visible");
    })
    .catch(() => {
      // leave it hidden
    });
}
