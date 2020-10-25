import bcrypt from "bcrypt";

const users = [
  {
    name: "Joe Joens",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Jonny Sidge",
    email: "john@example.com",
    password: bcrypt.hashSync("jj123", 10),
    isAdmin: false,
  },
  {
    name: "Simon Li",
    email: "micha@example.com",
    password: bcrypt.hashSync("mmhhaa11121", 10),
    isAdmin: false,
  },
];

export default users;
