import { useState, useEffect } from "react";
import Charts from "../Charts";
import {Container , Status } from "./style";
import api from "../../services/api";
import Assets from "../../models/assets";


const Main = () => {
  const [showAssets, setShowAssets] = useState<Assets[]>();

  useEffect(() => {
    async function loadAssets() {
      const response = await api.get("/assets");
      setShowAssets(response.data);
      console.log(showAssets);
    }
    loadAssets();
  }, []);

  return (
    <Container>
      {showAssets?.map((item) => (
        <div key={item.id}>
          <Status>
            <span>Stage: {item.status}</span>
            <h2>{item.sensors}</h2>
            <span>{item.model}</span>
          </Status>
        </div>
      ))}
      <Charts />
    </ Container>
  );
};

export default Main;
