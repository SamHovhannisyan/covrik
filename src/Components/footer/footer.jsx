import React, {useEffect, useRef, useState} from "react";
import css from "./footer.module.css";
import {Col, Container, Row} from "react-bootstrap";
import {IoIosArrowForward, IoLogoInstagram, TiSocialFacebook,} from "react-icons/all";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {contactGet, contactPostFooter} from "../../redux/actions/contact.actions";
import {useTranslation} from "react-i18next";
import LogoMain from '../../images/logoMain.png';

const Footer = () => {

    const [data, setData] = useState({email: ''})

    const contactGetData = useSelector(state => state.contactReducers.contactGet);

    const {t, i18n} = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactGet())
    }, []);

    const handlerChange = (e) => {
        data.email = e.target.value;
        setData(data);
    }

    const ref = useRef(null);

    const addEmail = (e) => {
        e.preventDefault();
        dispatch(contactPostFooter(data));
        setData({email: " "})
        ref.current.value = '';
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={css.footerMain}>
            <Container fluid>
                <Row className="justify-content-md-center pt-3 pb-3">
                    <Col lg={2} xs={12} md={1}>
                        <div className={css.footerDiv}>
                            <img src={LogoMain} alt=""/>
                        </div>
                    </Col>
                    <Col lg={2} xs={12} md={3}>
                        <div className={css.footerDiv2}>
                            <h5 onClick={goToTop}>{t("Support")}</h5>
                            <span onClick={goToTop}>
                  <Link to="/contact_us">{t("contact_usLink")}</Link>
                </span>
                            <span onClick={goToTop}>
                  <Link to="/shipping">{t("Shipping&Returns")}</Link>
                </span>
                            <span onClick={goToTop}>
                  <Link to="/terms">{t("Terms&Conditions")}</Link>
                </span>
                        </div>
                    </Col>
                    <Col lg={2} xs={12} md={2}>
                        <div className={css.footerDiv3}>
                            <h5>{t("Company")}</h5>
                            <span>
                  <Link to="/about_us">{t("about_usLink")}</Link>
                </span>
                            <span>
                  <Link to="/product">{t("product_link")}</Link>
                </span>
                        </div>
                    </Col>
                    <Col lg={2} xs={12} md={2}>
                        <div className={css.footerDiv4}>
                            <h5>{t("FollowUs")}</h5>
                            <div className={css.divIcons}>

                  <span>
                    <a href={
                        contactGetData?.data?.facebook
                    } target={"_blank"}>
                    <TiSocialFacebook/>
                  </a>
                  </span>

                                <span>
                    <a href={
                        contactGetData?.data?.instagram
                    } target={"_blank"}>
                    <IoLogoInstagram/>
                  </a>
                  </span>

                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} md={3}>
                        <div className={css.footerDiv5}>
                            <h5>{t("SubscribeToOurNewsletters")}</h5>
                            <input type="email" ref={ref} defaultValue={data.email}
                                   placeholder="Enter your email address" onChange={handlerChange} name="email"/>
                            <i>
                                <IoIosArrowForward onClick={addEmail}/>
                            </i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
