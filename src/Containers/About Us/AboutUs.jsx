import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import css from "./aboutUs.module.css";
import aboutCar from "../../images/aboutCar.png";
import aboutCar2 from "../../images/aboutCar2.png";
import truck from "../../images/truck .svg";
import refresh from "../../images/refresh.svg";
import tool from "../../images/tool.svg";
import Slider from "react-slick";
import covrik1 from "../../images/covrik1.png";
import covrik2 from "../../images/covrik2.png";
import covrik3 from "../../images/covrik4.png";
import {useDispatch, useSelector} from "react-redux";
import {homeGet} from "../../redux/actions/home.actions";
import {contactGet} from "../../redux/actions/contact.actions";
import {useTranslation} from "react-i18next";
import {aboutReducers} from "../../redux/reducers/aboutReducers";
import {aboutGet} from "../../redux/actions/about.actions";

const AboutUs = () => {

    const aboutDataGet = useSelector(state => state.aboutReducers.aboutData);

    const dispatch = useDispatch();

    const {t, i18n} = useTranslation();

    useEffect(() => {
        dispatch(aboutGet())
    }, [])

    let settings2;
    if (window.innerHeight <= 1366 && window.innerWidth <= 1026) {
        settings2 = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            className: css.content,
        };
    } else {
        settings2 = {
            arrows: false,
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
            className: css.content,
            autoplay: true,
            autoplaySpeed: 1000,
        };
    }

    let backgroundStyles = {
        backgroundImage: `url(${aboutDataGet?.data?.about?.image_one})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        width: "100%",
        borderRadius: "10px"
    }

    let lang = localStorage.getItem('i18nextLng');

    return (
        <div>
            <div className={css.div1}>
                <h2>{t("about_usLink")}</h2>
                <p>
                    {
                        lang === 'ru'
                            ? aboutDataGet?.data?.about?.text_ru.slice(0, 200)
                            : aboutDataGet?.data?.about?.text_en.slice(0, 200)
                    }
                </p>
            </div>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col lg={12}>

                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col lg={7}>
                        <div className={css.divAbout2}>
                            <div>
                                <h2>{t("about_usLink")}</h2>
                                <p>
                                    {
                                        lang === 'ru'
                                            ? aboutDataGet?.data?.about?.text_ru.slice(0, 380)
                                            : aboutDataGet?.data?.about?.text_en.slice(0, 380)
                                    }
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img src={aboutDataGet?.data?.about?.image_two} alt="" className={css.aboutCar2}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col lg={12} className="mt-5 mb-5">

                        <div style={backgroundStyles}>

                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        aboutDataGet?.data?.about_detail?.slice(0, 3).map((item) => {
                            return (
                                <Col lg={4}>
                                    <div className={css.div4}>
                                        <img src={item.icon} alt=""/>
                                        <p>
                                            { lang == 'ru' ? item.info_ru : item.info_en}
                                        </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    {
                        aboutDataGet?.data?.about_detail?.slice(3).map((item) => {
                            return (
                                <Col lg={4}>
                                    <div className={css.div4}>
                                        <img src={item.icon} alt=""/>
                                        <p>{lang == 'ru' ? item.info_ru : item.info_en}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <div className={css.firstDiv}>
                        <h2>{t("instagram")}</h2>
                        <Slider {...settings2} className={css.sliderFirs}>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik1} alt=""/>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik2} alt=""/>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik3} alt=""/>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik1} alt=""/>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik2} alt=""/>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik3} alt=""/>
                                </div>
                            </Col>
                        </Slider>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
