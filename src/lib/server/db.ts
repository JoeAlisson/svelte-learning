interface User {
  name: string;
  email: string;
  password: string;
}

interface UserStore {
  getUserFromSession: (sessionid: string) => Promise<User | undefined>;
  getUser: (email: string) => Promise<User | undefined>;
  createSession: (user: User) => Promise<string | undefined>;
}

class UserStoreImpl implements UserStore {
  usersBySession = new Map<string, User>();
  users = new Map<string, User>();

  async getUserFromSession(sessionId: string) {
    return this.usersBySession.get(sessionId);
  }

  async getUser(email: string) {
    return this.users.get(email);
  }

  async createSession(user: User) {
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.usersBySession.set(sessionId, user);
    return sessionId;
  }
}

const userStore = new UserStoreImpl();

export const db = {
  getUserFromSession: async (sessionId: string) => {
    return userStore.getUserFromSession(sessionId);
  },

  getUser: async (email: string) => {
    return userStore.getUser(email);
  },

  createSession: async (user: User) => {
    return userStore.createSession(user);
  }
};
