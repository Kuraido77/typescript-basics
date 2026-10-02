"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProductStock = exports.createProduct = exports.getProductsByCategory = exports.getProductById = exports.getAllProducts = void 0;
let products = [
    {
        id: 1,
        name: "MacBook Pro",
        description: "16-inch laptop with M3 chip",
        price: 2499,
        stock: 15,
        category: 'electronics',
        createdAt: new Date("2024-01-10")
    },
    {
        id: 2,
        name: "The Pragmatic Programmer",
        description: "Classic software engineering book",
        price: 39.99,
        stock: 50,
        category: 'books',
        createdAt: new Date("2024-01-12")
    }
];
let nextId = 3;
function getAllProducts() {
    return products;
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    return products.find(p => p.id === id);
}
exports.getProductById = getProductById;
function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}
exports.getProductsByCategory = getProductsByCategory;
function createProduct(input) {
    const newProduct = {
        id: nextId++,
        ...input,
        createdAt: new Date()
    };
    products.push(newProduct);
    return newProduct;
}
exports.createProduct = createProduct;
function updateProductStock(id, newStock) {
    const product = products.find(p => p.id === id);
    if (!product) {
        return null;
    }
    if (newStock < 0) {
        throw new Error("Stock cannot be negative");
    }
    product.stock = newStock;
    return product;
}
exports.updateProductStock = updateProductStock;
function deleteProduct(id) {
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    return products.length < initialLength;
}
exports.deleteProduct = deleteProduct;
