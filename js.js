// Handle modal popup
const aboutBtn = document.getElementById('aboutBtn');
const popup = document.getElementById('articleModal');
const closeModalBtn = document.getElementById('closeModal');

aboutBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Toggle "More Services"
const toggleBtn = document.getElementById('toggle-button');
const services = document.getElementById('more-services');

toggleBtn.addEventListener('click', () => {
  if (services.style.display === 'none' || services.style.display === '') {
    services.style.display = 'block';
    toggleBtn.textContent = 'Show Less';
  } else {
    services.style.display = 'none';
    toggleBtn.textContent = 'Show More';
  }
});





// EventListener  HW Lines 32 to 46
const reviewText = document.getElementById("review-text");
const toggleReviewBtn = document.getElementById("toggle-review");

const shortText = `"This company exceeded my expectations in every way..."`;
const fullText = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;

toggleReviewBtn.addEventListener('click', () => {
  if (toggleReviewBtn.textContent === 'Read full review') {
    reviewText.textContent = fullText;
    toggleReviewBtn.textContent = "Read Less";
  } else {
    reviewText.textContent = shortText;
    toggleReviewBtn.textContent = "Read full review";
  }
});
