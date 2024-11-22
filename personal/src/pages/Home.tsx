import React, { useEffect } from "react";
import "./../styles/Home.css";
import heroImage from "../assets/images/resized/slider1.jpg";

const Home = () => {
  useEffect(() => {
    const bubbleContainer = document.querySelector(".bubble-container");

    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`; // Rastgele yatay konum
      bubble.style.width = `${Math.random() * 30 + 10}px`; // Rastgele genişlik
      bubble.style.height = bubble.style.width; // Yuvarlak baloncuk
      bubbleContainer?.appendChild(bubble);

      setTimeout(() => bubble.remove(), 5000); // 5 saniye sonra kaldır
    };

    const bubbleInterval = setInterval(createBubble, 500); // Her 500ms bir baloncuk
    return () => clearInterval(bubbleInterval); // Bileşen temizliği
  }, []);

  return (
    <div className="home-container">
      <div className="bubble-container"></div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Blog</h1>
          <p>
            Explore my journey as a Front-End Developer, sharing insights,
            projects, and tips on building modern web applications. Let's
            create something amazing together!
          </p>
          <button>
            <a href="/contact">Get Started</a>
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
