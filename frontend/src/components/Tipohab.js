import React from 'react';


function Tipohab({items}) {
  return (
    <div className='section-center'>
        {items.map((habItem) => {
            const{id,title,img,descr,price}=habItem;
            return (
                <article key='id' className='hab-item'>
                <img src={img} alt={title} className='photo' />
                <div className='item-info'>
                    <header>
                        <h4>{title}</h4>
                        <h4 className='price'> USD{price}</h4>
                    </header>
                    <p className='item-text'>{descr}</p>
                </div>
            </article>
            );
        })}
    </div>
  )
}

export default Tipohab
