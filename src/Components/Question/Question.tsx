import React from 'react'
import { Button } from 'react-bootstrap'
import './Question.css'

export default function Question() {
  return (
    <>
    <div>
         <h1 className='soru'>SORU</h1>
         <p className='question'>Sence her yenilik bir inovasyon mudur ?</p>
    </div>
    
   <Button className='btn1'> inovasyondur</Button>
   <Button className='btn2'> inovasyon değildir</Button>
    
    </>
  )
}
