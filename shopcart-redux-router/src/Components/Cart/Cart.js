import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../Store/shopcartSlice';
import Button from '@mui/material/Button';
import './Cart.css';
import Checkout from './Checkout';
import Appbar from '../Appbar/Appbar';

export default function Cart(){

    const [checkout, setCheckout] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shopcart.cart);

    const deleteItem = (item) => {
        let newCart = [...cart];
        const filtered = newCart.filter((product) => product.id !== parseInt(item.id));
        dispatch(setCart(filtered));
    }

    return(
        <div className="cart-container">
            <Appbar/>
            <br/>
            <br/>
            <div className="cart-title">Cart</div>
            <br/>
            <br/>
            <table>
                {/* <thead>
                    <tr>
                        <th>Product</th>
                        <th>Lastname</th>
                    </tr>
                </thead> */}

                {/* <tr>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Lois</td>
                    <td>Griffin</td>
                    <td>$150</td>
                </tr>
                <tr>
                    <td>Joe</td>
                    <td>Swanson</td>
                    <td>$300</td>
                </tr>
                <tr>
                    <td>Cleveland</td>
                    <td>Brown</td>
                    <td>$250</td>
                </tr> */}
            
                {cart.map((product,index) => {
                    return(
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td><Button variant="contained" onClick={() => deleteItem(product)}>Delete Item</Button></td>
                        </tr>
                    );
                })}
                <tr>
                    <td style={{fontWeight: 'bold'}}>Total Price</td>
                    <td style={{fontWeight: 'bold'}}>{cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</td>
                    <td></td>
                </tr>
            </table>
            <br/>
            <br/>
            {checkout ? (
                <div>
                    <Checkout/>
                </div>
            ): (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="contained" onClick={() => setCheckout(true)}>Checkout</Button>
                </div>
                
            )}
            

        </div>
    );
}