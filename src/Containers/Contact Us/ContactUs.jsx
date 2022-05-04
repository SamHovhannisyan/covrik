import React, {useEffect, useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
// import css from "../Home/home.module.css";
import css from "./contactUs.module.css";
import contactUsCovrik from "../../images/contactUsCovrik.png";
import {useDispatch, useSelector} from "react-redux";
import {contactGet, contactPost} from "../../redux/actions/contact.actions";
import {useTranslation} from "react-i18next";

const ContactUs = () => {

  const [data, setData] = useState({})
  const [err, setErr] = useState(false)
  const [modalShow, setModalShow] = React.useState(false);

  const contactGetData = useSelector(state => state.contactReducers.contactGet);

  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(contactGet())
  }, []);

  const handleChange = (e) => {
    data[e.target.name] = e.target.value;
    setData(data);
  }

  function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Body>
            <h1 style={{
              textAlign: 'center',
              fontSize: '25px',
              color: 'green'
            }}>Thank-You Messages</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }

  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const addData = (e) => {
    e.preventDefault()
    if (!data.email || regEmail.test(data.email) === false || !data.name || !data.message) {
      setErr(true)
      console.log(data, 'dataTrue')
    } else {
      setErr(false)
      setModalShow(true)
      dispatch(contactPost(data))
      console.log(data, 'dataFalse')
    }
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
          <div className={css.logo}>
            <h2>Logo</h2>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={6}>
            <div>
              <div className={css.imgDivContact}>
                <img src={contactUsCovrik} alt="" />
              </div>
              <div className={css.textDivContact}>
                <h3>{t("Email")}</h3>
                <p>{contactGetData?.data?.email}</p>
                <h3>{t("PhoneNumber")}</h3>
                <p>{contactGetData?.data?.phone}</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className={css.divContactUs}>
              <form onChange={handleChange}>
                <h2>{t("contact_usLink")}</h2>
                <h4>{t("contactName")}</h4>
                <input type="text" placeholder="Enter your full name" name="name"/>
                {err && data.name == undefined ? <span className={css.err}>Required</span> : null}
                <h4>{t("contactEmail")}</h4>
                <input type="email" placeholder="Enter your email" name='email'/>
                {err && data.email == undefined ? <span className={css.err}>Required</span> : null}
                {err && data.email !== undefined && regEmail.test(data.email) === false ?
                    <span className={css.err}>Email Address is Valid!</span> : null}
                <h4>{t("contactMessage")}</h4>
                <input type="text" placeholder="Enter your message" name="message"/>
                {err && data.message == undefined ? <span className={css.err}>Required</span> : null}
                <button onClick={addData}>{t("buttonSend")}</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
