fetch("landmarks.json")
  .then((res) => res.json())
  .then((data) => {
    const naturalGrid = document.getElementById("naturalGrid");
    const manmadeGrid = document.getElementById("manmadeGrid");

    data.natural.forEach((place) => naturalGrid.appendChild(createCard(place)));
    data.manmade.forEach((place) => manmadeGrid.appendChild(createCard(place)));
  });

function createCard(place) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${place.image}" alt="${place.name}">
    <p>${place.name}</p>
  `;
  return div;
}
