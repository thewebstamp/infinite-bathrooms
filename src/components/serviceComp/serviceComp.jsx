import './serviceComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function ServiceComp() {
    const navigate = useNavigate();
    const [ourServices, setOurServices] = useState([
        {
            title: '🛁 Bathroom Renovation',
            description: 'Full redesign, supply, and professional installation',
            image: Images.renovation,
            url: 'bathroom renovation'
        },
        {
            title: '🚿 Shower Rooms',
            description: 'Space-saving, modern shower room solutions',
            image: Images.shower,
            url: 'shower room'
        },
        {
            title: '📦 Supply Fit',
            description: 'All-inclusive bathroom packages from £3,350',
            image: Images.fit,
            url: 'supply fit'
        },
        {
            title: '🧼 Fixture Upgrades',
            description: 'Swap taps, vanities, or lighting easily',
            image: Images.fixture,
            url: 'fixture upgrades'
        },
        {
            title: '🏠 Home Surveys',
            description: 'Free in-home consultations and estimates',
            image: Images.survey,
            url: 'home survey'
        }
    ]);

    function scrollLeft() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.push(o[0]);
            o.shift();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-left");
            setTimeout(() => {
                item.classList.remove("s-slide-left");
            }, 400);
        })
    }

    function scrollRight() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.unshift(o[o.length-1]);
            o.pop();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-right");
            setTimeout(() => {
                item.classList.remove("s-slide-right");
            }, 400);
        })
    };

        const serviceT = useRef();
        const serviceB = useRef();
    
        function slideUp() {
            if (window.location.pathname == "/") {
                if (window.innerHeight * 0.9 >= serviceT.current.getBoundingClientRect().top) {
                    serviceT.current.classList.add("slide-up");
                } else {
                    serviceT.current.classList.remove("slide-up");
                }
    
                if (window.innerHeight * 0.9 >= serviceB.current.getBoundingClientRect().top) {
                    serviceB.current.classList.add("slide-up");
                } else {
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", slideUp);
    
            return () => {
                if (window.location.pathname == "/") {
                    serviceT.current.classList.remove("slide-up");
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }, []);

    return (
        <div className="service-comp" id='services'>
            <div className="s-up" ref={serviceT}>
                <div className="s-heading">
                    <div className="s-headline">🚿 OUR SERVICES</div>
                    <h2>From Supply to Final Installation — We Handle it All</h2>
                </div>
                <div className="s-text">
                    <p>Whether you’re dreaming of a full bathroom transformation or need a space-saving shower solution, we’ve got you covered. <span>WE&nbsp; OFFER&nbsp; THE&nbsp; FOLLOWING&nbsp; RANGE&nbsp; OF&nbsp; SERVICES:</span></p>
                    <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
                </div>
            </div>

            <div className="s-base-wrap" ref={serviceB}>
                <div className="s-base">
                    <div className="top">
                        <div className="s-top-case">
                            {ourServices.map((item, i) => (
                                <div key={i} className="items">
                                    <div className="item-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img src={item.image} alt={item.url} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control">
                        <FontAwesomeIcon id='s-control-l' icon={faArrowLeft} onClick={scrollRight} />
                        <FontAwesomeIcon id='s-control-r' icon={faArrowRight} onClick={scrollLeft} />
                    </div>
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceComp;