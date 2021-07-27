import styles from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClose}/>
            <div className={styles.errormodal__}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.msg}</p>
                </div>
                <footer>
                    <button onClick={props.onClose}>Okay</button>
                </footer>
            </div>
        </div>
    );
}

export default ErrorModal;