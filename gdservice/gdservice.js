document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const loadMoreButton = document.getElementById('loadMore');
    const cards = Array.from(portfolioGrid.getElementsByClassName('portfolio-card'));
    const visibleCardsInitially = 6;
    let visibleCards = visibleCardsInitially;

    // Hide initial cards
    cards.forEach((card, index) => {
        if (index >= visibleCardsInitially) {
            card.classList.add('hidden');
        }
    });

    // Load More functionality
    loadMoreButton.addEventListener('click', () => {
        visibleCards += 3;
        cards.forEach((card, index) => {
            if (index < visibleCards) {
                card.classList.remove('hidden');
            }
        });

        // Hide button when all cards are visible
        if (visibleCards >= cards.length) {
            loadMoreButton.style.display = 'none';
        }
    });
});