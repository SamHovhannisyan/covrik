import React, {useEffect} from "react";
import styles from "./product.module.css";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import shopData from "../../utils/shopData";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Arrow} from "../../svg/arrow.svg";
import {productDataGet} from "../../redux/actions/productData.actions";
import {useTranslation} from "react-i18next";

const Product = () => {

    const productData = useSelector(state => state.productDataReducers.product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productDataGet());
    }, [])

    const { t, i18n } = useTranslation();

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
    if (window.innerHeight <= 980 && window.innerWidth <= 980) {
        settings = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            className: styles.content,
            adaptiveHeight: true,
        };
    } else {
        settings = {
            arrows: true,
            dots: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            autoplay: true,
            autoplaySpeed: 2000,
            className: styles.content,
            draggable: true,
            adaptiveHeight: true,
            // rows: 2,
        };
    }
    return (
        <>
            <section>
                <h1 className={styles.tite}>{t("Email")}</h1>
                <div
                    className={styles.bgimg}
                    style={{
                        width: "100%",
                        height: "15rem",
                        backgroundImage: `url("./assets/prod.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                    }}
                >
                    <p className={styles.name}>{t("ChooseYorMat")}</p>
                </div>
                <Container>
                    <Slider {...settings} className={styles.slider}>
                        {
                            productData.data?.map((item) => {
                                return (
                                    <div className={styles.divsSliderr} key={item.id}>
                                        <img src={item.image} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </Container>
            </section>
        </>
    );
};

export default Product;
