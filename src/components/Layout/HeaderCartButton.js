import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [isButtonAnimated, setIsButtonAnimated] = useState(false)
    const cartContext = useContext(CartContext)

    useEffect(() => {
        if (cartContext.items.length === 0) return
        setIsButtonAnimated(true);
        const timer = setTimeout(() => {
            setIsButtonAnimated(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0)

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Корзина</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    )
}

export default HeaderCartButton