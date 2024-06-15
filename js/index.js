import { CardComponents } from "../components/CardComponents.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products.map((product) => (renderArea.innerHTML += CardComponents(product)));
// console.log(products);
// products.map((product) => (renderArea.innerHTML += CardComponents(product.id)));
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((products) => products.map((product) => console.log(product.id)));
// fetch("https://fakestoreapi.com/products")
//   .then((products) => products.json())
//   .then((products) =>
//     products.map(
//       (product) => (renderArea.innerHTML += CardComponents(product.id))
//     )
//   );
