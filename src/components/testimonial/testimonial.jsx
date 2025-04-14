import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'JULIE M',
            address: 'Kilmarnock',
            review: "We had an old, horrible wetroom completely ripped out and replaced by Infinite Group. The difference is night and day! The bathroom was completed in a short time and it’s absolutely stunning. We’re genuinely delighted!"
        },
        {
            name: 'BRIAN T',
            address: 'Carluke',
            review: 'Infinite Group recently renovated our kitchen in Carluke. From start to finish, the team was polite, professional, and so tidy! The final result was even better than we imagined. Highly recommend them to anyone'
        },
        {
            name: 'MacAli Group',
            address: 'Elgin',
            review: 'Working with Infinite Group on our Elgin property was a fantastic experience. Their attention to detail, communication, and commitment to high standards truly set them apart. 100% reliable'
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
                <h2>💬 What Our Customers Say</h2>
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