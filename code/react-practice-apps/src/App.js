import "./App.css";

import AppUserCard from "./01_app_user_card/01_app_user_card.js";

function App() {
  const users = [
    {
      name: "John",
      surname: "Doe",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      description:
        "John is a software engineer with over 10 years of experience.",
    },
    {
      name: "Jane",
      surname: "Smith",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      description:
        "Jane is a product manager who excels at coordinating teams.",
    },
    {
      name: "Michael",
      surname: "Johnson",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      description: "Michael is a UX designer with a keen eye for detail.",
    },
    {
      name: "Emily",
      surname: "Davis",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      description: "Emily is a data scientist who loves uncovering insights.",
    },
    {
      name: "David",
      surname: "Miller",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      description:
        "David is a front-end developer who enjoys creating intuitive UIs.",
    },
    {
      name: "Sarah",
      surname: "Taylor",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      description:
        "Sarah is a back-end developer who excels at building robust applications.",
    },
    {
      name: "James",
      surname: "Anderson",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      description:
        "James is a DevOps engineer who is skilled in automating deployment processes.",
    },
    {
      name: "Jessica",
      surname: "Thomas",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      description: "Jessica is a project manager who is great at multitasking.",
    },
    {
      name: "Robert",
      surname: "Jackson",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      description:
        "Robert is a database administrator who ensures the performance and security of databases.",
    },
    {
      name: "Emma",
      surname: "White",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      description:
        "Emma is a network engineer who designs and implements network configurations.",
    },
  ];

 

 //create me a function that suggest me a random number
  //between 0 and 9



  return (
    <div>
      {users.map(({ name, surname, img, description }) => {
        return (
          <AppUserCard
            name={name}
            surname={surname}
            img={img}
            description={description}
            key={name + surname}
          />
        );
      })}
    </div>
  );
}

export default App;
