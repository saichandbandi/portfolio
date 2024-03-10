import React from "react";
 
import {AiFillGithub} from 'react-icons/ai'

import car from './assets/maillage.jpg' 
import food from './assets/foodorder.jpg'



const Work = () => {
  return (
    <div name='work' className="w-full md:min-h-screen text-gray-300 bg-[#0a192f] py-20 bg-cover ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full   ">
        <div className="pb-8">
          <h1 className="text-4xl inline border-b-4 border-yellow-500 ">
            My-Projects
          </h1>
          <p className="py-6">
            \\ Check out some of my recent work
          </p>
        </div>




        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4    ">



          
          <div style={{ backgroundImage: `url(${car})`, backgroundSize : "cover" }} className="shadow-lg shadow-[#040c16] group container rounded-md h-[200px] 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Car Mileage Estimation
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://github.com/saichandbandi/Mileage_estimation' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-300 text-gray-700 font-bold text-lg"
                  >
                   <AiFillGithub/>
                  </button>
                </a>
                
              </div>
            </div>
          </div>  



          <div style={{ backgroundImage: `url(${food})`, backgroundSize : "cover" }} className="shadow-lg shadow-[#040c16] group container rounded-md h-[200px] 
              flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-black tracking-wider ">
                Food Order Again
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href='https://github.com/saichandbandi/Mileage_estimation' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-yellow-300 text-gray-700 font-bold text-lg"
                  >
                   <AiFillGithub/>
                  </button>
                </a>
                
              </div>
            </div>
          </div> 



       

         

          


          




        </div>
      </div>
    </div>
  );
};

export default Work;