import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p17} alt='bathroom fitting' />
                    <img className='ah-img-2' src={Images.p3} alt='bathroom design' />
                    <img className='ah-img-height' src={Images.p17} alt='bathroom fitting' />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>🛁 ABOUT INFINITE BATHROOMS</div>
                <h2>Custom Fitted Bathrooms, Expertly Installed Across Scotland</h2>
                <p>At Infinite Bathrooms, we specialize in fully supplied and fitted bathroom transformations starting from just £3,350. Based in Central Scotland, we proudly serve homeowners across the country—from Edinburgh and Glasgow to Inverness and beyond. <br />With years of experience and a commitment to quality, our skilled tradesmen handle every aspect of your bathroom project—from free home surveys to expert installations. We don’t just install bathrooms—we craft stylish, functional spaces built to last. Whether you’re upgrading a family bathroom, adding a shower room, or revamping your ensuite, we’re here to make the process seamless, affordable, and stress-free.</p>
            </div>
        </div>
    )
}

export default AboutHero;