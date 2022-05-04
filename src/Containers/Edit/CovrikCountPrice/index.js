import React from 'react';
import css from "../edit.module.css";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/all";
import {useTranslation} from "react-i18next";

const CovrikPrice = ({count, setCount, dataMain, setDataMain, price, setPrice}) => {

    const {t, i18n} = useTranslation();

    const hanlderMinusChange = () => {
        setCount(count - 1);
        setPrice(price - price)
        dataMain["count"] = count - 1;
        setDataMain(dataMain)
    };

    const handlerPlusChange = () => {
        setCount(count + 1);
        setPrice(price + price)
        dataMain["count"] = count + 1;
        setDataMain(dataMain)
    };

    return (
        <div>
            <div className={css.productDiv4}>
                <h4>{t("Quantity")}</h4>
                <div className={css.countes}>
                    {
                        count <= 1 ? <i>
                            <AiOutlineMinus/>
                        </i> : <i onClick={hanlderMinusChange}>
                            <AiOutlineMinus/>
                        </i>
                    }
                    <h2>{count}</h2>
                    <i onClick={handlerPlusChange}>
                        <AiOutlinePlus/>
                    </i>
                </div>
            </div>

        </div>
    );
};

export default CovrikPrice;