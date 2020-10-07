window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const beatMonkey = document.querySelector('.beat-monkey');
  const title = document.querySelector('header h1');
  const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#60b2d3',
  ]

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      beatMonkey.style.transform = 'scale(1.2)';
      title.style.color = colors[index];

      createBubbles(index)
    })
  });

  const createBubbles = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 2s ease';
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
      beatMonkey.style.transform = 'scale(1)';
      title.style.color = 'white';
    })
  }
})