import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import './Report.css'

function Home() {

    const data = [
        {
          name: 'Question A',
          Attempt: 1000,
          Passed: 200,
          Malpractice : 20,
          amt: 2400,
        },
        {
          name: 'Question B',
          Attempt: 1208,
          Passed: 564,
          Malpractice : 10,
          amt: 2210,
        },
        {
          name: 'Question C',
          Attempt: 850,
          Passed: 640,
          Malpractice : 8,
          amt: 2290,
        },
        {
          name: 'Question D',
          Attempt: 780,
          Passed: 598,
          Malpractice : 30,
          amt: 2000,
        },
        {
          name: 'Question E',
          Attempt: 890,
          Passed: 480,
          Malpractice : 7,
          amt: 2181,
        },
        {
          name: 'Question F',
          Attempt: 390,
          Passed: 380,
          Malpractice : 0,
          amt: 2500,
        },
        {
          name: 'Question G',
          Attempt: 490,
          Passed: 430,
          Malpractice : 15,
          amt: 2100,
        },
        
      ];
     

  return (
    <main className='main-container'>
        
        <div className='charts'>
            <div>
              <ResponsiveContainer>
              <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Attempt" fill="#8884d8" />
                  <Bar dataKey="Passed" fill="#82ca9d" />
                  <Bar dataKey="Malpractice" fill="red" />
                  </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <ResponsiveContainer>
                  <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Attempt" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Passed" stroke="#82ca9d" />
                  </LineChart>
              </ResponsiveContainer>
            </div>

        </div>
    </main>
  )
}

export default Home