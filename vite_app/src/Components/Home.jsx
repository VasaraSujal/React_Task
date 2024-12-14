// import React from 'react';
// import './Home.css';
// import { MdFastfood } from 'react-icons/md';
// import { FaCocktail } from 'react-icons/fa';
// import { TbBooks } from 'react-icons/tb';
// import { PiBank } from 'react-icons/pi';

// function Home() {
//   const data = [
//     { id: 1, title: "Meal", description: "Discover delicious meals and recipes.", icon: <MdFastfood />, link: "/Meal" },
//     { id: 2, title: "Cocktail", description: "Explore refreshing cocktail recipes.", icon: <FaCocktail />, link: "/Cocktail" },
//     { id: 3, title: "Book", description: "Find and explore amazing books.", icon: <TbBooks />, link: "/Book" },
//     { id: 4, title: "Bank", description: "Manage your finances effectively.", icon: <PiBank />, link: "/Bank" },
//   ];

//   return (
//     <div className="home">
//       <h1 className="home-title">Welcome to My Application</h1>
//       <p className="home-subtitle">Explore the categories below</p>
//       <div className="categories">
//         {data.map((item) => (
//           <div className="card" key={item.id}>
//             <div className="card-icon">{item.icon}</div>
//             <h2 className="card-title">{item.title}</h2>
//             <p className="card-description">{item.description}</p>
//             <a href={item.link} className="card-link">Explore {item.title} →</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import './Home.css';
import { MdFastfood } from 'react-icons/md';
import { FaCocktail } from 'react-icons/fa';
import { TbBooks } from 'react-icons/tb';
import { PiBank } from 'react-icons/pi';

function Home() {
  const data = [
    { 
      id: 1, 
      title: "Meal", 
      description: "Explore a wide range of delicious meals and easy-to-follow recipes. Whether you're cooking for yourself or your family, there's something for everyone.", 
      icon: <MdFastfood />, 
      link: "/Meal" 
    },
    { 
      id: 2, 
      title: "Cocktail", 
      description: "Discover refreshing cocktail recipes for every occasion. From classic to creative, find the perfect drink to impress your friends.", 
      icon: <FaCocktail />, 
      link: "/Cocktail" 
    },
    { 
      id: 3, 
      title: "Book", 
      description: "Dive into a world of books. Whether you love fiction, non-fiction, or self-development, explore new titles and discover your next read.", 
      icon: <TbBooks />, 
      link: "/Book" 
    },
    { 
      id: 4, 
      title: "Bank", 
      description: "Manage your finances with ease. Learn budgeting, saving tips, and ways to grow your wealth to ensure financial stability and success.", 
      icon: <PiBank />, 
      link: "/Bank" 
    },
  ];

  return (
    <div className="home">
      <h1 className="home-title">Welcome to My Application</h1>
      <p className="home-subtitle">Explore the categories below and find exciting resources!</p>
      <div className="categories">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-icon">{item.icon}</div>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.description}</p>
            <a href={item.link} className="card-link">Explore {item.title} →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
