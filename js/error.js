fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))

  .catch((error) => console.log(error));

try {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
} catch {}

// document.getElementById("abc");

// synchronous asynchronous

console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

// const dreamGirl = [{
//     sokina: {
//       name: "bbu",
//       height: "5.4",
//       family: [{ father: "rock", mother: "shila", sister: "chinki" }],
//       age: undefined,
//       contactInfo: [{
//           facebook: {
//             link: "https://www.facebook.com/",
//             followers: "12545",
//             status: "single",
//             friendsList: [{ name: "rofik" }, undefined],
//           },
//         },
//         { instagram: "https://www.instagram.com/" },
//       ],
//     },
//   },
// ];
