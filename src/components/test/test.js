const products = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 101; i <= 110; i++) {
  const product = {
    id: i,
    name: 'Product Name',
    mainImg:
      'https://res.cloudinary.com/dencxhraw/image/upload/v1695929834/lush-image/new-products/Infrawig2_900x_otg132.webp',
    secondImg:
      'https://res.cloudinary.com/dencxhraw/image/upload/v1695929838/lush-image/new-products/Infrawig4_900x_ggdeha.webp',
    cat: 'hair',
    type: 'Styling',
    tagline: 'tagline',
    price: getRandomInt(100),
    collection: '',
  };
  products.push(product);
}

// Chuyển đổi mảng thành chuỗi JSON
const jsonString = products.map((product) => JSON.stringify(product)).join(',');

console.log(jsonString);
