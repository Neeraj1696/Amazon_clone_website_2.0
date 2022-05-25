import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
        alt="Error_home_image"
      />
      <Product
        id="123456"
        title="Product Title"
        price={11}
        rating={5}
        image="error_home_image"
      />
    </div>
  );
}

export default Home;
