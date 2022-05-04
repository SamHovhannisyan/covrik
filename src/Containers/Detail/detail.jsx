import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import covrikDetail1 from '../../images/covrik1.png'
import covrikDetail2 from '../../images/covrik2.png'
import covrikDetail3 from '../../images/shopCovrik3.png'
import covrikDetail4 from '../../images/covrikDetail.png'
import css from './detail.module.css';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/all";
import Slider from "react-slick";
import covrik1 from "../../images/covrik1.png";
import covrik2 from "../../images/covrik2.png";
import covrik3 from "../../images/covrik4.png";
import truck from "../../images/truck .svg";
import refresh from "../../images/refresh.svg";
import tool from "../../images/tool.svg";
import {Link} from "react-router-dom";

const Detail = () => {


    const [count, setCount] = useState(1)

    const handlerPlusChange = () => {
        setCount(count + 1)
    }

    const hanlderMinusChange = () => {
        setCount(count - 1)
    }

    let settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    let settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const [imgg, setImgg] = useState(covrik1)

    const handlerChangeImg = (log) => {
        setImgg(log)
    }


    return (
        <div>
            <Container>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col lg={6}>

                        <div>

                            <div className={css.mainImg}>
                                <img src={imgg} alt=""/>
                            </div>

                            <div className={css.imgsDivs}>

                                <Slider {...settings3} className={css.sliderImg}>
                                    <div onClick={() => handlerChangeImg(covrikDetail1)}>
                                        <img src={covrikDetail1} alt=""/>
                                    </div>
                                    <div onClick={() => handlerChangeImg(covrikDetail2)}>
                                        <img src={covrikDetail2} alt=""/>
                                    </div>
                                    <div onClick={() => handlerChangeImg(covrikDetail3)}>
                                        <img src={covrikDetail3} alt=""/>
                                    </div>
                                    <div onClick={() => handlerChangeImg(covrikDetail1)}>
                                        <img src={covrikDetail1} alt=""/>
                                    </div>
                                    <div onClick={() => handlerChangeImg(covrikDetail2)}>
                                        <img src={covrikDetail2} alt=""/>
                                    </div>
                                    <div onClick={() => handlerChangeImg(covrikDetail3)}>
                                        <img src={covrikDetail3} alt=""/>
                                    </div>
                                </Slider>

                            </div>
                            
                        </div>
                        
                    </Col>
                    <Col lg={6}>

                        <div className={css.productMain}>

                            <div className={css.productDiv1}>
                            <h2>Product Name</h2>

                            <h3>$200</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className={css.productDiv2}>
                                <ul>
                                    <li>Vehicle of the series :</li>
                                </ul>
                                <p>Kia Retona (CE)</p>
                            </div>


                            <div className={css.productDiv3}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                            <div className={css.productDiv4}>
                                <h3>Quantity</h3>
                                <div className={css.countes}>
                                    <i onClick={hanlderMinusChange}><AiOutlineMinus/></i>
                                    <h5>
                                        {count}
                                    </h5>
                                    <i onClick={handlerPlusChange}><AiOutlinePlus/></i>
                                </div>
                            </div>

                            <div className={css.productDiv5}>
                                <Link to='/Edit'>
                                    <button className={css.btn1}>Edit</button>
                                </Link>
                                <button className={css.btn2}>Add to Cart</button>
                            </div>

                        </div>

                    </Col>
                </Row>

                <Row className="justify-content-md-center mb-5">
                    <div className={css.firstDiv}>
                        <h2>Your may also like</h2>
                        <Slider {...settings2} className={css.sliderFirs}>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik1} alt=""/>
                                    <h5>Product 1</h5>
                                    <p>$200</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik2} alt=""/>
                                    <h5>Product 1</h5>
                                    <p>$200</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik3} alt=""/>
                                    <h5>Product 1</h5>
                                    <p>$200</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik1} alt=""/>
                                    <h5>Product 1</h5>
                                    <p>$200</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik2} alt=""/>
                                    <h5>Product 1</h5>
                                    <p>$200</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={css.divsSliderr}>
                                    <img src={covrik3} alt=""/>
                                    <h5>Product 1</h5>
                                    <p>$200</p>
                                </div>
                            </Col>
                        </Slider>
                    </div>
                </Row>

                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col lg={4}>

                        <div className={css.detailFirst}>
                            <img src={truck} alt=""/>
                            <h4>Payment and delivery</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={css.detailFirstDiv_1}>
                            <img src={refresh} alt=""/>
                            <h4>Return and refund</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={css.detailFirst}>
                            <img src={tool} alt=""/>
                            <h4>Quality support</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Detail;