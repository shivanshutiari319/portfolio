import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "LeetCode Profile",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://cdn-images-1.medium.com/max/1600/0*GePc7lo4CF4A3guP.png",
    link:"https://leetcode.com/ustad_319/",
      },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "CodeForces Profile",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/1024px-Codeforces_logo.svg.png",
       link:"https://codeforces.com/ ",
      },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "HackerRank Profile",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "http://www.yosuccess.com/wp-content/uploads/2015/01/HackerRank2.png",
    link:"https://www.hackerrank.com/shiva_ustad2",
      },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "GFG Profile",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-6.png",
      link:"https://auth.geeksforgeeks.org/user/ustad/profile",
      },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="works" id="works">
      
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
         
        {data.map((d) => (
       
          <div className="container">
           
            <div className="">
              
              <div className="">
              <a href={d.link} rel="noreferrer" target="_blank">
                <img
                  src={d.img}
                  alt=""
                />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
