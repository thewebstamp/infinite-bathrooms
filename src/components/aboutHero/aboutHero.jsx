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
                <div className='ah-headline'>🏗️ ABOUT INFINITE GROUP</div>
                <h2>Your Trusted Partner in Construction and Renovation Projects</h2>
                <p>At Infinite Group, we are a construction company based in Central Scotland, providing comprehensive building and renovation services across the UK. With years of experience in the industry, we are passionate about transforming homes and commercial spaces through exceptional craftsmanship, attention to detail, and dedication to customer satisfaction. <br />We work alongside renowned partners, such as MacAli Group Scotland, to bring large-scale projects to life. From residential homes to commercial retreats, our diverse portfolio showcases our expertise and commitment to excellence.</p>
            </div>
        </div>
    )
}

export default AboutHero;