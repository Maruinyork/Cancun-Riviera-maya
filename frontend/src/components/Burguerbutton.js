import React from 'react'
import styled from 'styled-components'

function Burguerbutton(props) {
  return (
    <Burguer>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  )
}
//Cuando hagamos click se va a ejecutar la funcion handleClick
// Cuando props.clicked esta open se abre el menu hamburguesa
//las props las habia nombrado en Navbar.js
//El clicked es la variable del useState

export default Burguerbutton

const Burguer = styled.div`
  .nav-icon-5 {
    width: 35px;
    height: 30px;
    margin: 10px px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .nav-icon-5 span {
    background-color: #232323;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }

  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }

  .nav-icon-5 span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    opacity: 1;
  }
`

