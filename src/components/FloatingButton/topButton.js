import React, {useState} from 'react';

export default function TopButton(props){
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
      
    return (
        <button title='Back to top' className='floating scroll' 
                onClick={() => {setIntervalId(setInterval(scrollStep(), props.delayInMs));}}>
            <span className='arrow-up'></span>
        </button>
    )
}
