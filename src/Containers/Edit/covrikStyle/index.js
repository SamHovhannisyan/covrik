import React, {useState} from 'react';
import css from "../edit.module.css";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const CovrikStyle = ({
                         value3,
                         setValue3,
                         setValue2,
                         value2,
                         value1,
                         setValue1,
                         orderData,
                         setOrderData,
                         setPrice,
                         price,
                         setColors,
                     }) => {


    const {t, i18n} = useTranslation();

    const priceData = useSelector(state => state.shopReducers.priceGet);

    const testColor = Number(priceData?.data?.color);
    const testSideSeamColor = Number(priceData?.data?.seamcolor);
    const testSewingColor = Number(priceData?.data?.sewingcolor);

    const [colorStyle, setColorStyle] = useState(false)

    const testFunction = data => {
        if (data.type === 'color') {
            document.getElementById("1").style.fill = data.color
            let z = {...orderData, color: data.color};
            setOrderData(z);
            if (!value1) {
                setPrice(price + testColor)
                setColorStyle(true)
                setValue1(true)
            }
            return;
        } else if (data.type === 'side_color') {
            setColors(data.color);
            let a = {...orderData, line: data.color};
            setOrderData(a);
            if (!value2) {
                setPrice(price + testSideSeamColor)
                setValue2(true)
            }
            return;
        } else if (data.type === 'sewing_color') {
            document.getElementById("1").style.stroke = data.color
            let z = {...orderData, color: data.color};
            setOrderData(z);
            if (!value3) {
                setPrice(price + testSewingColor)
                setValue3(true)
            }
            return;
        }
    }

    const testColorArray = ['black', 'white', 'silver', 'blue', 'red'];

    const colorCol1 = testColorArray.map(c => {
        const cssStyle = {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: c,
            border: '1px solid #000',
            cursor: "pointer"
        }
        return <div
            style={cssStyle}
            onClick={() => testFunction({type: 'color', color: c})}
        />
    })

    const colorCol2 = testColorArray.map(c => {
        const cssStyle = {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: c,
            border: '1px solid #000',
            cursor: "pointer"
        }
        return <div
            style={cssStyle}
            onClick={() => testFunction({type: 'side_color', color: c})}
        />
    })

    const colorCol3 = testColorArray.map(c => {
        const cssStyle = {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: c,
            border: '1px solid #000',
            cursor: "pointer"
        }
        return <div
            style={cssStyle}
            onClick={() => testFunction({type: 'sewing_color', color: c})}
        />
    })

    return (
        <div>
            <div className={css.div3}>
                <h5>{t("Color")} :</h5>
                {colorCol1}
            </div>

            <div className={css.div3}>
                <h5>{t("SideSeamColor")} :</h5>
                {colorCol2}
            </div>

            <div className={css.div3}>
                <h5>{t("SewingColor")} :</h5>
                {colorCol3}
            </div>
        </div>
    );
};

export default CovrikStyle;