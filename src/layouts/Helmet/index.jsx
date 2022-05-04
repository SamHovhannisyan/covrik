import React, {useRef, useState} from "react";
import PropTypes from "prop-types";

import {Helmet} from "react-helmet";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import ChatBot from "react-simple-chatbot";
import {useTranslation} from "react-i18next";

const HelmetLayout = ({children, title, metaDescription}) => {

    const [show, setShow] = useState(false)

    const { t, i18n } = useTranslation();

    const showClick = () => {
        setShow(!show)
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription}/>
            </Helmet>
            <>
                <Header/>
                {children}
                {
                    show ? <div className={"chatBot"}>
                        <div className={'chatClose'} onClick={showClick}>x</div>
                        <ChatBot
                            headerTitle="Speech Synthesis"
                            speechSynthesis={{enable: true, lang: 'en'}}
                            steps={[
                                {
                                    id: '0',
                                    message: 'What is your name?',
                                    trigger: '1',
                                },
                                {
                                    id: '1',
                                    user: true,
                                    trigger: '2',
                                },
                                {
                                    id: '2',
                                    message: 'Hi {previousValue}, nice to meet you!, What can i help You?',
                                    trigger: '3'
                                },
                                {
                                    id: '3',
                                    user: true,
                                    trigger: '4',
                                },
                                {
                                    id: '4',
                                    message: 'Contact wit us +374 12 12 34 56',
                                },
                            ]}
                        />
                    </div>
                        : <div className={"chatBotButtonDIv"} >
                        <button onClick={showClick} className={"chatBotButton"}>{t("Chat")}</button>
                    </div>

                }
                <Footer />
            </>
        </>
    );
};

HelmetLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
    metaDescription: PropTypes.string,
};

export default HelmetLayout;
