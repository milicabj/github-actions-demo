const validateUserAccess = require("./index");

function assertEqual(actual, expected, testName) {
  const actualJson = JSON.stringify(actual);
  const expectedJson = JSON.stringify(expected);

  if (actualJson !== expectedJson) {
    throw new Error(
      `${testName} failed. Expected ${expectedJson}, but got ${actualJson}`
    );
  }

  console.log(`${testName} passed`);
}

assertEqual(
  validateUserAccess({
    name: "Milica",
    email: "milica@example.com",
    age: 24,
    role: "student",
  }),
  { allowed: true, reason: "Access granted" },
  "Valid student user"
);

assertEqual(
  validateUserAccess({
    name: "Ana",
    email: "",
    age: 30,
    role: "admin",
  }),
  { allowed: true, reason: "Access granted" },
  "Valid admin user"
);

assertEqual(
  validateUserAccess({
    name: "A",
    email: "ana@example.com",
    age: 22,
    role: "student",
  }),
  { allowed: false, reason: "Name must contain at least 3 characters" },
  "Invalid name"
);

assertEqual(
  validateUserAccess({
    name: "Marko",
    email: "markoexample.com",
    age: 22,
    role: "student",
  }),
  { allowed: false, reason: "Invalid email address" },
  "Invalid email"
);

assertEqual(
  validateUserAccess({
    name: "Ivan",
    email: "ivan@example.com",
    age: 16,
    role: "student",
  }),
  { allowed: false, reason: "User must be at least 18 years old" },
  "Underage user"
);

assertEqual(
  validateUserAccess({
    name: "Jelena",
    email: "jelena@example.com",
    age: 25,
    role: "guest",
  }),
  { allowed: false, reason: "Unsupported user role" },
  "Unsupported role"
);

console.log("All validation tests passed successfully.");