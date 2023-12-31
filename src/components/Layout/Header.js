import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Япона кухня</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img alt="sushi" src={sushiImage}/>
            </div>
        </>
    )
}

export default Header