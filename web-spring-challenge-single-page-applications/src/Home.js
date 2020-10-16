import React from 'react'
import pizza from './Assets/Pizza.jpg'

function Home() {

    return(
        <div className='home-image'>
            <img src={pizza} alt='pizza' />
        </div>
    )
}

export default Home;