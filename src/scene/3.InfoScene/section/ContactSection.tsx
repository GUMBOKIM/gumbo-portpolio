import {ContactIcon} from "./ContactSection.style";
import SectionLayout from "./layout/SectionLayout";

const ContactSection = () => {

    return (
        <SectionLayout>
            <h3>연락</h3>
            <br/>
            <br/>
            <br/>
            <h4>이메일</h4>
            <h5>gumbo.developer@gmail.com</h5>
            <h4>링크</h4>
            <ContactIcon/>
        </SectionLayout>
    )
}

export default ContactSection;