console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const ul = document.querySelector("#products");

 
  ul.innerHTML = "";


  if (products.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No products available";
    ul.appendChild(li);
    return;
  }

 
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const li = document.createElement("li");

    li.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: ${product.price} DKK</p>
      <p>Rating: ${product.rating}/10</p>
    `;

    ul.appendChild(li);
  }
}

renderProducts(products);

