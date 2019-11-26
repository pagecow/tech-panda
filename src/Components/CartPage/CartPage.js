// This component will display the items on the cart, as well as the checkout options. It will also hold the functions to send the cart to the database to be stored there, as well as to check if there are any saved carts for the current user(if any) and load them. 

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser, getCart } from '../../redux/reducer'
import axios from 'axios';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
// import { withRouter } from 'react-router-dom';
import Form from '../StripeComponent/Form';
import CartDisplay from './CartDisplay'

// Style //

import './CartPage.css';


//-----Stripe Import----//



function CartPage(props) {
    const [cart, setCart] = useState({})

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    useEffect(() => {
        if(props.user.user_id){
           props.getCart(props.user.user_id)
        }
    }, [])
    
    for(const prop in props.cart){
        console.log(prop, props.cart)
    }
    console.log(props)  
    console.log(props.cart[0])  
    const dbCart = props.cart[0]

    return (
        <div>
            <HomeProductHeaderOne />
            <div>
                CartPage            
                <div>
                    {dbCart ? (
                        dbCart.map(e => {
                            return <CartDisplay productObj={e}/>
                        }
                        )
                    ) : (
                        props.cart.map(e => {
                            return <CartDisplay productObj={e}/>
                        }
                        )
                    )}
                </div>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
    getUser, 
    getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);


// {cart.firstProduct ? (
//     <div>
//         <p>hit db cart data</p>
//         {cart.firstProduct.name}<br/>
//         {cart.firstProduct.color}<br/>
//         {cart.firstProduct.storage}<br/>
//         {cart.firstProduct.size}<br/>
//         {cart.firstProduct.panda_care}<br/>
//         {cart.firstProduct.price}<br/>
//             {cart.secondProduct ? (
//                 <div>
//                     <p>hit db cart data</p>
//                     {cart.secondProduct.name}<br/>
//                     {cart.secondProduct.color}<br/>
//                     {cart.secondProduct.storage}<br/>
//                     {cart.secondProduct.size}<br/>
//                     {cart.secondProduct.panda_care}<br/>
//                     {cart.secondProduct.price}<br/>

                    
//                     {cart.thirdProduct ? (
//                         <div>
//                             {cart.thirdProduct.name}<br/>
//                             {cart.thirdProduct.color}<br/>
//                             {cart.thirdProduct.storage}<br/>
//                             {cart.thirdProduct.size}<br/>
//                             {cart.thirdProduct.panda_care}<br/>
//                             {cart.thirdProduct.price}<br/>
//                         </div>
//                     ): null}
                
//                 </div>
//             ): null}
//     </div>
// ) : (
//     <div>
//         {cart.productName ? (
//             <div>
//                 hit cart.productName<br/>
//                 {cart.productName}<br/>
//                 {cart.productColor}<br/>
//                 {cart.productStorage}<br/>
//                 {cart.productSize}
//                 {cart.pandaCare ? (
//                     <p>with PandaCare</p>
//                 ) : (
//                     <p>You are defenseless.</p>
//                 )}
//                 {cart.productPrice}<br/>
//             </div>
//         ) : (
//             <p>nothing in cart</p>
//         )}
//     </div>
// )}