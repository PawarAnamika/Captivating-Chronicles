const smallImages = document.querySelectorAll('.small-image');
const timerSpan = document.getElementById('time');
const objectCountSpan = document.getElementById('objectCount').querySelector('span');
const clueButton = document.getElementById('Clue');
const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');
const scoreDisplay = document.getElementById('scoreDisplay'); // Select the score display div

let objectCount = 20; // Initial object count
let secondsRemaining = 10 * 60; // 10 minutes in seconds
let timerInterval; // Variable to store the timer interval
let clueClickCount = 0;
let score = 0; // Initialize score

smallImages.forEach(image => {
  image.addEventListener('click', function() {
    // Check if time is over
    if (secondsRemaining <= 0) {
      alert('Time is up!');
      return;
    }

    clickSound.play();
    this.style.display = 'none';

    if (objectCount > 0) {
      objectCount--;
      objectCountSpan.textContent = objectCount;
    }

    if (objectCount === 0) {
      clearInterval(timerInterval);
      alert('Congratulations! You found all items!');
      winSound.play();
    }

    // Check if the clicked item is one of the correct items and increase the score if it is
    if (this.id === 'Pillow' || this.id === 'parrot' || this.id === 'lock' || this.id === 'DwarfIcon' || this.id === 'keyIcon' || this.id === 'Bonsai' || this.id === 'DoorIcon' || this.id === 'Rooster' || this.id === 'lantern' || this.id === 'Tulips' || this.id === 'Butterfly' || this.id === 'Key Hole' || this.id === 'Web' || this.id === 'Star' || this.id === 'Tomato' || this.id === 'Hour Glass' || this.id === 'barbers pole' || this.id === 'Compass' || this.id === 'Rose' || this.id === 'Books' || this.id === 'Globe') 
     {
      score++; // Increase score
      scoreDisplay.textContent = 'Score: ' + score; // Update score display
    }
  });
});

function updateTimer() {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerSpan.textContent = formattedTime;
}

function decreaseTimer() {
  if (secondsRemaining > 0) {
    secondsRemaining--;
    updateTimer();
  } else {
    clearInterval(timerInterval);
    alert('Time is up!');
  }
}

timerInterval = setInterval(decreaseTimer, 1000);

function removeListItem(itemId) {
  var itemList = document.getElementById("list");
  var itemToRemove = document.getElementById(itemId);

  if (itemToRemove) {
    itemList.removeChild(itemToRemove);
  } else {
    alert("Item not found!");
  }
}

clueButton.addEventListener('click', function() {
  if (secondsRemaining <= 0) {
    alert('Time is up!');
    return;
  }

  if (clueClickCount < 3) {
    var allImages = document.querySelectorAll('.small-image');

    allImages.forEach(function(image) {
      image.classList.remove('glow');
    });

    var randomIndex = Math.floor(Math.random() * allImages.length);
    var randomImage = allImages[randomIndex];

    randomImage.classList.add('glow');

    setTimeout(function() {
      randomImage.classList.remove('glow');
    }, 3000);
    clueClickCount++;
    if (clueClickCount === 3) {
      clueButton.disabled = true;
      clueButton.style.backgroundColor = 'grey';
    }
  }
});
