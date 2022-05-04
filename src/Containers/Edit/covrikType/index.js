import React, {useEffect, useState} from 'react';
import css from "../edit.module.css";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {priceCupe} from "../../../redux/actions/shop.actions";

const CovrikType = ({
                        dataMain,
                        covrikTypeClick,
                        setDataMain,
                        setUpload,
                        setCovrikTypeClick,
                        setPrice,
                        price,
                        error,
                        checked,
                        setChecked,
                        checkedCupe,
                        setCheckedCupe,
                        setValue1,
                        value1,
                        setValue2,
                        value2,
                        value3,
                        setValue3
                    }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(priceCupe())
    }, [])

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);


    const {t, i18n} = useTranslation();

    const shopData = useSelector(state => state.shopReducers.shopGet);

    const priceData = useSelector(state => state.shopReducers.priceGet);

    const priceDataCupe = useSelector(state => state.shopReducers.priceGetCupe);


    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.covrikImg}>
                        <div>
                            {
                                shopData?.data?.leather?.map((item) => {
                                    return (
                                        <img src={item.image} alt=""/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name='covrikType'
                                   value='Leather1'/>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name='covrikType'
                                   value='Leather2'/>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name='covrikType'
                                   value='Leather2'/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function MyVerticallyCenteredModal2(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.covrikImg}>
                        <div>
                            {
                                shopData?.data?.carpet?.map((item) => {
                                    return (
                                        <img src={item.image} alt=""/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name="covrikType"
                                   value="Carpet1"/>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name="covrikType"
                                   value="Carpet2"/>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name="covrikType"
                                   value="Carpet3"/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function MyVerticallyCenteredModal3(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.covrikImg}>
                        <div>
                            {
                                shopData?.data?.carpet?.map((item) => {
                                    return (
                                        <img src={item.image} alt=""/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name="covrikType"
                                   value="xx"/>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name="covrikType"
                                   value="xx"/>
                            <input onClick={props.onHide} onChange={addMainData} type="radio" name="covrikType"
                                   value="xx"/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const addMainData = (e) => {
        dataMain[e.target.name] = e.target.value;
        setDataMain(dataMain);
        switch (e.target.value) {
            case 'Dzax':
                setChecked(true)
                value1  == false ? setValue1(false)  : setValue1(true)
                value2  == false ? setValue2(false)  : setValue2(true)
                value3  == false ? setValue3(false)  : setValue3(true)
                break;
            case "Aj":
                setChecked(false)
                value1  == false ? setValue1(false)  : setValue1(true)
                value2  == false ? setValue2(false)  : setValue2(true)
                value3  == false ? setValue3(false)  : setValue3(true)
                break;
            case "Ayo":
                setCheckedCupe(false)
                value1  == false ? setValue1(false)  : setValue1(true)
                value2  == false ? setValue2(false)  : setValue2(true)
                value3  == false ? setValue3(false)  : setValue3(true)
                break;
            case "Voch":
                setCheckedCupe(true)
                value1  == false ? setValue1(false)  : setValue1(true)
                value2  == false ? setValue2(false)  : setValue2(true)
                value3  == false ? setValue3(false)  : setValue3(true)
                break;
        }

    }


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUpload(URL.createObjectURL(event.target.files[0]));
        }
    }

    function simulateDownloadImageClick(uri, filename) {
        let link = document.createElement('a');
        if (typeof link.download !== 'string') {
            window.open(uri);
        } else {
            link.href = uri;
            link.download = filename;
            accountForFirefox(clickLink, link);
        }
    }

    function clickLink(link) {
        link.click();
    }

    function accountForFirefox(click) { // wrapper function
        let link = arguments[1];
        document.body.appendChild(link);
        click(link);
        document.body.removeChild(link);
    }

    const showLeather = () => {
        setCovrikTypeClick('leather');
        setPrice(priceData?.data?.leather);
        setModalShow(true);
    }

    const showCarpet = () => {
        setCovrikTypeClick('carpet');
        setPrice(priceData?.data?.carpet);
        setModalShow2(true);
    }
    const showVelours = () => {
        setCovrikTypeClick('velours');
        setPrice(priceData?.data?.velours);
        setModalShow3(true);
    }

    const cupeYes = () => {
        switch (covrikTypeClick) {
            case 'leather':
                setPrice(price - priceDataCupe?.data?.leather)
                break;
            case 'carpet':
                setPrice(price - priceDataCupe?.data?.carpet)
                break;
            case 'velours':
                setPrice(price - priceDataCupe?.data?.velours)
                break;
            default:
            // code block
        }
    }

    const cupeNo = () => {
        switch (covrikTypeClick) {
            case 'leather':
                setPrice(priceData?.data?.leather);
                break;
            case 'carpet':
                setPrice(priceData?.data?.carpet);
                break;
            case 'velours':
                setPrice(priceData?.data?.velours);
                break;
            default:
        }
    }


    return (
        <div>

            <div className={css.div3}>
                <h5>{t("Covrik")} :</h5>
                <div className={css.cupe}>
                    <input type="radio" id="huey" name="covrik" value="huey" onClick={showLeather}
                    />
                    <label htmlFor="huey">{t("Leather")}</label>
                </div>
                <div className={css.cupe}>
                    <input defaultChecked type="radio" id="dewey" name="covrik" value="dewey" onClick={showCarpet}/>
                    <label htmlFor="dewey">{t("Carpet")}</label>
                </div>
                <div className={css.cupe}>
                    <input type="radio" id="louie" name="covrik" value="louie" onClick={showVelours}/>
                    <label htmlFor="louie">{t("Velours")}</label>
                </div>
                {
                    error == true && dataMain.covrikType == undefined ?
                        <span className={css.error}>Required</span> : null
                }
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <MyVerticallyCenteredModal3
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <div className={css.div3}>
                <h5>{t("LogoCount")} :</h5>
                <select defaultValue='2' name="logoCount" id="cars" className={css.logCount}
                        onChange={addMainData}>
                    <option value="2" selected="selected" hidden="hidden">Choose</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                </select>
                <div>
                    <input id="myinput" type="file" onChange={onImageChange}
                           accept="image/png, image/jpeg" multiple hidden/>
                    <label className={css.uploadImages}
                           htmlFor="myinput">{t("UploadLogo")}</label>
                    {
                        error == true && dataMain.logoCount == undefined ?
                            <span className={css.error}>Required</span> : null
                    }
                </div>
            </div>

            <div className={css.div3}>
                <h5>{t("SteeringWheel")} :</h5>
                <div className={css.cupe}>
                    <input type="radio" name="wheel" value='Dzax' onChange={addMainData}
                           checked={checked ? 'checked' : ''}/>
                    <p>{t("Left")}</p>
                </div>
                <div className={css.cupe}>
                    <input type="radio" name="wheel" value='Aj' onChange={addMainData}
                           checked={checked ? '' : 'checked'}/>
                    <p>{t("Right")}</p>
                </div>
                {
                    error == true && !dataMain.wheel ? <span className={css.error}>Required</span> : null
                }
            </div>

            <div className={css.div3}>
                <h5>{t("Cupe")} :</h5>
                <div className={css.cupe}>
                    <input onClick={cupeYes} type="radio" value="Ayo" name="cupe" onChange={addMainData}
                           checked={checkedCupe ? '' : 'checked'}/>
                    <p>{t("Yes")}</p>
                </div>
                <div className={css.cupe}>
                    <input onClick={cupeNo} type="radio" value="Voch" name="cupe" onChange={addMainData}
                           checked={checkedCupe ? 'checked' : ''}/>
                    <p>{t("No")}</p>
                </div>
                {
                    error == true && !dataMain.cupe ? <span className={css.error}>Required</span> : null
                }
            </div>
        </div>
    );
};

export default CovrikType;