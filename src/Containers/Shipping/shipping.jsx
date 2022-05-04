import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './sipping.module.css';
import {useDispatch, useSelector} from "react-redux";
import {shippingReducers} from "../../redux/reducers/sippingReducers";
import {shippingGet} from "../../redux/actions/shipping.actions";

const Shipping = () => {

    const shippingGetData = useSelector(state => state.shippingReducers.shippingData);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(shippingGet());
    },[])

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center mt-5 mb-1">

                    <Col lg={10}>

                        <div className={css.title}>
                            <h3>Shipping & Returns</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3 mb-3">
                    <Col lg={10}>
                        <div className={css.text1}>
                            <p>{shippingGetData?.data?.text_en}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Col lg={10}>
                        <div className={css.text2}>
                            <p><p>{shippingGetData?.data?.text_en}</p></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shipping;