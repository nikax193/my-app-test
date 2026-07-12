import React from "react";
import Header from "../header/Header";
import Aside from "../aside/Aside";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import './App.css';


function App() {
  const products = [
  {
    id: 1,
    name: "Iphone 17 Pro Max",
    price: 999.99,
    icon: "📱",
    badge: "New",
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 1999.99,
    icon: "💻",
    badge: "Sale",
  },
  {
    id: 3,
    name: "Headphones",
    price: 299.99,
    icon: "🎧",
    badge: "sale",
  },
    {
    id: 4,
    name: "samsung Galaxy S26",
    price: 999.99,
    icon: "📱",  
  },
  {
    id: 5,
    name: "Dell XPS 15",
    price: 1499.99,
    icon: "💻",
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 49.99,
    icon: "🔌",
  }
    
];  
  return (
    <>
        <Header/>
        <div className="wrapper">
        <Aside/>
        <div className="card-container">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            icon={product.icon}
            badge={product.badge}
            price={product.price}
          />
        ))}
        </div>
        </div>
        <Footer/>
    </>

  );
}

export default App;
