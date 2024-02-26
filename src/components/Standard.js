import React from "react";
import styled from 'styled-components'


const Wrapper = styled.div`
.pig{
    @keyframes slide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.img{
    animation: slide-left 1s linear;
}


}
.img{
  animation: slide-in-from-top 1s linear;
}

img{
    width:100%;
}

@media(max-width: 375px){
       .pig{

       img{
        width: 100%;
       }
       
    }
}



`

function Standard() {
    return(
        <Wrapper>
            <div className="pig">
              
      <img  src="./images/Frame 5.png"  alt=""/>
       
      </div>
       
       </Wrapper>
    )
}
export default Standard