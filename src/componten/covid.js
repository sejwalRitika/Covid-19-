import React, { useEffect, useState } from 'react';
import './covid.css';
const Covid = () =>{
const [data, setData] = useState([]);

const getCovidData = async() =>{
try{
const res = await fetch('https://data.covid19india.org/data.json');
const actualData = await res.json();
console.log(actualData.statewise[0]);
setData(actualData.statewise[0])
}catch(err){
console.log(err)
}
}
useEffect(() =>{
getCovidData();
}, []);
return(
<>
<section>
<h1 style={{margin:"20px",alignItems: "justify-content-between align-items-center"}}>LIVE</h1>
<h2 style={{margin:"20px"}}>COVID 19 CORONAVIRIUS TRACKER</h2>
<div className="card mt-4"style={{width:"18rem"}}>
  <div className="card-body">
<div className="upper_data d-flex justify-content-between align-items-center">
    <h5 className="card-title mt-2">OUR COUNTRY</h5>
    <p className="card-text">INDIA</p>
  </div>
</div>
</div>
<div className="card"style={{width:"18rem"}}>
  <div className="card-body">
<div className="upper_data d-flex justify-content-between align-items-center">
    <h5 className="card-title">RECOVERED</h5>
    <p className="card-text">{data.recovered}</p>
  </div>
</div>
</div>
<div className="card"style={{width:"18rem"}}>
  <div className="card-body">
<div className="upper_data d-flex justify-content-between align-items-center">
    <h5 className="card-title">CONFIRMED</h5>
    <p className="card-text">{data.confirmed}</p>
</div>
  </div>
</div>
<div className="card"style={{width:"18rem"}}>
  <div className="card-body">
<div className="upper_data d-flex justify-content-between align-items-center">
    <h5 className="card-title">DEATHS</h5>
    <p className="card-text">{data.deaths}</p>
</div>
  </div>
</div>
<div className="card"style={{width:"18rem"}}>
  <div className="card-body">
<div className="upper_data d-flex justify-content-between align-items-center">
    <h5 className="card-title">ACTION</h5>
    <p className="card-text">{data.active}</p>
</div>
  </div>
</div>
<div className="card"style={{width:"18rem"}}>
  <div className="card-body">
<div className="upper_data d-flex justify-content-between align-items-center">
    <h5 className="card-title">UPDATED</h5>
    <p className="card-text">{data.lastupdatedtime}
</p>
</div>
  </div>
</div>
</section>
</>
)
}

export default Covid