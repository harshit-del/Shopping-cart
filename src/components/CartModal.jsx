import React from "react";
import styles from "../styles/CartModal.module.css";
import {useValue} from "../itemContext";

function CartModal() {
  const {cart, total, toggle, clear} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      {cart.map((item, index) => <div className={styles.itemContainer}>
        <div className={styles.cartCard} key = {item.id}>
        <h2>{item.name}</h2>
        <h3>X {item.qty}</h3>
        <h3>X {item.qty*item.price}</h3>
        </div>
      </div>)}
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;


