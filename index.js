function validateUserAccess(user) {
  if (!user || typeof user !== "object") {
    return { allowed: false, reason: "Invalid user object" };
  }

  if (!user.name || user.name.trim().length < 3) {
    return { allowed: false, reason: "Name must contain at least 3 characters" };
  }

  if (!user.email || !user.email.includes("@")) {
    return { allowed: false, reason: "Invalid email address" };
  }

  if (user.age < 18) {
    return { allowed: false, reason: "User must be at least 18 years old" };
  }

  if (!["student", "admin"].includes(user.role)) {
    return { allowed: false, reason: "Unsupported user role" };
  }

  return { allowed: true, reason: "Access granted" };
}

module.exports = validateUserAccess;