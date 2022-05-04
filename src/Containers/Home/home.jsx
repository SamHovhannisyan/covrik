import React, {useEffect, useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import css from "./home.module.css";
import {IoLogoInstagram, TiSocialFacebook} from "react-icons/all";
import aboutCar from "../../images/aboutCar.png";
import Slider from "react-slick";
import covrik1 from "../../images/covrik1.png";
import covrik2 from "../../images/covrik2.png";
import covrik3 from "../../images/covrik4.png";
import contactUsCovrik from "../../images/contactUsCovrik.png";
import {Link, NavLink} from "react-router-dom";
import styles from "../Product/product.module.css";
import {ReactComponent as Arrow} from "../../svg/arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {homeGet} from "../../redux/actions/home.actions";
import {contactGet, contactPost} from "../../redux/actions/contact.actions";
import {useTranslation} from "react-i18next";

const Home = () => {

    const homeDataGet = useSelector(state => state.homeDataReducers.homeData);
    const contactGetData = useSelector(state => state.contactReducers.contactGet);
    const [err, setErr] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState({});

    let lang = localStorage.getItem('i18nextLng');

    const {t, i18n} = useTranslation();

    const changeLanguageHandler = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homeGet())
        dispatch(contactGet())
    }, [])

    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <div className={styles.nextArrow} onClick={onClick}>
                <Arrow className={styles.slide_arrow}/>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className={styles.prevArrow} onClick={onClick}>
                <Arrow className={styles.slide_arrow}/>
            </div>
        );
    };


    let settings;
    if (window.innerHeight <= 550 && window.innerWidth <= 550) {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        };
    } else {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        };
    }


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

    const settingss = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const productData = homeDataGet && homeDataGet.data?.sample?.map((i) => {
        return (
            <Col lg={3} xs={12}>
                <div className={css.divsSliderr}>
                    <img src={i.image} alt=""/>
                    <h5> {lang == 'ru' ? i.title_ru : i.title_en}</h5>
                </div>
            </Col>
        );
    });

    const handleChangeMessage = (e) => {
        data[e.target.name] = e.target.value;
        setData(data);
        console.log(data, '[][][][][][][')
    };



    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '25px',
                        color: 'green'
                    }}>Thank-You Messages</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const addData = (e) => {
        e.preventDefault()
        if (!data.email || regEmail.test(data.email) === false || !data.name || !data.message) {
            setErr(true)
            console.log(data, 'dataTrue')
        } else {
            setErr(false)
            setModalShow(true)
            dispatch(contactPost(data))
            console.log(data, 'dataFalse')
        }
    };

    return (
        <div>
            <div className={css.sliderBtn}>
                <Slider {...settingss}>
                    {
                        homeDataGet && homeDataGet?.data?.slider?.map((item) => {
                            let backgroundStyles = {
                                background: "red",
                                backgroundImage: `url(${item.image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "600px",
                                maxWidth: "100%",
                                cursor: "pointer",
                            }
                            return (
                                <div>
                                    <Container fluid style={backgroundStyles}>
                                        <Row className="justify-content-md-center align-items-center d-flex">
                                            <Col md="auto" lg={8}>
                                                <div className={css.divOne}>
                                                    <h1>{
                                                        lang == 'ru' ? item.title_ru : item.title_en
                                                    }</h1>
                                                    <p>{lang == 'ru' ? item.description_ru : item.description_en}</p>
                                                    <Link to="/Edit">
                                                        <button>{t("CreateYourOwn")}</button>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col lg={1} className="pt-5 mt-5">
                                                <div className={css.divIcons}>
                                                    <i>
                                                        <TiSocialFacebook/>
                                                    </i>
                                                    <i>
                                                        <IoLogoInstagram/>
                                                    </i>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    {
                        homeDataGet && homeDataGet.data?.about_detail.map((item, index) => {
                            return (
                                <Col lg={4} xs={12} md={6}>
                                    {
                                        index == 2 ?
                                            <div className={css.div3_1}>
                                                <img width='80px' src={item.icon} alt=""/>
                                                <h4>{lang == 'ru' ? item.title_ru : item.title_en}</h4>
                                                <p>{lang == 'ru' ? item.info_ru : item.info_en}</p>
                                            </div> :
                                            <div className={css.div2}>
                                                <img width='80px' src={item.icon} alt=""/>
                                                <h4>{lang == 'ru' ? item.title_ru : item.title_en}</h4>
                                                <p>{lang == 'ru' ? item.info_ru : item.info_en}</p>
                                            </div>
                                    }

                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>


            <Container>
                <Row className="justify-content-md-center ">
                    <div className={css.sliderDiv}>
                        <Slider {...settings} className={css.slider}>
                            {productData}
                        </Slider>
                    </div>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.div3}>
                            <div>
                                <h3>{t("about_usLink")}</h3>
                                <p>
                                    {homeDataGet && homeDataGet.data?.about.text_en?.slice(0, 300)}
                                </p>
                                <button><NavLink
                                    end
                                    to="/about_us"

                                >
                                    {t("about_link")}
                                </NavLink></button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={css.CarImgg}>
                            <img src={aboutCar} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col lg={6}>
                        {/* <div> */}
                        <div className={css.imgDivContact}>
                            <img src={contactUsCovrik} alt=""/>
                            <div className={css.textDivContact}>
                                <h3>{t("Email")}</h3>
                                <p>{contactGetData.data?.email}</p>
                                <h3>{t("PhoneNumber")}</h3>
                                <p>{contactGetData.data?.phone}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <div className={css.divContactUs}>
                            <form onChange={handleChangeMessage}>
                                <h2>{t("contact_usLink")}</h2>
                                <h4>{t("contactName")}</h4>
                                <input type="text" placeholder="Enter your full name" name="name"/>
                                {err && data.name == undefined ? <span className={css.err}>Required</span> : null}
                                <h4>{t("contactEmail")}</h4>
                                <input type="email" placeholder="Enter your email" name='email'/>
                                {err && data.email == undefined ? <span className={css.err}>Required</span> : null}
                                {err && data.email !== undefined && regEmail.test(data.email) === false ?
                                    <span className={css.err}>Email Address is Valid!</span> : null}
                                <h4>{t("contactMessage")}</h4>
                                <input type="text" placeholder="Enter your message" name="message"/>
                                {err && data.message == undefined ? <span className={css.err}>Required</span> : null}
                                <button onClick={addData}>{t("buttonSend")}</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center mb-5">
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

export default Home;
