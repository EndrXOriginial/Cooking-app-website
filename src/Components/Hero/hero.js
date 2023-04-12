import './hero.css';

export const Hero = (props) => {
    return (
        <header>
            <div className='hero-media'>
                <img src={props.src} alt='image for the hero of the page'/>
            </div>
            <div className='hero-content'>
                <h1>{props.title}</h1>
                {props.h2 ? <h2>{props.h2}</h2> : ''}
            </div>
            <div className='arrow-hero'>
                <img src='../assets/images/arrow.svg' alt='arrow pointing down'/>
            </div>
        </header>
    )
}