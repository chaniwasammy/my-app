import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
.anee{
display: flex;
}
.ane{
  background-color: #9bbc3a;
  width: 5%;
  height:679px;
  p{
    transform:rotate(90deg);
    color: white;
    
  }
 
}



.both{
  position: relative;
  @keyframes slide{
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
}
.one{
  animation: slide-in-from-bottom 1s linear;
}
.two{
  animation: slide-in-from-top 1s linear;
}



  .one{
    color:white;
    position:absolute;
 top:510px;
 left:120px;
 font-size:100px;
  }
.two{
  position:absolute;
 top:605px;
 left:120px;
 font-size:90px;
 font-weight:300;
}

}
.who{
  display:flex;
  
  p{
    margin-top:130px;
    margin-left:125px;
    line-height:25px;
  }
  h6{
    margin-top:130px;
    margin-left:190px;
    font-size:15px;
  }
}
@media(max-width:1024px){
     .images{
      .bong{
        width:80%;
      }
      img{
        width:20%;
      }
     }
     .anee{
      .ane{
        height:512px;
      }
      .one{
        font-size:40px;
        color:white;
        top:440px;
      }
      .two{
        font-size:40px;
        color:black;
        top:480px;
      }
      .who{
        p{
          margin-top:70px;
          font-size:13px;
        }
        h6{
          margin-left:60px;
          margin-top:68px;
        }
      }
     }
}


@media(max-width:768px){
     .images{
      .bong{
        width:80%;
        height:510px;
      }
      img{
        width:20%;
       height:510px;
      }
     }
     .anee{
     
      .one{
        font-size:40px;
        color:white;
        top:440px;
      }
      .two{
        font-size:40px;
        color:black;
        top:480px;
      }
      .who{
        p{
          margin-top:70px;
          font-size:13px;
        }
        h6{
          margin-left:10px;
          margin-top:68px;
        }
      }
     }
}

@media(max-width:375px){
  .anee{
  .one,
  .two{
    margin-left:0 ;
    left: 0;
  }
}
}



`
function StandardCustomes() {
    return(
        <Wrapper>
          <div className="anee">
      <div className="ane">
        <p className="sales">sales@sabs.co.zw || +263 242 447 748/9</p>
        </div>
        <div className="images">
          <div className="both">
        <img className="bong" src="./images/Frame 1.png" alt=""/>
        <img src="./images/Frame 72.png" alt=""/>
        <h1 className="one">CABS </h1>
        <h1 className="two">CONTAINER ATM</h1>
        
        </div>
        < div className="who">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
        tempor incididunt ut labore et dolore magna aliqua. </p>
        <h6>View Project Details</h6>
      </div>
        </div>
      </div>
       
       
       
       </Wrapper>
    )
}
export default StandardCustomes