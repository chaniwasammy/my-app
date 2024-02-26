import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
height:800px;
.about-inner{
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
.images{
  animation: slide-in-from-top 1s linear;
}

}
.about-top{
  display: flex;
 
}
.top{
  display:flex;
  align-items:center;
  padding-top:150px;
  margin-left:70px;
}
.bottom{
  padding-left:70px;
  margin-top:30px;
}
.sama{
padding-top:180px;
font-size:20px;
line-height:40px;
margin-left:70px;
background-color:#9BBC3A;
text-align:left;
width:370px;
height:20px;
margin-top:150px;
position:relative;

p{
  position:absolute;
  top:40px;
  margin-left:30px;
  font-size:18px;
}
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

.sama:hover {
  animation: bounce 1s infinite linear;
}
img{
  width:160px;
}
.tari{
 display:flex;
 padding-top:70px;
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

.paragraph1{
  animation: slide-in-from-top 1s linear;
}
.paragraph2{
  animation: slide-in-from-top 1s linear;
}



.paragraph1{
    margin-left:70px;
    font-size:18px;
    line-height:50px;
 
  }
  .paragraph2{
    margin-left:70px;
    font-size:18px;
    line-height:40px;
   
  }
  h5{
    margin-left:70px;
    font-size:28px;
  }
  h2{
    color:white;
 -webkit-text-stroke: 1px #9BBC3A;
 margin-left:70px;
  }
  .you{
  font-size:85px;
}
.me{
  font-size:40px;
}
.zero{
        width:50%;
        p{
          font-size:15px; 
          margin-right:60px;
          font-weight:400;
          
        }
       }


.one{
        width:100%;
        p{
          font-size:15px;
          line-height:50px;
          margin-right:60px;
          font-weight:400;
        }
       }
}

@media(max-width: 1024px){
    .about-inner{
        gap: 25%;
        margin-bottom:50px;
        line-height:24px;
        margin-right:40px;

        .sama{
      margin-left:10px;
          p{
            font-size:10px;
            position:absolute;
            top:30px;
          }
        
        }
  

.sama:hover{
  animation: bounce 1s infinite linear;
}
    }
    .tari{
        width: 100%;
       margin-top:20px;
       
       .me{
        font-size:65px;
        h2{
        -webkit-text-stroke: 1px #9BBC3A;
      }
       }

       .you{
        font-size:85px;

        h2{
          -webkit-text-stroke: 1px #9BBC3A;
        }
       }
       .zero{
        width:50%;
       }
       .one{
        width:50%;
        p{
          font-size:15px;
          line-height:19px;
          margin-right:60px;
          font-weight:400;
        }
       }
     
    }
    h5{
        margin-top:25px;
    }
}


@media(max-width: 768px){
    .about-inner{
        

       .about-top{
       .top{
       img{
        width:25%;
       }
       }

       .bottom{
       img{
        width:25%;
       }
       }
       }


        .sama{
      width:65%;
      height:1%;
          p{
            position:absolute;
          
          }
        }
        
    }
    .tari{
   
       
       .me{
        font-size:65px;
        h2{
        -webkit-text-stroke: 1px #9BBC3A;
      }
       }

       .you{
        font-size:75px;

        h2{
          -webkit-text-stroke: 1px #9BBC3A;
        }
       }
       .zero{
        width:50%;
        h5{
          font-size:21px;
        }
        .you{
          font-size:60px;
        }
       }
       .one{
        width:50%;
        margin-top:10px;
        p{
          font-size:10px;
          line-height:17px;
          margin-right:60px;
          font-weight:400;
        }
       }
     
    }
    h5{
        margin-top:25px;
    }
}

`


function About() {
  return (

    <Wrapper>
      <div className="about-inner">
        <div className='about-top'>
          <div className='images'>
            <div className="top">
              <img src="./images/Fram.png" alt="" />
              <img src="./images/Frame 68.png" alt="" />
              <img src="./images/Frame 69.png" alt="" />
              <img src="./images/Frame 67.png" alt="" />
            </div>

            <div className="bottom"><img src="./images/Frame 63.png" alt="" />
              <img src="./images/Frame .png" alt="" />
              <img src="./images/Fra.png" alt="" />
              <img src="./images/Fr.png" alt="" />
            </div>
          </div>

          <div className="sama"> <p>We have years of experience in
            container modification and conversions
            to suite your needs and project.</p>
          </div>
        </div>
        <div className="tari">
          <div className='zero'>
            <h2 className='me'>WHO</h2>
            <h5>A few words about us</h5>
            <h2 className='you'>WE ARE?</h2>
          </div>
          <div className='one'>
            <p className='paragraph1'>At Containawise we hire and sell Standard Unit 20 Foot and 40 Foot Containers, ranging from
              offices, accommodation, ablutions, storage and tuck shops.

              We have years of experience in container modification and conversions to suite your needs and
              project.
            </p>
            <p className='paragraph2'>
              In case you didn't know, shipping containers are renowned for their qualities of strength,
              security, longevity and portability and we highly recommend them for our business or home.
              They are air and water tight, making them ideal structures from which to construct buildings for
              many uses at a cost that beats that of traditional buildings. </p>
          </div>
        </div>
      </div>
    </Wrapper>

  )
}
export default About