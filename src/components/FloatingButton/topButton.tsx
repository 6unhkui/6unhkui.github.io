import React, {useState} from 'react';


interface Props {
    scrollStepInPx? : string,
    delayInMs : number;
}

const TopButton: React.FC<Props> = ({ scrollStepInPx, delayInMs }) => {
    const [intervalId, setIntervalId] = useState(0);
    const scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
        }

        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    };
      
    return (
        <button title='Back to top' className='floating scroll'
                onClick={() => {setIntervalId(setInterval(scrollStep(), delayInMs))}}>
            <span className='arrow-up'></span>
        </button>
    )
}

export default TopButton;