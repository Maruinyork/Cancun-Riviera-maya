import React, {useState} from 'react'
import Category from '../components/Category';
import Tipohab from '../components/Tipohab';
import VeranoBanner from '../assets/teamverano.jpg';
import '../styles/Hab.css';
import items from '../info/data1';
import Booking from '../components/Booking';
import Slide2 from '../components/Slide2';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]; //cuando clickee esta opcion se iran mostrando las categorias

const Habitaciones = () => {
  const [habItems, setHabItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if(category === 'all') {
        setHabItems(items);
        return;
    }
    const newItems = items.filter((item)=> item.category === category)
    setHabItems(newItems);
  }

  return (
    <main>
      <section className='habSection'>
        <div className='title_hab'>
            <h2>Nuestras Habitaciones</h2>
            <div className='underline'></div>
        </div>
        <Category categories={categories} filterItems={filterItems}/>
        <Tipohab items={habItems} />
        <p>IMPORTANTE: Las Suites Presidenciales y Elegance no están disponibles momentáneamente. </p>
        <button className='reserve-btn'><a href='#reserva'>Reserva Aqui</a></button>
        <Slide2/>
        <img className='habBanner2' src={VeranoBanner} alt='' />
        <Booking/> 
        <button className='reserve-btn'><a href='/contact'>Continuar</a></button>
      </section>

    </main>
  )
}

export default Habitaciones;
