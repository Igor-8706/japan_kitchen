import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
import CartItem from './CartItem';



const Cart = (props) => {
    const cartContex = useContext(CartContext);
    const addCartItemHandler = (item) => {
        cartContex.addItem({ ...item, amount: 1 })
    }
    const removeCartItemHandler = (id) => {
        cartContex.removeItem(id);
    }
    const cartItems = <ul className={styles['cart-items']}>{cartContex.items.map(item =>
        <CartItem key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
        />)
    }</ul>;

    const totalAmount = Math.abs(cartContex.totalAmount).toFixed(2) + ' $'
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onCloseCart} className={styles['button--alt']}>Закрыть</button>
                {
                    cartContex.items.length > 0 ? <button className={styles.button}>Заказать</button> : null
                }
            </div>
        </Modal>
    )

}

export default Cart