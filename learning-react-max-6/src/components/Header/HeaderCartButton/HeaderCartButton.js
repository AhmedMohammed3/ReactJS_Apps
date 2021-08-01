
import CartIcon from './CartIcon/CarIcon'
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ itemsNumber, onClick }) => {
    return (
        <button onClick={onClick} className={styles['cart-button__']}>
            <span className={styles['cart-button__icon']}><CartIcon /></span>
            &nbsp;Your Cart&nbsp;
            <span className={styles["cart-button__items-number"]}>{itemsNumber}</span>
        </button>
    );
}

export default HeaderCartButton;