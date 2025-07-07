const users = [
  {
    userName: "Sakib",
    age: 23,
    gender: "male",
  },
  {
    userName: "Priya",
    age: 21,
    gender: "female",
  },
  {
    userName: "Abid",
    age: 20,
    gender: "male",
  },
];

const getUser = (arr) => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

console.log(getUser(users));
