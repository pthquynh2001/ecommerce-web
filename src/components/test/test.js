const products = [];

for (let i = 10; i <= 50; i++) {
  // Tăng biến i lên 1 đơn vị
  i++;

  // Tạo đối tượng sản phẩm với giá trị của biến i
  const product = {
    name: `name ${i}`,
    mainImg:
      'https://res.cloudinary.com/dencxhraw/image/upload/v1694773632/lush-image/new-products/00823_1_zo8b93.jpg',
    secondImg:
      'https://res.cloudinary.com/dencxhraw/image/upload/v1694773635/lush-image/new-products/00823_2_loq3bz.jpg',
    price: i,
    size: i,
    tagline: `tagline ${i}`,
    type: `type ${i}`,
    badgeId: i,
    id: i,
  };
  products.push(product);
}

// Chuyển đổi mảng thành chuỗi JSON
const jsonString = products.map((product) => JSON.stringify(product)).join(',');

console.log(jsonString);
