// Define types locally to avoid database dependencies
type User = {
  id: number;
  username: string;
  password: string;
};

type InsertUser = {
  username: string;
  password: string;
};

type DemoRequest = {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string | null;
  message: string | null;
  createdAt: Date;
};

type InsertDemoRequest = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
};

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
      id,
      name: insertDemoRequest.name,
      email: insertDemoRequest.email,
      company: insertDemoRequest.company,
      phone: insertDemoRequest.phone || null,
      message: insertDemoRequest.message || null,
      createdAt: new Date() 
    };
    this.demoRequests.set(id, demoRequest);
    console.log(`Demo request created: ${demoRequest.name} (${demoRequest.email}) from ${demoRequest.company}`);
    return demoRequest;
  }
}

export const storage = new MemStorage();