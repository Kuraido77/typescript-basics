"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const userService_1 = require("./services/userService");
const productService_1 = require("./services/productService");
console.log("=".repeat(50));
console.log("🚀 TypeScript Basics Lab - Running!");
console.log("=".repeat(50));
// --- USER OPERATIONS ---
console.log("\n📝 USER OPERATIONS");
console.log("-".repeat(50));
console.log("\n1. All users:");
console.log((0, userService_1.getAllUsers)());
console.log("\n2. Get user by ID (2):");
console.log((0, userService_1.getUserById)(2));
console.log("\n3. Create new user:");
const newUser = (0, userService_1.createUser)({
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 25
});
console.log(newUser);
console.log("\n4. Update user (change email):");
const updatedUser = (0, userService_1.updateUser)(1, { email: "john.doe@example.com" });
console.log(updatedUser);
console.log("\n5. Delete user (ID 3):");
console.log("Deleted:", (0, userService_1.deleteUser)(3));
console.log("\n6. All users after operations:");
console.log((0, userService_1.getAllUsers)());
// --- PRODUCT OPERATIONS ---
console.log("\n\n📦 PRODUCT OPERATIONS");
console.log("-".repeat(50));
console.log("\n1. All products:");
console.log((0, productService_1.getAllProducts)());
console.log("\n2. Get product by ID (1):");
console.log((0, productService_1.getProductById)(1));
console.log("\n3. Get products by category ('books'):");
console.log((0, productService_1.getProductsByCategory)('books'));
console.log("\n4. Create new product:");
const newProduct = (0, productService_1.createProduct)({
    name: "TypeScript Handbook",
    description: "Official TypeScript guide",
    price: 29.99,
    stock: 100,
    category: 'books'
});
console.log(newProduct);
console.log("\n5. Update product stock (ID 1 -> 10):");
console.log((0, productService_1.updateProductStock)(1, 10));
console.log("\n6. Delete product (ID 2):");
console.log("Deleted:", (0, productService_1.deleteProduct)(2));
console.log("\n7. All products after operations:");
console.log((0, productService_1.getAllProducts)());
console.log("\n" + "=".repeat(50));
console.log("✅ All operations completed successfully!");
console.log("=".repeat(50));
