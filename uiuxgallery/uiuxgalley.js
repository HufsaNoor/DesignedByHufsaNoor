// const galleryContainer = document.getElementById("galleryContainer");
// const viewMoreBtn = document.getElementById("viewMoreBtn");

// const cardsData = [
//   {
//     title: "Køreskole i Brønshøj",
//     description: "Designed a user-friendly, responsive website for Køreskole i Brønshøj, focusing on seamless navigation, clear course information, and an intuitive booking experience for students.",
//     image: "../public/Desktop - 13.jpg",
//     link: "https://dribbble.com/shots/25922898-K-reskole-i-Br-nsh-j"
//   },
//   {
//     title: "Capture The Moment",
//     description: "Designed a visually engaging and user-friendly website for Capture the Moment, focusing on seamless navigation, a minimalistic layout, and an immersive experience.",
//     image: "../public/captiurethemoment.jpg",
//     link:"https://dribbble.com/shots/25922912-Capture-The-Moment"
//   },
//   {
//     title: "TOPQuote",
//     description: "Designed a clear, engaging website for TopQuote",
//     image: "../public/topquote.jpg",
//     link:"https://dribbble.com/shots/25922910-TOPQuote"
//   },
//   {
//     title: "Audit-Laravel",
//     description: "Designed a user-friendly website for Audit-Laravel, showcasing its features and providing seamless navigation for users seeking auditing solutions.",
//     image: "../public/auditlaravel.jpg",
//     link:"https://dribbble.com/shots/25922908-Audit-Laravel"
//   },
//   {
//     title: "Shami House",
//     description: "Designed a visually rich and user-focused website for Shami House, highlighting its culinary offerings through elegant layouts and intuitive navigation.",
//     image: "../public/shamihouse.jpg",
//     link:"https://dribbble.com/shots/25922935-Shami-House"
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
    title: "Køreskole i Brønshøj",
    description: "Designed a user-friendly, responsive website for Køreskole i Brønshøj, focusing on seamless navigation, clear course information, and an intuitive booking experience for students.",
    image: "../public/Desktop - 13.jpg",
    link: "https://dribbble.com/shots/25922898-K-reskole-i-Br-nsh-j"
  },
  {
    title: "Capture The Moment",
    description: "Designed a visually engaging and user-friendly website for Capture the Moment, focusing on seamless navigation, a minimalistic layout, and an immersive experience.",
    image: "../public/captiurethemoment.jpg",
    link: "https://dribbble.com/shots/25922912-Capture-The-Moment"
  },
  {
    title: "TOPQuote",
    description: "Designed a clear, engaging website for TopQuote",
    image: "../public/topquote.jpg",
    link: "https://dribbble.com/shots/25922910-TOPQuote"
  },
  {
    title: "Audit-Laravel",
    description: "Designed a user-friendly website for Audit-Laravel, showcasing its features and providing seamless navigation for users seeking auditing solutions.",
    image: "../public/auditlaravel.jpg",
    link: "https://dribbble.com/shots/25922908-Audit-Laravel"
  },
  {
    title: "Shami House",
    description: "Designed a visually rich and user-focused website for Shami House, highlighting its culinary offerings through elegant layouts and intuitive navigation.",
    image: "../public/shamihouse.jpg",
    link: "https://dribbble.com/shots/25922935-Shami-House"
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
      <img src="${card.image}" alt="Card Image">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;

    // Make entire card clickable
    cardElement.style.cursor = "pointer";
    cardElement.addEventListener("click", () => {
      window.open(card.link, "_blank");
    });

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
