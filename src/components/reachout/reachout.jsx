import './reachout.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';

function Reachout() {
    const navigate = useNavigate();
    const reachoutT = useRef();
    const reachoutB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= reachoutT.current.getBoundingClientRect().top) {
                reachoutT.current.classList.add("slide-up");
            } else {
                reachoutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= reachoutB.current.getBoundingClientRect().top) {
                reachoutB.current.classList.add("slide-up");
            } else {
                reachoutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                reachoutT.current.classList.remove("slide-up");
                reachoutB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="reachout-comp">
            <div className="r-top" ref={reachoutT}>
                <div className="r-headline">📞 REACH OUT TO US</div>
                <h2>Let’s Bring Your Dream Bathroom to Life</h2>
                <p>Whether you’re ready to book your free home survey or just have a few questions — we’re here to help. Our friendly team is always happy to chat and guide you through the process. Get in touch today for a free home survey and quote!</p>
                <a href="#" onClick={() => { navigate("/contact") }}>See Contact Info</a>
            </div>

            <div className="r-base" ref={reachoutB}>
                <div className="r-image-design"></div>
                <img src={Images.reachout} alt="" />
                <img className='r-base-height' src={Images.reachout} alt="bathroom renovation" />
            </div>
        </div>
    )
}

export default Reachout;