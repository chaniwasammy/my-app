import React from "react";
import styled from 'styled-components';


const Wrapper = styled.div`
background:url(../images/hero.png);
background-position:center center;
height:900px;
color:white;
.you{
    @keyframes slide{
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-in-from-top {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}

h1 {
  animation: slide-in-from-top 1s linear;
}
h2 {
  animation: slide-in-from-top 1s linear;
}
h6 {
  animation: slide-in-from-top 1s linear;
}
p {
  animation: slide-in-from-top 1s linear;
}

h1{
    margin:0;
    color:white;
    margin-left:70px;
    padding-top:730px;
}
h2{
    margin-left:70px;
}
p{
    margin-left:70px;
}
h6{
    margin-left:70px;
    color:black;
    margin-top:60px;
}
}




`

function Hero() {
    return(
        <>
       < Wrapper>
       <div className="you">
       <h1>STAND OUT</h1>
       <h2>AND BE COUNTED</h2>
       <p>WE HAVE CUSTOMISED CONTAINERS THAT MEET YOUR BUSINESS NEEDS</p>
       <h6>BUY OR HIRE TO YOUR DESIGN STANDARD</h6>
       </div>
       </Wrapper>
       
       
       
       </>
    )
}
export default Hero