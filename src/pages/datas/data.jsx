import React from 'react'
import './data.css'
import foto from '../header/img/grape.png'
import foto1 from '../header/img/barrel.png'


export default function Data() {
  return (
    <div className='data'>
      <div className="data_container">
        <div className="data_title">
          <h1>Запись на дегустацию</h1>
        </div>
        <div className="data_nav">
        <div className="data_line"></div>
          <div className="data_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Feugiat enim tortor in hac id imperdiet adipiscing.
              Pellentesque nisi, mi sit non sit sed fermentum. </p>
          </div>
          <form className='form'>
            <input type="text" placeholder='ИМЯ' />
            <input type="text" placeholder='ТЕЛЕФОН' />
          </form>
          <form action="" className='form_btn'>
            <input type="text" placeholder='Бутик на Невском 103' />
            <button>записаться</button>
          </form>
        </div>
        <div>
        <img  className='grape' src={foto} alt="" />
        <img className='barrel' src={foto1} alt="" />
        </div>
      </div>
    
    </div>
  )
}
