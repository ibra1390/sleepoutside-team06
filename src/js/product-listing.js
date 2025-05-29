import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./productList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");
const myList = new ProductList(category, dataSource, listElement);

myList.init();