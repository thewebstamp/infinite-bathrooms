import './hero.css';
import { Images } from '../../assets/images';

function Hero() {
    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroBackground} alt="polished floor" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">WELCOME TO INFINITE BATHROOMS</div>
                        <h1>✨ Luxury Bathrooms Supplied & Fitted Across Scotland – From Just £3,350</h1>
                        <p><span><span className="highlight">Free Home Surveys & Quotes Available Now!</span><br /></span>Transform your bathroom with stylish, durable fittings and expert craftsmanship</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' href="#portfolio">View Portfolio</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg1} alt="bathroom" />
                        <img src={Images.heroImg2} alt="bathroom" />
                        <img src={Images.heroImg3} alt="bathroom" />
                        <img src={Images.heroImg4} alt="bathroom" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;