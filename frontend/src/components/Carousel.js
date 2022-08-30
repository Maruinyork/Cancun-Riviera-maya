import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner from '../assets/largebanner.jpg';
import banner2 from '../assets/home-banner.png';
import banner3 from '../assets/seabeach.jpg';


const CarouselContainer = () => {
  return (
    <Carousel controls={false}>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Visita el Caribe mexicano</h3>
        <p>Riviera Maya | Hotel</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Experiencia sólo adultos</h3>
          <p className='text-center'>Redescubre tu lado más natural, feliz y espontáneo. Cancun - Riviera Maya | Hotel, te anima a vivir una experiencia vacacional a flor de piel en nuestro exclusivo resort sólo para adultos.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Descuentos exclusivos a grupos</h3>
          <p className='text-center'>Te va a encantar lo que tenemos preparado para ti y los tuyos: adultos divirtiéndose como niños, niños que no paran de reír, actividades que les entretienen mientras tú descansas. Disfruta el Caribe todo incluido.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
