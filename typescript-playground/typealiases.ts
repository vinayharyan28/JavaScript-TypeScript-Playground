type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {}

createUser({ name: "Vinay", email: "", isActive: true });
