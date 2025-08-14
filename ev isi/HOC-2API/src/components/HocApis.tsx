import React, { useState, useEffect } from "react";
import axios from "axios";

const HocApis = (OriginalCompo: React.ComponentType<any>) => {
  const newCombo = () => {
    const [dummyApi, setDummyApi] = useState([]);
    const [fakeStoreApi, setFakeStoreApi] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
          const dummyResponse = await axios.get("https://dummyjson.com/products");
          const fakeStoreResponse = await axios.get("https://fakestoreapi.com/products");

          setDummyApi(dummyResponse.data.products);
          setFakeStoreApi(fakeStoreResponse.data);
        
      };

      fetchData();
    }, []);


    return (
      <OriginalCompo dummyApi={dummyApi} fakeStoreApi={fakeStoreApi} />
    );
  };

  return newCombo;
};

export default HocApis;
