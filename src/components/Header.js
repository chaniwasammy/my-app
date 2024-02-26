/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Wrapper = styled.header`
    position:absolute;
    display:flex;
    transition: all 300ms ease;
    width:100%;
    z-index:999;
    transition:all 300ms ease;
    justify-content:space-between;
    align-items:center;
    transform:translate3d(0, 0, 0);
    @media(min-width:992px){
        padding-top:30px;
    }
    img{
        margin:0px;
        width:200px;
        z-index:3;
        transition:all 0.7s ease;
        margin-left:5%;
        @media(min-width:992px){
            margin-left:5%;
        }
    }
    .menu{
        @media(min-width:992px){
            margin-right:5%;
        }
    }
    .hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:30px;
      transition:all 0.7s ease;
      z-index:3;
      @media(min-width:992px){
          display:none;
      }
      span{
        width:30px;
        height:1px;
        background:#fff;
        position:absolute;
        transition:all 0.7s ease;
        &:before{
          position: absolute;
          content:"";
          background: #fff;
          top:-5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
        &:after{
          position: absolute;
          content:"";
          background: #fff;
          top:5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
      }
    }
    .open{
        outline-color:#000;
        span{
            background:transparent;
            &:after{
                top:0;
                transform:rotate(-585deg);
                background:#000;
            }
            &:before{
                top:0;
                transform:rotate(-495deg);
                background:#000;
            }
        }
    }
    ul{
        position:absolute;
        width:100%;
        height:100vh;
        background:transparent;
        top:0;
        right:0;
        display:flex;
        transition:all 0.7s ease;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        z-index:1;
        max-height:0;
        overflow:hidden;
        list-style:none;
        color:white;
        @media(min-width:768px){
            height:720px;
            
        }
       @media(min-width:992px){
           max-height:none;
           background:transparent;
           flex-direction:row;
           height:unset;
            position:relative;
            margin-right:5%;
       }
       
        li{
            &:hover{
                a{
                    color:orange;
                }
            }
            @media(min-width:992px){
                margin:0 10px;
                &:hover{
                   a{
                    color:orange;
                   }
                }
            }
            a{
                font-family:bold;
                display:block;
                padding:20px;
                cursor:pointer;
                transition:all 0.7s ease;
                
                @media(min-width:992px){
                    color:#ffffff;
                }
            }
            &:last-child{
              @media(min-width:992px){
                 max-height:40px;
                margin-left:30px;
              }
               

                a{
                    @media(min-width:992px){
                        padding:10px 30px;
                        background:#fff;
                        border:1px solid #fff;
                        color:orange;
                   &:hover{
                       background:transparent;
                       color:orange;
                   }
                    }
                }
            }
            &:last-child{

            }
        }
    }
    .change{
        max-height:550px;

    }
`;

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () => {
    setClick(false);
  };

  return (
    <Wrapper >
      <img src="./images/Frame 12.png" alt="" />
      <div className="menu">
        <div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
          <span></span>
        </div>
        <ul className={click ? "change" : ""}>
          <li>
            <Link
              activeClass="active"
              to="Standard Containers"
              spy={true}
              smooth={true}
              duration={500}
            >
              Standard Containers
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Costume Containers"
              spy={true}
              smooth={true}
              duration={500}
            >
              Costume Containers
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="+263 242 447 748/9"
              spy={true}
              smooth={true}
              duration={500}
            >
             +263 242 447 748/9
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;