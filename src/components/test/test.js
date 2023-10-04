import test from './output.json' assert { type: 'json' };

const data = test;
const scents = [
  'Sweet Citrus',
  'Floral',
  'Fresh',
  'Herbal',
  'Fruity',
  'Spicy',
  'Minty',
  'Woody',
];
const keyIngs = [
  'Citrus',
  'Lavender',
  'Cocoa Butter',
  'Almond',
  'Salt',
  'Coconut',
  'Mint',
  'Rose',
  'Argan',
  'Avocado',
  'Olive Oil',
  'Shea Butter',
];
const colors = [
  'White',
  'Pink',
  'Blue',
  'Green',
  'Purple',
  'Yellow',
  'Golden',
  'Orange',
  'Black',
  'Multi',
  'Red',
  'Silver',
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const newData = data.map((object) => {
  const scent = scents[Math.floor(Math.random() * scents.length)];
  const keyIng = keyIngs[Math.floor(Math.random() * keyIngs.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  object['scent'] = scent;
  object['keyIng'] = keyIng;
  object['color'] = color;
  return object;
});

console.log(newData);
