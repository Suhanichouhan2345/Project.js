
const user = {
  name: "Aman",
  address: {
    city: "Delhi"
  }
};

Object.freeze(user.address);


user.address.city = "Mumbai"; // ✅ change ho jayega!
user.name ="rohit";
console.log(user)