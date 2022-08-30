import React from 'react'
import image from '../assets/cancun-banner.jpg'

const AboutCard = () => {
  return (
    <>
       <div className='aboutCard mtop flex_space'>
        <div className='aboutBottom'>
          <h2>El hotel</h2>
          <p>En Cancún, Riviera Maya no conocemos barreras, te ofrecemos unas vacaciones que tienes que vivir para saber que son reales. Disfruta de acceso ilimitado a las amenidades del plan Todo Incluido como increíbles experiencias culinarias en 5 restaurantes de primera clase, infinidad de cócteles y bebidas en tu habitación. Impecable entretenimiento y todo lo increíble que jamás imaginaste. Todo el día. Toda la Noche. Todo incluido.</p>
        </div>
        <div className='row row1'>
            <h2>Ven <span> a </span>visitarnos</h2>
            <h4>¿Dónde está nuestro hotel?</h4>
            <p>Se encuentra ubicado en la Riviera Maya. La misma está situada a lo largo del Mar Caribe, en el estado de Quintana Roo, México. Es cuna de civilizaciones y dueña de un paisaje natural extraordinario. Un destino fascinante donde poder explorar las huellas de lo que fue una de las culturas más antiguas. Caminar por Chichén Itzá, Coba, Tulum… O relajarse en Playa Akumal, Xpu-há, Cozumel…</p>
            <p>México sorprende por la sencillez y naturalidad que se respira en todos sus rincones. Un paisaje que contrasta con el carácter apasionado y vitalista de su gente, con la majestuosidad de sus ciudades, con sus parajes naturales y con sus antiguos monumentos. Desde la histórica Tulum, toda la región parece tocada por los dioses.</p>
            <div className='row-image'>
            <img src={image} alt='' />
            </div>
            <h4>¿Qué actividades puedes hacer?</h4>
            <p className='text-about'>Chichen Itza es la ciudad maya por excelencia. Pasear entre las ruinas de sus templos o simplemente admirarlos desde la distancia te conectará con esa fuerza milenaria que conforma la identidad mexicana: sensibilidad, ingenio y libertad. Entre lo más destacado de Riviera Maya y que no puedes dejar de visitar se encuentra: Cobá, en el corazón de la selva de Yucatán; la maravilla de Playa Paraíso; los mágicos cenotes, entre los que destacan el Gran Cenote, Zacil-Ha y Aktun-Ha.
            Si buscas naturaleza en estado puro visita la Reserva de Sian Ka’an. </p>
            <p>Nuestro hotel, ofrece una oportunidad única para vivir unas vacaciones llenas de cultura y paisajes espectaculares. El servicio es todo incluido y con todas las comodidades que buscas en tu viaje: spa, restaurantes a la carta, entretenimiento y ofertas especiales para no dejar ningún imprescindible fuera de tu lista. Tanto si viajes en familia, amigos o en pareja, encontrarás la opción de alojamiento que mejor se adapte a ti: a un paso de la playa o envuelto en lujo y selva maya... busques lo que busques lo encontrarás.</p>
            <h2>¿Por qué somos la mejor opción en Cancún?</h2>
        </div>
       </div>
    </>
  )
}

export default AboutCard
