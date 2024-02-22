// console.log("js has been loaded!");

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// "event name", callback function
menuBtn.addEventListener('click', () => {
  // console.log("cllllllicked!!");
  mobileMenu.classList.add('active');
}); // end of menuBtn click

closeBtn.addEventListener('click', () => {
  // console.log("cllllllicked!!");
  mobileMenu.classList.remove('active');
}); // end of menuBtn click




const displayCategory = (category, properties) => {
  //console.log({category});
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('category');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);
  
  //console.log(category.label.singular);
  // 1. filter properties
  const filteredProperties = properties.filter(property => {
    // return true or false
    return category.label.singular === property.type;
  });

  filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  //console.log({filteredProperties});
  filteredProperties.forEach(property => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('property');

    let propertyHtml = `
      <h3 class="property--title">${property.name}</h3>
      <p class="property--description">${property.description}</p>
      <p class="property--price">${property.price}</p>
    `;

    articleElement.innerHTML = propertyHtml;

    sectionElement.appendChild(articleElement);

  }); // end of forEach
