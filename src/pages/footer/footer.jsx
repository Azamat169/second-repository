import React from 'react'
import './footer.css'
import icon from '../header/img/soc-icons.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer_container">
        
        <table className='footer_table'>
            <tr>
                <td><a href="">Каталог</a></td>
                <td><a href="">Поставщики</a></td>
                <td><a href="">Коллекции</a></td>
                <td><a href="">Дегустация</a></td>
                <td><a href="">Коллекция 2020</a></td>
                <td><a href="">Контакты</a></td>
            </tr>
        </table>
        <table className='footer_table-item'>
            <tr>
                <td><a href="">винный бутик LE CORTE</a></td>
                <td><a href="">8 (812) 123-45-67</a></td>
                <td><a href=""><img src={icon} alt="" /></a></td>
                <td><a href="">© le-corte.ru</a></td>
            </tr>
        </table>
        </div>
     
    </div>
  )
}
