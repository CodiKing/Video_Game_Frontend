import React, { useEffect, useState } from 'react';
import Dashboard from './components/NavBar/DashBoard';
import axios from 'axios';
import { Chart } from "react-google-charts";
import HomePage from './HomePage';


function App() {
const [platforms, setPlatforms] = useState([]);
const [globalSales, setGlobalSales] = useState([]);

  useEffect(() => {
    getAllVideoGames()
    getPlatformGlobalSales()
  }, []);

  const getAllVideoGames = async () => {
    try {
      const res = await axios.get('https://localhost:7260/api/Games/');
      console.log(res.data);
      setPlatforms(res.data.platforms);
      setGlobalSales(res.data.globalSales)
    } catch (e) {
      console.log(e);
    }
  };
  const getPlatformGlobalSales = async () => {
    try{
      const res = await axios.get('https://localhost:7260/api/Games/byPlatform-globalsales')
      let obj = res.data
      for(let i = 0; i < data.length; i++){
      if(obj[data[i].platform]){
      obj[data[i].platform] += data[i].globalSales
      }else{
      obj[data[i].platform] = data[i].globalSales
        }
      }
      console.log(obj)

    }catch (e){
      console.log(e)
    }
  }
  // Data and options for bar chart to include global game sales per console
  const data = [
    []
  ];
const options = {
  title: "Global Game Sales Per Console",
  width: 600,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};
  


  return (
    <div>
      <h3>Test!</h3>
      <div>
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}/>
      </div>
    </div>
  );
}

export default App;
