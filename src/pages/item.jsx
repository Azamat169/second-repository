import React from 'react'
import vino from '../pages/header/img/slider.png'
import './item.css'

export default function Item() {
    return (
        <div className='item'>
            <div className="item_bottom"></div>
            <div className="item_container">
                <div className="new_item  ">
                    <h3>Новинки коллекций</h3>
                    <div className="item_title">
                        <h1>Март 1980</h1>
                        <h1> Урожай Марселя</h1></div>
                    <div className="item_top"></div>
                    <div className="item_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                    </div>
                    <table className='item_table'>
                        <tr>
                            <td rowSpan={2}>1980</td>
                            <td>Colli Euganei Bianco Ca' Lustra 1980</td>
                        </tr>
                        <tr>
                            <td>Красочная бутылка вина из Марселя</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>1980</td>
                            <td>Colli Euganei Bianco Ca' Lustra 1980</td>
                        </tr>
                        <tr>
                            <td>Красочная бутылка вина из Марселя</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>1980</td>
                            <td>Colli Euganei Bianco Ca' Lustra 1980</td>
                        </tr>
                        <tr>
                            <td>Красочная бутылка вина из Марселя</td>
                        </tr>

                    </table>
                    <div className="item_lorem">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                    </div>
                    <button className='item_btn'>узнать подробнее</button>
                </div>
                <div className="item_img">
                    <img src={vino} alt="" />
                </div>
            </div>
            <div className="item_line"></div>
        </div>
    )
}
