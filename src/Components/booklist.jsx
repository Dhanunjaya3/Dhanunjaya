import React from 'react'
import { books } from '../Data/books';
import CartButton from './buttons/cartButton';
import PrewButtons from './buttons/prewButtons';

const Booklist = () => {
    return (
        <div style={{display : 'flex', gap:'20px', justifyContent: 'center' }}>
        {
            books.map((book) => {
                return(
                    <div>
                        <img src={book.img} alt='images' style={{height :'200px', width : '160px'}}/>
                        <h3>{book.tittle}</h3>
                        <p>{book.author}</p>
                        <div style={{display: 'flex', gap: '5px', marginBottom: '10px'}}>
                            <CartButton bok={book.tittle} />
                            <PrewButtons />
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}

export default Booklist
