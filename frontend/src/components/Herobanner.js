import React from 'react';
import styled from 'styled-components';
import herobanner from '../assets/tan.jpg';
import heroDesign from '../assets/cancun.png';

const Herobanner = () => {
  return (
    <Section id='home'>
      <div className='background'>
        <img src={herobanner} alt="Background" />
      </div>
      <div className='content'>
        <div className='sale'>
            <img src={heroDesign} alt="hero design" />
            <h2>BIG  SUMMER SALE <span>40% OFF</span></h2>
            <h3>Riviera Maya | Hotel</h3>
            <button><a href='./habitaciones'>Reserve ahora</a></button>
        </div>
      </div>
    </Section>
  );
}

export default Herobanner

const Section = styled.section`
height: 75vh;
width: 100%;
position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 99%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 15vh;
        width:68%;
      }
      h3{
        color: white;
        font-weight: 500;
        font-family: 'Yuji Boku', serif;
        font-style: italic;
        font-size: 2rem;
        margin-bottom:-18vh;
        text-shadow: rgb(30, 30, 30) 0.05em 0.1em 0.1em;
      }
      h2 {
        color: white;
        text-shadow: rgb(30, 30, 30) 0.05em 0.1em 0.1em;
        font-size: 3rem;
        span {
          display: block;
          font-size: 4.3vw;
          margin-left:-15vh;
        }
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #f66738;
        border: none;
        border-radius: 5px;
        color: white;
        margin-top:20vh;
        margin-bottom:-40vh;
        font-weight: 700;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        a{
            text-decoration: none;
            color: white;
            text-shadow: rgb(30, 30, 30) 0.05em 0.1em 0.1em;
        }
        &:hover {
          background-color: transparent;
          border: 1px solid black;
          transform: scale(1.1);
        }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h3 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1019px) {
    height: 40vh;
    margin-top:0px;
    margin-bottom:-145px;
    .content {
      flex-direction: column;
      margin-left:-4vh;
      .sale {
        h3{
          font-size: 1.2rem;
        }
        h2 {
          font-size: 2rem;
          margin-top:60px;
          span {
            font-size: 6vw;
            margin-left:-0vh;
          }
        }
        button {
          padding: 1rem 2rem;
          font-size: 1rem;
        }
        img {
          display: none;
        }

      .info {
        top: 25%;
        h3 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;