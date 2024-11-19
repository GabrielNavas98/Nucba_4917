import ScrollReveal from "scrollreveal";
const discoverSection = document.getElementById("discover");
const heroSection = document.getElementById("hero");
const infoSection = document.getElementById("info");
const productsSection = document.getElementById("products");

const revealSection = (section) => {
  ScrollReveal().reveal(section, {
    delay: 200,
    origin: "bottom",
    distance: "100px",
    duration: 2000,
    reset: true,
  });
};

export const scrollEfectsInit = () => {
  revealSection(heroSection);
  revealSection(productsSection);
  revealSection(infoSection);
  revealSection(discoverSection);
};
