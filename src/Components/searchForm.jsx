import React from 'react'

const SearchForm = () => {

    const handleInputChange = (event) => {

        if (event.target.name === 'user') {
            let userName = event.target.value
            console.log('userName', userName)
        }

        if (event.target.name === 'age') {
            let userAge = event.target.value
            console.log('userAge', userAge)
        }
    }

    const onButtonClick = (event) => {
        console.log('I am Clicked' , event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form submitted')
    }
    return(
        <section>
            <form onSubmit={handleSubmit} style={{gap : '10px', display : 'flex', justifyContent : 'center'}}>
                <div>
                    <p>name</p>
                    <input type="text" name='user' style={{padding: '10px'}} onChange={handleInputChange}/>
                </div>
                <div>
                    <p>Age</p>
                    <input  type="number" name='age'  style={{padding: '10px'}} onChange={handleInputChange}/>
                </div>
                <div>
                    <button  name='demo-button' type='submit' style={{padding: '10px'}} >Submit</button>
                </div>
            </form>
        </section>
    )
}

export default SearchForm