import React, {useEffect, useCallback, useState, useMemo, useRef} from 'react';
import styles from "../AddresBy/AddressBy.module.css";
import {errorGet, shopPostActions} from "../../redux/actions/shop.actions";
import {useDispatch, useSelector} from "react-redux";
import css from "../Edit/edit.module.css";
import {useTranslation} from "react-i18next";
import {shopReducers} from "../../redux/reducers/shopReducers";
import Modal from 'react-modal';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {Col, Row} from "react-bootstrap";

const ModalComponents = React.memo(({
                                        price,
                                        dataMain,
                                        setDataMain,
                                        screen,
                                        setIsOpen,
                                        modalIsOpen
                                    }) => {

    const [isError, setIsError] = useState(false)

    const {t, i18n} = useTranslation();

    const dispatch = useDispatch();

    const changeItem = (e) => {
        dataMain[e.target.name] = e.target.value
        dataMain["price"] = price;
        setDataMain(dataMain);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '10000'
        },
    };

    let addItem = () => {
        if (
            !dataMain.email
            || !dataMain.name
            || !dataMain.phone
            || !dataMain.surName
            || !dataMain.city
            || !dataMain.address
        ) {
            setIsError(true)
        } else {
            setIsError(false)
            screen();
            dispatch(shopPostActions(dataMain));
        }
    }

    const close = () => {
        setIsOpen(false);
    }


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <section>
                    <div className="container">
                        <Row>
                            <Col lg={12}>
                                    <div className={css.divClose}>
                                        <span onClick={close}><AiOutlineCloseCircle/></span>
                                    </div>
                            </Col>
                        </Row>
                        <Row>

                            <Col lg={6} xs={12}>
                                <div className={styles.infoBlock}>
                                    <form onChange={changeItem}>
                                        <div className={styles.itemINp}>
                                            <p>{t('Name')}</p>
                                            <input type="text" placeholder={t("EnterYourName")} name="name"/>
                                            {isError && !dataMain.name ? <span>Required</span> : null}
                                        </div>
                                        <div className={styles.itemINp}>
                                            <p>{t("Surname")}</p>
                                            <input type="text" placeholder={t("EnterYourSurname")} name="surName"/>
                                            {isError && !dataMain.surName ? <span>Required</span> : null}
                                        </div>
                                        <div className={styles.itemINp}>
                                            <p>{t("Email")}</p>
                                            <input type="email" placeholder={t("EnterYourEmailAddress")} name="email"/>
                                            {isError ? <span>Required</span> : null}
                                        </div>
                                        <div className={styles.itemINp}>
                                            <p>{t("PhoneNumber")}</p>
                                            <input type="number" placeholder={t("EnterYourPhoneNumber")} name="phone"/>
                                            {isError && !dataMain.phone ? <span>Required</span> : null}
                                        </div>

                                        <div className={styles.itemINp}>
                                            <p>{t("YourCity")}</p>
                                            <input type="text" placeholder={t("City")} name="city"/>
                                            {isError && !dataMain.city ? <span>Required</span> : null}
                                        </div>
                                        <div className={styles.itemINp}>
                                            <p>{t("YourAddress")}</p>
                                            <input type="text" placeholder={t("EnterYourAddress")} name="address"/>
                                            {isError && !dataMain.address ? <span>Required</span> : null}
                                        </div>
                                        <div className={styles.itemINp}>
                                            <p>{t("PostalCode")}</p>
                                            <input type="text" placeholder="230" name="postalCode"/>
                                            {isError ? <span>Required</span> : null}
                                        </div>
                                    </form>
                                </div>
                            </Col>

                            <Col lg={5} xs={12}>
                                <div className={styles.divFlex}>
                                    <div className={styles.total_block}>

                                        <h2 className={styles.total_item}>{t("Total")} {price}$</h2>

                                    </div>
                                    <div className={styles.total_block}>
                                        <h3 clas={styles.subtitile}>{t("PaymentMethod")}</h3>
                                        <div className={styles.payment_inp}>
                                            <input type="radio" name="payment"/>
                                            <p>Debit / Credit card</p>
                                        </div>
                                        <div className={styles.payment_inp}>
                                            <input type="radio" name="payment"/>
                                            <p>Paypal Wallet</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>



                        </Row>

                        <div className={css.divBtn}>
                            <button onClick={addItem} className={styles.by_send}>
                                {t("Buy")}
                            </button>
                        </div>

                    </div>
                </section>
            </Modal>
        </div>
    );
});

export default ModalComponents;