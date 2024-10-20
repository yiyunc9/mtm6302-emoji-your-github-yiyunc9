// Array of emoji decimal codes (12 emojis)
const emojis = [
  { code: 128512, description: 'Grinning Face' },
  { code: 128513, description: 'Grinning Face with Big Eyes' },
  { code: 128514, description: 'Grinning Face with Smiling Eyes' },
  { code: 128515, description: 'Beaming Face with Smiling Eyes' },
  { code: 128516, description: 'Grinning Squinting Face' },
  { code: 128517, description: 'Grinning Face with Sweat' },
  { code: 128518, description: 'Rolling on the Floor Laughing' },
  { code: 128519, description: 'Face with Tears of Joy' },
  { code: 128520, description: 'Slightly Smiling Face' },
  { code: 128521, description: 'Upside-Down Face' },
  { code: 128522, description: 'Winking Face' },
  { code: 128523, description: 'Smiling Face with Halo' }
];

const emojiGallery = document.getElementById('emoji-gallery');

// Loop through the emoji array and dynamically add each emoji to the gallery
emojis.forEach(emoji => {
  // Create a container for each emoji
  const emojiContainer = document.createElement('div');
  emojiContainer.classList.add('emoji-container');

  // Create a span to hold the emoji character
  const emojiChar = document.createElement('span');
  emojiChar.classList.add('emoji');
  emojiChar.innerHTML = `&#${emoji.code};`; // Add emoji using its decimal code

  // Create a code element
  const emojiCode = document.createElement('code');
  emojiCode.classList.add('emoji-code');
  emojiCode.textContent = `${emoji.code}`;

  // Append the emoji character and its code to the container
  emojiContainer.appendChild(emojiChar);
  emojiContainer.appendChild(emojiCode);

  // Append the container to the emoji gallery
  emojiGallery.appendChild(emojiContainer);
});
