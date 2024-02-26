import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
.Services{
    display:flex;
    height:490px;
    padding-top:80px;
    gap:10%;
    margin-right:80px;
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
.beans{
  animation: slide-in-from-top 1s linear;
}
.bean{
  animation: slide-in-from-top 1s linear;
}
    .bean{
        h1{
            color:white;
 -webkit-text-stroke: 1px #9BBC3A;
 
        }
      
        .shawn{
    font-size:60px;
 }
 .shane{
    font-size:40px;
 }
 h6{
    font-size:20px;
 }
        p{
            line-height:32px;
        }
    }
    .beans{
        margin-left:80px;
        line-height:30px;
        width:100%;
        gap:15%;
         h5{
        color:black;
        font-size:20px;
    }
    h6{
        color:#9BBC3A
    }
    }
   
}

@media(max-width: 1024px){
    .Services{
        gap: 15%;
        margin-bottom:50px;
        line-height:24px;
        margin-right:40px;
    }
    .beans{
        width: 100%;
       margin-top:20px;
       h6{
        color:#9BBC3A;
        font-size:15px;
       }
       
     
    }
    .bean{
        margin-top:25px;
    }
}



@media(max-width: 768px){
    .Services{
        gap: 15%;
        margin-bottom:50px;
        line-height:1px;
        margin-right:40px;

 

    }
    .beans{
        width: 100%;
       margin-top:10px;

       h6{
        color:#9BBC3A;
        font-size:15px;
       }
       
     
    }
    .bean{
        margin-top:25px;
        p{
            line-height:10px;
        }

    }
}


@media(max-width: 375px){
    .Services{
     
        line-height:14px;
        flex-direction: column;
        .beans{
            margin-left:0px;
        }
       
    }



    .bean{
   
        margin-top:25px;
        p{
            line-height:10px;
        }

    }
}

`
function Services() {
    return (
        <Wrapper>

            <div className="Services">
                <div className="beans">
                    <h5>Our Products</h5>
                    <h6>Standard Containers</h6>
                    <p className="p-top">Office Containers<br/></p>
                    <p> AccommodationContainers</p>
                    <p>AblutionContainers</p>
                    <p>StorageContainers</p>
                    <p>TuckshopContainers</p>
                    <h6>CustomContainters</h6>
                </div>
                <div className="bean">
                    <h1 className="shane">WHAT</h1>
                    <h6>A pick of our work</h6>
                    <h1 className="shawn">WE DO?</h1>
                    <p>We take pride in our ability to transform ordinary containers into extraordinary spaces. Whether
                        you are looking to expand your business, create a unique living space, or launch an eye-catching
                        pop-up store, we have the expertise to bring your ideas to life. Discover the endless possibilities of
                        custom container construction and let us build your vision, one container at a time.</p>
                </div>
            </div>


        </Wrapper>
    )
}
export default Services