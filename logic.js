let users = [
  { name: "Ioannis", age: 20 },
  { name: "Maria", age: 17 },
  { name: "Alex", age: 25 },
];

// Creating a user
// error validation
function createUser(users, name, age) {
  let username = name.trim();
  if (
    username === "" ||
    typeof age !== "number" ||
    age <= 0 ||
    !Number.isInteger(age)
  ) {
    return "Invalid data";
  }
  // Checking if user already exists
  let userExists = users.some(
    (user) => user.name.toLowerCase() === username.toLowerCase(),
  );
  if (userExists) {
    return "User already exists";
  }

  let newUser = { name: username, age: age };
  users.push(newUser);

  return "User Created";
}
console.log(createUser(users, "Eleni", 30));
console.log(users);

// Deleting a user
function deleteUser(users, name) {
  let username = name.trim().toLowerCase();

  let index = users.findIndex((user) => user.name.toLowerCase() === username);

  if (index !== -1) {
    users.splice(index, 1);
    return "User Deleted";
  } else {
    return "User not found";
  }
}
deleteUser(users, "Eleni");
console.log(users);
