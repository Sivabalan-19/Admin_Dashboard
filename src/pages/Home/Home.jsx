import React from 'react'
import './Home.css'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SYSTEMS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>65</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total COURSES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>1526</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>MAL PRACTICE</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>51</h1>
            </div>
        </div>
    </main>
  )
}

export default Home