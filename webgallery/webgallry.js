// const galleryContainer = document.getElementById("galleryContainer");
// const viewMoreBtn = document.getElementById("viewMoreBtn");

// const cardsData = [
//   {
//     title: "Spotify-Clone",
//     description: "Built a full-stack Spotify clone using Next.js and React with dynamic routing, music playback, and a responsive UI.",
//     image: "../public/spotify.jpg",
//     link: "https://spotify-clone-xi-pearl.vercel.app/"
//   },
//   {
//     title: "Amazon-Clone",
//     description: "Built a full-stack Amazon clone with product listings, user authentication, cart functionality, and a responsive UI.",
//     image: "../public/amazon-01.jpg",
//     link: "https://amzon-clone-ten.vercel.app/"
//   },
//   {
//     title: "Aseer Group of Companies",
//     description: "Developed a professional website for Aseer Group of Companies to showcase their diverse business ventures and services with a clean, corporate design.",
//     image: "../public/assergroupofcompanies-01.jpg",
//     link: "https://aseertransportservice.com/home.html"
//   },
//   {
//     title: "Designed By Hufsa",
//     description: "Designed and developed a sleek, personal portfolio website to showcase Hufsa’s creative work in UI/UX, web development, and graphic design.",
//     image: "../public/designedbyhufsa.jpg"
//   }

// ];

// let currentVisibleRows = 2; 
// const cardsPerRow = 3;

// function renderCards() {
//   galleryContainer.innerHTML = "";
//   const visibleCards = cardsData.slice(0, currentVisibleRows * cardsPerRow);

//   visibleCards.forEach((card) => {
//     const cardElement = document.createElement("div");
//     cardElement.className = "card";

//     const imageHTML = card.link
//       ? `<a href="${card.link}" target="_blank" rel="noopener noreferrer">
//            <img src="${card.image}" alt="${card.title}">
//          </a>`
//       : `<img src="${card.image}" alt="${card.title}">`;

//     cardElement.innerHTML = `
//       ${imageHTML}
//       <h3>${card.title}</h3>
//       <p>${card.description}</p>
//     `;

//     galleryContainer.appendChild(cardElement);
//   });

//   if (currentVisibleRows * cardsPerRow >= cardsData.length) {
//     viewMoreBtn.style.display = "none";
//   }
// }

// viewMoreBtn.addEventListener("click", () => {
//   currentVisibleRows += 2;
//   renderCards();
// });

// renderCards();

const galleryContainer = document.getElementById("galleryContainer");
const viewMoreBtn = document.getElementById("viewMoreBtn");

const cardsData = [
  {
    title: "Spotify-Clone",
    description: "Built a full-stack Spotify clone using Next.js and React with dynamic routing, music playback, and a responsive UI.",
    image: "../public/spotify.jpg",
    link: "https://spotify-clone-xi-pearl.vercel.app/"
  },
  {
    title: "Amazon-Clone",
    description: "Built a full-stack Amazon clone with product listings, user authentication, cart functionality, and a responsive UI.",
    image: "../public/amazon-01.jpg",
    link: "https://amzon-clone-ten.vercel.app/"
  },
  {
    title: "Aseer Group of Companies",
    description: "Developed a professional website for Aseer Group of Companies to showcase their diverse business ventures and services with a clean, corporate design.",
    image: "../public/assergroupofcompanies-01.jpg",
    link: "https://aseertransportservice.com/home.html"
  },
  {
    title: "Daily Diaries",
    description: "Daily Dairies is a Shopify store offering a delicious selection of fresh pastries, cakes, and biscuits. The store focuses on quality and variety to delight bakery lovers with every bite.",
    image: "../public/dailydiaries.jpg",
 link: "https://xap18n-w5.myshopify.com/"
  },


];

let currentVisibleRows = 2;
const cardsPerRow = 3;

function renderCards() {
  galleryContainer.innerHTML = "";
  const visibleCards = cardsData.slice(0, currentVisibleRows * cardsPerRow);

  visibleCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;

    // Make entire card clickable if link exists
    if (card.link) {
      cardElement.style.cursor = "pointer";
      cardElement.addEventListener("click", () => {
        window.open(card.link, "_blank");
      });
    }

    galleryContainer.appendChild(cardElement);
  });

  if (currentVisibleRows * cardsPerRow >= cardsData.length) {
    viewMoreBtn.style.display = "none";
  } else {
    viewMoreBtn.style.display = "block";
  }
}

viewMoreBtn.addEventListener("click", () => {
  currentVisibleRows += 2;
  renderCards();
});

renderCards();
