import ReactDOM  from 'react-dom'
import styles from './Modal.module.css'


const Backdrop = (props) => {
    return <div onClick={props.onCloseCart} className={styles.backdrop}></div>
}

const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const portalElement = document.createElement('div');
    document.body.appendChild(portalElement);
    return <>
        {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </>
}

export default Modal;