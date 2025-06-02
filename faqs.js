document.addEventListener('DOMContentLoaded', () => {
  // Initialize with active category
  const initialCategory = document.querySelector('.category.active');
  
  // Toggle FAQ answers
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
      
      // Close other items in the same category
      const category = faqItem.dataset.category;
      document.querySelectorAll(`.faq-item[data-category="${category}"]`).forEach(item => {
        if(item !== faqItem) item.classList.remove('active');
      });
    });
  });

  // Category filtering function
  const filterCategory = (categoryElement) => {
    const targetCategory = categoryElement.dataset.category;
    
    // Hide all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.style.display = 'none';
      item.classList.remove('active');
    });
    
    // Show items from selected category
    document.querySelectorAll(`.faq-item[data-category="${targetCategory}"]`).forEach(item => {
      item.style.display = 'block';
    });
  };

  // Category filtering
  const categories = document.querySelectorAll('.category');
  
  categories.forEach(category => {
    category.addEventListener('click', () => {
      // Update active category
      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');
      filterCategory(category);
    });
  });

  // Set initial state
  filterCategory(initialCategory);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
      const focusedItem = document.activeElement.closest('.faq-question');
      if(focusedItem) focusedItem.click();
    }
  });
});