import './hero.css';
import { Button } from '../parts/parts';

const Download = (props) => {
    return (
        <div className='hero-download'>
            <p>Download it for:</p>
            <div className='hero-download-btn'>
                <Button>Android</Button>
                <Button>Ios</Button>
            </div>
        </div>
    )
}

export const Hero = (props) => {


    return (
        <header className={props.bool ? 'hero' : 'small-hero'}>
            <div className='hero-media'>
                <img src={props.src} alt='hero of the page' />
            </div>
            <div className='hero-content'>
                <h1>{props.children}</h1>
                {props.h2 ? <h2>{props.h2}</h2> : ''}
                {props.bool ? <Download /> : ''}
            </div>
            <div className='arrow-hero'>
                <img src='../assets/images/arrow.svg' alt='arrow pointing down' />
            </div>
        </header>
    )
}