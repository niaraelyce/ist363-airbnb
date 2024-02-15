// const room = {
//   name: "Luxury Suite",
//   price: 200,
//   type: "Private Room",
//   guests: 2,
//   description:
//     "This is a luxury suite with a private bathroom and a king-size bed.",
//   available: true,
// };
// const rooms = [
//   {
//     name: "Luxury Suite",
//     price: 200,
//     type: "Private Room",
//     guests: 2,
//     description:
//       "This is a luxury suite with a private bathroom and a king-size bed.",
//     available: true,
//   },
//   {
//     name: "Economy Room",
//     price: 100,
//     type: "Shared Room",
//     guests: 1,
//     description:
//       "This is a small room with a shared bathroom and a twin-size bed.",
//     available: false,
//   },
//   {
//     name: "Family Suite",
//     price: 300,
//     type: "Entire Place",
//     guests: 4,
//     description:
//       "This is a large suite with a private bathroom and two queen-size beds.",
//     available: true,
//   },
// ];

function renderProperties(properties) {
  properties.forEach((room) => {
    // create elements
    const roomArticle = document.createElement("article");
    roomArticle.classList.add("room");

    const roomNameElement = document.createElement("h3");
    roomNameElement.classList.add("room--name");
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement("p");
    roomDescriptionElement.classList.add("room--description");
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement("p");
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement("p");
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  }); // end of forEach
}
Promise.all([
  // fetch 1
  fetch("js/properties.json").then((response) => response.json()),
  // fetch 2
  fetch("js/categories.json").then((response) => response.json()),
])
  .then(([properties, categories]) => {
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });

const displayCategory = (category, properties) => {
  // console.log("Displaying category!");
  const sectionElement = document.createElement("section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);

  document.body.appendChild(sectionElement);
}; //end of displayCategory

// inside the .then() method
// const cabins = data.filter((room) => {
//   return room.type === "Cabin";
// });
// // instead of rendering all the properties, we'll render the filtered properties
// renderProperties(cabins);
