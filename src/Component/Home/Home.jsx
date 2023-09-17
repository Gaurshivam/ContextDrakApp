import React from "react";
import './Home.css'

const Home = () => {
  return (
    <div className="ConatinerHome">
      <div className="LeftHome">
      <h2 id='h2Home' >Leading MEP & Facility management company in Dubai </h2>
      <p style={{fontSize:"30px",padding:"10px",marginTop:"20px"}}>
        Urban Science is always ready to accept your challenges Meeting your
        goals is our main objective. Professional services for facility
        management & MEP works.
      </p>
      <div className="btnSet">
        <button >Company Profile</button>
        <button >Watch Video</button>
      </div>
      </div>
      <div className="RightHome">
        <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png"
        height={680} width={700} alt="HomeImage" />
      </div>
    </div>
  );
};

export default Home;
