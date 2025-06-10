import { users, demoRequests, type User, type InsertUser, type DemoRequest, type InsertDemoRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private demoRequests: Map<number, DemoRequest>;
  currentId: number;
  currentDemoId: number;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.currentId = 1;
    this.currentDemoId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoRequest(insertDemoRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.currentDemoId++;
    const demoRequest: DemoRequest = { 
      ...insertDemoRequest,
      phone: insertDemoRequest.phone || null,
      message: insertDemoRequest.message || null,
      id, 
      createdAt: new Date() 
    };
    this.demoRequests.set(id, demoRequest);
    return demoRequest;
  }
}

export const storage = new MemStorage();
