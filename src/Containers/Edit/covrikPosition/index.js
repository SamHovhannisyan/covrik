import React, {useState} from 'react';
import css from "../edit.module.css";
import {ReactComponent as Pos1} from "../../../svg/1.svg";
import {BsArrowDownCircle} from "react-icons/bs";
import {ReactComponent as Pos2} from "../../../svg/2.svg";
import {ReactComponent as Pos3} from "../../../svg/3.svg";
import {ReactComponent as Pos4} from "../../../svg/4.svg";
import {useTranslation} from "react-i18next";

const CovrikPosition = ({setPosition, orderData, setOrderData, setRotete}) => {

    const [roteteShow, setRoteteShow] = useState(true);

    const {t, i18n} = useTranslation();

    const handlerChangePosition = (pos) => {
        setPosition(pos);
        let c = {...orderData, position: pos};
        setOrderData(c);
    };

    const handlerChangeRotate = (rot) => {
        setRoteteShow(!roteteShow)
        setRotete(rot);
    };

    return (
        <div>
            <div className={css.div3}>
                <h5>{t("LogoPlacement")} :</h5>

                <div
                    className={css.divBase1}
                    onClick={() => handlerChangePosition("r_t")}
                >

                    <Pos1/>
                </div>
                {
                    roteteShow ? <span onClick={() => handlerChangeRotate("rote1")}></span>
                        :
                        <span
                            onClick={() => handlerChangeRotate("rote1Y")}>
                                                        </span>
                }

                <div
                    className={css.divBase1}
                    onClick={() => handlerChangePosition("l_t")}
                >
                    <Pos2/>
                </div>
                {
                    roteteShow ? <span
                            onClick={() => handlerChangeRotate("rote2")}>
                                                    </span>
                        : <span
                            onClick={() => handlerChangeRotate("rote2Y")}>
                                                        </span>
                }
                <div
                    className={css.divBase1}
                    onClick={() => handlerChangePosition("l_b")}
                >
                    <Pos3/>
                </div>
                {
                    roteteShow ? <span
                            onClick={() => handlerChangeRotate("rote3")}>
                                                    </span>
                        : <span
                            onClick={() => handlerChangeRotate("rote3Y")}>
                                                        </span>
                }
                <div
                    className={css.divBase1}
                    onClick={() => handlerChangePosition("r_b")}
                >
                    <Pos4/>
                </div>
                {
                    roteteShow ? <span
                            onClick={() => handlerChangeRotate("rote4")}>
                                                            <BsArrowDownCircle className={roteteShow ? css.rr : css.ll}/>
                                                    </span>
                        : <span
                            onClick={() => handlerChangeRotate("rote4Y")}>
                                                            <BsArrowDownCircle className={roteteShow ? css.rr : css.ll}/>
                                                        </span>
                }

            </div>
        </div>
    );
};

export default CovrikPosition;