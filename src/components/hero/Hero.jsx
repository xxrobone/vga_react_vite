import {RiPlaystationLine, RiXboxFill, RiMacLine, RiWindowsFill } from 'react-icons/ri'
import { SiNintendo } from 'react-icons/si'

// styles
import './Hero.scss'

 const Hero = () => {

    return (
        <div className="hero">
            <h1>GAMES SEARCH</h1>
            <div className="platform_wrapper">
                <SiNintendo />         
                <RiWindowsFill />
                <RiXboxFill />
                <RiPlaystationLine />               
            </div>
            <img className="hero_img" src="/gaming.svg" alt=""/>
        </div>
    )
}

export default Hero;