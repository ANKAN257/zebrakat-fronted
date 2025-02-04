import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Intro from "./Intro";
import About from "./About";

import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";


function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(null);
  // const zyz=process.env.REACT_APP_serverUrl
  // console.log("ppppppppppppppppppp",process.env.REACT_APP_REACT_APP_serverUrl);
  
  // console.log("zzzzzzzzzzzzzzzzzz:",zyz);
  

  const getPortfolioData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_serverUrl}/api/portfolio/data`
      );
      console.log("response portfolio colloctions ----: ", response.data);

      setPortfolioData(response.data);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  console.log("portfolioData myheaders", portfolioData?.myheaders);
  console.log("portfolioData introhomes", portfolioData?.introhomes);
  console.log("portfolioData abouts", portfolioData?.abouts);
  console.log("portfolioData projects", portfolioData?.projects);
  console.log("portfolioData myskills", portfolioData?.myskills);
  console.log("portfolioData myexperiences", portfolioData?.myexperiences);
  console.log("portfolioData myheaders", portfolioData?.myheaders);
  




  return (
    <div className="h-screen w-full">
      {portfolioData ? (
        <div>
          {/* Pass introhomes data as props to the components */}
          <Header myheaders={portfolioData.myheaders} />
          <Intro introhomes={portfolioData.introhomes} />
          <About abouts={portfolioData.abouts} titleText="About" />
          <Project projects={portfolioData.projects} />
          <Skills
            myskills={portfolioData.myskills}
            myexperiences={portfolioData.myexperiences}
          />
          <Contact />
          <Footer />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Loading portfolio data...</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
