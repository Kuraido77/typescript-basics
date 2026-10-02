README: TypeScript Basics Lab
1. Biggest advantage of TypeScript over plain JavaScript
The immediate, real-time feedback in your code editor. Instead of waiting for a script to execute and crash in the terminal or browser, TypeScript flags type mismatches, missing arguments, and invalid properties as you type. It acts as both a strict proofreader and a built-in documentation system for your data structures.

2. Specific error TypeScript caught that JavaScript would have missed
TypeScript immediately caught the attempt to access user?.phoneNumber. In plain JavaScript, accessing a non-existent property on an object doesn't throw an initial error; it silently evaluates to undefined. This often cascades into a confusing TypeError much further down the execution line. TypeScript stopped it instantly because phoneNumber was never defined in the User blueprint.

3. Interface vs. Type Alias

Interfaces are designed specifically to declare the shape of objects. They are highly extensible and support "declaration merging" (if you define the same interface twice, TypeScript automatically merges them). You should use interfaces when defining standard data models or class contracts, just like the User and Product models in this lab.

Type Aliases are more versatile. While they can describe object shapes, they can also define primitive aliases, complex intersections, and unions (e.g., type Category = 'electronics' | 'books'). You should use types when you need to define these unions, functions, or complex mapped types.

4. Why we use export and import
They enable a modular architecture. export makes specific functions, interfaces, or variables public so other files can utilize them, while keeping internal helper logic private. import pulls those exposed pieces into your current file. This approach prevents naming collisions and keeps individual files focused on a single responsibility rather than cramming an entire application into one massive script.

5. What happens to interfaces during compilation
They are completely erased. TypeScript is strictly a development tool, meaning its interfaces and types exist only at compile-time to verify your code's safety. Because JavaScript has no native equivalent for interfaces or static typing, the TypeScript compiler strips all type annotations out, leaving only the pure, executable JavaScript logic in your final dist folder.

6. The Review Interface
export interface Review {
    id: number;
    userId: number;            // Foreign key linking to the User
    productId: number;         // Foreign key linking to the Product
    rating: 1 | 2 | 3 | 4 | 5; // Union type to ensure valid rating boundaries
    comment: string;
    createdAt: Date;
}
