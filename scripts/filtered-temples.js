document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    menuButton.innerHTML = "&#9776;";
  } else {
    navMenu.style.display = "flex";
    menuButton.innerHTML = "&#10005;";
  }
});

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
    width: "400px",
    height: "250px"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
    width: "400px",
    height: "250px"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Molina - Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },

  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  }
];

function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

displayTemples(temples);

document.getElementById("home").addEventListener("click", () => {
  document.getElementById("filterTitle").textContent = "Home";
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  document.getElementById("filterTitle").textContent = "Old Temples";
  displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});

document.getElementById("new").addEventListener("click", () => {
  document.getElementById("filterTitle").textContent = "New Temples";
  displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});

document.getElementById("large").addEventListener("click", () => {
  document.getElementById("filterTitle").textContent = "Large Temples";
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
  document.getElementById("filterTitle").textContent = "Small Temples";
  displayTemples(temples.filter(t => t.area < 10000));
});