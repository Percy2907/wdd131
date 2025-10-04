document.addEventListener('DOMContentLoaded', function () {
if (localStorage.getItem('reviewCount') === null) {
  localStorage.setItem('reviewCount', 0);
}

let reviewCount = parseInt(localStorage.getItem('reviewCount'));
reviewCount += 1;
localStorage.setItem('reviewCount', reviewCount);

const reviewCountElement = document.getElementById('review-count');
reviewCountElement.textContent = `Number of reviews completed: ${reviewCount}`;

document.getElementById('reset-btn').addEventListener('click', () => {
  localStorage.setItem('reviewCount', 0);
  reviewCountElement.textContent = "Number of reviews completed: 0";
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
});