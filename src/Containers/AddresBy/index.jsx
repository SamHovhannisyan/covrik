import React from "react";
import styles from "./AddressBy.module.css";

const AddressBy = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={styles.infoBlock}>
                        <form action="">
                            <div className={styles.itemINp}>
                                <p>Name</p>
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div className={styles.itemINp}>
                                <p>Surname</p>
                                <input type="text" placeholder="Enter your surname"/>
                            </div>
                            <div className={styles.itemINp}>
                                <p>Email address</p>
                                <input type="text" placeholder="Enter your email addresss"/>
                            </div>
                            <div className={styles.itemINp}>
                                <p>Phone number</p>
                                <input type="number" placeholder="Enter your phone number"/>
                            </div>
                            <div className={styles.itemINp}>
                                <p>Your city</p>
                                <input type="text" placeholder="Write"/>
                            </div>
                            <div className={styles.itemINp}>
                                <p>Your address</p>
                                <input type="text" placeholder="Enter your address"/>
                            </div>
                            <div className={styles.itemINp}>
                                <p>Postal code</p>
                                <input type="text" placeholder="230"/>
                            </div>
                        </form>
                    </div>
                    <div className={styles.total_block}>
                        <h2 className={styles.total_item}>Total 1000$</h2>
                    </div>
                    <div className={styles.total_block}>
                        <h3 clas={styles.subtitile}>Payment method</h3>
                        <div className={styles.payment_inp}>
                            <input type="radio" name="payment"/>
                            <p>Debit / Credit card</p>
                        </div>
                        <div className={styles.payment_inp}>
                            <input type="radio" name="payment"/>
                            <p>Paypal Wallet</p>
                        </div>
                    </div>
                    <button type="submit" className={styles.by_send}>
                        Buy
                    </button>
                </div>
            </section>
        </>
    );
};

export default AddressBy;
