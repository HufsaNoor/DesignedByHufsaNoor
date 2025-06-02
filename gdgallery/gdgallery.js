// const galleryContainer = document.getElementById("galleryContainer");
// const viewMoreBtn = document.getElementById("viewMoreBtn");

// const cardsData = [
//   {
//     title: "Trade Channel Scandinavia Logo",
//     description: "Created a clean, professional logo for Trade Channel Scandinavia, reflecting trust, modernity, and the brand’s international trade focus.",
//     image: "../public/trade channel scandinavia logos-04.jpg",
//     link:"https://www.behance.net/gallery/223991745/Logo-Design-Brand-Identity"
//   },
//   {
//     title: "Scandictech Poster",
//     description: "Designed a bold and dynamic poster for Scanditach, capturing the brand’s energy and modern identity through striking visuals and balanced layout.",
//     image: "../public/poster.jpg",
//     link:"https://www.behance.net/gallery/223980427/Poster-Design"
//   },
//   {
//     title: "Eid Mubarak Story",
//     description: "Designed a festive Eid Mubarak story for Scandictech with elegant visuals and cultural warmth.",
//     image: "../public/story.jpg",
//     link:"https://www.behance.net/gallery/223990155/Eid-Mubarak-Instagram-Story"
//   },
//   {
//     title: "Invitation Card Design",
//     description: "Designed a stylish and elegant invitation card, combining clean typography and thoughtful layout to suit the occasion perfectly.",
//     image: "../public/behance-04.jpg",
//     link:"https://www.behance.net/gallery/223966587/Invitation-Card-Design"
//   },
//    {
//     title: "ScandicTech Logo Design",
//     description: "Crafted a modern and professional logo for ScandicTech that reflects innovation, technology, and brand clarity.",
//     image: "../public/scandictechlogo.jpg",
//     link:"https://www.behance.net/gallery/225972863/ScandicTech-Logo-Design"
//   },
//    {
//     title: "Packaging Design for LUMANJO",
//     description: "Designed minimal, informative packaging for LUMANJO, combining functionality with clear bilingual labeling and a sleek black-on-brown aesthetic.",
//     image: "../public/packaging-01.jpg",
//     link:"https://www.behance.net/gallery/225952819/Packaging-Design-For-Cable-Management-Tray(Lumanjo)"
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
//     cardElement.innerHTML = `
//       <img src="${card.image}" alt="Card Image">
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
    title: "Trade Channel Scandinavia Logo",
    description: "Created a clean, professional logo for Trade Channel Scandinavia, reflecting trust, modernity, and the brand’s international trade focus.",
    image: "../public/trade channel scandinavia logos-04.jpg",
    link: "https://www.behance.net/gallery/223991745/Logo-Design-Brand-Identity"
  },
  {
    title: "Scandictech Poster",
    description: "Designed a bold and dynamic poster for Scanditach, capturing the brand’s energy and modern identity through striking visuals and balanced layout.",
    image: "../public/poster.jpg",
    link: "https://www.behance.net/gallery/223980427/Poster-Design"
  },
  {
    title: "Eid Mubarak Story",
    description: "Designed a festive Eid Mubarak story for Scandictech with elegant visuals and cultural warmth.",
    image: "../public/story.jpg",
    link: "https://www.behance.net/gallery/223990155/Eid-Mubarak-Instagram-Story"
  },
  {
    title: "Invitation Card Design",
    description: "Designed a stylish and elegant invitation card, combining clean typography and thoughtful layout to suit the occasion perfectly.",
    image: "../public/behance-04.jpg",
    link: "https://www.behance.net/gallery/223966587/Invitation-Card-Design"
  },
  {
    title: "ScandicTech Logo Design",
    description: "Crafted a modern and professional logo for ScandicTech that reflects innovation, technology, and brand clarity.",
    image: "../public/scandictechlogo.jpg",
    link: "https://www.behance.net/gallery/225972863/ScandicTech-Logo-Design"
  },
  {
    title: "Packaging Design for LUMANJO",
    description: "Designed minimal, informative packaging for LUMANJO, combining functionality with clear bilingual labeling and a sleek black-on-brown aesthetic.",
    image: "../public/packaging-01.jpg",
    link: "https://www.behance.net/gallery/225952819/Packaging-Design-For-Cable-Management-Tray(Lumanjo)"
  },
  {
    title: "Label Designs",
    description: "Created a sophisticated and impactful label design that enhances brand visibility and communicates product value effectively.",
    image: "../public/label-02.jpg",
    link: "https://www.behance.net/gallery/225966143/Label-Designs"
  },
   {
    title: "Posts Redesign for NUVOCELL",
    description: "Redesigned flyers, postcards, and Instagram posts for NUVOCELL, ensuring a consistent and modern brand identity across all materials.",
    image: "../public/nuvocell-03.jpg",
    link: "https://www.behance.net/gallery/225969497/Flyer-Postcard-Instagram-Posts-Redesign-for-NUVOCELL"
  },
  {
    title: "Leaflet Design",
    description: "Designed a captivating leaflet for Woodhouse Theatre showcasing upcoming events. Used elegant typography and visuals reflecting the theatre’s artistic spirit.",
    image: "../public/leaflet-04-04.jpg",
    link: "https://www.behance.net/gallery/225967117/Leaflet-Design-(Woodhouse-Theatre)"
  }

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
