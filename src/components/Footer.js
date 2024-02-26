import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
background-color:#000;
.sap{
    display:flex;
    margin-left:90px;
    color:white;
}
p{
    font-size:13px;
}
h4{
    margin-left:230px;
}
h5{
    margin-left:20px;
}
h6{
    margin-left:20px;
}
h3{
    margin-left:20px;
}
@media(max-width: 1024px){
    .sap{
        h4{
            margin-left:70px;
        }
       
    }
}

@media(max-width: 768px){
    .sap{
        margin-left:15px;
        h3{
            margin-left:17px;
            margin-top:35px;
        }
        h4{
            margin-left:45px;
            margin-top:35px;
        }
        h5{
            margin-left:17px;
            margin-top:35px;
        }
        h6{
            margin-left:17px;
            margin-top:35px;
        }
       
    }
}

@media(max-width:375px){
    .sap{
        width:68%;
        display:unset;
       h6{
       
       }
    }

}



`
function Footer() {
    return(
        <>
        <Wrapper>
       < div className="sap">
    
       <p >©2023 Containawise<br/>
               Built by Uncommon.org,<br/> a non-profit website development<br/> company</p>
       <h4>About</h4>
       <h5>Standard Containers</h5>
       <h6>Custom Containers</h6>
       <h3>Contact</h3>
       
       
       
       </div>
       
       
       
       </Wrapper>
       </>
    )
}
export default Footer