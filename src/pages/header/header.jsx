import React from 'react'
import './header.css'
import header_img from './img/bgc.png'
export default function Header() {
    return (
        <div className='header'>
            <div className='nav'>
                <div className="header_nav">
                    <span>Новокузнечный переулок 4/1</span>
                    <span>8 (812) 123-45-67</span>
                </div>
                
                    <table className='header_tabel'>
                        <tr>
                            <td><a href="">Каталог</a></td>
                            <td><a href="">Доставка</a></td>
                            <td><a href="">Колекции</a></td>
                            <td><a href="">Контакты</a></td>
                        </tr>
                    </table>
              
            </div>

        <div className='header_btn'>
            <button>винная карта</button>
            <button>Дегустация</button>
        </div>
        </div>
    )
}
