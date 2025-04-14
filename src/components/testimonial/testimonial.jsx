import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'MICHELLE',
            address: 'Cumbernauld',
            review: "Infinite Bathrooms came highly recommended—and now we know why. The work done in our house is immaculate. Great materials, great communication, and even better service from start to finish!"
        },
        {
            name: 'JAMES',
            address: 'Airdrie',
            review: 'We had a small shower room that needed a major update. Infinite Bathrooms delivered exactly what we asked for—and then some! Friendly team, tidy work, and excellent communication throughout the project'
        },
        {
            name: 'PAUL',
            address: 'Kirkcaldy',
            review: 'From planning to fitting, the Infinite team was incredible. They were on time, on budget, and respectful of our home. Our new en-suite is just beautiful and so easy to maintain'
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="bathroom installation" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">TESTIMONIALS</div>
                <h2>💬 What Our Customers Are Saying</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='customer' href='#'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                {/* <a className='facebook-review' href="" target='_blank'><img src={Images.facebookReviews} alt="Facebook review icon" /></a> */}
            </div>
        </div>
    )
}

export default Testimonial;