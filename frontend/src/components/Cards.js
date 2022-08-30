import React from 'react'
import CardItem from './CardItem';
import '../styles/Card.css';
import image from '../assets/cottage.jpg'
import image2 from '../assets/playablanca.jpg'
import image3 from '../assets/chichen.jpg'
import image4 from '../assets/love.jpg'

const Cards = () => {
  return (
    <div className='cards'>
        <h2>Viva unas vacaciones increibles</h2>
        <p>
	El Hotel Cancun All Inclusive ofrece una oportunidad única para vivir unas vacaciones llenas de&nbsp; cultura y paisajes espectaculares. Usted podra disfrutar de un servicio todo incluido y con todas las comodidades que busca en su viaje: spa, restaurantes a la carta, entretenimiento y ofertas especiales para no dejar ningún imprescindible fuera de su lista. Tanto si viaja en familia, amigos o en pareja, encontrará la opción de alojamiento que mejor se adapte a usted, pero a un paso de la playa.</p>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
               <CardItem 
               src={image}
               text='Nuestro hotel esta situado en la Riviera Maya, a lo largo del Mar Caribe. Siendo cuna de civilizaciones y dueña de paisajes naturales extraordinarios.'
               label='Aventura' 
               path='#'
               /> 
               <CardItem 
               src={image2}
               text='Imagine largas caminatas sobre esta playa de arena blanca y suave. Nuestro hotel es el elegido por la familia que disfruta del mar calido de Cancun.'
               label='Relax' 
               path='#'
               /> 
               </ul>
               <ul className='cards__items'>
               <CardItem 
               src={image3}
               text='Le ofrecemos tours diarios para visitar una de las culturas mas antiguas'
               label='Turismo' 
               path='#'
               /> 
               <CardItem 
               src={image4}
               text='Nuestro hotel cuenta con un sector exclusivo para parejas. Consultenos '
               label='Solo parejas' 
               path='#'
               /> 
               </ul>
               
            </div>
        </div>
    </div>
  )
}

export default Cards
