import SectionLayout from "./layout/SectionLayout";

const ContactSection = () => {

    return (
        <SectionLayout>
            <section>
                <h1>Education</h1>
                <ul>
                    <li>
                        <div>광문고</div>
                        <div>2020 - 1111</div>
                        <div>이과</div>
                    </li>
                    <li>
                        <div>건국대학교</div>
                        <div>2022 - 2022</div>
                        <div>기계공학부</div>
                    </li>
                    <li>
                        <div>쌍용교육센터</div>
                        <div>2022 - 2022</div>
                        <div>웹개발자 과정</div>
                    </li>
                </ul>

                <h1>Career</h1>
                <li>
                    <div>HL그린파워</div>
                    <div>2020 - 1111</div>
                    <div>시작개발(비개발)</div>
                </li>
                <li>
                    <div>씽소프트</div>
                    <div>2022 - 2022</div>
                    <div>백엔드 개발</div>
                </li>
                <li>
                    <div>티맥스A&C</div>
                    <div>2020 - 1111</div>
                    <div>프론트 개발</div>
                </li>
            </section>
        </SectionLayout>
    )
}

export default ContactSection;