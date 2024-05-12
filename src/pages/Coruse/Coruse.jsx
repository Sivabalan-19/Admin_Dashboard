import React from 'react'
import c from './cprogramming.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import python from './pythonprogramming.png'
import java from './java.png'
import './Home.css'

function Home() {

  return (
    <div>
      <main>
        <div className='courseimage'>
            <div className='course'>
                <div><img className='cprog' src={c} alt="" /></div>
                <div><h2 className='coursename'>C PROGRMMING</h2></div> 
            </div>

            <div className='course'>
                <div><img className='python' src={python} alt="" /></div>
                <div><h2 className='coursename'>PYTHON PROGRMMING</h2></div>
            </div>

            <div className='course'>
                <div><img className='java' src={java} alt="" /></div>
                <div><h2 className='coursename'>JAVA PROGRMMING</h2></div>
            </div>

        </div>
      </main>
    </div>
  )
}


export default Home