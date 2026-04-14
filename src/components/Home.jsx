import axios from "axios";
import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

  const show = () => {
    const baseurl ="https://prince9559.github.io/jsonproject/products.json";

    axios.get(baseurl).then((response) => {
        setData(response.data);
      })

      .catch((error) => {
        console.log("Error :", error);
      });
  };

  return (

    <div className="container">
      <button onClick={show}>Load Products</button>
      <h1>All Products</h1>
      <div className="card-container">

        {data.length > 0 &&
          data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹ {item.new_price}</p>
              <p className="old">₹ {item.old_price}</p>
            </div>
          ))}
      </div>

    </div>
  );
}

export default Home;
