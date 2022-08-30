import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../assets/cancun.png";
import Burguerbutton from './Burguerbutton';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const[clicked, setClicked]= useState(false)
    const handleClick = ()=> {
        //cuando esta true lo pasa a false
        setClicked(!clicked)
    }

    return ( 
        <>
        <NavContainer> 
        <div className='logo'>
        <Link to='/' style={{textDecoration:'none'}}>   
           <img className="logo" src={logo} alt="" />
        </Link>
           <h2>Riviera Maya | Hotel</h2>
        </div>
       
           <div className={`links ${clicked ? 'active' :''}`}>
            <a onClick={handleClick} href='/'>HOME</a>
            <a onClick={handleClick} href='/about'>EL HOTEL</a>
            <a onClick={handleClick} href='/habitaciones'>HABITACIONES</a>
            <a onClick={handleClick} href='/contact'>CONTACTO</a>
            <a onClick={handleClick} href='/novedades'>BLOG</a>
           </div>
        <div className='burguer'>
        <Burguerbutton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
        </>
     );
}

export default Navbar;

//Con el onClick, handleClick al clickear un link se cierra todo

const NavContainer = styled.nav `
h2{
    color: #232323;
    font-weight: 500;
    font-family: 'Yuji Boku', serif;
    font-style: italic;
    font-size: 1rem;
    margin-top: -6px;
    margin-left: -8vw;
    text-shadow: rgb(40, 40, 40, .4) 0.1em 0.1em 0.1em;
    @media(min-width:768px){
        margin-left:1px;
    }
    @media(min-width:1024px){
        margin-left:-100px;
    }
    @media(min-width:1200px){
        margin-left:-240px;
    }
}

padding: .1rem;
background-color: white;
display: flex;
align-items: center;
z-index: 1000;
justify-content: space-evenly;
a{
    color: #131313;
    text-decoration: none;
    margin-right: 1rem;
    text-shadow: rgb(70, 70, 70, .4) 0.1em 0.1em 0.1em;
    font-family: 'Darker Grotesque', sans-serif;
    font-style: italic;
    font-size: 1rem;
}

.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color:black;
        font-size: 1rem;
        display: block;
        margin:15px;
    }
    a:hover{
        border: 1px solid rgb(200, 200, 200);
        padding: 7px 0px 7px;
    }
    @media(min-width:768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1.2rem;
            color: #232323;
            display: inline;
        }

    }
}

.links.active{
    width:100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
    color: black;
    font-size: 1rem;
    margin-top: 1rem;
    }
}
.burguer{
    @media(min-width:768px){
        display: none;
    }
    margin-right:-50px;
}
`

const BgDiv = styled.div `
background-color: rgb(215, 163, 66);;
position: absolute;
top: -700px;
left: -1000px;
z-index: -1;
transition: all .6s ease;
&.active{
    border-radius: 0 0 80% 0;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
`
