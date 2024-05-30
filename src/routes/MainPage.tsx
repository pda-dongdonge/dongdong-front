import React, { useState, useEffect } from "react";
import "./mainpage.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const imgElements = document.querySelectorAll(".scroll-image");
      imgElements.forEach(img => {
        const scrollY = window.scrollY;
        const speed = img.dataset.scrollSpeed || 0.3;
        img.style.transform = `translateY(-${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    const h1Element = document.querySelector(".fade-text");
    setTimeout(() => {
      h1Element.style.opacity = 1; // 처음에는 투명하지 않게 설정
    }, 100); // 텍스트가 나타난 후 0.1초 후에 투명하지 않은 상태로 설정
  }, []);
  return (
    <>
<main className="content js-content">
<section className="block" style={{textAlign:"center", marginBottom:"150px", marginTop:"100px"}}>
<h1 className="fade-text rounded-text" style={{ fontWeight: "bold", color: "black", height: "100px", opacity: 0 }}>DongdongE에 오신 걸 환영합니다!</h1>

  <div style={{display:"flex", justifyContent:"center"}}>
   
  <img  className="scroll-image" src="/dongdonglogo.png" alt="로고" width={"250px"} style={{textAlign:"center"}}/>
  
  </div>
</section>
  <section className="block">
    <div className="item-parallax-content flex-container img-grid">
<figure className="img-gridItem type-right" style={{display:"flex", gap:"20px", justifyContent:"center"}}>
      <div style={ {borderRadius: "15px",
                      backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/800px-YouTube_Logo_%282013-2017%29.svg.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight:"170px",
                      width:"400px",
                      }}>

     </div>
        
        <figcaption  className="img-caption">
          <h2 >Youtube</h2>
          <p  style={{color:"#5610A7", fontWeight:"bold"}}>
            자신의 취향대로,
          </p>
        </figcaption>
      </figure>

<figure className="img-gridItem type-right" style={{display:"flex", gap:"20px", justifyContent:"center"}}>
<figcaption className="img-caption">
          <h2 >TVING</h2>
          <p  style={{color:"#5610A7", fontWeight:"bold"}}>
          다양한 OTT의 영상을,
          </p>
        </figcaption>
      <div  style={ {borderRadius: "15px",
                      backgroundImage: `url(https://cdn.digitaltoday.co.kr/news/photo/201910/216206_191039_2844.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight:"170px",
                      width:"400px",
                      }}>

     </div>
        
       
      </figure>
    </div>
  </section>
  <section className="block">
    <div className="item-parallax-content flex-container img-grid">
      <figure className="img-gridItem type-right" style={{display:"flex", gap:"20px", justifyContent:"center"}}>
      <div  style={ {borderRadius: "15px",
                      backgroundImage: `url(https://www.kocca.kr/trend/vol30/img/s11/img_1.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight:"170px",
                      width:"400px",
                      }}>

     </div>
        <figcaption className="img-caption">
          <h2 >Neflix</h2>
          <p  style={{color:"#5610A7", fontWeight:"bold"}}>
            양동이에 저장하고 공유하는,
          </p>
        </figcaption>
      </figure>
      <figure className="img-gridItem type-right" style={{display:"flex", gap:"20px", justifyContent:"center"}}>
      <figcaption className="img-caption">
          <h2 >Wavve</h2>
          <p  style={{color:"#5610A7", fontWeight:"bold"}}>
            서비스 동동이입니다!
          </p>
        </figcaption>
      <div  style={ {borderRadius: "15px",
                      backgroundImage: `url(https://img.wavve.com/service30/profile/wavve.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight:"170px",
                      width:"400px",
                      }}>

     </div>
      </figure>
    </div>
  </section>
  
  <section className="block section-end" style={{textAlign:"center", marginBottom:"50px", marginTop:"50px"}}>
   
        <h1 className="head-large"><div style={{cursor:"pointer", fontWeight:"bold"}} onClick={()=>{
          navigate('/hot')
        }} >저희랑 함께 하실래요? | JOIN</div></h1>
  </section>
</main>
    </>
  );
};

export default App;
