
import styles from './OverPage.module.css';

const OverPage = props => {
    return (
        <div className={styles['over-page__']}>
            <h1 className={styles['over-page__heading']}>Delicious Food, Delivered To You</h1>
            <br />
            <p className={styles['over-page__paragraph']}>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <br />
            <p className={styles['over-page__paragraph']}>All our meals are cooked with high-quality ingredients,just in-time and of course by experienced chefs!</p>
        </div>
    );
}

export default OverPage;