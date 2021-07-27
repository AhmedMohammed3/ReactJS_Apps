import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
}

const ModalOverlay = props => {
    return (
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
    );
}


const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        title={props.title}
                        msg={props.msg}
                        onClose={props.onClose} />
                    , document.getElementById('overlay-root'))
            }
        </>
    );
}

export default ErrorModal;