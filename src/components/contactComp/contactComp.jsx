import './contactComp.css';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactComp() {
    const contact = [
        {
            icon: faPhone,
            form: 'Phone Number',
            detail: '+44 7587 587726',
            openLink: "tel:+447587587726"
        },
        {
            icon: faEnvelope,
            form: 'Email',
            detail: 'admin @infinitegroupscot .co.uk',
            openLink: "mailto:admin@infinitegroupscot.co.uk?Subject=Project Enquiry"
        }
    ];

    return (
        <div className="contact-comp">
            <div className="cc-top">
                <div className="cc-headline">💬 LET’S TALK BATHROOMS</div>
                <h2>Got Questions? Ready to Get Started? We’d Love to Hear From You</h2>
                <div className="cc-info">
                    {contact.map((info, i) => (
                        <div key={i} className="cc-item">
                            <hr />
                            <div className="ic-info">
                                <a href={info.openLink}><FontAwesomeIcon className='ci-icon' icon={info.icon} /></a>
                                <div className="info">
                                    <p className='cc-solid'>{info.form}</p>
                                    <a href={info.openLink}>{info.detail}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="cc-base">
                <img src={Images.p4} alt="full bathroom renovation" />
            </div>
            <div className="cc-socials">
                <a href="https://web.facebook.com/precisionbathrooms11" target='_blank'><FontAwesomeIcon className='ccs-icon' icon={faFacebookMessenger} /></a>
                <a href="#"><FontAwesomeIcon className='ccs-icon' icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default ContactComp;