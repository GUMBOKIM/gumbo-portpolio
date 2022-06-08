interface ContactDataProps {
    type: string;
    name: string;
    location: string;
    destination: string;
}

export const ContactData: ContactDataProps[] = [
    {
        type: "link",
        name: "Github",
        location: "img/contact/github.png",
        destination: "https://github.com/GUMBOKIM"
    },
    {
        type: "link",
        name: "Tistory",
        location: "img/contact/tistory.png",
        destination: "https://gum-equal-supply.tistory.com/"
    },
    {
        type: "phone",
        name: "phone-call",
        location: "img/contact/phone-call.png",
        destination: "tel:010-9929-4805"
    },
    {
        type: "phone",
        name: "phone-message",
        location: "img/contact/phone-message.png",
        destination: "sms:010-9929-4805"
    }
]
