import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../css/navbar.css';
import logo from '../img/imzo-logo-white.png';
import uz from '../img/uz.svg';
import ru from '../img/ru.svg';
import gb from '../img/gb.svg';


let click = true;

export default function NaviBar() {

 


    function handleClick(e) {
        e.preventDefault();
        
        if (click) {
            $('.navbar__mobile').fadeIn(300);
            click = false;
        }
        else if (!click) {
            $('.navbar__mobile').fadeOut(300);
            click = true;
        }

    }

    /*return (
        <a href="#" onClick={handleClick}>
            Нажми на меня
        </a>
    );*/


    return (
        <>
            <div className="nav-main">
                <div className="container">
                    <div className="row">
                        <nav className="navbar__mr">
                            <a className="logo__mr" href="#">
                                <img src={logo} />
                                <h3>Oфициальный Шоурум</h3>
                            </a>
                            <ul className="unordered__list">
                                <li className="list__item"><Link to="/">Главная</Link></li>
                                <li className="list__item"><Link to="/about">Продукция</Link></li>
                                <li className="list__item"><Link to="/services">Галерея</Link></li>
                                <li className="list__item"><Link to="/products">Акция</Link></li>
                                <li className="list__item"><Link to="/contacts">Где купить?</Link></li>
                            </ul>
                            <div className="buttons">
                                <a class="measurer" href="#"><div><span>Вызвать замерщика</span></div></a>
                                <a class="phone-number" href="tel:+998977456366"><div><span>+99897 745-63-66</span></div></a>
                            </div>
                            <div id="burg">
                                <a href="#" onClick={handleClick}>
                                    <span class="bar" id="top"></span>
                                    <span class="bar" id="middle"></span>
                                    <span class="bar" id="bottom"></span>
                                </a>
                            </div>
                            <div className="languages">
                                <a class="uz" href="#"><img height={15} src={uz} /></a>
                                <a class="ru" href="#"><img height={15} src={ru} /></a>
                            </div>
                            
                        </nav>
                    </div>
                </div>

            </div>
            <nav class="navbar__mobile">
                <ul class="unordered__list__mobile">
                    <li className="list__item__mobile"><Link to="/">Главная</Link></li>
                    <li className="list__item__mobile"><Link to="/about">Продукция</Link></li>
                    <li className="list__item__mobile"><Link to="/services">Галерея</Link></li>
                    <li className="list__item__mobile"><Link to="/products">Акция</Link></li>
                    <li className="list__item__mobile"><Link to="/contacts">Где купить?</Link></li>
                </ul>
            </nav>
        </>
    )
}