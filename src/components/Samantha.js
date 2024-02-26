import React from "react";
import styled from 'styled-components'
import {FaLinkedin} from 'react-icons/fa';
const Wrapper = styled.div`
background-color:#9BBC3A;
.follow{
    display:flex;
    margin-left:70px;
    color:white;
}
h4{
    font-size:13px;
}
h5{
    margin-left:290px;
}
h6{
    margin-left:80px;
}
@media(max-width: 1024px){
    .follow{
        h4{
            font-size:15px;
           
        }
        h5{
            margin-left:90px;
            font-size:17px;
        }
        h6{
            font-size:16px;
        }
    }


}

@media(max-width: 768px){
    .follow{
        margin-left:20px;
        h4{
            font-size:15px;
           
           
        }
        h5{
            margin-left:10px;
            font-size:17px;
        }
        h6{
            font-size:16px;
           
        }
    }


}


@media(max-width: 375px){
    .follow{
        margin-left:20px;
        display: unset;
        h4{
            font-size:15px;
           
           
        }
        h5{
            margin-left:10px;
            font-size:17px;
        }
        h6{
            font-size:16px;
           
        }
    }


}



`

function Samantha() {
    return(
        <>
       < Wrapper>
       <div className="follow">
     
       <h4>6 Borgward Road, Msasa, Harare,<br/> Zimbabwe - view on map</h4>
       <h5>support@Containawise.co.zw</h5>
       <h6>follow us on</h6>
       <i><FaLinkedin size={80}/></i>
       </div>
       </Wrapper>
       
       
       
       </>
    )
}
export default Samantha