// src/services/userService.ts
import { User, CreateUserInput, UpdateUserInput } from '../models/user';

// In-memory "database"
let users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
        isActive: true,
        createdAt: new Date("2024-01-15")
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        isActive: true,
        createdAt: new Date("2024-02-20")
    }
];

let nextId = 3;

// GET all users
export function getAllUsers(): User[] {
    return users;
}

// GET user by ID
export function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}

// POST create user
export function createUser(input: CreateUserInput): User {
    const newUser: User = {
        id: nextId++,
        name: input.name,
        email: input.email,
        age: input.age,
        isActive: true,
        createdAt: new Date()
    };

    users.push(newUser);
    return newUser;
}

// PATCH update user
export function updateUser(id: number, input: UpdateUserInput): User | null {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return null;
    }

    users[userIndex] = {
        ...users[userIndex],
        ...input
    };

    return users[userIndex];
}

// DELETE user
export function deleteUser(id: number): boolean {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length < initialLength;
}