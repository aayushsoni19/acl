import '../App.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <h1>Get in Touch</h1>
            <div className="contact-container">
                <div className="socials">
                    <h2>Socials</h2>
                    <div className='socials-container'>
                        <div className='instagram'>
                            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504918.png" alt="instagram" className='socials-icon'/>
                            <a href="http://www.instagram.com" className='icon-desc'>Across The Line</a>
                        </div>
                        <div className='twitter'>
                            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png" alt="twitter" className='socials-icon'/>
                            <a href="http://www.twitter.com" className='icon-desc'>Across The Line</a>
                        </div>
                        <div className='linkedin'>
                            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt="linkedin" className='socials-icon'/>
                            <a href="http://www.linkedin.com" className='icon-desc'>Across The Line</a>
                        </div>
                    </div>
                </div>
                <div className="mail-form">
                    <h2>Mail Us</h2>
                    <div className="mail-container">
                        <form action="" className='form'>
                            <label htmlFor="fname">First Name: </label><br />
                            <input type="text" className='input-field'/><br />
                            <label htmlFor="lname">Last Name: </label><br />
                            <input type="text" className='input-field'/><br />
                            <label htmlFor="email">Email: </label><br />
                            <input type="email" id="mail" className='input-field'/><br />
                            <label htmlFor="message">Message: </label><br />
                            <input type="text" className='text-area'/><br />
                            <button type="submit" className='submit-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}