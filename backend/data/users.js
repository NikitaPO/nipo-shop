import bcrypt from "bcrypt";

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Jonny",
    email: "john@example.com",
    password: bcrypt.hashSync("jj123", 10),
    isAdmin: true,
  },
  {
    name: "Michael",
    email: "micha@example.com",
    password: bcrypt.hashSync("mmhhaa11121", 10),
    isAdmin: true,
  },
];

export default users;
