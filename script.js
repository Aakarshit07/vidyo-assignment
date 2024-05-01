const priceRangeInput = document.getElementById('price');

priceRangeInput.addEventListener('input', function() {
  const selectedPrice = priceRangeInput.value;
  // Update the styling of the cards based on the selected price
  updateCardStyling(selectedPrice);
});

function updateCardStyling(selectedPrice) {
    const planCards = document.querySelectorAll('.plan-card');
    
    planCards.forEach(function(card) {
      const price = parseInt(card.querySelector('.plan-price').innerText.replace('USD ', '').replace(' /month', ''));
      
      if (price === 0) {
        if (selectedPrice >= 50 && selectedPrice < 70) {
          card.classList.add('selected-card');
        } else {
          card.classList.remove('selected-card');
        }
      } else if (price === 42) {
        if (selectedPrice >= 71 && selectedPrice < 100) {
          card.classList.add('selected-card');
        } else {
          card.classList.remove('selected-card');
        }
      } else if (price === 68) {
        if (selectedPrice >= 101 && selectedPrice < 130) {
          card.classList.add('selected-card');
        } else {
          card.classList.remove('selected-card');
        }
      } else if (price === 80) {
        if (selectedPrice >= 131 && selectedPrice <= 200) {
          card.classList.add('selected-card');
        } else {
          card.classList.remove('selected-card');
        }
      } else {
        card.classList.remove('selected-card');
      }
    });
  }