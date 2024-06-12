import React from 'react'
import './section.css'
import section_icon from '..//header/img/bakal.png'


export default function Section() {
    return (
        <div className='section'>
            <div className="section_container">
                <div className="section_title ">
                    <h1>Лучший вкус, это вкус долголетнего вина</h1>
                </div>
                <div className=' section_bottom'></div>
                <div className="section_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Feugiat enim tortor in hac id imperdiet adipiscing.
                         Pellentesque nisi, mi sit non sit sed fermentum.
                          Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. 
                          Vestibulum quam ultrices nascetur et viverra suscipit. 
                          Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices.
                           Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, 
                           pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis.
                            Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus.
                             Pellentesque scelerisque nunc, orci aliquam quis.</p>
                </div>
                <div className="section_icons">
                    <img src={section_icon} alt="" />
                </div>
            </div>
           
        </div>
    )
}
