import Banner from "../components/Banner/Banner"
import Contactform from "../components/ContactForm/ContactForm"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


function Contact() {
    return (
        <>
             <Header />
            <Banner title="contact" image="contact.svg"/>
            <div className="container">
                <Contactform/>
            </div>
            <Footer />
        </>
    )
}

export default Contact