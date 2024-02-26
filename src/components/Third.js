import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
background-color:black;
height:470px;
.man{
    margin-left:400px;
    color:white;
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
h1{
  animation: slide-in-from-top 1s linear;
}
h2{
  animation: slide-in-from-top 1s linear;
}
p{
  animation: slide-in-from-bottom 1s linear;
}
}
h1{
   padding-top:140px;
   font-size:76px;
}
h2{
    font-size:47px;
}
p{
    font-size:12px;
}

@media(max-width: 1024px){
    .man{
   margin-left:270px;
 
}
}
@media(max-width: 768px){
    .man{
   margin-left:170px;
 
}
}
@media(max-width: 375px){
    .man{
   margin-left:0;
 
}
}


`
function Third() {
    return(
        <Wrapper>
       < div className="us">
        <div className="man">
       <h1>STAND OUT</h1>
       <h2>AND BE COUNTED</h2>
       <p>WE HAVE CUSTOMISED CONTAINERS THAT MEET YOUR BUSINESS NEEDS.</p>
       </div>
       </div>
       
       
       
       </Wrapper>
    )
}
export default Third