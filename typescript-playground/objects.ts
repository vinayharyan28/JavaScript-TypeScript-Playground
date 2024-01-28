const User = {
  name: "Vinay",
  email: "vinay@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "vinay", isPaid: false });

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "reactjs", isPaid: true };
}

export {};
