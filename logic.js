let users = [
  { name: "Ioannis", age: 20 },
  { name: "Maria", age: 17 },
  { name: "Alex", age: 25 },
];

// Creating a user
// data validation
function createUser(users, name, age) {
  let username = name.trim();
  if (
    username === "" ||
    typeof age !== "number" ||
    age <= 0 ||
    !Number.isInteger(age)
  ) {
    return { success: false, message: "Invalid data" };
  }

  // Checking if user already exists
  let userExists = users.some(
    (user) => user.name.toLowerCase() === username.toLowerCase(),
  );

  if (userExists) {
    return { success: false, message: "User already exists" };
  }

  let newUser = { name: username, age: age };
  users.push(newUser);

  return { success: true, data: newUser };
}
console.log(createUser(users, "Eleni", 30));

// Deleting a user
function deleteUser(users, name) {
  let username = name.trim().toLowerCase();

  let index = users.findIndex((user) => user.name.toLowerCase() === username);

  if (index === -1) {
    return { success: false, message: "User not found" };
  }

  users.splice(index, 1);

  return { success: true, message: "User deleted" };
}
deleteUser(users, "Eleni");

function getUsers(users) {
  return users;
}

// Getting a user by name
function getUserByName(users, name) {
  let username = name.trim().toLowerCase(); //input normalization

  let user = users.find(
    //query
    (user) => user.name.toLowerCase() === username,
  );
  if (!user) {
    return { success: false, message: "User not found" };
  }
  return user;
}

function updateUser(users, name, newAge) {
  let username = name.trim().toLowerCase();

  let user = users.find((user) => user.name.toLowerCase() === username);

  if (!user) {
    return { success: false, message: "User not found" };
  }

  if (typeof newAge !== "number" || newAge <= 0 || !Number.isInteger(newAge)) {
    return { success: false, message: "Invalid data" };
  }

  user.age = newAge;

  return { success: true, data: user };
}
