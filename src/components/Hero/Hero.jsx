import React from 'react'
import './Hero.css';
import  {HiLocationMarker} from "react-icons/hi"
import CountUp from 'react-countup';
const Hero =  () =>{
    return(
        <section className = "hero-wrapper">
            <div className = "paddings innerWidth flexCenter hero-container">
                {/* left-side */}
                <div className= "hero-left">
                    <div className="flexColStart hero-title">
                        <div className="orange-circle"/>
                        <h1>
                             Discover your <br/>place <br/>to live
                        </h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you vary easilty. </span>
                        <span className='secondaryText'>Forget all difficulties in finding a residences for you </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color= "var(--blue)" size = {25}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={2500} end={4500} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1800} end={3000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={25}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnigs</span>
                    </div>

                </div>
                </div>
                
            {/* right section */}
            <div className= "flexCenter hero-right">
                <div className= "image-container">
                    <img src = "./hero-image.png" alt="Apartment"></img>
                </div>
            </div>
            </div>
        </section>

    )
}




export default Hero;