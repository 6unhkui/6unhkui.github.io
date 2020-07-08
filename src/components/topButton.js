import React, {useState} from 'react';

const TopButton = (props) => {
    const [intervalId, setIntervalId] = useState(0);

    const scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
        }

        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollToTop = () => {
        let intervalId = setInterval(scrollStep(), props.delayInMs);
        setIntervalId(intervalId);
    }
      
    return (
        <button title='Back to top' className='scroll' 
               onClick={ () => {scrollToTop();}}>
            <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
        </button>
    )
}

export default TopButton;