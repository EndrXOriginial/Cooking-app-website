import './home.css';
import { Hero } from '../../Components/Hero/hero';
import { Description } from '../../Components/Description/description';

export const HomePage = () => {
    return (
        <main>
            <Hero bool={true} h2="Your planning and health at an arm's length" >The Cooking App</Hero>
            <Description />
        </main>
    )
}