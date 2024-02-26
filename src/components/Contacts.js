import React from "react";
import styled from 'styled-components'


const Wrapper = styled.div`
height:450px;
.tabs{
    margin-top:200px;
    margin-left:90px;
    p{
        font-size:15px;
    }
}
.anesu{
    width:325px;
    height:50px;
    border:none;
    background-color:#F2F2F2;
    margin-top:20px;
   padding-left:30px;
 
}

.dylan{
    width:325px;
    height:50px;
    border:none;
    background-color:#F2F2F2;
    margin-top:20px;
    padding-left:30px;
}
.walter{
    width:325px;
    height:50px;
    border:none;
    background-color:#F2F2F2;
    margin-top:20px;
    padding-left:30px;
}
.beyond{
    width:700px;
    height:50px;
    border:none;
    background-color:#F2F2F2;
    margin-top:20px;
    margin-left:20px;
    padding-left:30px;
}
.delroy{
    width:700px;
    height:123px;
    border:none;
    background-color:#F2F2F2;
    margin-top:20px;
    margin-left:20px;
    position:absolute;
    padding-left:30px;
}
button{
    width:1110px;
    height:40px;
    border:none;
    background-color:#9BBC3A;
    margin-top:20px;
    position:absolute;
    
}
@media(max-width: 1024px){
     .tabs{
        margin-top:100px;
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
      button{
        width:86%;
      }

      .first{
        .beyond{
            width:50%;
        }
      }
      .second{
        .delroy{
            width:46%;
        }
      }
      p{
        font-size:11px;
        font-weight:500;
        line-height:25px;
      }
     }
    }

@media(max-width: 768px){
     .tabs{
        margin-top:100px;
      button{
        width:80%;
      }

      .first{
        .beyond{
            width:30%;
        }
      }
      .second{
        .delroy{
            width:27%;
        }
      }
      p{
        font-size:7px;
        font-weight:500;
        line-height:20px;
      }
     }
    }

@media(max-width: 375px){
     .tabs{
        margin-top:100px;
      button{
        width:70%;
      }

      .first{
        .anesu{
            width:35%;
        }
      }
      .second{
        .dylan{
            width:27%;
        }
      }
      p{
        font-size:7px;
        font-weight:500;
        line-height:20px;
      }

      .third{
        .walter{
            width:20%;
        }
      }
     }
    }
`
function Contacts() {
    return(
        <Wrapper>
       < div className="tabs">
       
       <h1>Have a project in mind? </h1>
       <p>For inquiries or to discuss your container needs, please reach out to our dedicated team at Containawise. We specialize in innovative solutions for offices,<br/>
         accommodations, ablution facilities, storage, and tuckshops. Let's collaborate to bring your vision to life. Contact us today! </p>
         <form className="first">
                <input className="anesu" type="" name="NAME" placeholder="NAME" />
                <input className="beyond" type="SUBJECT" name="" placeholder="SUBJECT" />
            </form>

            <form className="second">
            <input className="dylan" type="example@mail.com " placeholder="example@mail.com " />
            <input className="delroy" type="MESSAGE" placeholder="MESSAGE " />
            </form>
            <form className="third">
            <input className="walter" type="CONTACT NUMBER " placeholder="CONTACT NUMBER " />
            </form>
            <button>Send Message</button>

       </div>
       
       
       
       </Wrapper>
    )
}
export default Contacts