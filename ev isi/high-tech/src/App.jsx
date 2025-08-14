import React, { useState, useEffect } from 'react';
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { products } from './data/product.js';
import axios from 'axios';

const App = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    }).then(res => setClothes(res.data));
  }, []);

  return (
    <>
      <Header />
      <Main />
      <section className="shop-categories">
        <div className="container">
          <div className="row">
            <h3>Shop Categories</h3>
            {products.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <img src={item.image} />
                  <h4>{item.title}</h4>
                  <ul type="none">
                    {item.list.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                    <li>View it all</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='featured-products'>
        <div className="container">
          <div className="row">
            <h3>Featured Products</h3>
            {clothes.slice(0,4).map((i, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                  <img src={i.image}/>
                  <div className='stars'>
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <p>{i.title}</p>
                  <span>{i.price}</span>
                  <div className="buttons">
                    <button>+ Add to Cart</button>
                    <button><i className="fa-solid fa-eye"></i></button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
