interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  startTrail2(): string;
  getCoupon(couponname: string): number;
}

interface User {
  // Reopening of interface
  githubToken: string;
}

const vinay: User = {
  dbId: 1,
  email: "vinay",
  githubToken: "123213",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  startTrail2: () => {
    return "trail2 started";
  },
  getCoupon: (name: "Vinay") => {
    return 10;
  },
};

interface Admin extends User {
  role: "admin";
}

// Type Vs Interface -- Documentation

export {};
