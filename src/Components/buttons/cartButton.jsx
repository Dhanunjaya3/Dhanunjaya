import React from "react";

const CartButton = (props)  => {
    console.log('hello props', props)
    return(
        <div back>
            <button style={{backgroundColor :'red', color : 'white'}}>Add {props.bok } {props.shit} to cart</button>
        </div>
    )

}

export default CartButton