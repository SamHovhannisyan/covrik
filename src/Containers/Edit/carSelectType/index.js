import React, {useEffect, useState} from 'react';
import css from "../edit.module.css";
import {useDispatch, useSelector} from "react-redux";
import {carIdPost, carsBrandGet, shopActions} from "../../../redux/actions/shop.actions";
import {useTranslation} from "react-i18next";

const CarSelectType = ({
                           dataMain,
                           priceData,
                           setDataMain,
                           setPrice,
                           error,
                           setChecked,
                           setCheckedCupe,
                           setValue3,
                           setValue2,
                           setValue1
                       }) => {

    const [carId, setCarId] = useState({});

    const shopCarData = useSelector(state => state.shopReducers.shopCar);
    const shopCarModelData = useSelector(state => state.shopReducers.shopCarModel);

    const {t, i18n} = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopActions());
        dispatch(carsBrandGet());
    }, []);

    const changeMainData = (e) => {
        dataMain[e.target.name] = e.target.value;
        setDataMain(dataMain);
    }

    const changeModel = (e) => {
        dataMain[e.target.name] = e.target.value;
        setDataMain(dataMain);
    }

    const addId = (e) => {
        if (dataMain.brand && dataMain.brand != e.target.value) {
            dataMain.model = '';
            dataMain[e.target.name] = e.target.value;
            setDataMain(dataMain);
            carId['id'] = e.target.value;
            setCarId(carId);
            dispatch(carIdPost(carId));
        } else {
            carId['id'] = e.target.value;
            setCarId(carId);
            dataMain[e.target.name] = e.target.value;
            setDataMain(dataMain);
            dispatch(carIdPost(carId));
        }
        setChecked(true)
        setCheckedCupe(true)
        setValue1(false)
        setValue2(false)
        setValue3(false)
        setPrice(priceData?.data?.carpet)
    };

    const moonLanding = new Date('July 20, 80 00:20:18');
    const newDate = new Date();
    let arr = [];
    for (let i = moonLanding.getFullYear(); i <= newDate.getFullYear(); i++) {
        arr.push(i);
    }
    ;


    return (
        <div>
            <p className={css.pTitile}>{t("FitYourVehicle")}</p>
            <div className={css.selectDiv}>
                <select name="model" id="cars" onChange={addId}>
                    <option value="" selected="selected" hidden="hidden">{t("ChooseBrand")}</option>
                    {shopCarData?.car?.map((item) => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.brand}
                            </option>
                        )
                    })}
                </select>
                {
                    error == true && dataMain.model == undefined ? <span className={css.error}>Required</span> : null
                }
                <select name="seria" id="cars" onChange={changeModel}
                        disabled={carId.id == undefined ? true : false}>
                    <option value="" selected="selected" hidden="hidden">{t("ChooseModel")}</option>
                    {shopCarModelData?.car_model?.map((item) => {
                        return (
                            <option key={item.id} value={item.model}
                                    name="model">{item.model}</option>
                        )
                    })}
                </select>
                {
                    error == true && dataMain.seria == undefined ? <span className={css.error}>Required</span> : null
                }
                <select name="year" disabled={carId.id == undefined ? true : false}
                        onChange={changeMainData}>
                    <option value="" selected="selected" hidden="hidden">{t("ChooseYear")}</option>
                    {arr?.map((item) => {
                        return (
                            <option name='year' value={item}>{item}</option>
                        )
                    })}
                </select>
                {
                    error == true && dataMain.year == undefined ? <span className={css.error}>Required</span> : null
                }
            </div>
        </div>
    );
};

export default CarSelectType;