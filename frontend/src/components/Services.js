import React from "react";
import styled from "styled-components";
import data5 from "../info/data5";

export default function Services() {
  return (
    <Section id="services">
      {data5.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h4>{service.title}</h4>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  h4{
    font-weight: bold;
    text-decoration: none;
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      background-image: radial-gradient(circle at 50% -20.71%, #ffffdb 0, #ffffd4 8.33%, #ffffce 16.67%, #f7fec7 25%, #e9fbc1 33.33%, #daf7bb 41.67%, #c9f2b5 50%, #b7edb1 58.33%, #a4e9af 66.67%, #91e5af 75%, #7ce2b1 83.33%, #66dfb4 91.67%, #4cdcb9 100%);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        width: 5vw;
        height:10vh;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;