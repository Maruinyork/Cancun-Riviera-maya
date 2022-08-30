import React, {useState} from "react";
import data2 from "../info/data2";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarRateIcon from '@mui/icons-material/StarRate';
import '../styles/Review.css'

const Review =() => {
    const [index,setIndex] = useState(0);
    const {name,country,title,image,text} = data2[index]
    
    const checkNumber = (number) => {
        if (number > data2.length - 1) {
          return 0;
        }
        if (number < 0) {
          return data2.length - 1;
        }
        return number;
      };

    const nextPerson = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };
      const prevPerson = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        });
      };

    return ( 
    <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
                <FormatQuoteIcon />
            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="country">{country}</p>
        <StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/>
        <p className="title">{title}</p>
        <p className="info">{text}</p>
        <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <ChevronLeftIcon />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <ChevronRightIcon />
        </button>
      </div>
    </article>
    );
};

export default Review;