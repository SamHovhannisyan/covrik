import React, {useEffect, useRef, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import css from "./edit.module.css";
import {ReactComponent as Paxlava} from "../../svg/paxlava.svg";
import {ReactComponent as Carpet} from '../../svg/carpet.svg'
import {ReactComponent as Velours} from '../../svg/vilure.svg'
import html2canvas from 'html2canvas';
import axios from "axios";
import ModalComponents from "../Modal";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {carsBrandGet, priceCupe, PriceGetData, shopActions} from "../../redux/actions/shop.actions";
import {useTranslation} from "react-i18next";
import validator from './validator';
import CarSelectType from "./carSelectType";
import CovrikType from "./covrikType";
import CovrikStyle from "./covrikStyle";
import CovrikPosition from "./covrikPosition";

const Edit = () => {

    const [colors, setColors] = useState("blue");
    const [fill, setFill] = useState("black");
    const [position, setPosition] = useState("r_t");
    const [orderData, setOrderData] = useState({});
    const [rotete, setRotete] = useState('');
    const [modalShowData, setModalShowData] = React.useState(false);
    let [dataMain, setDataMain] = useState({covrikType: 'Carpet1', cupe: "Voch", wheel: "Dzax"});
    const [upload, setUpload] = useState('');
    const [covrikTypeClick, setCovrikTypeClick] = useState('carpet')
    const [count1, setCount1] = useState(0)
    const [price, setPrice] = useState();
    const [error, setError] = useState(false)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [checked, setChecked] = useState(true)
    const [checkedCupe, setCheckedCupe] = useState(true)
    const [value1, setValue1] = useState(false);
    const [value2, setValue2] = useState(false);
    const [value3, setValue3] = useState(false);

    const {t, i18n} = useTranslation();

    const shelow = state => state.shopReducers.priceGet

    const priceData = useSelector(shelow, shallowEqual);

    useEffect(() => {
        setTimeout(() => {
            setPrice(priceData?.data?.carpet)
        }, 50);
    }, [priceData]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PriceGetData());
        dispatch(shopActions());
        dispatch(carsBrandGet());
    }, []);

    let arrImages = [];

    const screen = () => {
        const element = document.querySelector("#capture")
        html2canvas(element, {logging: false}).then((canvas) => {
            const url = canvas.toDataURL();
            const formData = new FormData();
            formData.append("file", url);
            formData.append("upload_preset", "ungkiymc");
            axios.post("https://api.cloudinary.com/v1_1/armcoding22/image/upload",
                formData)
                .then((res) => {
                    arrImages.push(res.data.url);
                    dataMain['images'] = res.data.url;
                    setDataMain(dataMain);
                }).catch(e => console.log(e, 'Error'));
        });
    }

    const addData = (e) => {
        e.preventDefault();
        if (
            !dataMain.model
            || !dataMain.seria
            || !dataMain.year
            || !dataMain.logoCount
            || !dataMain.wheel
            || !dataMain.cupe
            || !dataMain.covrikType
        ) {
            setError(true)
        } else {
            setIsOpen(true);
        }
    }


    return (
        <div>
            <Container>
                <Row className="justify-content-md-start mt-5 mb-5">
                    <Col lg={6}>
                        <ModalComponents count1={count1} setCount1={setCount1} setDataMain={setDataMain}
                                         dataMain={dataMain} screen={screen} price={price}
                                         modalShowData={modalShowData} setModalShowData={setModalShowData}
                                         setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>
                        <div className={css.mainImg} id="capture">

                            {
                                covrikTypeClick == 'leather' ?
                                    <Paxlava className={css.svg} stroke={colors} fill={fill}/>
                                    : covrikTypeClick == 'carpet' ?
                                        <Carpet className={css.svg}/> : covrikTypeClick == 'velours' ?
                                            <Velours className={css.svgVil}/> : <Carpet className={css.svg}/>
                            }

                            {
                                upload == '' ? <div>
                                        <div className={
                                            position == "r_t" ? css.r_t : position == "r_b" ? css.r_b : position == "l_t"
                                                ? css.l_t
                                                : position == "l_b"
                                                    ? css.l_b
                                                    : null
                                        }
                                        ><p className={rotete == "rote1" ? css.rote4 : rotete == "rote2" ? css.rote4
                                            : rotete == "rote3" ? css.rote4 : rotete == "rote4" ? css.rote4
                                                : rotete == "rote1Y" ? css.rote4Y : rotete == "rote2Y" ? css.rote4Y
                                                    : rotete == "rote3Y" ? css.rote4Y : rotete == "rote4Y" ? css.rote4Y : null
                                        }>Logo</p>
                                        </div>
                                    </div>
                                    :
                                    <div className={
                                        position == "r_t" ? css.r_t : position == "r_b" ? css.r_b : position == "l_t"
                                            ? css.l_t
                                            : position == "l_b"
                                                ? css.l_b
                                                : null
                                    }>
                                        <img className={rotete == "rote1" ? css.rote5 : rotete == "rote2" ? css.rote5
                                            : rotete == "rote3" ? css.rote5 : rotete == "rote4" ? css.rote5
                                                : rotete == "rote1Y" ? css.rote5Y : rotete == "rote2Y" ? css.rote5Y
                                                    : rotete == "rote3Y" ? css.rote5Y : rotete == "rote4Y" ? css.rote5Y : null
                                        } src={upload} width="100px" alt=""/>
                                    </div>
                            }

                        </div>
                    </Col>
                    <Col lg={6}>

                        <div className={css.main}>
                            <h2>{t("CreateYourOwn")}</h2>
                            <div className={css.div1}>
                                <CarSelectType
                                    error={error}
                                    dataMain={dataMain}
                                    setDataMain={setDataMain}
                                    setPrice={setPrice}
                                    setChecked={setChecked}
                                    setCheckedCupe={setCheckedCupe}
                                    setValue1={setValue1}
                                    setValue2={setValue2}
                                    setValue3={setValue3}
                                    priceData={priceData}
                                />

                                <CovrikType
                                    price={price}
                                    covrikTypeClick={covrikTypeClick}
                                    setCovrikTypeClick={setCovrikTypeClick}
                                    setPrice={setPrice}
                                    error={error}
                                    setUpload={setUpload}
                                    dataMain={dataMain}
                                    setDataMain={setDataMain}
                                    checked={checked}
                                    checkedCupe={checkedCupe}
                                    setCheckedCupe={setCheckedCupe}
                                    setChecked={setChecked}
                                    value1={value1}
                                    setValue1={setValue1}
                                    value2={value2}
                                    setValue2={setValue2}
                                    value3={value3}
                                    setValue3={setValue3}
                                />

                                <CovrikStyle setColors={setColors}
                                             price={price}
                                             setPrice={setPrice}
                                             orderData={orderData}
                                             setOrderData={setOrderData}
                                             value1={value1}
                                             setValue1={setValue1}
                                             value2={value2}
                                             setValue2={setValue2}
                                             value3={value3}
                                             setValue3={setValue3}

                                />

                                <CovrikPosition setOrderData={setOrderData}
                                                setPosition={setPosition}
                                                orderData={orderData}
                                                position={position}
                                                setRotete={setRotete}/>

                                {/*<CovrikPrice count={count}*/}
                                {/*             setCount={setCount}*/}
                                {/*             dataMain={dataMain}*/}
                                {/*             setDataMain={setDataMain}*/}
                                {/*             price={price}*/}
                                {/*             setPrice={setPrice}/>*/}

                                <div className={css.price}>
                                    <h3>$ {price}</h3>
                                    <button onClick={addData}>{t("AddToCart")}</button>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Edit;
