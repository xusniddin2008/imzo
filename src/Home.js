import React from 'react';
import $ from 'jquery';
import './css/home.css'
import sample from './video/imzo.mp4';
import termo78 from './img/product/termo78.jpg';
import termo78i from './img/product/termo78-inner.png';
import termo781 from './img/product/termo78(1).png';
import termo782 from './img/product/termo78(2).png';
import termo783 from './img/product/termo78(3).png';
import termo784 from './img/product/termo78(4).png';
import termo65 from './img/product/termo65.png';
import termo65i from './img/product/termo65-inner.png';
import termo651 from './img/product/termo65(1).png';
import termo652 from './img/product/termo65(2).png';
import termo653 from './img/product/termo65(3).jpg';
import termo654 from './img/product/termo65(4).png';
import champion from './img/product/champion.jpg';
import championi from './img/product/champion-inner.png';
import champion1 from './img/product/champion(1).jpg';
import champion2 from './img/product/champion(2).png';
import engelberg80 from './img/product/engelberg80.png';
import engelberg80i from './img/product/engelberg80-inner.png';
import engelberg801 from './img/product/engelberg80(1).png';
import engelberg802 from './img/product/engelberg80(2).png';
import engelberg70 from './img/product/engelberg70.png';
import engelberg70i from './img/product/engelberg70-inner.png';
import engelberg701 from './img/product/engelberg70(1).jpg';
import engelberg702 from './img/product/engelberg76(2).png';
import engelberg703 from './img/product/engelberg70(3).jpg';
import engelberg704 from './img/product/engelberg70(4).png';
import trio60 from './img/product/trio60.jpg';
import trio60i from './img/product/trio60-inner.png';
import trio601 from './img/product/trio60(1).jpg';
import trio602 from './img/product/trio60(2).png';
import trio603 from './img/product/trio60(3).png';
import trio604 from './img/product/trio60(4).png';
import quattro60 from './img/product/quattro60.jpg';
import quattro60i from './img/product/quattro60-inner.png';
import quattro601 from './img/product/quattro60(1).jpg';
import quattro602 from './img/product/quattro60(2).png';
import bkh65 from './img/product/bkh65.jpg';
import bkh65i from './img/product/bkh65-inner.png';
import bkh651 from './img/product/bkh65(1).png';
import bkh652 from './img/product/bkh65(2).png';
import bkh38 from './img/product/bkh38.jpg';
import bkh38i from './img/product/bkh38-inner.png';
import bkh381 from './img/product/bkh38(1).png';
import bkh382 from './img/product/bkh38(2).png';
import bkf from './img/product/bkf.png';
import bkfi from './img/product/bkf-inner.png';
import bkf1 from './img/product/bkf(1).jpg';
import bkf2 from './img/product/bkf(2).png';
import bkf3 from './img/product/bkf(3).png';
import sv from './img/product/sv.png';
import svi from './img/product/sv-inner.jpg';
import sv1 from './img/product/sv(1).png';
import sv2 from './img/product/sv(2).jpg';
import fittings from './img/product/fittings.png';
import roto from './img/roto.svg';
import hoppe from './img/hoppe.svg';
import akfa from './img/Akfa_logo.png';
import fabfix from './img/fab&fix.png';
import stublina from './img/stublina.png';
import master from './img/master.png';
import fittings1 from './img/product/fittings(1).png';
import fittings2 from './img/product/fittings(2).png';
import fittings3 from './img/product/fittings(3).png';
import fittings4 from './img/product/fittings(4).png';
import fittings5 from './img/product/fittings(5).png';
import fittings6 from './img/product/fittings(6).png';
import fittings7 from './img/product/fittings(7).png';
import fittings8 from './img/product/fittings(8).png';
import fittings9 from './img/product/fittings(9).png';
import fittings10 from './img/product/fittings(10).png';
import fittings11 from './img/product/fittings(11).png';
import fittings12 from './img/product/fittings(12).png';
import rv from './img/product/rv.png';
import rvi from './img/product/rv-inner.png';
import rv1 from './img/product/rv(1).png';
import rv2 from './img/product/rv(2).png';
import rv3 from './img/product/rv(3).png';
import Engelberg from './img/Engelberg.png';


import next from './img/next.svg';
import prev from './img/prev.svg';


let click1n = 0;
let click1p = 0;
let click2n = 0;
let click2p = 0;
let click3n = 0;
let click3p = 0;
let click4n = 0;
let click4p = 0;
let click5n = 0;
let click5p = 0;
let click6n = 0;
let click6p = 0;
let click7n = 0;
let click7p = 0;
let click8n = 0;
let click8p = 0;
let click9n = 0;
let click9p = 0;
let click10n = 0;
let click10p = 0;
let click11n = 0;
let click11p = 0;
let click12n = 0;
let click12p = 0;
let click13n = 0;
let click13p = 0;

export default function Home() {

    function handleClickR1(e) {
        e.preventDefault();

        if (click1n == 0) {
            $('.carousel1').animate({ right: "100%" });
            $('.control-prev1').animate({ opacity: "1" });
            click1n = 1;
            click1p = 2;
        }
        else if (click1n == 1) {
            $('.carousel1').animate({ right: "200%" });
            $('.control-next1').animate({ opacity: "0.4" });


            click1n = 2;
            click1p = 1;
        }
    }
    function handleClickL1(e) {
        e.preventDefault();

        if (click1p == 1) {
            $('.carousel1').animate({ right: "100%" });
            $('.control-next1').animate({ opacity: "1" });
            click1p = 2;
            click1n = 1;
        }
        else if (click1p == 2) {
            $('.carousel1').animate({ right: "0%" });
            $('.control-prev1').animate({ opacity: "0.4" });
            click1p = 0;
            click1n = 0;
        }
    }

    function handleClickR2(e) {
        e.preventDefault();

        if (click2n == 0) {
            $('.carousel2').animate({ right: "100%" });
            $('.control-prev2').animate({ opacity: "1" });
            click2n = 1;
            click2p = 2;
        }
        else if (click2n == 1) {
            $('.carousel2').animate({ right: "200%" });
            $('.control-next2').animate({ opacity: "0.4" });


            click2n = 2;
            click2p = 1;
        }
    }
    function handleClickL2(e) {
        e.preventDefault();

        if (click2p == 1) {
            $('.carousel2').animate({ right: "100%" });
            $('.control-next2').animate({ opacity: "1" });
            click2p = 2;
            click2n = 1;
        }
        else if (click2p == 2) {
            $('.carousel2').animate({ right: "0%" });
            $('.control-prev2').animate({ opacity: "0.4" });
            click2p = 0;
            click2n = 0;
        }
    }

    function handleClickR3(e) {
        e.preventDefault();

        if (click3n == 0) {
            $('.carousel3').animate({ right: "100%" });
            $('.control-prev3').animate({ opacity: "1" });
            $('.control-next3').animate({ opacity: "0.4" });
            click3n = 1;
            click3p = 2;
        }

    }
    function handleClickL3(e) {
        e.preventDefault();


        if (click3p == 2) {
            $('.carousel3').animate({ right: "0%" });
            $('.control-prev3').animate({ opacity: "0.4" });
            $('.control-next3').animate({ opacity: "1" });
            click3p = 0;
            click3n = 0;
        }
    }

    function handleClickR4(e) {
        e.preventDefault();

        if (click4n == 0) {
            $('.carousel4').animate({ right: "100%" });
            $('.control-prev4').animate({ opacity: "1" });
            $('.control-next4').animate({ opacity: "0.4" });
            click4n = 1;
            click4p = 2;
        }

    }
    function handleClickL4(e) {
        e.preventDefault();


        if (click4p == 2) {
            $('.carousel4').animate({ right: "0%" });
            $('.control-prev4').animate({ opacity: "0.4" });
            $('.control-next4').animate({ opacity: "1" });
            click4p = 0;
            click4n = 0;
        }
    }

    function handleClickL5(e) {
        e.preventDefault();

        if (click5p == 1) {
            $('.carousel5').animate({ right: "100%" });
            $('.control-next5').animate({ opacity: "1" });
            click5p = 2;
            click5n = 1;
        }
        else if (click5p == 2) {
            $('.carousel5').animate({ right: "0%" });
            $('.control-prev5').animate({ opacity: "0.4" });
            click5p = 0;
            click5n = 0;
        }
    }

    function handleClickR5(e) {
        e.preventDefault();

        if (click5n == 0) {
            $('.carousel5').animate({ right: "100%" });
            $('.control-prev5').animate({ opacity: "1" });
            click5n = 1;
            click5p = 2;
        }
        else if (click5n == 1) {
            $('.carousel5').animate({ right: "200%" });
            $('.control-next5').animate({ opacity: "0.4" });


            click5n = 2;
            click5p = 1;
        }
    }

    function handleClickR6(e) {
        e.preventDefault();

        if (click6n == 0) {
            $('.carousel6').animate({ right: "100%" });
            $('.control-prev6').animate({ opacity: "1" });
            click6n = 1;
            click6p = 2;
        }
        else if (click6n == 1) {
            $('.carousel6').animate({ right: "200%" });
            $('.control-next6').animate({ opacity: "0.4" });


            click6n = 2;
            click6p = 1;
        }
    }
    function handleClickL6(e) {
        e.preventDefault();

        if (click6p == 1) {
            $('.carousel6').animate({ right: "100%" });
            $('.control-next6').animate({ opacity: "1" });
            click6p = 2;
            click6n = 1;
        }
        else if (click6p == 2) {
            $('.carousel6').animate({ right: "0%" });
            $('.control-prev6').animate({ opacity: "0.4" });
            click6p = 0;
            click6n = 0;
        }
    }

    function handleClickR7(e) {
        e.preventDefault();

        if (click7n == 0) {
            $('.carousel7').animate({ right: "100%" });
            $('.control-prev7').animate({ opacity: "1" });
            $('.control-next7').animate({ opacity: "0.4" });
            click7n = 1;
            click7p = 2;
        }

    }
    function handleClickL7(e) {
        e.preventDefault();


        if (click7p == 2) {
            $('.carousel7').animate({ right: "0%" });
            $('.control-prev7').animate({ opacity: "0.4" });
            $('.control-next7').animate({ opacity: "1" });
            click7p = 0;
            click7n = 0;
        }
    }

    function handleClickR8(e) {
        e.preventDefault();

        if (click8n == 0) {
            $('.carousel8').animate({ right: "100%" });
            $('.control-prev8').animate({ opacity: "1" });
            $('.control-next8').animate({ opacity: "0.4" });
            click8n = 1;
            click8p = 2;
        }

    }
    function handleClickL8(e) {
        e.preventDefault();


        if (click8p == 2) {
            $('.carousel8').animate({ right: "0%" });
            $('.control-prev8').animate({ opacity: "0.4" });
            $('.control-next8').animate({ opacity: "1" });
            click8p = 0;
            click8n = 0;
        }
    }

    function handleClickR9(e) {
        e.preventDefault();

        if (click9n == 0) {
            $('.carousel9').animate({ right: "100%" });
            $('.control-prev9').animate({ opacity: "1" });
            $('.control-next9').animate({ opacity: "0.4" });
            click9n = 1;
            click9p = 2;
        }

    }
    function handleClickL9(e) {
        e.preventDefault();


        if (click9p == 2) {
            $('.carousel9').animate({ right: "0%" });
            $('.control-prev9').animate({ opacity: "0.4" });
            $('.control-next9').animate({ opacity: "1" });
            click9p = 0;
            click9n = 0;
        }
    }
    function handleClickR10(e) {
        e.preventDefault();

        if (click10n == 0) {
            $('.carousel10').animate({ right: "100%" });
            $('.control-prev10').animate({ opacity: "1" });
            click10n = 1;
            click10p = 2;
        }
        else if (click10n == 1) {
            $('.carousel10').animate({ right: "200%" });
            $('.control-next10').animate({ opacity: "0.4" });


            click10n = 2;
            click10p = 1;
        }
    }
    function handleClickL10(e) {
        e.preventDefault();

        if (click10p == 1) {
            $('.carousel10').animate({ right: "100%" });
            $('.control-next10').animate({ opacity: "1" });
            click10p = 2;
            click10n = 1;
        }
        else if (click10p == 2) {
            $('.carousel10').animate({ right: "0%" });
            $('.control-prev10').animate({ opacity: "0.4" });
            click10p = 0;
            click10n = 0;
        }
    }
    function handleClickR11(e) {
        e.preventDefault();

        if (click11n == 0) {
            $('.carousel11').animate({ right: "100%" });
            $('.control-prev11').animate({ opacity: "1" });
            $('.control-next11').animate({ opacity: "0.4" });
            click11n = 1;
            click11p = 2;
        }

    }
    function handleClickL11(e) {
        e.preventDefault();


        if (click11p == 2) {
            $('.carousel11').animate({ right: "0%" });
            $('.control-prev11').animate({ opacity: "0.4" });
            $('.control-next11').animate({ opacity: "1" });
            click11p = 0;
            click11n = 0;
        }
    }

    function handleClickR12(e) {
        e.preventDefault();

        if (click12n == 0) {
            $('.carousel12').animate({ right: "100%" });
            $('.control-prev12').animate({ opacity: "1" });
            click12n = 1;
            click12p = 2;
        }
        else if (click12n == 1) {
            $('.carousel12').animate({ right: "200%" });
            $('.control-prev12').animate({ opacity: "1" });
            click12n = 2;
            click12p = 1;
        }
        else if (click12n == 2) {
            $('.carousel12').animate({ right: "300%" });
            $('.control-next12').animate({ opacity: "0.4" });


            click12n = 3;
            click12p = 0;
        }
    }
    function handleClickL12(e) {
        e.preventDefault();

        if (click12p == 0) {
            $('.carousel12').animate({ right: "200%" });
            $('.control-next12').animate({ opacity: "1" });
            click12p = 1;
            click12n = 2;
        }
        else if (click12p == 1) {
            $('.carousel12').animate({ right: "100%" });
            $('.control-next12').animate({ opacity: "1" });
            click12p = 2;
            click12n = 1;
        }
        else if (click12p == 2) {
            $('.carousel12').animate({ right: "0%" });
            $('.control-prev12').animate({ opacity: "0.4" });
            click12p = 3;
            click12n = 0;
        }
    }
    function handleClickR13(e) {
        e.preventDefault();

        if (click13n == 0) {
            $('.carousel13').animate({ right: "100%" });
            $('.control-prev13').animate({ opacity: "1" });
            $('.control-next13').animate({ opacity: "0.4" });
            click13n = 1;
            click13p = 2;
        }

    }
    function handleClickL13(e) {
        e.preventDefault();


        if (click13p == 2) {
            $('.carousel13').animate({ right: "0%" });
            $('.control-prev13').animate({ opacity: "0.4" });
            $('.control-next13').animate({ opacity: "1" });
            click13p = 0;
            click13n = 0;
        }
    }
    return (
        <>
            <div className="video">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>

            <div className="shadow">
                <h2>Алюминиевый окна</h2>
            </div>
            <div>
                <div class="carousel carousel1">
                    <div class="carousel-item1 carousel1-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg Thermo 78</h3>
                            <img className="brand" src={Engelberg} alt="..." />
                            <img src={termo78} class="d-block w-100" alt="..." />

                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={termo78i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>Алюминиевый</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Количество камер<span>3</span></li>
                                    <li>Толщина стенки профиля<span>1,4 мм</span></li>
                                    <li>Монтажная плоскость <span>78 мм</span></li>
                                    <li>Максимальная высота створки<span>3000 мм</span></li>
                                    <li>Максимальная ширина створки<span>1000 мм</span></li>
                                    <li>Толщина стеклопакета<span>20-32 мм</span></li>
                                    <li>Покрытие<span>Анодирование, цвета RAL, Ламинация</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel1-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg Thermo 78</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-65vw" }} alt="..." />
                            <img src={termo781} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={termo782} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Комфортно в любую погоду</h4>
                                    <p>Стеклопакет с повышенными энергосберегающими свойствами выбирают и когда необходим высокий уровень непроницаемости шума, к примеру, если дом находится рядом с аэродромом, вокзалом или другими шумными местами. Он считается самым теплым (теплоизолирующие свойства на 30-50% выше) и звукоизоляционным стеклопакетом. Благодаря использования технологии I-glass в стеклопакете одно стекло покрыто тонким i-покрытием, пропускающим свет и тепловое излучение солнца и отражающим тепловую энергию от отопительных приборов обратно в помещение.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item3 carousel1-item3">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg Thermo 78</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-65vw" }} alt="..." />
                            <img src={termo783} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={termo784} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Прочная конструкция</h4>
                                    <p>Массивный “теплый“ профиль позволяет монтировать трёхстёкольный пакет с улучшенными характеристиками теплоизоляции. Кроме того, положительно влияет на звукоизоляцию окна - шума с улицы значительно стишен. В этом окне предусмотрено все: инновационная компоновка камер, стеклопакет с аргоном и энергосберегающим стеклом, современная комплектация импортной фурнитуры, исключающую продувания.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev1" onClick={handleClickL1}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next1" onClick={handleClickR1}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div>
                <div class="carousel carousel2">
                    <div class="carousel-item1 carousel2-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg Thermo 65</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-80vw" }} alt="..." />
                            <img src={termo65} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={termo65i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>Алюминиевый</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Количество камер<span>3</span></li>
                                    <li>Толщина стенки профиля<span>1,4 мм</span></li>
                                    <li>Монтажная плоскость <span>65 мм</span></li>
                                    <li>Максимальная высота створки<span>3000 мм</span></li>
                                    <li>Максимальная ширина створки<span>1000 мм</span></li>
                                    <li>Толщина стеклопакета<span>20-32 мм</span></li>
                                    <li>Покрытие<span>Анодирование, цвета RAL, Ламинация, Вакуум, 3D</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel2-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg Thermo 65</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-65vw" }} alt="..." />
                            <img src={termo651} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={termo652} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Надежность и износостойкость</h4>
                                    <p>Вам нужны прочные окна, которые сложно сломать или деформировать? Выбирайте Engelberg Ther- mo 65. Они созданы для активного использования, устойчивы к коррозии и изменениям погоды, не боятся солнца, дождя и холода. При правильной установке безупречная работа десятилетиями гарантирована!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item3 carousel2-item3">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg Thermo 65</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-65vw" }} alt="..." />
                            <img src={termo653} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={termo654} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Прочная конструкция</h4>
                                    <p>Массивный “теплый“ профиль позволяет монтировать трёхстёкольный пакет с улучшенными характеристиками теплоизоляции. Кроме того, положительно влияет на звукоизоляцию окна - шума с улицы значительно стишен. В этом окне предусмотрено все: инновационная компоновка камер, стеклопакет с аргоном и энергосберегающим стеклом, современная комплектация импортной фурнитуры, исключающую продувания.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev2" onClick={handleClickL2}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next2" onClick={handleClickR2}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div>
                <div class="carousel carousel3">
                    <div class="carousel-item1 carousel3-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Champion</h3>
                            <img src={champion} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={championi} class="" alt="..." style={{ padding: "0 0 0 3vw" }} />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>Алюминиевый</span></li>
                                    <li>Серия профиля<span>Холодная</span></li>

                                    <li>Толщина стенки профиля<span>1,1 мм</span></li>
                                    <li>Монтажная плоскость <span>47 мм</span></li>
                                    <li>Максимальная высота створки<span>2700 мм</span></li>
                                    <li>Максимальная ширина створки<span>1000 мм</span></li>
                                    <li>Толщина стеклопакета<span>20 мм</span></li>
                                    <li>Покрытие<span>Анодирование, цвета RAL, Ламинация, Вакуум, 3DZ</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel3-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Champion</h3>
                            <img src={champion1} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={champion2} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Легкие и функциональные</h4>
                                    <p>Рамы из алюминия значительно меньше весят, проще в установке и не требуют подготовки основательной опоры. При желании алюминиевую конструкцию можно установить непосредственно на металлическое ограждение балкона. Применяется эта система и для летних помещений: беседок, веранд и террас.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <a class="control-prev control-prev3" onClick={handleClickL3}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next3" onClick={handleClickR3}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div className="shadow">
                <h2>Пластиковые окна</h2>
            </div>

            <div >
                <div class="carousel carousel4">
                    <div class="carousel-item1 carousel4-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg 8000</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-80vw" }} alt="..." />
                            <img src={engelberg80} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={engelberg80i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>ПВХ</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Количество камер<span>6</span></li>
                                    <li>Толщина стенки профиля<span>2,8 мм</span></li>
                                    <li>Монтажная плоскость <span>76 мм</span></li>
                                    <li>Максимальная высота створки<span>2000 мм</span></li>
                                    <li>Максимальная ширина створки<span>1000 мм</span></li>
                                    <li>Толщина стеклопакета<span>24-32 мм</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel4-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg 8000</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-65vw" }} alt="..." />
                            <img src={engelberg801} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={engelberg802} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Универсальная конструкция</h4>
                                    <p>Монтажная глубина системы позволяет применять еево многих конструкциях:
                                        <br></br>
                                        - Окна и входные двери в жилых зданиях, офисных помещениях и в различных общественных и производственных зданиях;
                                        <br></br>
                                        - Оконные и дверные конструкции там, где использование других материалов, по архитектурным или конструктивным требованиям невозможно.
                                        <br></br>
                                        - Различные типы рамных конструкций, к которым предъявляются повышенные теплоизоляционные и звукоизоляционные требования.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <a class="control-prev control-prev4" onClick={handleClickL4}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next4" onClick={handleClickR4}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div >
                <div class="carousel carousel5">
                    <div class="carousel-item1 carousel5-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg 7000</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-80vw" }} alt="..." />
                            <img src={engelberg70} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={engelberg70i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>ПВХ</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Количество камер<span>5</span></li>
                                    <li>Толщина стенки профиля<span>2,8 мм</span></li>
                                    <li>Монтажная плоскость <span>70 мм</span></li>
                                    <li>Максимальная высота створки<span>2300 мм</span></li>
                                    <li>Максимальная ширина створки<span>1000 мм</span></li>
                                    <li>Толщина стеклопакета<span>24-30 мм</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel5-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg 7000</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-63vw" }} alt="..." />
                            <img src={engelberg701} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={engelberg702} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Летняя прохлада</h4>
                                    <p>Модель Engelberg разработана специально для климатических условий Средней Азии — они обеспечивают высокий уровень энергосбережения, что особенно важно жарким летом. Даже в самую знойную погоду окна Engelberg 70 помогут создать в доме комфортную температуру.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item3 carousel5-item3">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Engelberg 7000</h3>
                            <img className="brand" src={Engelberg} style={{ marginTop: "-63vw" }} alt="..." />
                            <img src={engelberg703} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={engelberg704} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>И теплая зима</h4>
                                    <p>В зимний период аргонное наполнение активно препятствует теплообмену между улицей и домом, а специальное покрытие i-стекла отражает тепловые волны обратно в дом.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev5" onClick={handleClickL5}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next5" onClick={handleClickR5}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div >
                <div class="carousel carousel6">
                    <div class="carousel-item1 carousel6-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Trio 6000</h3>
                            <img src={trio60} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={trio60i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>ПВХ</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Количество камер<span>3</span></li>
                                    <li>Толщина стенки профиля<span>2,8 мм</span></li>
                                    <li>Монтажная плоскость <span>60 мм</span></li>
                                    <li>Максимальная высота створки<span>1800 мм</span></li>
                                    <li>Максимальная ширина створки<span>800 мм</span></li>
                                    <li>Толщина стеклопакета<span>20 мм</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel6-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Trio 6000</h3>
                            <img src={trio601} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={trio602} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Яркая индивидуальность</h4>
                                    <p>Мы используем максимальные возможности для оформления интерьера. Imzo Trio с технологией ламинирования LifeLike® способно подчеркнуть и дополнить самые смелые дизайнерские задумки. Каждый сможет найти вариант, наилучшим образом подходящий по стилистике помещения.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item3 carousel6-item3">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Trio 6000</h3>
                            <img src={trio603} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={trio604} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Профиль класса "А"</h4>
                                    <p>Помимо превосходных внешних данных, конструкции серии IMZO TRIO 60 имеют замечательные показатели по сохранению тепла и защиты от уличного шума Основные преимущества данной серии профиля – толщина стенки 2.8 мм, а также возможность установки дополнительного контура уплотнения помогут сократить энергопотери и в перспективе сэкономить средства. С этими окнами ваш дом надежно защищён от сквозняков, холода, влаги и солнца.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev6" onClick={handleClickL6}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next6" onClick={handleClickR6}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div >
                <div class="carousel carousel7">
                    <div class="carousel-item1 carousel7-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Quattro 6000</h3>
                            <img src={quattro60} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={quattro60i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>ПВХ</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Количество камер<span>4</span></li>
                                    <li>Толщина стенки профиля<span>2,2 мм</span></li>
                                    <li>Монтажная плоскость <span>60 мм</span></li>
                                    <li>Максимальная высота створки<span>1800 мм</span></li>
                                    <li>Максимальная ширина створки<span>650 мм</span></li>
                                    <li>Толщина стеклопакета<span>20 мм</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel7-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo Quattro 6000</h3>
                            <img src={quattro601} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={quattro602} class="" alt="..." />
                                </div>
                                <div className="sp-text">
                                    <h4>Больше света с окнами Quattro 60</h4>
                                    <p>IMZO Quattro 60 — это окна с отличной пропускной способностью света. Светлое рабочее пространство воспринимается более просторным. Оно повышает продуктивность и настраивает на позитивный лад.<br></br><br></br>
                                        Безупречные по качеству теплые окна Imzo Quattro 60 обладают сверхвысоким светопропусканием. С ними рабочие будни станут комфортными, а настроение приподнятым.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev7" onClick={handleClickL7}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next7" onClick={handleClickR7}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div className="shadow">
                <h2>Раздвижные системы</h2>
            </div>
            <div >
                <div class="carousel carousel8">
                    <div class="carousel-item1 carousel8-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>IMZO BKH 65</h3>
                            <img src={bkh65} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={bkh65i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>Алюминиевый</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Толщина стенки профиля<span>1-1,5-1,8 мм</span></li>
                                    <li>Монтажная ширина профиля<span>145 мм</span></li>
                                    <li>Максимальная высота конструкции<span>3000 мм</span></li>
                                    <li>Максимальная ширина конструкции<span>6000 мм</span></li>
                                    <li>Толщина стеклопакета<span>20-32 мм</span></li>
                                    <li>Покрытие<span>Анодирование, цвета RAL, Ламинация, Вакуум, 3DZ</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel8-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>IMZO BKH 65</h3>
                            <img src={bkh651} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={bkh652} class="" alt="..." style={{ padding: "0 0 0 3vw" }} />
                                </div>
                                <div className="sp-text">
                                    <h4>Герметичность и надежность</h4>
                                    <p>Вся фурнитура, опорные и направляющие ролики, задвижки и запоры, изготавливаются из высококачественной нержавеющей стали. А благодаря системе уплотнения и уникальной конструкции профильной системы, Imzo Hebe Schiebe является герметичной на 100% и гарантировано прослужат долгие годы.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev8" onClick={handleClickL8}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next8" onClick={handleClickR8}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>
            <div >
                <div class="carousel carousel9">
                    <div class="carousel-item1 carousel9-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>IMZO BKH 38</h3>
                            <img src={bkh38} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={bkh38i} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>Алюминиевый</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Толщина стенки профиля<span>1-1,5-1,8 мм</span></li>
                                    <li>Монтажная ширина профиля<span>145 мм</span></li>
                                    <li>Максимальная высота конструкции<span>3000 мм</span></li>
                                    <li>Максимальная ширина конструкции<span>6000 мм</span></li>
                                    <li>Толщина стеклопакета<span>20-50 мм</span></li>
                                    <li>Покрытие<span>Анодирование, цвета RAL, Ламинация</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel9-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>IMZO BKH 38</h3>
                            <img src={bkh381} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={bkh382} class="" alt="..." style={{ padding: "0 0 0 3vw" }} />
                                </div>
                                <div className="sp-text">
                                    <h4>Герметичность и надежность</h4>
                                    <p>Вся фурнитура, опорные и направляющие ролики, задвижки и запоры, изготавливаются из высококачественной нержавеющей стали. А благодаря системе уплотнения и уникальной конструкции профильной системы, Imzo Hebe Schiebe является герметичной на 100% и гарантировано прослужат долгие годы.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev9" onClick={handleClickL9}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next9" onClick={handleClickR9}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div className="shadow">
                <h2>Фасадные системы</h2>
            </div>
            <div >
                <div class="carousel carousel10">
                    <div class="carousel-item1 carousel10-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo BKF 48</h3>
                            <img src={bkf} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={bkfi} class="" alt="..." />
                                </div>
                                <ul>
                                    <li>Тип профиля<span>Алюминиевый</span></li>
                                    <li>Серия профиля<span>Теплая</span></li>
                                    <li>Толщина стенки профиля<span>1,5-2-3 мм</span></li>
                                    <li>Монтажная ширина профиля<span>58-232 мм</span></li>
                                    <li>Максимальная высота конструкции<span>3000 мм</span></li>
                                    <li>Максимальная ширина конструкции<span>6000 мм</span></li>
                                    <li>Толщина стеклопакета<span>20-38 мм</span></li>
                                    <li>Покрытие<span>Анодирование, цвета RAL, Ламинация, Вакуум, 3D</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel10-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo BKF 48</h3>
                            <img src={bkf1} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={bkf2} class="" alt="..." style={{ padding: "0 0 0 3vw" }} />
                                </div>
                                <div className="sp-text">
                                    <h4>Структурное остекление</h4>
                                    <p>Идеей этой системы является создание сплошной идеально гладкой остекленной поверхности с минимальной видимой частью стоечно-ригельного каркаса. В данной конструкции крепление стеклопакета к несущим элементам фасада производится с помощью специального клея, тем самым полностью скрывая каркас за плоскостью остекления. Это создает эффект необычайной легкости и прозрачности здания. Структурные фасады, в отличии от обычного остекления, не имеют никаких прижимных планок на наружной поверхности стекла, благодаря чему два соседних стекла разделяет только узкая полоска силикона</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item3 carousel10-item3">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Imzo BKF 48</h3>
                            <img src={bkf3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev10" onClick={handleClickL10}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next10" onClick={handleClickR10}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>
            <div className="shadow">

            </div>
            <div >
                <div class="carousel carousel11">
                    <div class="carousel-item1 carousel11-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Секционный ворота</h3>
                            <img src={sv} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={svi} class="" alt="..." style={{ padding: "0 3vw 0 3vw" }} />
                                </div>
                                <p className="ppp">Секционные гаражные ворота обладают рядом неоспоримых преимуществ по сравнению с другими видами ворот.
                                    <br></br>
                                    Полотно секционных ворот для гаража состоит из нескольких секций, подвижно соединенных между собой с помощью стальных петель. Двигаясь по направляющим, полотно ворот переходит из вертикалбного (закрытого) положения в горизонтальное (открытое), уходя под потолок. Такая троекторя движения полотна гаражных ворот позволяет сохранить размеры проема, экономит пространство перед воротами и внутри гаража.
                                    <br></br>
                                    Благодаря этим харакеистикам секционные гаражные ворота набирают все болшую популярность</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel11-item2">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Секционный ворота</h3>
                            <img src={rv1} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={sv2} class="" alt="..." style={{ padding: "0 0 0 3vw" }} />
                                </div>
                                <div className="sp-text">
                                    <h4>Преимущества автоматики</h4>
                                    <p>Основным преимуществом секционных ворот перед другими типами автоматических ворот является возможность их раскрытия в очень ограниченном пространствею Полотно ворот состоит из нескольких секций, которые соеднены между собой прочными петлями. Когда ворота открываются, то секции, скользя по боковым направляющим, постепенно перемещаются под потолок.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev11" onClick={handleClickL11}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next11" onClick={handleClickR11}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>
            <div className="shadow">

            </div>
            <div >
                <div class="carousel carousel13">
                    <div class="carousel-item1 carousel13-item1">
                        <div className="images" style={{ height: "125vw" }}>
                            <h3 style={{ marginBottom: "0" }}>Рольставни</h3>
                            <img src={rv} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner">
                                    <img src={rvi} class="" alt="..." style={{ padding: "0 3vw 0 3vw" }} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
                                    <ul style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                        <h5>Ламели:</h5>
                                        <h6>Профиль с пенонаполнителем:</h6>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Ширина<span>55/77 мм.</span></li>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Вес(1м.)<span>0,17/0,35 кг</span></li>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Срок эксплуатации профиля<span>до 80 лет</span></li>
                                        <h6>Прфиль алюминиевый:</h6>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Ширина<span>55/77 мм.</span></li>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Вес(1м.)<span>0,17/0,35 кг</span></li>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Срок эксплуатации профиля<span>до 80 лет</span></li>
                                        <h5>Приводы</h5>
                                        <h6>Пружинно-иннерционный:</h6>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Грузоподъемность<span>60-100 кг.</span></li>
                                        <h6>Электрический:</h6>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;Грузоподъемность<span>15-330 кг.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel13-item2">
                        <div className="images" style={{ height: "125vw" }}>
                            <h3 style={{ marginBottom: "0" }}>Рольставни</h3>
                            <img src={rv1} class="d-block w-100" alt="..." />
                            <div className="images_inner">
                                <div className="images_inner_inner" style={{ display: "flex", flexDirection: "column", width: "100%"}}>
                                    <div style={{display: "flex", alignItems:"center", width: "100%" }}>
                                        <img src={rv2} class="" alt="..." style={{ padding: "0 0 3vw 3vw", width: "45%" }} />
                                        <div className="sp-text" style={{ padding: "0 0 3vw 3vw", width: "55%" }}> 
                                            <h4>Гаражные роллетные системы</h4>
                                            <p>Существует много вариантов въездных групп, но самый экономичный--ворота изготовленные с помощью ролставен. Иногда их называют подъемными из-за принципа действия.</p>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", alignItems:"center", width: "100%" }}>
                                        <img src={rv3} class="" alt="..." style={{ padding: "0 0 0 3vw", width: "45%" }} />
                                        <div className="sp-text" style={{ padding: "0 0 3vw 3vw", width: "55%" }}> 
                                            <h4>Преимущества роллет</h4>
                                            <p>Перед ними не нужно расчищать снег в холодное время года.
                                                <br></br>
                                                Они легко устанавливаются, не требуют особого ухода и прослужат Вам длительное время.
                                                <br></br>
                                                Гаражные рольставни компактны и эргономичны.
                                                <br></br>
                                                <br></br>
                                                Гаражный профиль сохраняет тепло и защещает от грязи.
                                                <br></br>
                                                Автоматические ворота открываются с помощью дистанционного пульта управления.
                                                <br></br>
                                                Невысокая стоимость по сравнению со всеми дркгими видами материалов!
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev13" onClick={handleClickL13}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next13" onClick={handleClickR13}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>
            <div className="shadow">
                <h2>Оконные аксессуары</h2>
            </div>
            <div >
                <div class="carousel carousel12">
                    <div class="carousel-item1 carousel12-item1">
                        <div className="images">
                            <h3 style={{ marginBottom: "0" }}>Фурнитура</h3>
                            <img src={fittings} class="d-block w-100" alt="..." />
                            <div className="images_inner" style={{ display: "flex", flexDirection: "column" }}>
                                <div className="images-text">
                                    <h4>Стиль и надежность</h4>
                                    <p className="ppp p100">Для безупречной работы важна каждая деталь. С качественной фурнитурой ваши окна будут работать без сбоев много лет. <br></br>
                                        Поэтому мы используем ручки и петли от мировых лидеров: Roto, Fab&Fix, WINKHAUS, Stublina. В некоторых моделях установлена фурнитура от AKFA, прошедшая многократные испЫтания в условиях высокой нагрузки. <br></br>
                                        Выбирайте свой стиль, форму и цвет. Мы гпрантируем качество каждого изделия!</p>
                                </div>
                                <div className="logos">

                                    <svg xmlns={roto} width="90" viewBox="1 1 400 164.384" ><path d="M79.795 80.736C35.908 124.962 0 161.567 0 162.08c0 .514 18.339.932 40.753.929l40.754-.004 75.92-76.834 75.921-76.833 75.906 76.838 75.907 76.838h7.533c4.144 0 7.329-.574 7.078-1.275-.251-.701-36.409-37.379-80.351-81.507L239.526 0l-39.968.163-39.969.162-79.794 80.411m72.26 50.771v31.507h15.068v-24.658l3.767.005c3.275.004 4.743 1.614 11.239 12.329l7.472 12.324h8.624c4.743 0 8.624-.245 8.624-.545 0-.3-3.39-6.057-7.534-12.794-8.103-13.174-8.633-14.714-5.487-15.921 3.428-1.315 7.531-9.475 7.537-14.986.014-14.088-7.982-18.694-32.529-18.738l-16.781-.03v31.507m120.548-23.448c-5.372 1.984-6.22 2.845-6.594 6.698-.377 3.88-.921 4.421-4.452 4.421-3.684 0-4.023.404-4.023 4.795 0 4.382.343 4.794 3.992 4.794h3.992l.46 15.867c.55 18.954 1.131 19.75 14.421 19.75h8.642v-4.795c0-4.375-.347-4.794-3.963-4.794-5.008 0-5.626-1.667-5.626-15.181v-10.847h4.795c4.566 0 4.794-.228 4.794-4.794 0-4.553-.238-4.795-4.723-4.795-4.683 0-4.726-.056-5.137-6.697l-.414-6.698-6.164 2.276m-94.126 3.788c14.02 2.317 8.264 15.55-6.764 15.55h-4.59v-8.219c0-9.144.079-9.195 11.354-7.331m42.756 7.82c-11.577 5.357-16.225 20.387-10.324 33.387 7.35 16.191 34.153 15.813 41.407-.585 9.271-20.959-10.831-42.174-31.083-32.802m87.671-.855c-12.722 3.185-19.135 21.865-12.136 35.351 7.497 14.446 33.159 13.962 40.559-.766 9.849-19.603-6.893-39.976-28.423-34.585m-72.54 11.948c7.296 7.296 3.433 24.623-5.3 23.769-10.606-1.037-10.18-27.132.443-27.132.822 0 3.007 1.513 4.857 3.363m86.581.462c2.457 3.126 2.177 16.82-.42 20.528-4.331 6.184-12.077 2.85-13.72-5.904-2.55-13.595 7.102-23.578 14.14-14.624" /></svg>



                                    <svg xmlns={hoppe} width="150" viewBox="1 1 400 156"><g fill-rule="evenodd"><path d="M313.82 39.847c-.359.374-.653.814-.653.977 0 .164-.169.509-.375.767-.371.464-.646.939-1.459 2.517-.229.445-.521.918-.648 1.052s-.341.509-.475.833c-.134.325-.367.729-.518.899-.284.318-.692 1.05-1.429 2.566-.234.482-.484.875-.555.875-.071 0-.266.319-.433.709-.168.389-.438.858-.602 1.041-.164.184-.387.609-.494.945-.108.337-.315.711-.46.831-.146.121-.41.521-.587.889-.542 1.122-1.104 2.112-1.363 2.397-.135.15-.39.61-.568 1.024-.177.414-.441.851-.586.972-.146.12-.354.494-.464.831-.11.336-.376.823-.592 1.082-.216.26-.392.568-.392.686 0 .118-.148.403-.329.633-.389.495-1.02 1.582-1.524 2.627-.199.412-.538.962-.754 1.221-.217.259-.393.565-.393.679 0 .114-.223.502-.496.862-.272.36-.497.772-.5.915-.002.143-.157.424-.343.624-.186.2-.484.701-.661 1.115-.177.413-.392.751-.479.751-.086 0-.275.346-.419.769-.144.423-.451.944-.682 1.159-.231.214-.42.533-.42.708 0 .175-.169.53-.375.788-.4.5-.884 1.357-1.455 2.576-.194.412-.426.884-.516 1.047-.118.214-.093.401.09.662.141.201.258.479.26.619.003.14.228.55.5.91.273.36.496.774.496.921 0 .146.225.513.5.814.275.301.5.687.5.857 0 .171.176.523.393.782.216.259.549.827.74 1.263.191.435.421.791.511.791.09 0 .246.251.347.557.101.306.369.808.596 1.115.227.308.413.678.413.824 0 .145.225.51.5.811.275.301.5.682.5.847 0 .165.221.578.49.918.27.34.576.875.68 1.19.104.314.259.572.345.572.085 0 .33.393.543.875.213.481.512.978.665 1.103.152.126.277.344.277.485 0 .14.184.497.41.793.225.296.534.847.685 1.224.151.377.342.686.425.686.083 0 .342.394.576.875.829 1.705 1.324 2.584 1.612 2.865.16.156.292.41.292.564 0 .154.225.542.5.863.274.321.499.709.499.862 0 .154.177.491.394.75.216.259.541.809.722 1.221.182.413.455.853.608.979.152.126.279.351.281.5.003.149.228.566.5.926.273.36.496.778.496.929 0 .151.185.449.411.662.227.213.499.657.604.987.106.33.327.751.491.934.164.183.434.652.602 1.042.167.389.358.708.425.708.066 0 .302.356.523.792l.803 1.573c.221.43.605 1.011.855 1.291l.455.511h22.226c25.148 0 22.747.137 23.336-1.336.149-.372.383-.718.52-.771.137-.053.249-.198.249-.322 0-.312.533-1.405.685-1.405.068 0 .321-.393.563-.875.776-1.544 1.163-2.24 1.403-2.526.129-.153.406-.651.617-1.105.211-.455.461-.827.557-.827.096 0 .175-.139.175-.309 0-.169.185-.563.412-.875.226-.311.603-.941.836-1.399.484-.952 1.152-2.082 1.385-2.346.087-.099.309-.52.494-.937.184-.417.414-.806.51-.866.096-.059.37-.5.609-.98.239-.479.675-1.298.969-1.819.294-.521.713-1.271.932-1.666.219-.396.459-.76.535-.809.076-.049.296-.447.49-.885.194-.437.459-.837.59-.887.131-.05.238-.193.238-.318 0-.311.533-1.404.685-1.404.068 0 .321-.394.563-.875.687-1.368 1.216-2.308 1.467-2.604.126-.149.33-.524.452-.833.123-.309.347-.684.499-.833.152-.149.376-.534.498-.855.123-.321.352-.733.509-.917.158-.183.45-.671.65-1.083.697-1.435 1.178-2.237 1.426-2.377.138-.077.251-.246.251-.376 0-.327.532-1.414.693-1.414.072 0 .291-.372.487-.828.196-.455.46-.914.588-1.02.324-.269.289-.702-.094-1.143-.18-.207-.416-.647-.525-.977-.109-.331-.327-.717-.484-.858-.157-.141-.385-.52-.506-.84a4.515 4.515 0 00-.606-1.055c-.213-.259-.387-.568-.387-.686 0-.118-.162-.42-.359-.672-.381-.483-.842-1.286-1.552-2.696-.237-.472-.538-.947-.668-1.055-.13-.108-.363-.528-.518-.933-.155-.405-.333-.737-.397-.737-.063 0-.291-.375-.506-.833-.214-.458-.444-.833-.51-.833s-.247-.319-.402-.709c-.154-.389-.413-.858-.574-1.041-.161-.184-.393-.596-.516-.917-.122-.321-.346-.706-.498-.855-.152-.149-.376-.524-.499-.833-.122-.309-.326-.684-.452-.833-.265-.313-.842-1.346-1.453-2.604-.233-.481-.487-.875-.563-.875-.163 0-.699-1.078-.699-1.404 0-.125-.109-.269-.242-.32-.133-.051-.405-.471-.604-.934-.199-.463-.418-.842-.486-.842s-.28-.375-.47-.833c-.191-.459-.415-.834-.5-.834-.084 0-.284-.342-.443-.76-.16-.417-.42-.886-.577-1.041-.158-.155-.387-.545-.51-.865-.122-.321-.346-.734-.498-.917-.151-.183-.411-.648-.577-1.032-.166-.384-.39-.732-.498-.774-.108-.041-.301-.391-.429-.777-.127-.386-.326-.739-.441-.783-.115-.044-.294-.338-.398-.653a3.86 3.86 0 00-.561-1.027 4.559 4.559 0 01-.597-1.037c-.123-.321-.335-.714-.47-.872-.135-.159-.404-.607-.597-.996-.604-1.211 1.112-1.127-23.24-1.13l-22.055-.002-.654.68m18.503 6.983c.864.248.838-.076.841 10.678.002 7.624.052 10.141.203 10.292.342.342 6.107.275 6.495-.076.289-.261.305-.8.305-10.307 0-9.987.001-10.033.35-10.35.435-.393 13.309-.505 13.439-.117.036.111.248.448.471.75.222.303.565.906.761 1.342.196.435.422.791.503.791.081 0 .338.394.572.875.702 1.445 1.133 2.206 1.529 2.701.206.258.375.596.375.751 0 .155.185.456.411.669.227.213.499.657.604.987.106.33.324.751.485.934.16.183.43.631.598.994.169.364.441.795.604.959.164.163.298.428.298.589 0 .16.19.512.421.781.232.269.466.682.522.917.055.235.276.616.491.848.215.232.478.682.584 1 .107.318.359.766.561.995.202.23.47.676.595.993.126.317.363.711.527.875.164.165.299.43.299.591 0 .16.225.554.5.875.274.32.499.708.499.862 0 .153.183.496.406.761.224.265.532.796.685 1.179.154.384.347.698.43.698.083 0 .342.393.576.875.731 1.503 1.144 2.247 1.425 2.566.149.17.433.646.632 1.059.33.686 1.142 2.158 1.628 2.949.155.253.147.408-.038.728-.13.223-.417.784-.639 1.246-.221.462-.519.937-.662 1.055-.142.118-.348.49-.458.827-.109.336-.376.79-.592 1.009-.216.219-.392.532-.392.696 0 .165-.123.422-.273.572-.281.281-.939 1.427-1.579 2.751-.199.412-.539.962-.755 1.221-.217.259-.393.563-.393.676 0 .113-.193.463-.429.779a8.79 8.79 0 00-.677 1.074c-.137.275-.502.95-.812 1.5-.309.55-.735 1.337-.947 1.75-.212.412-.477.825-.588.917-.112.091-.326.466-.475.833-.15.367-.396.805-.547.975-.272.305-.656.987-1.374 2.442-.203.412-.468.825-.588.916-.121.092-.343.466-.494.832-.151.366-.453.878-.672 1.138-.218.26-.397.607-.397.77 0 .164-.225.581-.5.927-.275.346-.5.718-.5.827 0 .108-.223.492-.496.852-.272.36-.497.742-.5.85-.002.107-.18.407-.394.667-.215.259-.475.72-.579 1.025-.104.305-.36.769-.569 1.031-.208.262-.514.669-.678.904l-.3.427h-12.602l-.441-.408-.441-.409V99.43c0-9.8-.009-10.09-.323-10.257-.343-.184-5.958-.247-6.414-.072-.236.091-.263 1.15-.263 10.258v10.156l-.409.409-.41.409h-6.182c-6.836 0-6.933-.013-7.337-1.033-.119-.303-.321-.672-.447-.821-.234-.276-.686-1.069-1.459-2.562a13.432 13.432 0 00-.844-1.4c-.227-.311-.412-.705-.412-.875 0-.17-.074-.309-.165-.309-.15 0-.63-.814-1.63-2.763-.208-.405-.442-.737-.519-.737-.078 0-.273-.356-.435-.791-.162-.436-.422-.904-.579-1.042-.157-.138-.387-.513-.51-.833a4.597 4.597 0 00-.609-1.055c-.213-.259-.387-.572-.387-.695 0-.124-.182-.442-.406-.707-.223-.265-.452-.67-.51-.899-.058-.23-.279-.621-.493-.869a4.167 4.167 0 01-.599-.988c-.117-.296-.34-.687-.496-.871-.156-.183-.421-.652-.589-1.041-.167-.39-.355-.709-.418-.709s-.276-.375-.473-.833c-.197-.458-.425-.833-.507-.833-.082 0-.237-.265-.343-.588a3.925 3.925 0 00-.566-1.042 4.474 4.474 0 01-.595-1.037c-.123-.321-.314-.659-.425-.752-.111-.093-.372-.543-.579-1-.207-.457-.443-.874-.524-.926-.202-.129-1.244-2.06-1.703-3.155a3.58 3.58 0 00-.314-.547c-.157-.221-.161-.327-.018-.416.106-.067.392-.533.636-1.037.613-1.268 1.199-2.324 1.467-2.646.124-.149.362-.585.528-.97.166-.384.398-.735.516-.78.117-.045.264-.314.326-.597.063-.283.281-.72.486-.97.204-.25.526-.754.715-1.121.805-1.559 1.232-2.324 1.437-2.57.12-.145.356-.582.525-.971.168-.39.364-.709.435-.709.071 0 .324-.393.562-.875.238-.481.691-1.325 1.006-1.875.315-.55.737-1.299.937-1.666.201-.366.458-.741.572-.833.114-.092.294-.443.4-.779.107-.336.301-.7.431-.808.13-.108.43-.583.666-1.055a32.075 32.075 0 011.704-2.951c.206-.316.375-.644.375-.73.001-.086.139-.311.307-.5.169-.189.406-.607.527-.928.122-.321.353-.733.514-.916.161-.184.42-.652.574-1.042.155-.39.347-.708.426-.708.079 0 .305-.375.502-.834.197-.458.417-.833.488-.833.072 0 .269-.34.438-.755.235-.574.428-.789.808-.901.697-.205 12.031-.217 12.74-.014" fill="#df222a" /><path d="M101.083 45.842c-2.525.154-4.086.398-4.75.741-.231.12-.792.274-1.247.342-.454.068-1.278.338-1.831.599-.553.262-1.168.476-1.367.476-.199 0-.586.188-.859.418-.273.229-.723.462-1.001.518-.278.056-.641.228-.808.383-.167.155-.697.496-1.178.758-.482.262-.875.527-.875.589 0 .063-.204.207-.453.32-.506.23-.462.191-2.881 2.584-2.151 2.129-2.392 2.406-3.272 3.763a31.088 31.088 0 01-1.024 1.5c-.177.23-.481.754-.675 1.167a14.51 14.51 0 01-.51 1c-.387.619-1.352 2.803-1.352 3.06 0 .156-.178.638-.396 1.071-.219.432-.449 1.123-.513 1.536-.064.412-.297 1.357-.518 2.099-.221.742-.478 2.13-.572 3.084-.094.953-.24 2.371-.325 3.15-.2 1.828-.205 4.826-.012 6.833.084.871.23 2.403.324 3.405.096 1.02.35 2.376.578 3.083.224.694.458 1.635.52 2.09.062.456.282 1.168.489 1.584.208.415.428.98.49 1.255.11.487.895 2.245 1.376 3.083.132.23.368.68.524 1 .157.321.333.621.391.667.059.046.321.429.584.852.262.423.677 1.069.923 1.436.591.883 3.907 4.308 4.886 5.045.425.321 1.022.79 1.326 1.042.304.252.621.458.706.458.084 0 .449.216.811.479.362.264.846.536 1.075.606.229.069.628.275.887.457.258.182.816.436 1.24.563.423.128.941.344 1.151.482.21.137.874.364 1.476.504.602.139 1.447.391 1.878.559 2.593 1.01 12.871.968 15.625-.064.554-.208 1.341-.434 1.75-.502.408-.068 1.08-.292 1.493-.497.412-.205.962-.424 1.222-.486.26-.063.747-.288 1.083-.5.336-.212.799-.443 1.028-.514.229-.071.713-.344 1.075-.608.361-.263.726-.479.811-.479.084 0 .402-.206.706-.458.305-.252.946-.758 1.426-1.125 1.104-.843 3.031-2.772 3.899-3.903.366-.477.873-1.117 1.125-1.421.252-.304.458-.626.458-.714 0-.088.144-.291.321-.45.176-.16.509-.69.74-1.177.231-.488.494-.932.584-.988.09-.056.256-.382.369-.724.113-.343.373-.886.578-1.206.205-.321.418-.846.474-1.167.056-.321.289-.952.518-1.403.229-.451.416-.996.416-1.212 0-.215.191-.934.424-1.596a14.53 14.53 0 00.585-2.539 57.93 57.93 0 01.451-2.917c.408-2.225.408-8.982 0-10.916a27.126 27.126 0 01-.395-2.584c-.062-.687-.327-1.918-.589-2.736-.262-.817-.476-1.627-.476-1.798 0-.172-.225-.794-.5-1.382-.275-.589-.5-1.212-.5-1.387 0-.174-.187-.592-.415-.928-.228-.336-.462-.815-.521-1.065-.059-.249-.285-.692-.503-.984-.217-.292-.394-.591-.394-.665 0-.075-.25-.511-.555-.97l-.792-1.191c-1.598-2.41-3.43-4.256-6.588-6.644-.838-.633-4.435-2.583-4.766-2.583-.081 0-.612-.215-1.181-.477-.569-.263-1.373-.528-1.785-.59-.413-.062-1.275-.29-1.917-.506-1.149-.388-1.865-.459-6.666-.664-.825-.035-2.55 0-3.834.079m-83.821 1.253c-.399.399-.401 62.132-.003 62.701.388.553 11.025.587 11.574.037.328-.327.334-.555.334-13.479 0-12.024.023-13.166.275-13.375.472-.392 26.063-.425 26.349-.034.163.223.209 3.145.209 13.383 0 11.585.03 13.141.259 13.468.388.553 11.025.587 11.574.037.526-.526.526-62.14 0-62.666-.459-.46-11.117-.526-11.571-.072-.233.233-.262 1.579-.262 12.3 0 9.141-.048 12.086-.2 12.238-.265.265-25.818.292-26.311.028-.314-.168-.322-.479-.322-12.167 0-11.772-.007-12-.334-12.327-.459-.46-11.117-.526-11.571-.072m123.02-.02c-.416.417-.439 62.127-.023 62.721.388.553 11.025.587 11.574.037.327-.326.334-.555.334-11.487V87.193l.541-.169c.298-.092 2.642-.199 5.209-.238 2.946-.044 4.838-.14 5.132-.26.256-.105 1.375-.347 2.486-.539 1.111-.191 2.176-.448 2.367-.57.192-.122.685-.313 1.098-.425.754-.204 2.847-1.187 4.08-1.916 1.312-.776 3.484-2.649 4.337-3.739.366-.469.862-1.093 1.102-1.386.24-.294.494-.722.566-.951.071-.229.306-.649.522-.932.216-.284.393-.667.393-.851 0-.184.196-.701.435-1.151.255-.478.499-1.299.589-1.983.085-.641.277-1.654.427-2.25.375-1.486.377-5.685.004-7.083a21.438 21.438 0 01-.43-2.204c-.095-.699-.3-1.399-.49-1.667a3.274 3.274 0 01-.443-.998c-.064-.295-.291-.794-.504-1.108-.213-.315-.444-.748-.512-.964-.418-1.32-4.074-4.792-6.019-5.716-.473-.225-.905-.482-.96-.571-.056-.09-.494-.287-.974-.437a10.794 10.794 0 01-1.484-.599c-.336-.179-1.161-.43-1.833-.559a41.404 41.404 0 01-2.556-.598c-1.878-.511-24.481-.741-24.968-.254m49.051-.123c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c1.075.656 11.032.45 11.497-.237.067-.1.124-5.141.125-11.204l.003-11.022.384-.252c.314-.206 1.272-.265 5.208-.323 3.153-.046 4.986-.139 5.29-.266.256-.107 1.375-.352 2.486-.544 1.111-.191 2.176-.451 2.367-.576.192-.125.791-.343 1.332-.483.542-.141 1.104-.359 1.25-.483.146-.125.594-.354.994-.509.4-.155.963-.448 1.25-.651.287-.203.642-.444.789-.535 1.739-1.082 4.983-4.256 4.983-4.876 0-.081.223-.443.495-.803.273-.36.498-.737.5-.838.003-.101.193-.538.424-.971.23-.433.495-1.138.587-1.567.093-.428.327-1.153.521-1.612.795-1.883.735-9.398-.094-11.705-.238-.663-.433-1.377-.433-1.586 0-.21-.176-.642-.392-.962a5.85 5.85 0 01-.595-1.203c-.112-.342-.274-.666-.36-.719-.086-.053-.421-.509-.743-1.013-1.038-1.622-3.233-3.61-5.219-4.726-.243-.136-.779-.442-1.191-.68-.412-.238-.975-.488-1.25-.554a7.604 7.604 0 01-1.178-.445c-.372-.178-1.122-.403-1.666-.501a21.14 21.14 0 01-2.073-.514c-1.703-.527-23.735-.989-25-.523m48 0c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c.855.522 36.27.52 36.791-.002.548-.547.515-9.354-.037-9.74-.327-.229-1.796-.26-12.55-.26-9.251 0-12.227-.048-12.379-.2-.15-.15-.2-2.231-.2-8.341v-8.14l.409-.41.409-.409h18.128l.194-.424c.276-.608.27-9.432-.007-9.709-.151-.151-2.467-.201-9.375-.205-7.365-.005-9.233-.049-9.467-.227-.269-.205-.291-.751-.291-7.235v-7.014l.37-.26c.327-.228 1.743-.259 11.988-.259 10.339 0 11.647-.029 11.88-.262.429-.429.389-9.237-.043-9.629-.303-.274-34.796-.427-35.529-.157m43.292.237c-.252.095-.458.24-.458.323 0 .082-.248.253-.55.38-.759.317-2.373 2.197-2.596 3.025a8.28 8.28 0 01-.517 1.327c-.532 1.042-.488 3.803.079 4.923.23.452.417.969.417 1.148 0 .179.262.67.583 1.09.321.421.584.837.584.925 0 .089.218.274.484.412.266.138.589.355.716.483.418.417 1.272.775 1.849.775.327 0 .729.141.951.333.636.552 3.666.468 3.666-.101 0-.181-.333-.232-1.531-.232-1.315 0-1.582-.048-1.896-.343-.2-.189-.746-.443-1.212-.566-.82-.217-1.451-.731-2.623-2.138-.839-1.008-1.795-5.359-1.25-5.695.147-.091.548-1.219.742-2.091.051-.229.265-.604.475-.834a7.84 7.84 0 00.676-.875c.161-.252.382-.458.49-.458.108 0 .425-.218.705-.484 1.121-1.07 5.884-1.095 7.234-.038 1.181.925 2.196 2.108 2.378 2.772.101.367.336 1.066.522 1.554.435 1.139.427 2.756-.02 3.766-.177.401-.377.98-.444 1.288-.228 1.049-2.124 3.018-3.111 3.23-.81.174-1.135.384-1.027.665.136.355 1.537.327 2.064-.041 1.666-1.165 2.912-2.626 3.067-3.598.061-.379.226-.816.367-.972.611-.675.608-4.12-.004-5.054-.134-.205-.298-.665-.364-1.022-.169-.922-1.785-2.909-2.562-3.149a1.717 1.717 0 01-.693-.48c-.327-.404-6.234-.608-7.191-.248m.575 3.011c-.22.22-.265 7.36-.052 8.133.093.337.237.427.745.469.916.077 1.107-.163 1.107-1.387 0-.756.083-1.147.299-1.414l.299-.369.742.927c.409.509.879 1.118 1.045 1.353.629.89 2.282 1.262 2.282.513 0-.278-1.06-2.175-1.412-2.527-.333-.333-.344-.285.318-1.373.326-.535.585-1.194.6-1.525.063-1.35.004-1.534-.734-2.272l-.728-.728h-2.156c-1.454 0-2.22.065-2.355.2m3.633 1.8c.717.716.19 2-.821 2-.636 0-1.012-.393-1.012-1.058 0-1.146 1.077-1.699 1.833-.942m-177.827 3.989c.911.096 1.763.305 2.365.58.517.237 1.056.431 1.196.431.14 0 .61.225 1.043.5.434.275.848.5.921.5.548 0 4.636 3.884 4.636 4.405 0 .06.187.312.416.559.23.247.417.529.417.627 0 .097.217.519.482.937.265.417.536 1.013.604 1.324.067.311.26.76.428.998.169.239.389.801.489 1.25.1.449.362 1.417.582 2.15 1.09 3.629 1.08 13.51-.016 16.583-.212.596-.439 1.421-.502 1.834-.064.412-.33 1.154-.592 1.648-.261.494-.475 1.019-.476 1.167 0 .147-.225.605-.499 1.018-.274.412-.499.836-.499.941-.001.105-.187.367-.415.583-.227.216-.415.474-.416.574-.011.657-4.053 4.402-4.751 4.402-.111 0-.337.151-.504.335-.167.184-.647.44-1.067.568-.421.128-1.104.386-1.519.573-1.843.831-8.452.814-10.354-.026-.49-.217-1.097-.445-1.349-.508-.251-.063-.81-.338-1.241-.612-.431-.273-.844-.497-.918-.497-.073 0-.273-.131-.443-.291-.17-.161-.639-.549-1.042-.864-.715-.558-2.68-2.693-3.047-3.311a30.613 30.613 0 00-.559-.88c-.206-.314-.375-.676-.375-.805-.001-.128-.182-.471-.403-.761-.221-.29-.492-.859-.601-1.265a8.362 8.362 0 00-.508-1.345c-.171-.334-.387-1.089-.481-1.678a12.883 12.883 0 00-.541-2.06c-.356-.953-.37-1.21-.377-6.99l-.007-6 .443-1.416c.243-.78.489-1.743.546-2.141.057-.398.244-.998.415-1.334.171-.336.402-.945.512-1.354.11-.408.338-.919.508-1.134.169-.215.397-.668.508-1.006.11-.338.379-.84.598-1.115 1.526-1.915 2.631-3.173 3.19-3.632 1.399-1.151 1.628-1.317 2.03-1.474.23-.089.68-.339 1-.554.321-.215.846-.445 1.167-.511.321-.066.883-.273 1.25-.461 1.08-.553 4.79-.774 7.756-.462m53.715.855c1.49.13 2.25.28 2.862.563.459.213 1.081.468 1.384.567.947.312 3.2 2.253 3.2 2.758 0 .147.076.268.169.268.198 0 .485.63 1.025 2.25 1.383 4.148-.584 10.438-3.694 11.813a8.009 8.009 0 00-.961.546c-.299.199-.862.415-1.25.479s-.786.18-.883.259c-.782.628-9.743 1.002-10.221.426-.136-.164-.176-2.908-.145-9.953l.043-9.727.417-.211c.526-.266 5.19-.288 8.054-.038m48.353.006c2.062.162 2.453.242 3.259.667.505.265 1.007.482 1.117.483.764.001 3.152 2.301 3.634 3.5.093.229.353.754.579 1.167.655 1.192.638 6.634-.024 8a33.218 33.218 0 00-.683 1.5c-.253.615-2.343 2.831-2.677 2.836-.108.002-.516.22-.908.486s-1.03.536-1.417.6c-.387.064-.891.211-1.121.326-1.254.63-9.231.88-9.862.309-.288-.261-.304-.784-.304-9.781v-9.505l.362-.386c.43-.457 3.733-.54 8.045-.202" fill="#fff" /><path d="M314.236 38.993c-.397.163-1.234 1.103-1.241 1.395-.002.107-.227.49-.5.85-.272.36-.495.739-.495.843 0 .103-.192.446-.426.762-.234.315-.575.874-.758 1.24-.39.782-.753 1.427-1.291 2.295-.616.994-1.163 1.982-1.51 2.729-.176.379-.406.742-.51.807-.104.064-.377.504-.606.976-.503 1.04-.905 1.763-1.331 2.39-.175.258-.475.77-.666 1.137-.73 1.395-1.268 2.322-1.579 2.718-.178.225-.323.498-.323.605 0 .107-.192.454-.426.769a9.805 9.805 0 00-.754 1.241c-.479.971-1.149 2.129-1.397 2.417-.118.137-.378.587-.577 1-.45.93-.863 1.668-1.278 2.28-.175.258-.475.77-.666 1.136-.729 1.394-1.273 2.343-1.484 2.584-.12.137-.328.515-.462.84-.133.324-.355.702-.493.839-.137.138-.415.585-.617.994-.725 1.467-1.1 2.131-1.375 2.435-.153.17-.329.512-.391.76s-.286.638-.497.867a3.229 3.229 0 00-.577.996c-.105.32-.342.773-.527 1.007l-.334.426.541 1.126c.298.62.659 1.265.803 1.435.262.309.671 1.044 1.358 2.441.203.413.546.982.761 1.266.216.284.392.597.392.696 0 .099.176.391.39.651.215.259.475.72.579 1.025.104.305.378.779.61 1.054.232.275.421.597.421.715s.148.403.329.633c.401.51 1.025 1.593 1.565 2.717.222.462.521.937.663 1.055.143.118.345.475.45.793.105.318.364.765.576.994.211.228.435.618.497.866.062.249.238.591.391.76.269.298.465.64 1.362 2.383.23.445.508.884.62.976.111.091.325.466.475.833.149.367.396.805.547.975.271.304.651.979 1.371 2.435.202.409.48.856.617.994.138.137.359.51.492.829.133.318.414.809.624 1.09.21.281.439.698.508.927.069.229.303.629.519.888.217.259.394.568.394.686 0 .118.148.403.329.633.393.5 1.027 1.595 1.52 2.626.197.413.455.863.573 1 .118.138.42.625.67 1.084l.73 1.333c.534.974.854 1.368 1.272 1.558.312.142 6.171.192 22.503.192 24.574 0 22.969.078 23.453-1.133.148-.37.354-.724.457-.788.103-.064.336-.464.518-.889s.467-.923.634-1.107c.166-.183.359-.52.428-.75.069-.229.303-.628.519-.887.217-.26.394-.564.394-.676 0-.112.216-.5.479-.862s.536-.845.606-1.075c.07-.229.299-.622.51-.874.21-.251.434-.626.497-.833.063-.207.211-.488.329-.626.119-.138.421-.625.672-1.083.737-1.343 1.297-2.308 1.698-2.925.206-.316.375-.695.375-.841 0-.146.153-.404.34-.573.187-.169.486-.612.664-.984a27.43 27.43 0 01.917-1.677c.325-.55.738-1.309.917-1.687.179-.377.431-.773.559-.88.129-.107.332-.436.451-.731.118-.294.389-.768.601-1.051.212-.284.385-.592.385-.684 0-.092.216-.465.479-.829.264-.364.536-.838.604-1.055.069-.217.341-.691.604-1.055.264-.364.48-.737.48-.829 0-.092.176-.4.392-.684.216-.283.447-.684.512-.891.065-.207.291-.582.501-.834.21-.251.441-.644.513-.874.071-.229.298-.641.503-.916.205-.275.425-.669.488-.876.062-.207.286-.582.496-.834.21-.251.439-.644.508-.874.069-.229.263-.567.431-.752.169-.185.43-.635.58-1 .151-.365.408-.814.572-.998a2.36 2.36 0 00.425-.75c.07-.229.303-.648.519-.932.503-.66.497-1.171-.024-1.937-.229-.337-.416-.681-.416-.763 0-.083-.216-.449-.48-.812-.263-.364-.534-.844-.602-1.067-.067-.223-.293-.593-.502-.822-.208-.229-.435-.604-.503-.833-.068-.229-.274-.63-.457-.89s-.499-.785-.701-1.166c-.825-1.552-1.297-2.374-1.501-2.611a2.076 2.076 0 01-.329-.626c-.063-.207-.287-.582-.497-.833-.211-.252-.44-.645-.51-.874-.07-.229-.343-.713-.606-1.075-.263-.362-.479-.73-.479-.817 0-.088-.177-.392-.393-.676-.216-.284-.449-.703-.518-.932-.07-.229-.296-.604-.504-.834-.208-.229-.466-.692-.573-1.028-.108-.336-.309-.705-.447-.82-.138-.115-.363-.476-.499-.803-.137-.327-.386-.745-.555-.93a2.288 2.288 0 01-.428-.752 2.27 2.27 0 00-.428-.752c-.168-.185-.429-.635-.58-1-.15-.366-.408-.815-.572-.998a2.342 2.342 0 01-.421-.738c-.068-.223-.339-.703-.603-1.067-.263-.364-.479-.737-.479-.829 0-.092-.177-.4-.393-.684-.216-.283-.451-.703-.522-.932-.072-.229-.303-.623-.513-.874-.21-.252-.434-.627-.496-.833-.063-.207-.283-.601-.488-.876-.205-.275-.427-.669-.492-.876-.066-.207-.291-.582-.501-.834-.211-.251-.439-.644-.508-.874-.069-.229-.304-.655-.523-.947-.219-.292-.397-.599-.397-.683 0-.084-.216-.451-.48-.814-.263-.364-.534-.844-.602-1.067a2.37 2.37 0 00-.422-.739c-.164-.183-.407-.596-.541-.916-.574-1.379 1.837-1.246-23.264-1.283-12.251-.018-22.431.031-22.622.109m44.764.389c.229.116.575.529.769.917.193.389.462.837.597.996.135.158.347.551.47.872.124.32.392.787.597 1.037.204.25.457.712.561 1.027.104.315.283.609.398.653.115.044.314.397.441.783.128.386.321.736.429.777.108.042.332.39.498.774.166.384.426.849.577 1.032.152.183.376.596.498.917.123.32.352.71.51.865.157.155.417.624.577 1.041.159.418.359.76.443.76.085 0 .309.375.5.834.19.458.402.833.47.833.068 0 .287.379.486.842.199.463.471.883.604.934.133.051.242.195.242.32 0 .326.536 1.404.699 1.404.076 0 .33.394.563.875.611 1.258 1.188 2.291 1.453 2.604.126.149.33.524.452.833.123.309.347.684.499.833.152.149.376.534.498.855.123.321.355.733.516.917.161.183.42.652.574 1.041.155.39.336.709.402.709s.296.375.51.833c.215.458.443.833.506.833.064 0 .242.332.397.737.155.405.388.825.518.933.13.108.431.583.668 1.055.71 1.41 1.171 2.213 1.552 2.696.197.252.359.554.359.672s.174.427.387.686c.212.259.485.734.606 1.055.121.32.349.699.506.84.157.141.375.527.484.858.109.33.345.77.525.977.383.441.418.874.094 1.143-.128.106-.392.565-.588 1.02-.196.456-.415.828-.487.828-.161 0-.693 1.087-.693 1.414 0 .13-.113.299-.251.376-.248.14-.729.942-1.426 2.377-.2.412-.492.9-.65 1.083-.157.184-.386.596-.509.917-.122.321-.346.706-.498.855-.152.149-.376.524-.499.833-.122.309-.326.684-.452.833-.251.296-.78 1.236-1.467 2.604-.242.481-.495.875-.563.875-.152 0-.685 1.093-.685 1.404 0 .125-.107.268-.238.318-.131.05-.396.45-.59.887-.194.438-.414.836-.49.885-.076.049-.316.413-.535.809-.219.395-.638 1.145-.932 1.666-.294.521-.73 1.34-.969 1.819-.239.48-.513.921-.609.98-.096.06-.326.449-.51.866-.185.417-.407.838-.494.937-.233.264-.901 1.394-1.385 2.346-.233.458-.61 1.088-.836 1.399-.227.312-.412.706-.412.875 0 .17-.079.309-.175.309-.096 0-.346.372-.557.827-.211.454-.488.952-.617 1.105-.24.286-.627.982-1.403 2.526-.242.482-.495.875-.563.875-.152 0-.685 1.093-.685 1.405 0 .124-.112.269-.249.322-.137.053-.371.399-.52.771-.589 1.473 1.812 1.336-23.336 1.336h-22.226l-.455-.511c-.25-.28-.634-.861-.855-1.291l-.803-1.573c-.221-.436-.457-.792-.523-.792-.067 0-.258-.319-.425-.708-.168-.39-.438-.859-.602-1.042-.164-.183-.385-.604-.491-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.511-.411-.662 0-.151-.223-.569-.496-.929-.272-.36-.497-.777-.5-.926-.002-.149-.129-.374-.281-.5-.153-.126-.426-.566-.608-.979-.181-.412-.506-.962-.722-1.221-.217-.259-.394-.596-.394-.75 0-.153-.225-.541-.499-.862-.275-.321-.5-.709-.5-.863 0-.154-.132-.408-.292-.564-.288-.281-.783-1.16-1.612-2.865-.234-.481-.493-.875-.576-.875-.083 0-.274-.309-.425-.686a6.315 6.315 0 00-.685-1.224c-.226-.296-.41-.653-.41-.793 0-.141-.125-.359-.277-.485-.153-.125-.452-.622-.665-1.103-.213-.482-.458-.875-.543-.875-.086 0-.241-.258-.345-.572-.104-.315-.41-.85-.68-1.19-.269-.34-.49-.753-.49-.918 0-.165-.225-.546-.5-.847-.275-.301-.5-.666-.5-.811 0-.146-.186-.516-.413-.824-.227-.307-.495-.809-.596-1.115-.101-.306-.257-.557-.347-.557-.09 0-.32-.356-.511-.791-.191-.436-.524-1.004-.74-1.263-.217-.259-.393-.611-.393-.782 0-.17-.225-.556-.5-.857-.275-.301-.5-.668-.5-.814 0-.147-.223-.561-.496-.921-.272-.36-.497-.77-.5-.91-.002-.14-.119-.418-.26-.619-.183-.261-.208-.448-.09-.662.09-.163.322-.635.516-1.047.571-1.219 1.055-2.076 1.455-2.576.206-.258.375-.613.375-.788 0-.175.189-.494.42-.708.231-.215.538-.736.682-1.159.144-.423.333-.769.419-.769.087 0 .302-.338.479-.751.177-.414.475-.915.661-1.115.186-.2.341-.481.343-.624.003-.143.228-.555.5-.915.273-.36.496-.748.496-.862 0-.114.176-.42.393-.679.216-.259.555-.809.754-1.221.504-1.045 1.135-2.132 1.524-2.627.181-.23.329-.515.329-.633s.176-.426.392-.686c.216-.259.482-.746.592-1.082.11-.337.318-.711.464-.831.145-.121.409-.558.586-.972.178-.414.433-.874.568-1.024.259-.285.821-1.275 1.363-2.397.177-.368.441-.768.587-.889.145-.12.352-.494.46-.831.107-.336.33-.761.494-.945.164-.183.434-.652.602-1.041.167-.39.362-.709.433-.709.071 0 .321-.393.555-.875.737-1.516 1.145-2.248 1.429-2.566.151-.17.384-.574.518-.899.134-.324.348-.699.475-.833s.419-.607.648-1.052c.813-1.578 1.088-2.053 1.459-2.517.206-.258.375-.603.375-.767 0-.163.294-.603.653-.977l.654-.68 22.055.002c17.439.002 22.142.047 22.471.213m-39.417 7.462c-.38.112-.573.327-.808.901-.169.415-.366.755-.438.755-.071 0-.291.375-.488.833-.197.459-.423.834-.502.834-.079 0-.271.318-.426.708-.154.39-.413.858-.574 1.042-.161.183-.392.595-.514.916-.121.321-.358.739-.527.928-.168.189-.306.414-.307.5 0 .086-.169.414-.375.73a32.075 32.075 0 00-1.704 2.951c-.236.472-.536.947-.666 1.055-.13.108-.324.472-.431.808-.106.336-.286.687-.4.779-.114.092-.371.467-.572.833-.2.367-.622 1.116-.937 1.666-.315.55-.768 1.394-1.006 1.875-.238.482-.491.875-.562.875-.071 0-.267.319-.435.709-.169.389-.405.826-.525.971-.205.246-.632 1.011-1.437 2.57a7.792 7.792 0 01-.715 1.121c-.205.25-.423.687-.486.97-.062.283-.209.552-.326.597-.118.045-.35.396-.516.78-.166.385-.404.821-.528.97-.268.322-.854 1.378-1.467 2.646-.244.504-.53.97-.636 1.037-.143.089-.139.195.018.416.115.163.256.409.314.547.459 1.095 1.501 3.026 1.703 3.155.081.052.317.469.524.926.207.457.468.907.579 1 .111.093.302.431.425.752s.39.788.595 1.037c.204.25.459.719.566 1.042.106.323.261.588.343.588.082 0 .31.375.507.833.197.458.41.833.473.833s.251.319.418.709c.168.389.433.858.589 1.041.156.184.379.575.496.871.116.295.386.74.599.988.214.248.435.639.493.869.058.229.287.634.51.899.224.265.406.583.406.707 0 .123.174.436.387.695.212.259.486.734.609 1.055.123.32.353.695.51.833.157.138.417.606.579 1.042.162.435.357.791.435.791.077 0 .311.332.519.737 1 1.949 1.48 2.763 1.63 2.763.091 0 .165.139.165.309 0 .17.185.564.412.875.226.311.606.941.844 1.4.773 1.493 1.225 2.286 1.459 2.562.126.149.328.518.447.821.404 1.02.501 1.033 7.337 1.033h6.182l.41-.409.409-.409V99.359c0-9.108.027-10.167.263-10.258.456-.175 6.071-.112 6.414.072.314.167.323.457.323 10.257v10.086l.441.409.441.408h12.602l.3-.427c.164-.235.47-.642.678-.904.209-.262.465-.726.569-1.031.104-.305.364-.766.579-1.025.214-.26.392-.56.394-.667.003-.108.228-.49.5-.85.273-.36.496-.744.496-.852 0-.109.225-.481.5-.827s.5-.763.5-.927c0-.163.179-.51.397-.77.219-.26.521-.772.672-1.138.151-.366.373-.74.494-.832.12-.091.385-.504.588-.916.718-1.455 1.102-2.137 1.374-2.442.151-.17.397-.608.547-.975.149-.367.363-.742.475-.833.111-.092.376-.505.588-.917.212-.413.638-1.2.947-1.75.31-.55.675-1.225.812-1.5a8.79 8.79 0 01.677-1.074c.236-.316.429-.666.429-.779 0-.113.176-.417.393-.676.216-.259.556-.809.755-1.221.64-1.324 1.298-2.47 1.579-2.751.15-.15.273-.407.273-.572 0-.164.176-.477.392-.696.216-.219.483-.673.592-1.009.11-.337.316-.709.458-.827.143-.118.441-.593.662-1.055.222-.462.509-1.023.639-1.246.185-.32.193-.475.038-.728a44.025 44.025 0 01-1.628-2.949c-.199-.413-.483-.889-.632-1.059-.281-.319-.694-1.063-1.425-2.566-.234-.482-.493-.875-.576-.875-.083 0-.276-.314-.43-.698-.153-.383-.461-.914-.685-1.179-.223-.265-.406-.608-.406-.761 0-.154-.225-.542-.499-.862-.275-.321-.5-.715-.5-.875 0-.161-.135-.426-.299-.591-.164-.164-.401-.558-.527-.875a4.051 4.051 0 00-.595-.993 3.461 3.461 0 01-.561-.995 3.276 3.276 0 00-.584-1c-.215-.232-.436-.613-.491-.848-.056-.235-.29-.648-.522-.917-.231-.269-.421-.621-.421-.781 0-.161-.134-.426-.298-.589-.163-.164-.435-.595-.604-.959-.168-.363-.438-.811-.598-.994-.161-.183-.379-.604-.485-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.514-.411-.669 0-.155-.169-.493-.375-.751-.396-.495-.827-1.256-1.529-2.701-.234-.481-.491-.875-.572-.875-.081 0-.307-.356-.503-.791a8.987 8.987 0 00-.761-1.342c-.223-.302-.435-.639-.471-.75-.13-.388-13.004-.276-13.439.117-.349.317-.35.363-.35 10.35 0 9.507-.016 10.046-.305 10.307-.388.351-6.153.418-6.495.076-.151-.151-.201-2.668-.203-10.292-.003-10.754.023-10.43-.841-10.678-.709-.203-12.043-.191-12.74.014m12.656.319l.428.162v10.103c0 10.994-.005 10.939.928 11.173 1.188.298 6.216-.021 6.642-.422l.43-.404V57.692c0-9.148.025-10.111.275-10.387.258-.285.678-.305 6.459-.302l6.182.004.621.973c.341.535.702 1.19.803 1.454.1.265.309.621.463.791.281.309.691 1.039 1.373 2.442.201.412.487.888.636 1.058.262.298.463.653 1.354 2.383.23.445.521.918.648 1.052.128.134.342.509.475.833.134.325.368.729.519.899.277.31.693 1.053 1.368 2.441.201.413.462.863.58 1 .266.308.946 1.498 1.429 2.5.199.413.539.962.755 1.221.216.26.393.568.393.686 0 .118.145.4.323.625.316.402.886 1.387 1.579 2.725.191.371.512.9.712 1.177.2.277.414.705.476.951.062.247.173.449.247.449.073 0 .302.356.507.791.206.436.469.904.584 1.042.843 1.001 2.258 4.034 2.016 4.321-.122.144-.352.618-.513 1.053-.16.435-.387.848-.505.917-.117.069-.378.463-.58.876-.689 1.405-1.096 2.133-1.367 2.441-.149.17-.432.646-.628 1.059a19.747 19.747 0 01-.934 1.666 18.038 18.038 0 00-.846 1.49 7.261 7.261 0 01-.67 1.099c-.22.289-.401.624-.401.745 0 .12-.185.46-.41.756a6.263 6.263 0 00-.685 1.224c-.151.377-.333.686-.404.686-.071 0-.329.394-.573.875-.664 1.308-1.231 2.284-1.599 2.752-.181.23-.329.515-.329.633s-.189.44-.421.715c-.232.275-.506.75-.61 1.055a3.911 3.911 0 01-.579 1.025c-.214.259-.39.542-.39.628 0 .087-.189.444-.42.793-.474.715-1.061 1.774-1.554 2.798-.182.379-.417.742-.521.807-.104.064-.377.504-.606.976-.528 1.092-.917 1.786-1.464 2.613-.239.361-.435.729-.435.817 0 .77-12.115 1.114-12.974.369l-.359-.311V89.162l-.542-.33c-.488-.298-.845-.331-3.591-.331l-3.05-.001-.409.441-.408.441v10.039c0 9.135-.025 10.059-.276 10.267-.223.185-1.465.229-6.47.229-6.723 0-6.542.024-6.838-.925-.069-.225-.281-.627-.469-.895-.376-.533-.904-1.466-1.442-2.548-.191-.386-.429-.752-.529-.813-.099-.062-.351-.499-.561-.972-.209-.474-.493-.954-.631-1.069-.139-.115-.302-.412-.363-.66-.062-.248-.285-.639-.498-.868-.212-.229-.441-.604-.507-.834-.067-.229-.29-.641-.495-.916-.205-.275-.43-.688-.499-.917-.07-.229-.297-.604-.506-.833-.208-.229-.433-.604-.5-.834-.066-.229-.29-.604-.498-.833-.208-.229-.465-.689-.571-1.022-.106-.332-.334-.731-.505-.887a1.635 1.635 0 01-.416-.696c-.057-.227-.326-.72-.598-1.096-.272-.375-.495-.758-.495-.85 0-.092-.177-.4-.393-.683-.216-.284-.449-.703-.518-.933-.07-.229-.297-.604-.506-.833-.208-.229-.434-.604-.5-.833-.067-.229-.3-.656-.519-.948-.219-.291-.397-.599-.397-.683 0-.084-.223-.46-.495-.835-.272-.376-.542-.872-.6-1.102-.057-.23-.218-.512-.356-.627-.138-.115-.419-.587-.623-1.049-.205-.462-.497-.943-.649-1.068-.153-.126-.277-.322-.277-.435 0-.114-.2-.499-.444-.855-1.091-1.595-1.12-2.684-.105-3.962.203-.255.42-.626.482-.825.063-.199.283-.586.488-.861.205-.275.43-.688.499-.917.069-.229.297-.623.508-.874.21-.252.434-.627.497-.833.063-.207.211-.489.329-.626.204-.237.676-1.059 1.501-2.611.202-.382.518-.907.701-1.167.183-.26.384-.635.445-.834.062-.198.268-.558.457-.799.31-.395.647-.983 1.431-2.506.142-.275.424-.725.627-1s.428-.687.499-.917c.072-.229.302-.622.513-.874.21-.251.434-.626.499-.833.064-.207.272-.597.463-.867.328-.466.51-.782 1.348-2.342.197-.367.562-.966.81-1.331s.452-.728.452-.807c0-.079.159-.368.355-.643.195-.274.52-.81.723-1.192.824-1.552 1.296-2.374 1.5-2.611.119-.137.271-.437.338-.666.067-.229.26-.568.428-.753.169-.184.422-.611.563-.949.141-.337.388-.69.549-.784.387-.225 12.028-.242 12.616-.018" fill="#ec7c84" /><path d="M313.64 38.854c-.412.152-.973 1.008-.973 1.485 0 .114-.185.377-.41.586-.226.209-.46.593-.522.852-.061.26-.281.661-.488.89-.207.229-.432.604-.501.833-.069.229-.302.629-.519.888-.217.259-.443.671-.503.917-.06.245-.279.605-.486.8-.208.195-.45.617-.539.939-.089.322-.323.746-.519.943a1.945 1.945 0 00-.454.843c-.054.267-.242.617-.418.776-.176.16-.471.595-.656.967-.366.74-1.024 1.87-1.61 2.769-.206.316-.377.687-.381.825-.005.137-.23.509-.501.827-.271.317-.493.7-.493.85 0 .151-.182.47-.404.71-.222.239-.456.601-.521.804-.064.203-.333.667-.596 1.031-.264.363-.482.781-.486.928-.004.146-.229.526-.5.843-.271.318-.493.746-.493.953a.69.69 0 01-.328.551c-.18.096-.46.549-.622 1.005-.162.457-.357.831-.432.831-.075 0-.287.319-.471.708-.184.39-.517.964-.741 1.275-.223.311-.406.708-.406.88 0 .173-.111.357-.246.408-.29.112-.754.983-.754 1.415 0 .166-.141.378-.314.47-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.306.634-.528.899-.221.264-.447.702-.501.972-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368 0 .184-.14.41-.311.501-.171.092-.412.413-.535.715a7.63 7.63 0 01-.621 1.131c-.457.675-.416 1.489.104 2.066.174.193.402.606.507.919.104.312.33.666.501.785.171.12.354.435.407.701.053.265.277.699.497.964.22.265.451.69.513.944.062.255.259.609.438.788.179.179.435.588.569.909.134.32.395.745.579.943.184.197.383.577.441.844.059.266.278.65.488.852.21.203.428.569.485.814.057.245.281.657.497.916.216.26.486.758.6 1.108.114.351.309.676.433.723.123.048.349.413.501.811.153.399.377.763.499.81.122.047.315.394.428.772.113.378.38.824.593.991.213.168.387.444.387.614.001.367.597 1.393.81 1.393.081 0 .191.214.243.476.053.263.282.699.51.97.228.271.466.696.528.944s.239.543.394.655c.154.113.414.562.578.998.165.437.424.861.577.942.152.082.38.496.505.92.125.424.369.846.541.939.173.092.314.304.314.47 0 .166.206.595.459.952.252.358.588.932.747 1.275.158.344.362.625.451.625.09 0 .246.309.348.686.101.376.367.854.589 1.06.223.207.406.48.406.607.001.127.169.489.375.805a27.85 27.85 0 011.697 2.967c.233.482.498.875.589.875.091 0 .213.207.272.459.058.252.322.735.586 1.073.264.339.481.691.481.784 0 .411.436 1.062.857 1.28.47.243 45.196.375 46.087.136.232-.062.488-.39.713-.914.194-.45.419-.818.501-.818.082 0 .236-.264.343-.587.107-.323.363-.792.57-1.042.206-.25.463-.71.569-1.022.107-.312.338-.669.514-.792.175-.123.369-.45.43-.728.061-.277.278-.708.483-.958.204-.25.472-.717.595-1.037.122-.321.318-.663.435-.76.118-.098.337-.486.488-.863.151-.377.376-.724.502-.772.125-.048.32-.397.433-.775.113-.377.337-.778.497-.89.16-.112.42-.539.577-.947.158-.409.379-.82.492-.913.112-.093.371-.556.574-1.029.204-.474.476-.901.605-.951.129-.049.235-.232.235-.406 0-.173.23-.605.511-.959.282-.354.554-.855.606-1.112.051-.258.228-.563.392-.678.164-.115.429-.544.589-.952.159-.409.427-.878.596-1.041.168-.164.306-.376.306-.47 0-.095.214-.486.477-.869.262-.383.531-.868.596-1.077.066-.209.299-.575.519-.812.22-.237.447-.681.504-.987.058-.307.272-.664.479-.8.213-.139.465-.57.585-.997.116-.414.312-.791.436-.839.125-.048.345-.37.49-.717.144-.346.401-.781.569-.965.169-.185.361-.523.428-.753.066-.229.293-.604.503-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.625-.692.679-3 .071-3-.091 0-.312-.341-.491-.758-.179-.416-.513-1.005-.744-1.307-.231-.302-.419-.671-.419-.82 0-.148-.133-.341-.296-.428-.162-.087-.434-.546-.604-1.019-.171-.474-.409-.9-.531-.946-.121-.047-.305-.343-.409-.658a3.748 3.748 0 00-.569-1.027c-.208-.249-.435-.641-.504-.87a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.369-.736-.483-.831-.113-.095-.305-.435-.426-.756a3.832 3.832 0 00-.588-1c-.204-.229-.462-.703-.574-1.053-.112-.35-.305-.676-.429-.723-.124-.048-.314-.361-.424-.697a3.852 3.852 0 00-.577-1.064 3.769 3.769 0 01-.567-1.027c-.104-.315-.294-.613-.422-.662-.128-.049-.325-.398-.438-.776-.113-.378-.342-.783-.509-.899-.167-.117-.389-.468-.493-.781-.105-.312-.327-.719-.493-.903-.166-.185-.426-.632-.577-.995-.152-.362-.369-.736-.483-.831-.113-.094-.305-.435-.426-.755-.121-.321-.352-.734-.514-.917-.163-.183-.448-.69-.634-1.125-.186-.435-.411-.792-.498-.792-.088 0-.252-.281-.364-.625-.112-.343-.375-.831-.585-1.082-.209-.252-.432-.627-.495-.833a2.352 2.352 0 00-.401-.71c-.158-.183-.385-.596-.504-.916-.119-.321-.359-.711-.534-.866-.174-.155-.433-.624-.576-1.042-.142-.417-.327-.759-.411-.759-.085 0-.328-.394-.541-.875-.213-.481-.508-.974-.654-1.095-.146-.121-.314-.439-.373-.708-.059-.269-.24-.582-.402-.697-.162-.114-.385-.484-.496-.82-.373-1.138 1.498-1.052-23.501-1.085-14.566-.019-22.925.03-23.209.134m45.866.396c.205.183.483.596.616.917.134.32.377.733.541.916.164.184.354.516.422.739.068.223.339.703.602 1.067.264.363.48.73.48.814 0 .084.178.391.397.683.219.292.454.718.523.947.069.23.297.623.508.874.21.252.435.627.501.834.065.207.287.601.492.876.205.275.425.669.488.876.062.206.286.581.496.833.21.251.441.645.513.874.071.229.306.649.522.932.216.284.393.592.393.684 0 .092.216.465.479.829.264.364.535.844.603 1.067.067.222.257.555.421.738.164.183.422.632.572.998.151.365.412.815.58 1 .169.184.361.523.428.752.067.229.26.568.428.752.169.185.418.603.555.93.136.327.361.688.499.803.138.115.339.484.447.82.107.336.365.799.573 1.028.208.23.434.605.504.834.069.229.302.648.518.932.216.284.393.588.393.676 0 .087.216.455.479.817.263.362.536.846.606 1.075.07.229.299.622.51.874.21.251.434.626.497.833.063.207.211.488.329.626.204.237.676 1.059 1.501 2.611.202.381.518.906.701 1.166.183.26.389.661.457.89.068.229.295.604.503.833.209.229.435.599.502.822.068.223.339.703.602 1.067.264.363.48.729.48.812 0 .082.187.426.416.763.521.766.527 1.277.024 1.937-.216.284-.449.703-.519.932a2.36 2.36 0 01-.425.75c-.164.184-.421.633-.572.998-.15.365-.411.815-.58 1a2.344 2.344 0 00-.431.752c-.069.23-.298.623-.508.874-.21.252-.434.627-.496.834-.063.207-.283.601-.488.876-.205.275-.432.687-.503.916-.072.23-.303.623-.513.874-.21.252-.436.627-.501.834-.065.207-.296.608-.512.891-.216.284-.392.592-.392.684 0 .092-.216.465-.48.829-.263.364-.535.838-.604 1.055-.068.217-.34.691-.604 1.055-.263.364-.479.737-.479.829 0 .092-.173.4-.385.684a5.626 5.626 0 00-.601 1.051c-.119.295-.322.624-.451.731-.128.107-.38.503-.559.88a26.45 26.45 0 01-.917 1.687 27.43 27.43 0 00-.917 1.677c-.178.372-.477.815-.664.984-.187.169-.34.427-.34.573 0 .146-.169.525-.375.841-.401.617-.961 1.582-1.698 2.925-.251.458-.553.945-.672 1.083a2.076 2.076 0 00-.329.626c-.063.207-.287.582-.497.833-.211.252-.44.645-.51.874-.07.23-.343.713-.606 1.075-.263.362-.479.75-.479.862 0 .112-.177.416-.394.676-.216.259-.45.658-.519.887-.069.23-.262.567-.428.75-.167.184-.452.682-.634 1.107-.182.425-.415.825-.518.889-.103.064-.309.418-.457.788-.484 1.211 1.121 1.133-23.453 1.133-16.332 0-22.191-.05-22.503-.192-.418-.19-.738-.584-1.272-1.558l-.73-1.333c-.25-.459-.552-.946-.67-1.084-.118-.137-.376-.587-.573-1-.493-1.031-1.127-2.126-1.52-2.626-.181-.23-.329-.515-.329-.633s-.177-.427-.394-.686c-.216-.259-.45-.659-.519-.888-.069-.229-.298-.646-.508-.927a6.187 6.187 0 01-.624-1.09c-.133-.319-.354-.692-.492-.829-.137-.138-.415-.585-.617-.994-.72-1.456-1.1-2.131-1.371-2.435-.151-.17-.398-.608-.547-.975-.15-.367-.364-.742-.475-.833-.112-.092-.39-.531-.62-.976-.897-1.743-1.093-2.085-1.362-2.383a2.093 2.093 0 01-.391-.76c-.062-.248-.286-.638-.497-.866a3.231 3.231 0 01-.576-.994c-.105-.318-.307-.675-.45-.793-.142-.118-.441-.593-.663-1.055-.54-1.124-1.164-2.207-1.565-2.717-.181-.23-.329-.515-.329-.633s-.189-.44-.421-.715a3.95 3.95 0 01-.61-1.054 3.895 3.895 0 00-.579-1.025c-.214-.26-.39-.552-.39-.651 0-.099-.176-.412-.392-.696a9.465 9.465 0 01-.761-1.266c-.687-1.397-1.096-2.132-1.358-2.441-.144-.17-.505-.815-.803-1.435l-.541-1.126.334-.426c.185-.234.422-.687.527-1.007.106-.32.365-.768.577-.996.211-.229.435-.619.497-.867s.238-.59.391-.76c.275-.304.65-.968 1.375-2.435.202-.409.48-.856.617-.994.138-.137.36-.515.493-.839.134-.325.342-.703.462-.84.211-.241.755-1.19 1.484-2.584.191-.366.491-.878.666-1.136.415-.612.828-1.35 1.278-2.28.199-.413.459-.863.577-1 .248-.288.918-1.446 1.397-2.417.181-.367.52-.925.754-1.241.234-.315.426-.662.426-.769 0-.107.145-.38.323-.605.311-.396.849-1.323 1.579-2.718.191-.367.491-.879.666-1.137.426-.627.828-1.35 1.331-2.39.229-.472.502-.912.606-.976.104-.065.334-.428.51-.807.347-.747.894-1.735 1.51-2.729.538-.868.901-1.513 1.291-2.295.183-.366.524-.925.758-1.24.234-.316.426-.659.426-.762 0-.104.223-.483.495-.843.273-.36.498-.743.5-.85.007-.292.844-1.232 1.241-1.395.858-.35 44.868-.101 45.27.257m-39.883 7.931c-.161.094-.408.447-.549.784-.141.338-.394.765-.563.949a2.303 2.303 0 00-.428.753c-.067.229-.219.529-.338.666-.204.237-.676 1.059-1.5 2.611a13.15 13.15 0 01-.723 1.192c-.196.275-.355.564-.355.643 0 .079-.204.442-.452.807-.248.365-.613.964-.81 1.331-.838 1.56-1.02 1.876-1.348 2.342-.191.27-.399.66-.463.867-.065.207-.289.582-.499.833-.211.252-.441.645-.513.874-.071.23-.296.642-.499.917a8.991 8.991 0 00-.627 1c-.784 1.523-1.121 2.111-1.431 2.506-.189.241-.395.601-.457.799-.061.199-.262.574-.445.834s-.499.785-.701 1.167c-.825 1.552-1.297 2.374-1.501 2.611a2.064 2.064 0 00-.329.626c-.063.206-.287.581-.497.833-.211.251-.439.645-.508.874-.069.229-.294.642-.499.917-.205.275-.425.662-.488.861-.062.199-.279.57-.482.825-1.015 1.278-.986 2.367.105 3.962.244.356.444.741.444.855 0 .113.124.309.277.435.152.125.444.606.649 1.068.204.462.485.934.623 1.049.138.115.299.397.356.627.058.23.328.726.6 1.102.272.375.495.751.495.835 0 .084.178.392.397.683.219.292.452.719.519.948.066.229.292.604.5.833.209.229.436.604.506.833.069.23.302.649.518.933.216.283.393.591.393.683 0 .092.223.475.495.85.272.376.541.869.598 1.096.057.228.244.541.416.696.171.156.399.555.505.887.106.333.363.793.571 1.022.208.229.432.604.498.833.067.23.292.605.5.834.209.229.436.604.506.833.069.229.294.642.499.917.205.275.428.687.495.916.066.23.295.605.507.834.213.229.436.62.498.868.061.248.224.545.363.66.138.115.422.595.631 1.069.21.473.462.91.561.972.1.061.338.427.529.813.538 1.082 1.066 2.015 1.442 2.548.188.268.4.67.469.895.296.949.115.925 6.838.925 5.005 0 6.247-.044 6.47-.229.251-.208.276-1.132.276-10.267V89.382l.408-.441.409-.441 3.05.001c2.746 0 3.103.033 3.591.331l.542.33v20.216l.359.311c.859.745 12.974.401 12.974-.369 0-.088.196-.456.435-.817.547-.827.936-1.521 1.464-2.613.229-.472.502-.912.606-.976.104-.065.339-.428.521-.807.493-1.024 1.08-2.083 1.554-2.798.231-.349.42-.706.42-.793 0-.086.176-.369.39-.628.215-.259.475-.721.579-1.025.104-.305.378-.78.61-1.055.232-.275.421-.597.421-.715s.148-.403.329-.633c.368-.468.935-1.444 1.599-2.752.244-.481.502-.875.573-.875.071 0 .253-.309.404-.686.151-.377.459-.928.685-1.224.225-.296.41-.636.41-.756 0-.121.181-.456.401-.745.221-.29.523-.784.67-1.099.148-.315.529-.986.846-1.49.318-.504.738-1.254.934-1.666.196-.413.479-.889.628-1.059.271-.308.678-1.036 1.367-2.441.202-.413.463-.807.58-.876.118-.069.345-.482.505-.917.161-.435.391-.909.513-1.053.242-.287-1.173-3.32-2.016-4.321-.115-.138-.378-.606-.584-1.042-.205-.435-.434-.791-.507-.791-.074 0-.185-.202-.247-.449-.062-.246-.276-.674-.476-.951-.2-.277-.521-.806-.712-1.177-.693-1.338-1.263-2.323-1.579-2.725-.178-.225-.323-.507-.323-.625s-.177-.426-.393-.686c-.216-.259-.556-.808-.755-1.221-.483-1.002-1.163-2.192-1.429-2.5-.118-.137-.379-.587-.58-1-.675-1.388-1.091-2.131-1.368-2.441-.151-.17-.385-.574-.519-.899-.133-.324-.347-.699-.475-.833-.127-.134-.418-.607-.648-1.052-.891-1.73-1.092-2.085-1.354-2.383-.149-.17-.435-.646-.636-1.058-.682-1.403-1.092-2.133-1.373-2.442a2.972 2.972 0 01-.463-.791c-.101-.264-.462-.919-.803-1.454l-.621-.973-6.182-.004c-5.781-.003-6.201.017-6.459.302-.25.276-.275 1.239-.275 10.387v10.083l-.43.404c-.426.401-5.454.72-6.642.422-.933-.234-.928-.179-.928-11.173V47.325l-.428-.162c-.588-.224-12.229-.207-12.616.018m12.503 10.493l.043 10.258.48.576.48.575 2.894.054c3.28.061 4.134-.024 4.678-.465l.382-.309.084-10.473.083-10.473 6.129-.044c5.729-.041 6.136-.025 6.227.25.251.762.582 1.349.81 1.437.138.053.251.237.251.41s.183.569.406.88c.224.312.557.885.741 1.275.184.39.41.708.504.708.093 0 .252.309.354.686.101.376.355.845.563 1.041.209.196.429.557.489.802s.297.668.526.941c.229.272.417.61.417.75s.179.467.397.727c.219.26.517.759.664 1.109.146.349.405.761.576.915.172.154.412.603.534.998.122.395.359.791.525.881.167.089.304.298.304.465 0 .166.184.558.409.869.225.311.529.828.675 1.147.146.32.401.732.568.917.167.185.352.54.411.789s.279.624.488.833c.21.209.483.68.607 1.047.124.367.364.765.533.884.17.12.309.353.309.517 0 .165.186.555.414.866.227.311.562.885.744 1.275.181.389.402.708.489.708.088 0 .25.281.36.625.11.344.368.813.575 1.042.206.229.425.629.486.889.062.26.296.657.522.883.225.225.41.485.41.577 0 .274.528 1.224.755 1.358.73.429.572 2.61-.254 3.496-.191.205-.391.562-.444.793-.054.231-.189.495-.302.587-.25.204-.755 1.161-.755 1.431 0 .109-.183.366-.406.573-.222.207-.483.665-.579 1.019-.095.354-.316.732-.49.84-.174.108-.368.403-.432.656-.063.252-.302.68-.53.951-.228.271-.459.714-.513.984-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368a.636.636 0 01-.314.503c-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.302.629-.519.888-.217.259-.443.672-.503.917s-.282.608-.493.806c-.211.199-.434.574-.496.833-.061.26-.28.661-.486.89-.207.229-.467.703-.579 1.053-.112.35-.305.676-.429.723-.124.048-.315.361-.424.697-.11.335-.37.77-.578.965-.208.195-.451.617-.54.939-.089.322-.318.742-.51.933a2.013 2.013 0 00-.456.81c-.06.255-.279.651-.486.88-.207.229-.431.604-.497.833a2.27 2.27 0 01-.428.752c-.168.185-.425.597-.571.917-.146.32-.45.836-.675 1.147-.225.312-.409.697-.409.856 0 .159-.169.334-.375.39-.492.131-11.519.135-11.862.004-.236-.091-.263-1.154-.263-10.297 0-12.616.485-11.436-4.707-11.436h-2.999l-.647.647-.647.647v20.334l-.375.101c-.493.132-10.934.135-11.592.003-.41-.082-.574-.254-.848-.891-.186-.434-.451-.882-.587-.995-.136-.113-.335-.481-.442-.817-.107-.337-.367-.778-.578-.98-.21-.202-.429-.58-.486-.839-.056-.259-.285-.682-.507-.941a3.621 3.621 0 01-.586-1.022c-.1-.303-.276-.587-.392-.631-.115-.044-.313-.397-.441-.784s-.367-.788-.533-.891c-.165-.103-.42-.55-.567-.993-.147-.442-.369-.844-.492-.891-.124-.047-.313-.361-.42-.696-.108-.336-.333-.762-.5-.946-.168-.185-.418-.607-.557-.938-.138-.332-.349-.64-.467-.686-.119-.045-.357-.473-.528-.95-.172-.477-.411-.906-.533-.952-.121-.047-.308-.359-.415-.695-.107-.336-.365-.798-.572-1.027-.208-.229-.434-.604-.503-.833-.069-.229-.302-.629-.519-.888-.217-.259-.441-.672-.498-.917-.057-.245-.234-.558-.392-.695-.158-.138-.417-.585-.575-.993-.158-.409-.422-.838-.586-.953-.164-.115-.342-.426-.395-.692-.053-.265-.278-.699-.499-.964-.222-.265-.459-.669-.528-.898a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.378-.736-.504-.831-.125-.095-.344-.504-.485-.908-.141-.405-.397-.834-.568-.955-.64-.448-.569-2.082.117-2.692.176-.156.417-.547.537-.867.119-.321.32-.706.447-.855.253-.299.841-1.348 1.359-2.427.184-.384.485-.847.668-1.03.183-.184.407-.603.499-.933.091-.329.31-.728.487-.886.178-.157.42-.549.539-.869.119-.321.346-.734.504-.917.158-.183.339-.502.401-.709.063-.207.286-.582.497-.834.21-.251.438-.644.507-.874.069-.229.297-.604.507-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.207-.229.464-.691.571-1.027.107-.336.291-.647.408-.692.117-.045.351-.445.52-.89.168-.444.444-.906.612-1.025.168-.12.306-.328.306-.463 0-.134.262-.626.583-1.092.321-.467.583-.986.583-1.154 0-.167.149-.409.331-.537.182-.127.444-.549.581-.938.137-.389.389-.833.56-.986.171-.154.408-.595.527-.98.279-.905-.174-.85 6.751-.823l6 .024.043 10.257" fill="#f4acac" /></g></svg>

                                    <img className="akfa" src={akfa} />
                                    <img className="fabfix" src={fabfix} />
                                    <img className="stublina" src={stublina} />
                                    <img className="master" src={master} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel12-item2">
                        <div className="images">

                            <img src={fittings1} class="d-block w-100" alt="..." />
                            <h3 style={{ marginBottom: "0" }}>Для ПВХ конструкций</h3>
                            <div className="images_inner" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <img src={fittings2} className="fittings2" alt="..." />
                                <div className="logos">

                                    <svg xmlns={roto} width="90" viewBox="1 1 400 164.384" ><path d="M79.795 80.736C35.908 124.962 0 161.567 0 162.08c0 .514 18.339.932 40.753.929l40.754-.004 75.92-76.834 75.921-76.833 75.906 76.838 75.907 76.838h7.533c4.144 0 7.329-.574 7.078-1.275-.251-.701-36.409-37.379-80.351-81.507L239.526 0l-39.968.163-39.969.162-79.794 80.411m72.26 50.771v31.507h15.068v-24.658l3.767.005c3.275.004 4.743 1.614 11.239 12.329l7.472 12.324h8.624c4.743 0 8.624-.245 8.624-.545 0-.3-3.39-6.057-7.534-12.794-8.103-13.174-8.633-14.714-5.487-15.921 3.428-1.315 7.531-9.475 7.537-14.986.014-14.088-7.982-18.694-32.529-18.738l-16.781-.03v31.507m120.548-23.448c-5.372 1.984-6.22 2.845-6.594 6.698-.377 3.88-.921 4.421-4.452 4.421-3.684 0-4.023.404-4.023 4.795 0 4.382.343 4.794 3.992 4.794h3.992l.46 15.867c.55 18.954 1.131 19.75 14.421 19.75h8.642v-4.795c0-4.375-.347-4.794-3.963-4.794-5.008 0-5.626-1.667-5.626-15.181v-10.847h4.795c4.566 0 4.794-.228 4.794-4.794 0-4.553-.238-4.795-4.723-4.795-4.683 0-4.726-.056-5.137-6.697l-.414-6.698-6.164 2.276m-94.126 3.788c14.02 2.317 8.264 15.55-6.764 15.55h-4.59v-8.219c0-9.144.079-9.195 11.354-7.331m42.756 7.82c-11.577 5.357-16.225 20.387-10.324 33.387 7.35 16.191 34.153 15.813 41.407-.585 9.271-20.959-10.831-42.174-31.083-32.802m87.671-.855c-12.722 3.185-19.135 21.865-12.136 35.351 7.497 14.446 33.159 13.962 40.559-.766 9.849-19.603-6.893-39.976-28.423-34.585m-72.54 11.948c7.296 7.296 3.433 24.623-5.3 23.769-10.606-1.037-10.18-27.132.443-27.132.822 0 3.007 1.513 4.857 3.363m86.581.462c2.457 3.126 2.177 16.82-.42 20.528-4.331 6.184-12.077 2.85-13.72-5.904-2.55-13.595 7.102-23.578 14.14-14.624" /></svg>



                                    <svg xmlns={hoppe} width="150" viewBox="1 1 400 156"><g fill-rule="evenodd"><path d="M313.82 39.847c-.359.374-.653.814-.653.977 0 .164-.169.509-.375.767-.371.464-.646.939-1.459 2.517-.229.445-.521.918-.648 1.052s-.341.509-.475.833c-.134.325-.367.729-.518.899-.284.318-.692 1.05-1.429 2.566-.234.482-.484.875-.555.875-.071 0-.266.319-.433.709-.168.389-.438.858-.602 1.041-.164.184-.387.609-.494.945-.108.337-.315.711-.46.831-.146.121-.41.521-.587.889-.542 1.122-1.104 2.112-1.363 2.397-.135.15-.39.61-.568 1.024-.177.414-.441.851-.586.972-.146.12-.354.494-.464.831-.11.336-.376.823-.592 1.082-.216.26-.392.568-.392.686 0 .118-.148.403-.329.633-.389.495-1.02 1.582-1.524 2.627-.199.412-.538.962-.754 1.221-.217.259-.393.565-.393.679 0 .114-.223.502-.496.862-.272.36-.497.772-.5.915-.002.143-.157.424-.343.624-.186.2-.484.701-.661 1.115-.177.413-.392.751-.479.751-.086 0-.275.346-.419.769-.144.423-.451.944-.682 1.159-.231.214-.42.533-.42.708 0 .175-.169.53-.375.788-.4.5-.884 1.357-1.455 2.576-.194.412-.426.884-.516 1.047-.118.214-.093.401.09.662.141.201.258.479.26.619.003.14.228.55.5.91.273.36.496.774.496.921 0 .146.225.513.5.814.275.301.5.687.5.857 0 .171.176.523.393.782.216.259.549.827.74 1.263.191.435.421.791.511.791.09 0 .246.251.347.557.101.306.369.808.596 1.115.227.308.413.678.413.824 0 .145.225.51.5.811.275.301.5.682.5.847 0 .165.221.578.49.918.27.34.576.875.68 1.19.104.314.259.572.345.572.085 0 .33.393.543.875.213.481.512.978.665 1.103.152.126.277.344.277.485 0 .14.184.497.41.793.225.296.534.847.685 1.224.151.377.342.686.425.686.083 0 .342.394.576.875.829 1.705 1.324 2.584 1.612 2.865.16.156.292.41.292.564 0 .154.225.542.5.863.274.321.499.709.499.862 0 .154.177.491.394.75.216.259.541.809.722 1.221.182.413.455.853.608.979.152.126.279.351.281.5.003.149.228.566.5.926.273.36.496.778.496.929 0 .151.185.449.411.662.227.213.499.657.604.987.106.33.327.751.491.934.164.183.434.652.602 1.042.167.389.358.708.425.708.066 0 .302.356.523.792l.803 1.573c.221.43.605 1.011.855 1.291l.455.511h22.226c25.148 0 22.747.137 23.336-1.336.149-.372.383-.718.52-.771.137-.053.249-.198.249-.322 0-.312.533-1.405.685-1.405.068 0 .321-.393.563-.875.776-1.544 1.163-2.24 1.403-2.526.129-.153.406-.651.617-1.105.211-.455.461-.827.557-.827.096 0 .175-.139.175-.309 0-.169.185-.563.412-.875.226-.311.603-.941.836-1.399.484-.952 1.152-2.082 1.385-2.346.087-.099.309-.52.494-.937.184-.417.414-.806.51-.866.096-.059.37-.5.609-.98.239-.479.675-1.298.969-1.819.294-.521.713-1.271.932-1.666.219-.396.459-.76.535-.809.076-.049.296-.447.49-.885.194-.437.459-.837.59-.887.131-.05.238-.193.238-.318 0-.311.533-1.404.685-1.404.068 0 .321-.394.563-.875.687-1.368 1.216-2.308 1.467-2.604.126-.149.33-.524.452-.833.123-.309.347-.684.499-.833.152-.149.376-.534.498-.855.123-.321.352-.733.509-.917.158-.183.45-.671.65-1.083.697-1.435 1.178-2.237 1.426-2.377.138-.077.251-.246.251-.376 0-.327.532-1.414.693-1.414.072 0 .291-.372.487-.828.196-.455.46-.914.588-1.02.324-.269.289-.702-.094-1.143-.18-.207-.416-.647-.525-.977-.109-.331-.327-.717-.484-.858-.157-.141-.385-.52-.506-.84a4.515 4.515 0 00-.606-1.055c-.213-.259-.387-.568-.387-.686 0-.118-.162-.42-.359-.672-.381-.483-.842-1.286-1.552-2.696-.237-.472-.538-.947-.668-1.055-.13-.108-.363-.528-.518-.933-.155-.405-.333-.737-.397-.737-.063 0-.291-.375-.506-.833-.214-.458-.444-.833-.51-.833s-.247-.319-.402-.709c-.154-.389-.413-.858-.574-1.041-.161-.184-.393-.596-.516-.917-.122-.321-.346-.706-.498-.855-.152-.149-.376-.524-.499-.833-.122-.309-.326-.684-.452-.833-.265-.313-.842-1.346-1.453-2.604-.233-.481-.487-.875-.563-.875-.163 0-.699-1.078-.699-1.404 0-.125-.109-.269-.242-.32-.133-.051-.405-.471-.604-.934-.199-.463-.418-.842-.486-.842s-.28-.375-.47-.833c-.191-.459-.415-.834-.5-.834-.084 0-.284-.342-.443-.76-.16-.417-.42-.886-.577-1.041-.158-.155-.387-.545-.51-.865-.122-.321-.346-.734-.498-.917-.151-.183-.411-.648-.577-1.032-.166-.384-.39-.732-.498-.774-.108-.041-.301-.391-.429-.777-.127-.386-.326-.739-.441-.783-.115-.044-.294-.338-.398-.653a3.86 3.86 0 00-.561-1.027 4.559 4.559 0 01-.597-1.037c-.123-.321-.335-.714-.47-.872-.135-.159-.404-.607-.597-.996-.604-1.211 1.112-1.127-23.24-1.13l-22.055-.002-.654.68m18.503 6.983c.864.248.838-.076.841 10.678.002 7.624.052 10.141.203 10.292.342.342 6.107.275 6.495-.076.289-.261.305-.8.305-10.307 0-9.987.001-10.033.35-10.35.435-.393 13.309-.505 13.439-.117.036.111.248.448.471.75.222.303.565.906.761 1.342.196.435.422.791.503.791.081 0 .338.394.572.875.702 1.445 1.133 2.206 1.529 2.701.206.258.375.596.375.751 0 .155.185.456.411.669.227.213.499.657.604.987.106.33.324.751.485.934.16.183.43.631.598.994.169.364.441.795.604.959.164.163.298.428.298.589 0 .16.19.512.421.781.232.269.466.682.522.917.055.235.276.616.491.848.215.232.478.682.584 1 .107.318.359.766.561.995.202.23.47.676.595.993.126.317.363.711.527.875.164.165.299.43.299.591 0 .16.225.554.5.875.274.32.499.708.499.862 0 .153.183.496.406.761.224.265.532.796.685 1.179.154.384.347.698.43.698.083 0 .342.393.576.875.731 1.503 1.144 2.247 1.425 2.566.149.17.433.646.632 1.059.33.686 1.142 2.158 1.628 2.949.155.253.147.408-.038.728-.13.223-.417.784-.639 1.246-.221.462-.519.937-.662 1.055-.142.118-.348.49-.458.827-.109.336-.376.79-.592 1.009-.216.219-.392.532-.392.696 0 .165-.123.422-.273.572-.281.281-.939 1.427-1.579 2.751-.199.412-.539.962-.755 1.221-.217.259-.393.563-.393.676 0 .113-.193.463-.429.779a8.79 8.79 0 00-.677 1.074c-.137.275-.502.95-.812 1.5-.309.55-.735 1.337-.947 1.75-.212.412-.477.825-.588.917-.112.091-.326.466-.475.833-.15.367-.396.805-.547.975-.272.305-.656.987-1.374 2.442-.203.412-.468.825-.588.916-.121.092-.343.466-.494.832-.151.366-.453.878-.672 1.138-.218.26-.397.607-.397.77 0 .164-.225.581-.5.927-.275.346-.5.718-.5.827 0 .108-.223.492-.496.852-.272.36-.497.742-.5.85-.002.107-.18.407-.394.667-.215.259-.475.72-.579 1.025-.104.305-.36.769-.569 1.031-.208.262-.514.669-.678.904l-.3.427h-12.602l-.441-.408-.441-.409V99.43c0-9.8-.009-10.09-.323-10.257-.343-.184-5.958-.247-6.414-.072-.236.091-.263 1.15-.263 10.258v10.156l-.409.409-.41.409h-6.182c-6.836 0-6.933-.013-7.337-1.033-.119-.303-.321-.672-.447-.821-.234-.276-.686-1.069-1.459-2.562a13.432 13.432 0 00-.844-1.4c-.227-.311-.412-.705-.412-.875 0-.17-.074-.309-.165-.309-.15 0-.63-.814-1.63-2.763-.208-.405-.442-.737-.519-.737-.078 0-.273-.356-.435-.791-.162-.436-.422-.904-.579-1.042-.157-.138-.387-.513-.51-.833a4.597 4.597 0 00-.609-1.055c-.213-.259-.387-.572-.387-.695 0-.124-.182-.442-.406-.707-.223-.265-.452-.67-.51-.899-.058-.23-.279-.621-.493-.869a4.167 4.167 0 01-.599-.988c-.117-.296-.34-.687-.496-.871-.156-.183-.421-.652-.589-1.041-.167-.39-.355-.709-.418-.709s-.276-.375-.473-.833c-.197-.458-.425-.833-.507-.833-.082 0-.237-.265-.343-.588a3.925 3.925 0 00-.566-1.042 4.474 4.474 0 01-.595-1.037c-.123-.321-.314-.659-.425-.752-.111-.093-.372-.543-.579-1-.207-.457-.443-.874-.524-.926-.202-.129-1.244-2.06-1.703-3.155a3.58 3.58 0 00-.314-.547c-.157-.221-.161-.327-.018-.416.106-.067.392-.533.636-1.037.613-1.268 1.199-2.324 1.467-2.646.124-.149.362-.585.528-.97.166-.384.398-.735.516-.78.117-.045.264-.314.326-.597.063-.283.281-.72.486-.97.204-.25.526-.754.715-1.121.805-1.559 1.232-2.324 1.437-2.57.12-.145.356-.582.525-.971.168-.39.364-.709.435-.709.071 0 .324-.393.562-.875.238-.481.691-1.325 1.006-1.875.315-.55.737-1.299.937-1.666.201-.366.458-.741.572-.833.114-.092.294-.443.4-.779.107-.336.301-.7.431-.808.13-.108.43-.583.666-1.055a32.075 32.075 0 011.704-2.951c.206-.316.375-.644.375-.73.001-.086.139-.311.307-.5.169-.189.406-.607.527-.928.122-.321.353-.733.514-.916.161-.184.42-.652.574-1.042.155-.39.347-.708.426-.708.079 0 .305-.375.502-.834.197-.458.417-.833.488-.833.072 0 .269-.34.438-.755.235-.574.428-.789.808-.901.697-.205 12.031-.217 12.74-.014" fill="#df222a" /><path d="M101.083 45.842c-2.525.154-4.086.398-4.75.741-.231.12-.792.274-1.247.342-.454.068-1.278.338-1.831.599-.553.262-1.168.476-1.367.476-.199 0-.586.188-.859.418-.273.229-.723.462-1.001.518-.278.056-.641.228-.808.383-.167.155-.697.496-1.178.758-.482.262-.875.527-.875.589 0 .063-.204.207-.453.32-.506.23-.462.191-2.881 2.584-2.151 2.129-2.392 2.406-3.272 3.763a31.088 31.088 0 01-1.024 1.5c-.177.23-.481.754-.675 1.167a14.51 14.51 0 01-.51 1c-.387.619-1.352 2.803-1.352 3.06 0 .156-.178.638-.396 1.071-.219.432-.449 1.123-.513 1.536-.064.412-.297 1.357-.518 2.099-.221.742-.478 2.13-.572 3.084-.094.953-.24 2.371-.325 3.15-.2 1.828-.205 4.826-.012 6.833.084.871.23 2.403.324 3.405.096 1.02.35 2.376.578 3.083.224.694.458 1.635.52 2.09.062.456.282 1.168.489 1.584.208.415.428.98.49 1.255.11.487.895 2.245 1.376 3.083.132.23.368.68.524 1 .157.321.333.621.391.667.059.046.321.429.584.852.262.423.677 1.069.923 1.436.591.883 3.907 4.308 4.886 5.045.425.321 1.022.79 1.326 1.042.304.252.621.458.706.458.084 0 .449.216.811.479.362.264.846.536 1.075.606.229.069.628.275.887.457.258.182.816.436 1.24.563.423.128.941.344 1.151.482.21.137.874.364 1.476.504.602.139 1.447.391 1.878.559 2.593 1.01 12.871.968 15.625-.064.554-.208 1.341-.434 1.75-.502.408-.068 1.08-.292 1.493-.497.412-.205.962-.424 1.222-.486.26-.063.747-.288 1.083-.5.336-.212.799-.443 1.028-.514.229-.071.713-.344 1.075-.608.361-.263.726-.479.811-.479.084 0 .402-.206.706-.458.305-.252.946-.758 1.426-1.125 1.104-.843 3.031-2.772 3.899-3.903.366-.477.873-1.117 1.125-1.421.252-.304.458-.626.458-.714 0-.088.144-.291.321-.45.176-.16.509-.69.74-1.177.231-.488.494-.932.584-.988.09-.056.256-.382.369-.724.113-.343.373-.886.578-1.206.205-.321.418-.846.474-1.167.056-.321.289-.952.518-1.403.229-.451.416-.996.416-1.212 0-.215.191-.934.424-1.596a14.53 14.53 0 00.585-2.539 57.93 57.93 0 01.451-2.917c.408-2.225.408-8.982 0-10.916a27.126 27.126 0 01-.395-2.584c-.062-.687-.327-1.918-.589-2.736-.262-.817-.476-1.627-.476-1.798 0-.172-.225-.794-.5-1.382-.275-.589-.5-1.212-.5-1.387 0-.174-.187-.592-.415-.928-.228-.336-.462-.815-.521-1.065-.059-.249-.285-.692-.503-.984-.217-.292-.394-.591-.394-.665 0-.075-.25-.511-.555-.97l-.792-1.191c-1.598-2.41-3.43-4.256-6.588-6.644-.838-.633-4.435-2.583-4.766-2.583-.081 0-.612-.215-1.181-.477-.569-.263-1.373-.528-1.785-.59-.413-.062-1.275-.29-1.917-.506-1.149-.388-1.865-.459-6.666-.664-.825-.035-2.55 0-3.834.079m-83.821 1.253c-.399.399-.401 62.132-.003 62.701.388.553 11.025.587 11.574.037.328-.327.334-.555.334-13.479 0-12.024.023-13.166.275-13.375.472-.392 26.063-.425 26.349-.034.163.223.209 3.145.209 13.383 0 11.585.03 13.141.259 13.468.388.553 11.025.587 11.574.037.526-.526.526-62.14 0-62.666-.459-.46-11.117-.526-11.571-.072-.233.233-.262 1.579-.262 12.3 0 9.141-.048 12.086-.2 12.238-.265.265-25.818.292-26.311.028-.314-.168-.322-.479-.322-12.167 0-11.772-.007-12-.334-12.327-.459-.46-11.117-.526-11.571-.072m123.02-.02c-.416.417-.439 62.127-.023 62.721.388.553 11.025.587 11.574.037.327-.326.334-.555.334-11.487V87.193l.541-.169c.298-.092 2.642-.199 5.209-.238 2.946-.044 4.838-.14 5.132-.26.256-.105 1.375-.347 2.486-.539 1.111-.191 2.176-.448 2.367-.57.192-.122.685-.313 1.098-.425.754-.204 2.847-1.187 4.08-1.916 1.312-.776 3.484-2.649 4.337-3.739.366-.469.862-1.093 1.102-1.386.24-.294.494-.722.566-.951.071-.229.306-.649.522-.932.216-.284.393-.667.393-.851 0-.184.196-.701.435-1.151.255-.478.499-1.299.589-1.983.085-.641.277-1.654.427-2.25.375-1.486.377-5.685.004-7.083a21.438 21.438 0 01-.43-2.204c-.095-.699-.3-1.399-.49-1.667a3.274 3.274 0 01-.443-.998c-.064-.295-.291-.794-.504-1.108-.213-.315-.444-.748-.512-.964-.418-1.32-4.074-4.792-6.019-5.716-.473-.225-.905-.482-.96-.571-.056-.09-.494-.287-.974-.437a10.794 10.794 0 01-1.484-.599c-.336-.179-1.161-.43-1.833-.559a41.404 41.404 0 01-2.556-.598c-1.878-.511-24.481-.741-24.968-.254m49.051-.123c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c1.075.656 11.032.45 11.497-.237.067-.1.124-5.141.125-11.204l.003-11.022.384-.252c.314-.206 1.272-.265 5.208-.323 3.153-.046 4.986-.139 5.29-.266.256-.107 1.375-.352 2.486-.544 1.111-.191 2.176-.451 2.367-.576.192-.125.791-.343 1.332-.483.542-.141 1.104-.359 1.25-.483.146-.125.594-.354.994-.509.4-.155.963-.448 1.25-.651.287-.203.642-.444.789-.535 1.739-1.082 4.983-4.256 4.983-4.876 0-.081.223-.443.495-.803.273-.36.498-.737.5-.838.003-.101.193-.538.424-.971.23-.433.495-1.138.587-1.567.093-.428.327-1.153.521-1.612.795-1.883.735-9.398-.094-11.705-.238-.663-.433-1.377-.433-1.586 0-.21-.176-.642-.392-.962a5.85 5.85 0 01-.595-1.203c-.112-.342-.274-.666-.36-.719-.086-.053-.421-.509-.743-1.013-1.038-1.622-3.233-3.61-5.219-4.726-.243-.136-.779-.442-1.191-.68-.412-.238-.975-.488-1.25-.554a7.604 7.604 0 01-1.178-.445c-.372-.178-1.122-.403-1.666-.501a21.14 21.14 0 01-2.073-.514c-1.703-.527-23.735-.989-25-.523m48 0c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c.855.522 36.27.52 36.791-.002.548-.547.515-9.354-.037-9.74-.327-.229-1.796-.26-12.55-.26-9.251 0-12.227-.048-12.379-.2-.15-.15-.2-2.231-.2-8.341v-8.14l.409-.41.409-.409h18.128l.194-.424c.276-.608.27-9.432-.007-9.709-.151-.151-2.467-.201-9.375-.205-7.365-.005-9.233-.049-9.467-.227-.269-.205-.291-.751-.291-7.235v-7.014l.37-.26c.327-.228 1.743-.259 11.988-.259 10.339 0 11.647-.029 11.88-.262.429-.429.389-9.237-.043-9.629-.303-.274-34.796-.427-35.529-.157m43.292.237c-.252.095-.458.24-.458.323 0 .082-.248.253-.55.38-.759.317-2.373 2.197-2.596 3.025a8.28 8.28 0 01-.517 1.327c-.532 1.042-.488 3.803.079 4.923.23.452.417.969.417 1.148 0 .179.262.67.583 1.09.321.421.584.837.584.925 0 .089.218.274.484.412.266.138.589.355.716.483.418.417 1.272.775 1.849.775.327 0 .729.141.951.333.636.552 3.666.468 3.666-.101 0-.181-.333-.232-1.531-.232-1.315 0-1.582-.048-1.896-.343-.2-.189-.746-.443-1.212-.566-.82-.217-1.451-.731-2.623-2.138-.839-1.008-1.795-5.359-1.25-5.695.147-.091.548-1.219.742-2.091.051-.229.265-.604.475-.834a7.84 7.84 0 00.676-.875c.161-.252.382-.458.49-.458.108 0 .425-.218.705-.484 1.121-1.07 5.884-1.095 7.234-.038 1.181.925 2.196 2.108 2.378 2.772.101.367.336 1.066.522 1.554.435 1.139.427 2.756-.02 3.766-.177.401-.377.98-.444 1.288-.228 1.049-2.124 3.018-3.111 3.23-.81.174-1.135.384-1.027.665.136.355 1.537.327 2.064-.041 1.666-1.165 2.912-2.626 3.067-3.598.061-.379.226-.816.367-.972.611-.675.608-4.12-.004-5.054-.134-.205-.298-.665-.364-1.022-.169-.922-1.785-2.909-2.562-3.149a1.717 1.717 0 01-.693-.48c-.327-.404-6.234-.608-7.191-.248m.575 3.011c-.22.22-.265 7.36-.052 8.133.093.337.237.427.745.469.916.077 1.107-.163 1.107-1.387 0-.756.083-1.147.299-1.414l.299-.369.742.927c.409.509.879 1.118 1.045 1.353.629.89 2.282 1.262 2.282.513 0-.278-1.06-2.175-1.412-2.527-.333-.333-.344-.285.318-1.373.326-.535.585-1.194.6-1.525.063-1.35.004-1.534-.734-2.272l-.728-.728h-2.156c-1.454 0-2.22.065-2.355.2m3.633 1.8c.717.716.19 2-.821 2-.636 0-1.012-.393-1.012-1.058 0-1.146 1.077-1.699 1.833-.942m-177.827 3.989c.911.096 1.763.305 2.365.58.517.237 1.056.431 1.196.431.14 0 .61.225 1.043.5.434.275.848.5.921.5.548 0 4.636 3.884 4.636 4.405 0 .06.187.312.416.559.23.247.417.529.417.627 0 .097.217.519.482.937.265.417.536 1.013.604 1.324.067.311.26.76.428.998.169.239.389.801.489 1.25.1.449.362 1.417.582 2.15 1.09 3.629 1.08 13.51-.016 16.583-.212.596-.439 1.421-.502 1.834-.064.412-.33 1.154-.592 1.648-.261.494-.475 1.019-.476 1.167 0 .147-.225.605-.499 1.018-.274.412-.499.836-.499.941-.001.105-.187.367-.415.583-.227.216-.415.474-.416.574-.011.657-4.053 4.402-4.751 4.402-.111 0-.337.151-.504.335-.167.184-.647.44-1.067.568-.421.128-1.104.386-1.519.573-1.843.831-8.452.814-10.354-.026-.49-.217-1.097-.445-1.349-.508-.251-.063-.81-.338-1.241-.612-.431-.273-.844-.497-.918-.497-.073 0-.273-.131-.443-.291-.17-.161-.639-.549-1.042-.864-.715-.558-2.68-2.693-3.047-3.311a30.613 30.613 0 00-.559-.88c-.206-.314-.375-.676-.375-.805-.001-.128-.182-.471-.403-.761-.221-.29-.492-.859-.601-1.265a8.362 8.362 0 00-.508-1.345c-.171-.334-.387-1.089-.481-1.678a12.883 12.883 0 00-.541-2.06c-.356-.953-.37-1.21-.377-6.99l-.007-6 .443-1.416c.243-.78.489-1.743.546-2.141.057-.398.244-.998.415-1.334.171-.336.402-.945.512-1.354.11-.408.338-.919.508-1.134.169-.215.397-.668.508-1.006.11-.338.379-.84.598-1.115 1.526-1.915 2.631-3.173 3.19-3.632 1.399-1.151 1.628-1.317 2.03-1.474.23-.089.68-.339 1-.554.321-.215.846-.445 1.167-.511.321-.066.883-.273 1.25-.461 1.08-.553 4.79-.774 7.756-.462m53.715.855c1.49.13 2.25.28 2.862.563.459.213 1.081.468 1.384.567.947.312 3.2 2.253 3.2 2.758 0 .147.076.268.169.268.198 0 .485.63 1.025 2.25 1.383 4.148-.584 10.438-3.694 11.813a8.009 8.009 0 00-.961.546c-.299.199-.862.415-1.25.479s-.786.18-.883.259c-.782.628-9.743 1.002-10.221.426-.136-.164-.176-2.908-.145-9.953l.043-9.727.417-.211c.526-.266 5.19-.288 8.054-.038m48.353.006c2.062.162 2.453.242 3.259.667.505.265 1.007.482 1.117.483.764.001 3.152 2.301 3.634 3.5.093.229.353.754.579 1.167.655 1.192.638 6.634-.024 8a33.218 33.218 0 00-.683 1.5c-.253.615-2.343 2.831-2.677 2.836-.108.002-.516.22-.908.486s-1.03.536-1.417.6c-.387.064-.891.211-1.121.326-1.254.63-9.231.88-9.862.309-.288-.261-.304-.784-.304-9.781v-9.505l.362-.386c.43-.457 3.733-.54 8.045-.202" fill="#fff" /><path d="M314.236 38.993c-.397.163-1.234 1.103-1.241 1.395-.002.107-.227.49-.5.85-.272.36-.495.739-.495.843 0 .103-.192.446-.426.762-.234.315-.575.874-.758 1.24-.39.782-.753 1.427-1.291 2.295-.616.994-1.163 1.982-1.51 2.729-.176.379-.406.742-.51.807-.104.064-.377.504-.606.976-.503 1.04-.905 1.763-1.331 2.39-.175.258-.475.77-.666 1.137-.73 1.395-1.268 2.322-1.579 2.718-.178.225-.323.498-.323.605 0 .107-.192.454-.426.769a9.805 9.805 0 00-.754 1.241c-.479.971-1.149 2.129-1.397 2.417-.118.137-.378.587-.577 1-.45.93-.863 1.668-1.278 2.28-.175.258-.475.77-.666 1.136-.729 1.394-1.273 2.343-1.484 2.584-.12.137-.328.515-.462.84-.133.324-.355.702-.493.839-.137.138-.415.585-.617.994-.725 1.467-1.1 2.131-1.375 2.435-.153.17-.329.512-.391.76s-.286.638-.497.867a3.229 3.229 0 00-.577.996c-.105.32-.342.773-.527 1.007l-.334.426.541 1.126c.298.62.659 1.265.803 1.435.262.309.671 1.044 1.358 2.441.203.413.546.982.761 1.266.216.284.392.597.392.696 0 .099.176.391.39.651.215.259.475.72.579 1.025.104.305.378.779.61 1.054.232.275.421.597.421.715s.148.403.329.633c.401.51 1.025 1.593 1.565 2.717.222.462.521.937.663 1.055.143.118.345.475.45.793.105.318.364.765.576.994.211.228.435.618.497.866.062.249.238.591.391.76.269.298.465.64 1.362 2.383.23.445.508.884.62.976.111.091.325.466.475.833.149.367.396.805.547.975.271.304.651.979 1.371 2.435.202.409.48.856.617.994.138.137.359.51.492.829.133.318.414.809.624 1.09.21.281.439.698.508.927.069.229.303.629.519.888.217.259.394.568.394.686 0 .118.148.403.329.633.393.5 1.027 1.595 1.52 2.626.197.413.455.863.573 1 .118.138.42.625.67 1.084l.73 1.333c.534.974.854 1.368 1.272 1.558.312.142 6.171.192 22.503.192 24.574 0 22.969.078 23.453-1.133.148-.37.354-.724.457-.788.103-.064.336-.464.518-.889s.467-.923.634-1.107c.166-.183.359-.52.428-.75.069-.229.303-.628.519-.887.217-.26.394-.564.394-.676 0-.112.216-.5.479-.862s.536-.845.606-1.075c.07-.229.299-.622.51-.874.21-.251.434-.626.497-.833.063-.207.211-.488.329-.626.119-.138.421-.625.672-1.083.737-1.343 1.297-2.308 1.698-2.925.206-.316.375-.695.375-.841 0-.146.153-.404.34-.573.187-.169.486-.612.664-.984a27.43 27.43 0 01.917-1.677c.325-.55.738-1.309.917-1.687.179-.377.431-.773.559-.88.129-.107.332-.436.451-.731.118-.294.389-.768.601-1.051.212-.284.385-.592.385-.684 0-.092.216-.465.479-.829.264-.364.536-.838.604-1.055.069-.217.341-.691.604-1.055.264-.364.48-.737.48-.829 0-.092.176-.4.392-.684.216-.283.447-.684.512-.891.065-.207.291-.582.501-.834.21-.251.441-.644.513-.874.071-.229.298-.641.503-.916.205-.275.425-.669.488-.876.062-.207.286-.582.496-.834.21-.251.439-.644.508-.874.069-.229.263-.567.431-.752.169-.185.43-.635.58-1 .151-.365.408-.814.572-.998a2.36 2.36 0 00.425-.75c.07-.229.303-.648.519-.932.503-.66.497-1.171-.024-1.937-.229-.337-.416-.681-.416-.763 0-.083-.216-.449-.48-.812-.263-.364-.534-.844-.602-1.067-.067-.223-.293-.593-.502-.822-.208-.229-.435-.604-.503-.833-.068-.229-.274-.63-.457-.89s-.499-.785-.701-1.166c-.825-1.552-1.297-2.374-1.501-2.611a2.076 2.076 0 01-.329-.626c-.063-.207-.287-.582-.497-.833-.211-.252-.44-.645-.51-.874-.07-.229-.343-.713-.606-1.075-.263-.362-.479-.73-.479-.817 0-.088-.177-.392-.393-.676-.216-.284-.449-.703-.518-.932-.07-.229-.296-.604-.504-.834-.208-.229-.466-.692-.573-1.028-.108-.336-.309-.705-.447-.82-.138-.115-.363-.476-.499-.803-.137-.327-.386-.745-.555-.93a2.288 2.288 0 01-.428-.752 2.27 2.27 0 00-.428-.752c-.168-.185-.429-.635-.58-1-.15-.366-.408-.815-.572-.998a2.342 2.342 0 01-.421-.738c-.068-.223-.339-.703-.603-1.067-.263-.364-.479-.737-.479-.829 0-.092-.177-.4-.393-.684-.216-.283-.451-.703-.522-.932-.072-.229-.303-.623-.513-.874-.21-.252-.434-.627-.496-.833-.063-.207-.283-.601-.488-.876-.205-.275-.427-.669-.492-.876-.066-.207-.291-.582-.501-.834-.211-.251-.439-.644-.508-.874-.069-.229-.304-.655-.523-.947-.219-.292-.397-.599-.397-.683 0-.084-.216-.451-.48-.814-.263-.364-.534-.844-.602-1.067a2.37 2.37 0 00-.422-.739c-.164-.183-.407-.596-.541-.916-.574-1.379 1.837-1.246-23.264-1.283-12.251-.018-22.431.031-22.622.109m44.764.389c.229.116.575.529.769.917.193.389.462.837.597.996.135.158.347.551.47.872.124.32.392.787.597 1.037.204.25.457.712.561 1.027.104.315.283.609.398.653.115.044.314.397.441.783.128.386.321.736.429.777.108.042.332.39.498.774.166.384.426.849.577 1.032.152.183.376.596.498.917.123.32.352.71.51.865.157.155.417.624.577 1.041.159.418.359.76.443.76.085 0 .309.375.5.834.19.458.402.833.47.833.068 0 .287.379.486.842.199.463.471.883.604.934.133.051.242.195.242.32 0 .326.536 1.404.699 1.404.076 0 .33.394.563.875.611 1.258 1.188 2.291 1.453 2.604.126.149.33.524.452.833.123.309.347.684.499.833.152.149.376.534.498.855.123.321.355.733.516.917.161.183.42.652.574 1.041.155.39.336.709.402.709s.296.375.51.833c.215.458.443.833.506.833.064 0 .242.332.397.737.155.405.388.825.518.933.13.108.431.583.668 1.055.71 1.41 1.171 2.213 1.552 2.696.197.252.359.554.359.672s.174.427.387.686c.212.259.485.734.606 1.055.121.32.349.699.506.84.157.141.375.527.484.858.109.33.345.77.525.977.383.441.418.874.094 1.143-.128.106-.392.565-.588 1.02-.196.456-.415.828-.487.828-.161 0-.693 1.087-.693 1.414 0 .13-.113.299-.251.376-.248.14-.729.942-1.426 2.377-.2.412-.492.9-.65 1.083-.157.184-.386.596-.509.917-.122.321-.346.706-.498.855-.152.149-.376.524-.499.833-.122.309-.326.684-.452.833-.251.296-.78 1.236-1.467 2.604-.242.481-.495.875-.563.875-.152 0-.685 1.093-.685 1.404 0 .125-.107.268-.238.318-.131.05-.396.45-.59.887-.194.438-.414.836-.49.885-.076.049-.316.413-.535.809-.219.395-.638 1.145-.932 1.666-.294.521-.73 1.34-.969 1.819-.239.48-.513.921-.609.98-.096.06-.326.449-.51.866-.185.417-.407.838-.494.937-.233.264-.901 1.394-1.385 2.346-.233.458-.61 1.088-.836 1.399-.227.312-.412.706-.412.875 0 .17-.079.309-.175.309-.096 0-.346.372-.557.827-.211.454-.488.952-.617 1.105-.24.286-.627.982-1.403 2.526-.242.482-.495.875-.563.875-.152 0-.685 1.093-.685 1.405 0 .124-.112.269-.249.322-.137.053-.371.399-.52.771-.589 1.473 1.812 1.336-23.336 1.336h-22.226l-.455-.511c-.25-.28-.634-.861-.855-1.291l-.803-1.573c-.221-.436-.457-.792-.523-.792-.067 0-.258-.319-.425-.708-.168-.39-.438-.859-.602-1.042-.164-.183-.385-.604-.491-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.511-.411-.662 0-.151-.223-.569-.496-.929-.272-.36-.497-.777-.5-.926-.002-.149-.129-.374-.281-.5-.153-.126-.426-.566-.608-.979-.181-.412-.506-.962-.722-1.221-.217-.259-.394-.596-.394-.75 0-.153-.225-.541-.499-.862-.275-.321-.5-.709-.5-.863 0-.154-.132-.408-.292-.564-.288-.281-.783-1.16-1.612-2.865-.234-.481-.493-.875-.576-.875-.083 0-.274-.309-.425-.686a6.315 6.315 0 00-.685-1.224c-.226-.296-.41-.653-.41-.793 0-.141-.125-.359-.277-.485-.153-.125-.452-.622-.665-1.103-.213-.482-.458-.875-.543-.875-.086 0-.241-.258-.345-.572-.104-.315-.41-.85-.68-1.19-.269-.34-.49-.753-.49-.918 0-.165-.225-.546-.5-.847-.275-.301-.5-.666-.5-.811 0-.146-.186-.516-.413-.824-.227-.307-.495-.809-.596-1.115-.101-.306-.257-.557-.347-.557-.09 0-.32-.356-.511-.791-.191-.436-.524-1.004-.74-1.263-.217-.259-.393-.611-.393-.782 0-.17-.225-.556-.5-.857-.275-.301-.5-.668-.5-.814 0-.147-.223-.561-.496-.921-.272-.36-.497-.77-.5-.91-.002-.14-.119-.418-.26-.619-.183-.261-.208-.448-.09-.662.09-.163.322-.635.516-1.047.571-1.219 1.055-2.076 1.455-2.576.206-.258.375-.613.375-.788 0-.175.189-.494.42-.708.231-.215.538-.736.682-1.159.144-.423.333-.769.419-.769.087 0 .302-.338.479-.751.177-.414.475-.915.661-1.115.186-.2.341-.481.343-.624.003-.143.228-.555.5-.915.273-.36.496-.748.496-.862 0-.114.176-.42.393-.679.216-.259.555-.809.754-1.221.504-1.045 1.135-2.132 1.524-2.627.181-.23.329-.515.329-.633s.176-.426.392-.686c.216-.259.482-.746.592-1.082.11-.337.318-.711.464-.831.145-.121.409-.558.586-.972.178-.414.433-.874.568-1.024.259-.285.821-1.275 1.363-2.397.177-.368.441-.768.587-.889.145-.12.352-.494.46-.831.107-.336.33-.761.494-.945.164-.183.434-.652.602-1.041.167-.39.362-.709.433-.709.071 0 .321-.393.555-.875.737-1.516 1.145-2.248 1.429-2.566.151-.17.384-.574.518-.899.134-.324.348-.699.475-.833s.419-.607.648-1.052c.813-1.578 1.088-2.053 1.459-2.517.206-.258.375-.603.375-.767 0-.163.294-.603.653-.977l.654-.68 22.055.002c17.439.002 22.142.047 22.471.213m-39.417 7.462c-.38.112-.573.327-.808.901-.169.415-.366.755-.438.755-.071 0-.291.375-.488.833-.197.459-.423.834-.502.834-.079 0-.271.318-.426.708-.154.39-.413.858-.574 1.042-.161.183-.392.595-.514.916-.121.321-.358.739-.527.928-.168.189-.306.414-.307.5 0 .086-.169.414-.375.73a32.075 32.075 0 00-1.704 2.951c-.236.472-.536.947-.666 1.055-.13.108-.324.472-.431.808-.106.336-.286.687-.4.779-.114.092-.371.467-.572.833-.2.367-.622 1.116-.937 1.666-.315.55-.768 1.394-1.006 1.875-.238.482-.491.875-.562.875-.071 0-.267.319-.435.709-.169.389-.405.826-.525.971-.205.246-.632 1.011-1.437 2.57a7.792 7.792 0 01-.715 1.121c-.205.25-.423.687-.486.97-.062.283-.209.552-.326.597-.118.045-.35.396-.516.78-.166.385-.404.821-.528.97-.268.322-.854 1.378-1.467 2.646-.244.504-.53.97-.636 1.037-.143.089-.139.195.018.416.115.163.256.409.314.547.459 1.095 1.501 3.026 1.703 3.155.081.052.317.469.524.926.207.457.468.907.579 1 .111.093.302.431.425.752s.39.788.595 1.037c.204.25.459.719.566 1.042.106.323.261.588.343.588.082 0 .31.375.507.833.197.458.41.833.473.833s.251.319.418.709c.168.389.433.858.589 1.041.156.184.379.575.496.871.116.295.386.74.599.988.214.248.435.639.493.869.058.229.287.634.51.899.224.265.406.583.406.707 0 .123.174.436.387.695.212.259.486.734.609 1.055.123.32.353.695.51.833.157.138.417.606.579 1.042.162.435.357.791.435.791.077 0 .311.332.519.737 1 1.949 1.48 2.763 1.63 2.763.091 0 .165.139.165.309 0 .17.185.564.412.875.226.311.606.941.844 1.4.773 1.493 1.225 2.286 1.459 2.562.126.149.328.518.447.821.404 1.02.501 1.033 7.337 1.033h6.182l.41-.409.409-.409V99.359c0-9.108.027-10.167.263-10.258.456-.175 6.071-.112 6.414.072.314.167.323.457.323 10.257v10.086l.441.409.441.408h12.602l.3-.427c.164-.235.47-.642.678-.904.209-.262.465-.726.569-1.031.104-.305.364-.766.579-1.025.214-.26.392-.56.394-.667.003-.108.228-.49.5-.85.273-.36.496-.744.496-.852 0-.109.225-.481.5-.827s.5-.763.5-.927c0-.163.179-.51.397-.77.219-.26.521-.772.672-1.138.151-.366.373-.74.494-.832.12-.091.385-.504.588-.916.718-1.455 1.102-2.137 1.374-2.442.151-.17.397-.608.547-.975.149-.367.363-.742.475-.833.111-.092.376-.505.588-.917.212-.413.638-1.2.947-1.75.31-.55.675-1.225.812-1.5a8.79 8.79 0 01.677-1.074c.236-.316.429-.666.429-.779 0-.113.176-.417.393-.676.216-.259.556-.809.755-1.221.64-1.324 1.298-2.47 1.579-2.751.15-.15.273-.407.273-.572 0-.164.176-.477.392-.696.216-.219.483-.673.592-1.009.11-.337.316-.709.458-.827.143-.118.441-.593.662-1.055.222-.462.509-1.023.639-1.246.185-.32.193-.475.038-.728a44.025 44.025 0 01-1.628-2.949c-.199-.413-.483-.889-.632-1.059-.281-.319-.694-1.063-1.425-2.566-.234-.482-.493-.875-.576-.875-.083 0-.276-.314-.43-.698-.153-.383-.461-.914-.685-1.179-.223-.265-.406-.608-.406-.761 0-.154-.225-.542-.499-.862-.275-.321-.5-.715-.5-.875 0-.161-.135-.426-.299-.591-.164-.164-.401-.558-.527-.875a4.051 4.051 0 00-.595-.993 3.461 3.461 0 01-.561-.995 3.276 3.276 0 00-.584-1c-.215-.232-.436-.613-.491-.848-.056-.235-.29-.648-.522-.917-.231-.269-.421-.621-.421-.781 0-.161-.134-.426-.298-.589-.163-.164-.435-.595-.604-.959-.168-.363-.438-.811-.598-.994-.161-.183-.379-.604-.485-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.514-.411-.669 0-.155-.169-.493-.375-.751-.396-.495-.827-1.256-1.529-2.701-.234-.481-.491-.875-.572-.875-.081 0-.307-.356-.503-.791a8.987 8.987 0 00-.761-1.342c-.223-.302-.435-.639-.471-.75-.13-.388-13.004-.276-13.439.117-.349.317-.35.363-.35 10.35 0 9.507-.016 10.046-.305 10.307-.388.351-6.153.418-6.495.076-.151-.151-.201-2.668-.203-10.292-.003-10.754.023-10.43-.841-10.678-.709-.203-12.043-.191-12.74.014m12.656.319l.428.162v10.103c0 10.994-.005 10.939.928 11.173 1.188.298 6.216-.021 6.642-.422l.43-.404V57.692c0-9.148.025-10.111.275-10.387.258-.285.678-.305 6.459-.302l6.182.004.621.973c.341.535.702 1.19.803 1.454.1.265.309.621.463.791.281.309.691 1.039 1.373 2.442.201.412.487.888.636 1.058.262.298.463.653 1.354 2.383.23.445.521.918.648 1.052.128.134.342.509.475.833.134.325.368.729.519.899.277.31.693 1.053 1.368 2.441.201.413.462.863.58 1 .266.308.946 1.498 1.429 2.5.199.413.539.962.755 1.221.216.26.393.568.393.686 0 .118.145.4.323.625.316.402.886 1.387 1.579 2.725.191.371.512.9.712 1.177.2.277.414.705.476.951.062.247.173.449.247.449.073 0 .302.356.507.791.206.436.469.904.584 1.042.843 1.001 2.258 4.034 2.016 4.321-.122.144-.352.618-.513 1.053-.16.435-.387.848-.505.917-.117.069-.378.463-.58.876-.689 1.405-1.096 2.133-1.367 2.441-.149.17-.432.646-.628 1.059a19.747 19.747 0 01-.934 1.666 18.038 18.038 0 00-.846 1.49 7.261 7.261 0 01-.67 1.099c-.22.289-.401.624-.401.745 0 .12-.185.46-.41.756a6.263 6.263 0 00-.685 1.224c-.151.377-.333.686-.404.686-.071 0-.329.394-.573.875-.664 1.308-1.231 2.284-1.599 2.752-.181.23-.329.515-.329.633s-.189.44-.421.715c-.232.275-.506.75-.61 1.055a3.911 3.911 0 01-.579 1.025c-.214.259-.39.542-.39.628 0 .087-.189.444-.42.793-.474.715-1.061 1.774-1.554 2.798-.182.379-.417.742-.521.807-.104.064-.377.504-.606.976-.528 1.092-.917 1.786-1.464 2.613-.239.361-.435.729-.435.817 0 .77-12.115 1.114-12.974.369l-.359-.311V89.162l-.542-.33c-.488-.298-.845-.331-3.591-.331l-3.05-.001-.409.441-.408.441v10.039c0 9.135-.025 10.059-.276 10.267-.223.185-1.465.229-6.47.229-6.723 0-6.542.024-6.838-.925-.069-.225-.281-.627-.469-.895-.376-.533-.904-1.466-1.442-2.548-.191-.386-.429-.752-.529-.813-.099-.062-.351-.499-.561-.972-.209-.474-.493-.954-.631-1.069-.139-.115-.302-.412-.363-.66-.062-.248-.285-.639-.498-.868-.212-.229-.441-.604-.507-.834-.067-.229-.29-.641-.495-.916-.205-.275-.43-.688-.499-.917-.07-.229-.297-.604-.506-.833-.208-.229-.433-.604-.5-.834-.066-.229-.29-.604-.498-.833-.208-.229-.465-.689-.571-1.022-.106-.332-.334-.731-.505-.887a1.635 1.635 0 01-.416-.696c-.057-.227-.326-.72-.598-1.096-.272-.375-.495-.758-.495-.85 0-.092-.177-.4-.393-.683-.216-.284-.449-.703-.518-.933-.07-.229-.297-.604-.506-.833-.208-.229-.434-.604-.5-.833-.067-.229-.3-.656-.519-.948-.219-.291-.397-.599-.397-.683 0-.084-.223-.46-.495-.835-.272-.376-.542-.872-.6-1.102-.057-.23-.218-.512-.356-.627-.138-.115-.419-.587-.623-1.049-.205-.462-.497-.943-.649-1.068-.153-.126-.277-.322-.277-.435 0-.114-.2-.499-.444-.855-1.091-1.595-1.12-2.684-.105-3.962.203-.255.42-.626.482-.825.063-.199.283-.586.488-.861.205-.275.43-.688.499-.917.069-.229.297-.623.508-.874.21-.252.434-.627.497-.833.063-.207.211-.489.329-.626.204-.237.676-1.059 1.501-2.611.202-.382.518-.907.701-1.167.183-.26.384-.635.445-.834.062-.198.268-.558.457-.799.31-.395.647-.983 1.431-2.506.142-.275.424-.725.627-1s.428-.687.499-.917c.072-.229.302-.622.513-.874.21-.251.434-.626.499-.833.064-.207.272-.597.463-.867.328-.466.51-.782 1.348-2.342.197-.367.562-.966.81-1.331s.452-.728.452-.807c0-.079.159-.368.355-.643.195-.274.52-.81.723-1.192.824-1.552 1.296-2.374 1.5-2.611.119-.137.271-.437.338-.666.067-.229.26-.568.428-.753.169-.184.422-.611.563-.949.141-.337.388-.69.549-.784.387-.225 12.028-.242 12.616-.018" fill="#ec7c84" /><path d="M313.64 38.854c-.412.152-.973 1.008-.973 1.485 0 .114-.185.377-.41.586-.226.209-.46.593-.522.852-.061.26-.281.661-.488.89-.207.229-.432.604-.501.833-.069.229-.302.629-.519.888-.217.259-.443.671-.503.917-.06.245-.279.605-.486.8-.208.195-.45.617-.539.939-.089.322-.323.746-.519.943a1.945 1.945 0 00-.454.843c-.054.267-.242.617-.418.776-.176.16-.471.595-.656.967-.366.74-1.024 1.87-1.61 2.769-.206.316-.377.687-.381.825-.005.137-.23.509-.501.827-.271.317-.493.7-.493.85 0 .151-.182.47-.404.71-.222.239-.456.601-.521.804-.064.203-.333.667-.596 1.031-.264.363-.482.781-.486.928-.004.146-.229.526-.5.843-.271.318-.493.746-.493.953a.69.69 0 01-.328.551c-.18.096-.46.549-.622 1.005-.162.457-.357.831-.432.831-.075 0-.287.319-.471.708-.184.39-.517.964-.741 1.275-.223.311-.406.708-.406.88 0 .173-.111.357-.246.408-.29.112-.754.983-.754 1.415 0 .166-.141.378-.314.47-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.306.634-.528.899-.221.264-.447.702-.501.972-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368 0 .184-.14.41-.311.501-.171.092-.412.413-.535.715a7.63 7.63 0 01-.621 1.131c-.457.675-.416 1.489.104 2.066.174.193.402.606.507.919.104.312.33.666.501.785.171.12.354.435.407.701.053.265.277.699.497.964.22.265.451.69.513.944.062.255.259.609.438.788.179.179.435.588.569.909.134.32.395.745.579.943.184.197.383.577.441.844.059.266.278.65.488.852.21.203.428.569.485.814.057.245.281.657.497.916.216.26.486.758.6 1.108.114.351.309.676.433.723.123.048.349.413.501.811.153.399.377.763.499.81.122.047.315.394.428.772.113.378.38.824.593.991.213.168.387.444.387.614.001.367.597 1.393.81 1.393.081 0 .191.214.243.476.053.263.282.699.51.97.228.271.466.696.528.944s.239.543.394.655c.154.113.414.562.578.998.165.437.424.861.577.942.152.082.38.496.505.92.125.424.369.846.541.939.173.092.314.304.314.47 0 .166.206.595.459.952.252.358.588.932.747 1.275.158.344.362.625.451.625.09 0 .246.309.348.686.101.376.367.854.589 1.06.223.207.406.48.406.607.001.127.169.489.375.805a27.85 27.85 0 011.697 2.967c.233.482.498.875.589.875.091 0 .213.207.272.459.058.252.322.735.586 1.073.264.339.481.691.481.784 0 .411.436 1.062.857 1.28.47.243 45.196.375 46.087.136.232-.062.488-.39.713-.914.194-.45.419-.818.501-.818.082 0 .236-.264.343-.587.107-.323.363-.792.57-1.042.206-.25.463-.71.569-1.022.107-.312.338-.669.514-.792.175-.123.369-.45.43-.728.061-.277.278-.708.483-.958.204-.25.472-.717.595-1.037.122-.321.318-.663.435-.76.118-.098.337-.486.488-.863.151-.377.376-.724.502-.772.125-.048.32-.397.433-.775.113-.377.337-.778.497-.89.16-.112.42-.539.577-.947.158-.409.379-.82.492-.913.112-.093.371-.556.574-1.029.204-.474.476-.901.605-.951.129-.049.235-.232.235-.406 0-.173.23-.605.511-.959.282-.354.554-.855.606-1.112.051-.258.228-.563.392-.678.164-.115.429-.544.589-.952.159-.409.427-.878.596-1.041.168-.164.306-.376.306-.47 0-.095.214-.486.477-.869.262-.383.531-.868.596-1.077.066-.209.299-.575.519-.812.22-.237.447-.681.504-.987.058-.307.272-.664.479-.8.213-.139.465-.57.585-.997.116-.414.312-.791.436-.839.125-.048.345-.37.49-.717.144-.346.401-.781.569-.965.169-.185.361-.523.428-.753.066-.229.293-.604.503-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.625-.692.679-3 .071-3-.091 0-.312-.341-.491-.758-.179-.416-.513-1.005-.744-1.307-.231-.302-.419-.671-.419-.82 0-.148-.133-.341-.296-.428-.162-.087-.434-.546-.604-1.019-.171-.474-.409-.9-.531-.946-.121-.047-.305-.343-.409-.658a3.748 3.748 0 00-.569-1.027c-.208-.249-.435-.641-.504-.87a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.369-.736-.483-.831-.113-.095-.305-.435-.426-.756a3.832 3.832 0 00-.588-1c-.204-.229-.462-.703-.574-1.053-.112-.35-.305-.676-.429-.723-.124-.048-.314-.361-.424-.697a3.852 3.852 0 00-.577-1.064 3.769 3.769 0 01-.567-1.027c-.104-.315-.294-.613-.422-.662-.128-.049-.325-.398-.438-.776-.113-.378-.342-.783-.509-.899-.167-.117-.389-.468-.493-.781-.105-.312-.327-.719-.493-.903-.166-.185-.426-.632-.577-.995-.152-.362-.369-.736-.483-.831-.113-.094-.305-.435-.426-.755-.121-.321-.352-.734-.514-.917-.163-.183-.448-.69-.634-1.125-.186-.435-.411-.792-.498-.792-.088 0-.252-.281-.364-.625-.112-.343-.375-.831-.585-1.082-.209-.252-.432-.627-.495-.833a2.352 2.352 0 00-.401-.71c-.158-.183-.385-.596-.504-.916-.119-.321-.359-.711-.534-.866-.174-.155-.433-.624-.576-1.042-.142-.417-.327-.759-.411-.759-.085 0-.328-.394-.541-.875-.213-.481-.508-.974-.654-1.095-.146-.121-.314-.439-.373-.708-.059-.269-.24-.582-.402-.697-.162-.114-.385-.484-.496-.82-.373-1.138 1.498-1.052-23.501-1.085-14.566-.019-22.925.03-23.209.134m45.866.396c.205.183.483.596.616.917.134.32.377.733.541.916.164.184.354.516.422.739.068.223.339.703.602 1.067.264.363.48.73.48.814 0 .084.178.391.397.683.219.292.454.718.523.947.069.23.297.623.508.874.21.252.435.627.501.834.065.207.287.601.492.876.205.275.425.669.488.876.062.206.286.581.496.833.21.251.441.645.513.874.071.229.306.649.522.932.216.284.393.592.393.684 0 .092.216.465.479.829.264.364.535.844.603 1.067.067.222.257.555.421.738.164.183.422.632.572.998.151.365.412.815.58 1 .169.184.361.523.428.752.067.229.26.568.428.752.169.185.418.603.555.93.136.327.361.688.499.803.138.115.339.484.447.82.107.336.365.799.573 1.028.208.23.434.605.504.834.069.229.302.648.518.932.216.284.393.588.393.676 0 .087.216.455.479.817.263.362.536.846.606 1.075.07.229.299.622.51.874.21.251.434.626.497.833.063.207.211.488.329.626.204.237.676 1.059 1.501 2.611.202.381.518.906.701 1.166.183.26.389.661.457.89.068.229.295.604.503.833.209.229.435.599.502.822.068.223.339.703.602 1.067.264.363.48.729.48.812 0 .082.187.426.416.763.521.766.527 1.277.024 1.937-.216.284-.449.703-.519.932a2.36 2.36 0 01-.425.75c-.164.184-.421.633-.572.998-.15.365-.411.815-.58 1a2.344 2.344 0 00-.431.752c-.069.23-.298.623-.508.874-.21.252-.434.627-.496.834-.063.207-.283.601-.488.876-.205.275-.432.687-.503.916-.072.23-.303.623-.513.874-.21.252-.436.627-.501.834-.065.207-.296.608-.512.891-.216.284-.392.592-.392.684 0 .092-.216.465-.48.829-.263.364-.535.838-.604 1.055-.068.217-.34.691-.604 1.055-.263.364-.479.737-.479.829 0 .092-.173.4-.385.684a5.626 5.626 0 00-.601 1.051c-.119.295-.322.624-.451.731-.128.107-.38.503-.559.88a26.45 26.45 0 01-.917 1.687 27.43 27.43 0 00-.917 1.677c-.178.372-.477.815-.664.984-.187.169-.34.427-.34.573 0 .146-.169.525-.375.841-.401.617-.961 1.582-1.698 2.925-.251.458-.553.945-.672 1.083a2.076 2.076 0 00-.329.626c-.063.207-.287.582-.497.833-.211.252-.44.645-.51.874-.07.23-.343.713-.606 1.075-.263.362-.479.75-.479.862 0 .112-.177.416-.394.676-.216.259-.45.658-.519.887-.069.23-.262.567-.428.75-.167.184-.452.682-.634 1.107-.182.425-.415.825-.518.889-.103.064-.309.418-.457.788-.484 1.211 1.121 1.133-23.453 1.133-16.332 0-22.191-.05-22.503-.192-.418-.19-.738-.584-1.272-1.558l-.73-1.333c-.25-.459-.552-.946-.67-1.084-.118-.137-.376-.587-.573-1-.493-1.031-1.127-2.126-1.52-2.626-.181-.23-.329-.515-.329-.633s-.177-.427-.394-.686c-.216-.259-.45-.659-.519-.888-.069-.229-.298-.646-.508-.927a6.187 6.187 0 01-.624-1.09c-.133-.319-.354-.692-.492-.829-.137-.138-.415-.585-.617-.994-.72-1.456-1.1-2.131-1.371-2.435-.151-.17-.398-.608-.547-.975-.15-.367-.364-.742-.475-.833-.112-.092-.39-.531-.62-.976-.897-1.743-1.093-2.085-1.362-2.383a2.093 2.093 0 01-.391-.76c-.062-.248-.286-.638-.497-.866a3.231 3.231 0 01-.576-.994c-.105-.318-.307-.675-.45-.793-.142-.118-.441-.593-.663-1.055-.54-1.124-1.164-2.207-1.565-2.717-.181-.23-.329-.515-.329-.633s-.189-.44-.421-.715a3.95 3.95 0 01-.61-1.054 3.895 3.895 0 00-.579-1.025c-.214-.26-.39-.552-.39-.651 0-.099-.176-.412-.392-.696a9.465 9.465 0 01-.761-1.266c-.687-1.397-1.096-2.132-1.358-2.441-.144-.17-.505-.815-.803-1.435l-.541-1.126.334-.426c.185-.234.422-.687.527-1.007.106-.32.365-.768.577-.996.211-.229.435-.619.497-.867s.238-.59.391-.76c.275-.304.65-.968 1.375-2.435.202-.409.48-.856.617-.994.138-.137.36-.515.493-.839.134-.325.342-.703.462-.84.211-.241.755-1.19 1.484-2.584.191-.366.491-.878.666-1.136.415-.612.828-1.35 1.278-2.28.199-.413.459-.863.577-1 .248-.288.918-1.446 1.397-2.417.181-.367.52-.925.754-1.241.234-.315.426-.662.426-.769 0-.107.145-.38.323-.605.311-.396.849-1.323 1.579-2.718.191-.367.491-.879.666-1.137.426-.627.828-1.35 1.331-2.39.229-.472.502-.912.606-.976.104-.065.334-.428.51-.807.347-.747.894-1.735 1.51-2.729.538-.868.901-1.513 1.291-2.295.183-.366.524-.925.758-1.24.234-.316.426-.659.426-.762 0-.104.223-.483.495-.843.273-.36.498-.743.5-.85.007-.292.844-1.232 1.241-1.395.858-.35 44.868-.101 45.27.257m-39.883 7.931c-.161.094-.408.447-.549.784-.141.338-.394.765-.563.949a2.303 2.303 0 00-.428.753c-.067.229-.219.529-.338.666-.204.237-.676 1.059-1.5 2.611a13.15 13.15 0 01-.723 1.192c-.196.275-.355.564-.355.643 0 .079-.204.442-.452.807-.248.365-.613.964-.81 1.331-.838 1.56-1.02 1.876-1.348 2.342-.191.27-.399.66-.463.867-.065.207-.289.582-.499.833-.211.252-.441.645-.513.874-.071.23-.296.642-.499.917a8.991 8.991 0 00-.627 1c-.784 1.523-1.121 2.111-1.431 2.506-.189.241-.395.601-.457.799-.061.199-.262.574-.445.834s-.499.785-.701 1.167c-.825 1.552-1.297 2.374-1.501 2.611a2.064 2.064 0 00-.329.626c-.063.206-.287.581-.497.833-.211.251-.439.645-.508.874-.069.229-.294.642-.499.917-.205.275-.425.662-.488.861-.062.199-.279.57-.482.825-1.015 1.278-.986 2.367.105 3.962.244.356.444.741.444.855 0 .113.124.309.277.435.152.125.444.606.649 1.068.204.462.485.934.623 1.049.138.115.299.397.356.627.058.23.328.726.6 1.102.272.375.495.751.495.835 0 .084.178.392.397.683.219.292.452.719.519.948.066.229.292.604.5.833.209.229.436.604.506.833.069.23.302.649.518.933.216.283.393.591.393.683 0 .092.223.475.495.85.272.376.541.869.598 1.096.057.228.244.541.416.696.171.156.399.555.505.887.106.333.363.793.571 1.022.208.229.432.604.498.833.067.23.292.605.5.834.209.229.436.604.506.833.069.229.294.642.499.917.205.275.428.687.495.916.066.23.295.605.507.834.213.229.436.62.498.868.061.248.224.545.363.66.138.115.422.595.631 1.069.21.473.462.91.561.972.1.061.338.427.529.813.538 1.082 1.066 2.015 1.442 2.548.188.268.4.67.469.895.296.949.115.925 6.838.925 5.005 0 6.247-.044 6.47-.229.251-.208.276-1.132.276-10.267V89.382l.408-.441.409-.441 3.05.001c2.746 0 3.103.033 3.591.331l.542.33v20.216l.359.311c.859.745 12.974.401 12.974-.369 0-.088.196-.456.435-.817.547-.827.936-1.521 1.464-2.613.229-.472.502-.912.606-.976.104-.065.339-.428.521-.807.493-1.024 1.08-2.083 1.554-2.798.231-.349.42-.706.42-.793 0-.086.176-.369.39-.628.215-.259.475-.721.579-1.025.104-.305.378-.78.61-1.055.232-.275.421-.597.421-.715s.148-.403.329-.633c.368-.468.935-1.444 1.599-2.752.244-.481.502-.875.573-.875.071 0 .253-.309.404-.686.151-.377.459-.928.685-1.224.225-.296.41-.636.41-.756 0-.121.181-.456.401-.745.221-.29.523-.784.67-1.099.148-.315.529-.986.846-1.49.318-.504.738-1.254.934-1.666.196-.413.479-.889.628-1.059.271-.308.678-1.036 1.367-2.441.202-.413.463-.807.58-.876.118-.069.345-.482.505-.917.161-.435.391-.909.513-1.053.242-.287-1.173-3.32-2.016-4.321-.115-.138-.378-.606-.584-1.042-.205-.435-.434-.791-.507-.791-.074 0-.185-.202-.247-.449-.062-.246-.276-.674-.476-.951-.2-.277-.521-.806-.712-1.177-.693-1.338-1.263-2.323-1.579-2.725-.178-.225-.323-.507-.323-.625s-.177-.426-.393-.686c-.216-.259-.556-.808-.755-1.221-.483-1.002-1.163-2.192-1.429-2.5-.118-.137-.379-.587-.58-1-.675-1.388-1.091-2.131-1.368-2.441-.151-.17-.385-.574-.519-.899-.133-.324-.347-.699-.475-.833-.127-.134-.418-.607-.648-1.052-.891-1.73-1.092-2.085-1.354-2.383-.149-.17-.435-.646-.636-1.058-.682-1.403-1.092-2.133-1.373-2.442a2.972 2.972 0 01-.463-.791c-.101-.264-.462-.919-.803-1.454l-.621-.973-6.182-.004c-5.781-.003-6.201.017-6.459.302-.25.276-.275 1.239-.275 10.387v10.083l-.43.404c-.426.401-5.454.72-6.642.422-.933-.234-.928-.179-.928-11.173V47.325l-.428-.162c-.588-.224-12.229-.207-12.616.018m12.503 10.493l.043 10.258.48.576.48.575 2.894.054c3.28.061 4.134-.024 4.678-.465l.382-.309.084-10.473.083-10.473 6.129-.044c5.729-.041 6.136-.025 6.227.25.251.762.582 1.349.81 1.437.138.053.251.237.251.41s.183.569.406.88c.224.312.557.885.741 1.275.184.39.41.708.504.708.093 0 .252.309.354.686.101.376.355.845.563 1.041.209.196.429.557.489.802s.297.668.526.941c.229.272.417.61.417.75s.179.467.397.727c.219.26.517.759.664 1.109.146.349.405.761.576.915.172.154.412.603.534.998.122.395.359.791.525.881.167.089.304.298.304.465 0 .166.184.558.409.869.225.311.529.828.675 1.147.146.32.401.732.568.917.167.185.352.54.411.789s.279.624.488.833c.21.209.483.68.607 1.047.124.367.364.765.533.884.17.12.309.353.309.517 0 .165.186.555.414.866.227.311.562.885.744 1.275.181.389.402.708.489.708.088 0 .25.281.36.625.11.344.368.813.575 1.042.206.229.425.629.486.889.062.26.296.657.522.883.225.225.41.485.41.577 0 .274.528 1.224.755 1.358.73.429.572 2.61-.254 3.496-.191.205-.391.562-.444.793-.054.231-.189.495-.302.587-.25.204-.755 1.161-.755 1.431 0 .109-.183.366-.406.573-.222.207-.483.665-.579 1.019-.095.354-.316.732-.49.84-.174.108-.368.403-.432.656-.063.252-.302.68-.53.951-.228.271-.459.714-.513.984-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368a.636.636 0 01-.314.503c-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.302.629-.519.888-.217.259-.443.672-.503.917s-.282.608-.493.806c-.211.199-.434.574-.496.833-.061.26-.28.661-.486.89-.207.229-.467.703-.579 1.053-.112.35-.305.676-.429.723-.124.048-.315.361-.424.697-.11.335-.37.77-.578.965-.208.195-.451.617-.54.939-.089.322-.318.742-.51.933a2.013 2.013 0 00-.456.81c-.06.255-.279.651-.486.88-.207.229-.431.604-.497.833a2.27 2.27 0 01-.428.752c-.168.185-.425.597-.571.917-.146.32-.45.836-.675 1.147-.225.312-.409.697-.409.856 0 .159-.169.334-.375.39-.492.131-11.519.135-11.862.004-.236-.091-.263-1.154-.263-10.297 0-12.616.485-11.436-4.707-11.436h-2.999l-.647.647-.647.647v20.334l-.375.101c-.493.132-10.934.135-11.592.003-.41-.082-.574-.254-.848-.891-.186-.434-.451-.882-.587-.995-.136-.113-.335-.481-.442-.817-.107-.337-.367-.778-.578-.98-.21-.202-.429-.58-.486-.839-.056-.259-.285-.682-.507-.941a3.621 3.621 0 01-.586-1.022c-.1-.303-.276-.587-.392-.631-.115-.044-.313-.397-.441-.784s-.367-.788-.533-.891c-.165-.103-.42-.55-.567-.993-.147-.442-.369-.844-.492-.891-.124-.047-.313-.361-.42-.696-.108-.336-.333-.762-.5-.946-.168-.185-.418-.607-.557-.938-.138-.332-.349-.64-.467-.686-.119-.045-.357-.473-.528-.95-.172-.477-.411-.906-.533-.952-.121-.047-.308-.359-.415-.695-.107-.336-.365-.798-.572-1.027-.208-.229-.434-.604-.503-.833-.069-.229-.302-.629-.519-.888-.217-.259-.441-.672-.498-.917-.057-.245-.234-.558-.392-.695-.158-.138-.417-.585-.575-.993-.158-.409-.422-.838-.586-.953-.164-.115-.342-.426-.395-.692-.053-.265-.278-.699-.499-.964-.222-.265-.459-.669-.528-.898a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.378-.736-.504-.831-.125-.095-.344-.504-.485-.908-.141-.405-.397-.834-.568-.955-.64-.448-.569-2.082.117-2.692.176-.156.417-.547.537-.867.119-.321.32-.706.447-.855.253-.299.841-1.348 1.359-2.427.184-.384.485-.847.668-1.03.183-.184.407-.603.499-.933.091-.329.31-.728.487-.886.178-.157.42-.549.539-.869.119-.321.346-.734.504-.917.158-.183.339-.502.401-.709.063-.207.286-.582.497-.834.21-.251.438-.644.507-.874.069-.229.297-.604.507-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.207-.229.464-.691.571-1.027.107-.336.291-.647.408-.692.117-.045.351-.445.52-.89.168-.444.444-.906.612-1.025.168-.12.306-.328.306-.463 0-.134.262-.626.583-1.092.321-.467.583-.986.583-1.154 0-.167.149-.409.331-.537.182-.127.444-.549.581-.938.137-.389.389-.833.56-.986.171-.154.408-.595.527-.98.279-.905-.174-.85 6.751-.823l6 .024.043 10.257" fill="#f4acac" /></g></svg>

                                    <img className="akfa" src={akfa} />
                                    <img className="fabfix" src={fabfix} />
                                    <img className="stublina" src={stublina} />
                                    <img className="master" src={master} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel12-item3">
                        <div className="images">

                            <img src={fittings3} class="d-block w-100" alt="..." />
                            <h3 style={{ marginBottom: "0" }}>Для ПВХ конструкций</h3>
                            <div className="images_inner" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <div className="fittingss">
                                    <img src={fittings4} className="fittings4" alt="..." />
                                    <img src={fittings5} className="fittings5" alt="..." />
                                    <img src={fittings6} className="fittings5" alt="..." />
                                </div>
                                <div className="fittingss">
                                    <img src={fittings7} className="fittings7" alt="..." />
                                    <img src={fittings8} className="fittings8" alt="..." />
                                </div>

                                <div className="logos">

                                    <svg xmlns={roto} width="90" viewBox="1 1 400 164.384" ><path d="M79.795 80.736C35.908 124.962 0 161.567 0 162.08c0 .514 18.339.932 40.753.929l40.754-.004 75.92-76.834 75.921-76.833 75.906 76.838 75.907 76.838h7.533c4.144 0 7.329-.574 7.078-1.275-.251-.701-36.409-37.379-80.351-81.507L239.526 0l-39.968.163-39.969.162-79.794 80.411m72.26 50.771v31.507h15.068v-24.658l3.767.005c3.275.004 4.743 1.614 11.239 12.329l7.472 12.324h8.624c4.743 0 8.624-.245 8.624-.545 0-.3-3.39-6.057-7.534-12.794-8.103-13.174-8.633-14.714-5.487-15.921 3.428-1.315 7.531-9.475 7.537-14.986.014-14.088-7.982-18.694-32.529-18.738l-16.781-.03v31.507m120.548-23.448c-5.372 1.984-6.22 2.845-6.594 6.698-.377 3.88-.921 4.421-4.452 4.421-3.684 0-4.023.404-4.023 4.795 0 4.382.343 4.794 3.992 4.794h3.992l.46 15.867c.55 18.954 1.131 19.75 14.421 19.75h8.642v-4.795c0-4.375-.347-4.794-3.963-4.794-5.008 0-5.626-1.667-5.626-15.181v-10.847h4.795c4.566 0 4.794-.228 4.794-4.794 0-4.553-.238-4.795-4.723-4.795-4.683 0-4.726-.056-5.137-6.697l-.414-6.698-6.164 2.276m-94.126 3.788c14.02 2.317 8.264 15.55-6.764 15.55h-4.59v-8.219c0-9.144.079-9.195 11.354-7.331m42.756 7.82c-11.577 5.357-16.225 20.387-10.324 33.387 7.35 16.191 34.153 15.813 41.407-.585 9.271-20.959-10.831-42.174-31.083-32.802m87.671-.855c-12.722 3.185-19.135 21.865-12.136 35.351 7.497 14.446 33.159 13.962 40.559-.766 9.849-19.603-6.893-39.976-28.423-34.585m-72.54 11.948c7.296 7.296 3.433 24.623-5.3 23.769-10.606-1.037-10.18-27.132.443-27.132.822 0 3.007 1.513 4.857 3.363m86.581.462c2.457 3.126 2.177 16.82-.42 20.528-4.331 6.184-12.077 2.85-13.72-5.904-2.55-13.595 7.102-23.578 14.14-14.624" /></svg>



                                    <svg xmlns={hoppe} width="150" viewBox="1 1 400 156"><g fill-rule="evenodd"><path d="M313.82 39.847c-.359.374-.653.814-.653.977 0 .164-.169.509-.375.767-.371.464-.646.939-1.459 2.517-.229.445-.521.918-.648 1.052s-.341.509-.475.833c-.134.325-.367.729-.518.899-.284.318-.692 1.05-1.429 2.566-.234.482-.484.875-.555.875-.071 0-.266.319-.433.709-.168.389-.438.858-.602 1.041-.164.184-.387.609-.494.945-.108.337-.315.711-.46.831-.146.121-.41.521-.587.889-.542 1.122-1.104 2.112-1.363 2.397-.135.15-.39.61-.568 1.024-.177.414-.441.851-.586.972-.146.12-.354.494-.464.831-.11.336-.376.823-.592 1.082-.216.26-.392.568-.392.686 0 .118-.148.403-.329.633-.389.495-1.02 1.582-1.524 2.627-.199.412-.538.962-.754 1.221-.217.259-.393.565-.393.679 0 .114-.223.502-.496.862-.272.36-.497.772-.5.915-.002.143-.157.424-.343.624-.186.2-.484.701-.661 1.115-.177.413-.392.751-.479.751-.086 0-.275.346-.419.769-.144.423-.451.944-.682 1.159-.231.214-.42.533-.42.708 0 .175-.169.53-.375.788-.4.5-.884 1.357-1.455 2.576-.194.412-.426.884-.516 1.047-.118.214-.093.401.09.662.141.201.258.479.26.619.003.14.228.55.5.91.273.36.496.774.496.921 0 .146.225.513.5.814.275.301.5.687.5.857 0 .171.176.523.393.782.216.259.549.827.74 1.263.191.435.421.791.511.791.09 0 .246.251.347.557.101.306.369.808.596 1.115.227.308.413.678.413.824 0 .145.225.51.5.811.275.301.5.682.5.847 0 .165.221.578.49.918.27.34.576.875.68 1.19.104.314.259.572.345.572.085 0 .33.393.543.875.213.481.512.978.665 1.103.152.126.277.344.277.485 0 .14.184.497.41.793.225.296.534.847.685 1.224.151.377.342.686.425.686.083 0 .342.394.576.875.829 1.705 1.324 2.584 1.612 2.865.16.156.292.41.292.564 0 .154.225.542.5.863.274.321.499.709.499.862 0 .154.177.491.394.75.216.259.541.809.722 1.221.182.413.455.853.608.979.152.126.279.351.281.5.003.149.228.566.5.926.273.36.496.778.496.929 0 .151.185.449.411.662.227.213.499.657.604.987.106.33.327.751.491.934.164.183.434.652.602 1.042.167.389.358.708.425.708.066 0 .302.356.523.792l.803 1.573c.221.43.605 1.011.855 1.291l.455.511h22.226c25.148 0 22.747.137 23.336-1.336.149-.372.383-.718.52-.771.137-.053.249-.198.249-.322 0-.312.533-1.405.685-1.405.068 0 .321-.393.563-.875.776-1.544 1.163-2.24 1.403-2.526.129-.153.406-.651.617-1.105.211-.455.461-.827.557-.827.096 0 .175-.139.175-.309 0-.169.185-.563.412-.875.226-.311.603-.941.836-1.399.484-.952 1.152-2.082 1.385-2.346.087-.099.309-.52.494-.937.184-.417.414-.806.51-.866.096-.059.37-.5.609-.98.239-.479.675-1.298.969-1.819.294-.521.713-1.271.932-1.666.219-.396.459-.76.535-.809.076-.049.296-.447.49-.885.194-.437.459-.837.59-.887.131-.05.238-.193.238-.318 0-.311.533-1.404.685-1.404.068 0 .321-.394.563-.875.687-1.368 1.216-2.308 1.467-2.604.126-.149.33-.524.452-.833.123-.309.347-.684.499-.833.152-.149.376-.534.498-.855.123-.321.352-.733.509-.917.158-.183.45-.671.65-1.083.697-1.435 1.178-2.237 1.426-2.377.138-.077.251-.246.251-.376 0-.327.532-1.414.693-1.414.072 0 .291-.372.487-.828.196-.455.46-.914.588-1.02.324-.269.289-.702-.094-1.143-.18-.207-.416-.647-.525-.977-.109-.331-.327-.717-.484-.858-.157-.141-.385-.52-.506-.84a4.515 4.515 0 00-.606-1.055c-.213-.259-.387-.568-.387-.686 0-.118-.162-.42-.359-.672-.381-.483-.842-1.286-1.552-2.696-.237-.472-.538-.947-.668-1.055-.13-.108-.363-.528-.518-.933-.155-.405-.333-.737-.397-.737-.063 0-.291-.375-.506-.833-.214-.458-.444-.833-.51-.833s-.247-.319-.402-.709c-.154-.389-.413-.858-.574-1.041-.161-.184-.393-.596-.516-.917-.122-.321-.346-.706-.498-.855-.152-.149-.376-.524-.499-.833-.122-.309-.326-.684-.452-.833-.265-.313-.842-1.346-1.453-2.604-.233-.481-.487-.875-.563-.875-.163 0-.699-1.078-.699-1.404 0-.125-.109-.269-.242-.32-.133-.051-.405-.471-.604-.934-.199-.463-.418-.842-.486-.842s-.28-.375-.47-.833c-.191-.459-.415-.834-.5-.834-.084 0-.284-.342-.443-.76-.16-.417-.42-.886-.577-1.041-.158-.155-.387-.545-.51-.865-.122-.321-.346-.734-.498-.917-.151-.183-.411-.648-.577-1.032-.166-.384-.39-.732-.498-.774-.108-.041-.301-.391-.429-.777-.127-.386-.326-.739-.441-.783-.115-.044-.294-.338-.398-.653a3.86 3.86 0 00-.561-1.027 4.559 4.559 0 01-.597-1.037c-.123-.321-.335-.714-.47-.872-.135-.159-.404-.607-.597-.996-.604-1.211 1.112-1.127-23.24-1.13l-22.055-.002-.654.68m18.503 6.983c.864.248.838-.076.841 10.678.002 7.624.052 10.141.203 10.292.342.342 6.107.275 6.495-.076.289-.261.305-.8.305-10.307 0-9.987.001-10.033.35-10.35.435-.393 13.309-.505 13.439-.117.036.111.248.448.471.75.222.303.565.906.761 1.342.196.435.422.791.503.791.081 0 .338.394.572.875.702 1.445 1.133 2.206 1.529 2.701.206.258.375.596.375.751 0 .155.185.456.411.669.227.213.499.657.604.987.106.33.324.751.485.934.16.183.43.631.598.994.169.364.441.795.604.959.164.163.298.428.298.589 0 .16.19.512.421.781.232.269.466.682.522.917.055.235.276.616.491.848.215.232.478.682.584 1 .107.318.359.766.561.995.202.23.47.676.595.993.126.317.363.711.527.875.164.165.299.43.299.591 0 .16.225.554.5.875.274.32.499.708.499.862 0 .153.183.496.406.761.224.265.532.796.685 1.179.154.384.347.698.43.698.083 0 .342.393.576.875.731 1.503 1.144 2.247 1.425 2.566.149.17.433.646.632 1.059.33.686 1.142 2.158 1.628 2.949.155.253.147.408-.038.728-.13.223-.417.784-.639 1.246-.221.462-.519.937-.662 1.055-.142.118-.348.49-.458.827-.109.336-.376.79-.592 1.009-.216.219-.392.532-.392.696 0 .165-.123.422-.273.572-.281.281-.939 1.427-1.579 2.751-.199.412-.539.962-.755 1.221-.217.259-.393.563-.393.676 0 .113-.193.463-.429.779a8.79 8.79 0 00-.677 1.074c-.137.275-.502.95-.812 1.5-.309.55-.735 1.337-.947 1.75-.212.412-.477.825-.588.917-.112.091-.326.466-.475.833-.15.367-.396.805-.547.975-.272.305-.656.987-1.374 2.442-.203.412-.468.825-.588.916-.121.092-.343.466-.494.832-.151.366-.453.878-.672 1.138-.218.26-.397.607-.397.77 0 .164-.225.581-.5.927-.275.346-.5.718-.5.827 0 .108-.223.492-.496.852-.272.36-.497.742-.5.85-.002.107-.18.407-.394.667-.215.259-.475.72-.579 1.025-.104.305-.36.769-.569 1.031-.208.262-.514.669-.678.904l-.3.427h-12.602l-.441-.408-.441-.409V99.43c0-9.8-.009-10.09-.323-10.257-.343-.184-5.958-.247-6.414-.072-.236.091-.263 1.15-.263 10.258v10.156l-.409.409-.41.409h-6.182c-6.836 0-6.933-.013-7.337-1.033-.119-.303-.321-.672-.447-.821-.234-.276-.686-1.069-1.459-2.562a13.432 13.432 0 00-.844-1.4c-.227-.311-.412-.705-.412-.875 0-.17-.074-.309-.165-.309-.15 0-.63-.814-1.63-2.763-.208-.405-.442-.737-.519-.737-.078 0-.273-.356-.435-.791-.162-.436-.422-.904-.579-1.042-.157-.138-.387-.513-.51-.833a4.597 4.597 0 00-.609-1.055c-.213-.259-.387-.572-.387-.695 0-.124-.182-.442-.406-.707-.223-.265-.452-.67-.51-.899-.058-.23-.279-.621-.493-.869a4.167 4.167 0 01-.599-.988c-.117-.296-.34-.687-.496-.871-.156-.183-.421-.652-.589-1.041-.167-.39-.355-.709-.418-.709s-.276-.375-.473-.833c-.197-.458-.425-.833-.507-.833-.082 0-.237-.265-.343-.588a3.925 3.925 0 00-.566-1.042 4.474 4.474 0 01-.595-1.037c-.123-.321-.314-.659-.425-.752-.111-.093-.372-.543-.579-1-.207-.457-.443-.874-.524-.926-.202-.129-1.244-2.06-1.703-3.155a3.58 3.58 0 00-.314-.547c-.157-.221-.161-.327-.018-.416.106-.067.392-.533.636-1.037.613-1.268 1.199-2.324 1.467-2.646.124-.149.362-.585.528-.97.166-.384.398-.735.516-.78.117-.045.264-.314.326-.597.063-.283.281-.72.486-.97.204-.25.526-.754.715-1.121.805-1.559 1.232-2.324 1.437-2.57.12-.145.356-.582.525-.971.168-.39.364-.709.435-.709.071 0 .324-.393.562-.875.238-.481.691-1.325 1.006-1.875.315-.55.737-1.299.937-1.666.201-.366.458-.741.572-.833.114-.092.294-.443.4-.779.107-.336.301-.7.431-.808.13-.108.43-.583.666-1.055a32.075 32.075 0 011.704-2.951c.206-.316.375-.644.375-.73.001-.086.139-.311.307-.5.169-.189.406-.607.527-.928.122-.321.353-.733.514-.916.161-.184.42-.652.574-1.042.155-.39.347-.708.426-.708.079 0 .305-.375.502-.834.197-.458.417-.833.488-.833.072 0 .269-.34.438-.755.235-.574.428-.789.808-.901.697-.205 12.031-.217 12.74-.014" fill="#df222a" /><path d="M101.083 45.842c-2.525.154-4.086.398-4.75.741-.231.12-.792.274-1.247.342-.454.068-1.278.338-1.831.599-.553.262-1.168.476-1.367.476-.199 0-.586.188-.859.418-.273.229-.723.462-1.001.518-.278.056-.641.228-.808.383-.167.155-.697.496-1.178.758-.482.262-.875.527-.875.589 0 .063-.204.207-.453.32-.506.23-.462.191-2.881 2.584-2.151 2.129-2.392 2.406-3.272 3.763a31.088 31.088 0 01-1.024 1.5c-.177.23-.481.754-.675 1.167a14.51 14.51 0 01-.51 1c-.387.619-1.352 2.803-1.352 3.06 0 .156-.178.638-.396 1.071-.219.432-.449 1.123-.513 1.536-.064.412-.297 1.357-.518 2.099-.221.742-.478 2.13-.572 3.084-.094.953-.24 2.371-.325 3.15-.2 1.828-.205 4.826-.012 6.833.084.871.23 2.403.324 3.405.096 1.02.35 2.376.578 3.083.224.694.458 1.635.52 2.09.062.456.282 1.168.489 1.584.208.415.428.98.49 1.255.11.487.895 2.245 1.376 3.083.132.23.368.68.524 1 .157.321.333.621.391.667.059.046.321.429.584.852.262.423.677 1.069.923 1.436.591.883 3.907 4.308 4.886 5.045.425.321 1.022.79 1.326 1.042.304.252.621.458.706.458.084 0 .449.216.811.479.362.264.846.536 1.075.606.229.069.628.275.887.457.258.182.816.436 1.24.563.423.128.941.344 1.151.482.21.137.874.364 1.476.504.602.139 1.447.391 1.878.559 2.593 1.01 12.871.968 15.625-.064.554-.208 1.341-.434 1.75-.502.408-.068 1.08-.292 1.493-.497.412-.205.962-.424 1.222-.486.26-.063.747-.288 1.083-.5.336-.212.799-.443 1.028-.514.229-.071.713-.344 1.075-.608.361-.263.726-.479.811-.479.084 0 .402-.206.706-.458.305-.252.946-.758 1.426-1.125 1.104-.843 3.031-2.772 3.899-3.903.366-.477.873-1.117 1.125-1.421.252-.304.458-.626.458-.714 0-.088.144-.291.321-.45.176-.16.509-.69.74-1.177.231-.488.494-.932.584-.988.09-.056.256-.382.369-.724.113-.343.373-.886.578-1.206.205-.321.418-.846.474-1.167.056-.321.289-.952.518-1.403.229-.451.416-.996.416-1.212 0-.215.191-.934.424-1.596a14.53 14.53 0 00.585-2.539 57.93 57.93 0 01.451-2.917c.408-2.225.408-8.982 0-10.916a27.126 27.126 0 01-.395-2.584c-.062-.687-.327-1.918-.589-2.736-.262-.817-.476-1.627-.476-1.798 0-.172-.225-.794-.5-1.382-.275-.589-.5-1.212-.5-1.387 0-.174-.187-.592-.415-.928-.228-.336-.462-.815-.521-1.065-.059-.249-.285-.692-.503-.984-.217-.292-.394-.591-.394-.665 0-.075-.25-.511-.555-.97l-.792-1.191c-1.598-2.41-3.43-4.256-6.588-6.644-.838-.633-4.435-2.583-4.766-2.583-.081 0-.612-.215-1.181-.477-.569-.263-1.373-.528-1.785-.59-.413-.062-1.275-.29-1.917-.506-1.149-.388-1.865-.459-6.666-.664-.825-.035-2.55 0-3.834.079m-83.821 1.253c-.399.399-.401 62.132-.003 62.701.388.553 11.025.587 11.574.037.328-.327.334-.555.334-13.479 0-12.024.023-13.166.275-13.375.472-.392 26.063-.425 26.349-.034.163.223.209 3.145.209 13.383 0 11.585.03 13.141.259 13.468.388.553 11.025.587 11.574.037.526-.526.526-62.14 0-62.666-.459-.46-11.117-.526-11.571-.072-.233.233-.262 1.579-.262 12.3 0 9.141-.048 12.086-.2 12.238-.265.265-25.818.292-26.311.028-.314-.168-.322-.479-.322-12.167 0-11.772-.007-12-.334-12.327-.459-.46-11.117-.526-11.571-.072m123.02-.02c-.416.417-.439 62.127-.023 62.721.388.553 11.025.587 11.574.037.327-.326.334-.555.334-11.487V87.193l.541-.169c.298-.092 2.642-.199 5.209-.238 2.946-.044 4.838-.14 5.132-.26.256-.105 1.375-.347 2.486-.539 1.111-.191 2.176-.448 2.367-.57.192-.122.685-.313 1.098-.425.754-.204 2.847-1.187 4.08-1.916 1.312-.776 3.484-2.649 4.337-3.739.366-.469.862-1.093 1.102-1.386.24-.294.494-.722.566-.951.071-.229.306-.649.522-.932.216-.284.393-.667.393-.851 0-.184.196-.701.435-1.151.255-.478.499-1.299.589-1.983.085-.641.277-1.654.427-2.25.375-1.486.377-5.685.004-7.083a21.438 21.438 0 01-.43-2.204c-.095-.699-.3-1.399-.49-1.667a3.274 3.274 0 01-.443-.998c-.064-.295-.291-.794-.504-1.108-.213-.315-.444-.748-.512-.964-.418-1.32-4.074-4.792-6.019-5.716-.473-.225-.905-.482-.96-.571-.056-.09-.494-.287-.974-.437a10.794 10.794 0 01-1.484-.599c-.336-.179-1.161-.43-1.833-.559a41.404 41.404 0 01-2.556-.598c-1.878-.511-24.481-.741-24.968-.254m49.051-.123c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c1.075.656 11.032.45 11.497-.237.067-.1.124-5.141.125-11.204l.003-11.022.384-.252c.314-.206 1.272-.265 5.208-.323 3.153-.046 4.986-.139 5.29-.266.256-.107 1.375-.352 2.486-.544 1.111-.191 2.176-.451 2.367-.576.192-.125.791-.343 1.332-.483.542-.141 1.104-.359 1.25-.483.146-.125.594-.354.994-.509.4-.155.963-.448 1.25-.651.287-.203.642-.444.789-.535 1.739-1.082 4.983-4.256 4.983-4.876 0-.081.223-.443.495-.803.273-.36.498-.737.5-.838.003-.101.193-.538.424-.971.23-.433.495-1.138.587-1.567.093-.428.327-1.153.521-1.612.795-1.883.735-9.398-.094-11.705-.238-.663-.433-1.377-.433-1.586 0-.21-.176-.642-.392-.962a5.85 5.85 0 01-.595-1.203c-.112-.342-.274-.666-.36-.719-.086-.053-.421-.509-.743-1.013-1.038-1.622-3.233-3.61-5.219-4.726-.243-.136-.779-.442-1.191-.68-.412-.238-.975-.488-1.25-.554a7.604 7.604 0 01-1.178-.445c-.372-.178-1.122-.403-1.666-.501a21.14 21.14 0 01-2.073-.514c-1.703-.527-23.735-.989-25-.523m48 0c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c.855.522 36.27.52 36.791-.002.548-.547.515-9.354-.037-9.74-.327-.229-1.796-.26-12.55-.26-9.251 0-12.227-.048-12.379-.2-.15-.15-.2-2.231-.2-8.341v-8.14l.409-.41.409-.409h18.128l.194-.424c.276-.608.27-9.432-.007-9.709-.151-.151-2.467-.201-9.375-.205-7.365-.005-9.233-.049-9.467-.227-.269-.205-.291-.751-.291-7.235v-7.014l.37-.26c.327-.228 1.743-.259 11.988-.259 10.339 0 11.647-.029 11.88-.262.429-.429.389-9.237-.043-9.629-.303-.274-34.796-.427-35.529-.157m43.292.237c-.252.095-.458.24-.458.323 0 .082-.248.253-.55.38-.759.317-2.373 2.197-2.596 3.025a8.28 8.28 0 01-.517 1.327c-.532 1.042-.488 3.803.079 4.923.23.452.417.969.417 1.148 0 .179.262.67.583 1.09.321.421.584.837.584.925 0 .089.218.274.484.412.266.138.589.355.716.483.418.417 1.272.775 1.849.775.327 0 .729.141.951.333.636.552 3.666.468 3.666-.101 0-.181-.333-.232-1.531-.232-1.315 0-1.582-.048-1.896-.343-.2-.189-.746-.443-1.212-.566-.82-.217-1.451-.731-2.623-2.138-.839-1.008-1.795-5.359-1.25-5.695.147-.091.548-1.219.742-2.091.051-.229.265-.604.475-.834a7.84 7.84 0 00.676-.875c.161-.252.382-.458.49-.458.108 0 .425-.218.705-.484 1.121-1.07 5.884-1.095 7.234-.038 1.181.925 2.196 2.108 2.378 2.772.101.367.336 1.066.522 1.554.435 1.139.427 2.756-.02 3.766-.177.401-.377.98-.444 1.288-.228 1.049-2.124 3.018-3.111 3.23-.81.174-1.135.384-1.027.665.136.355 1.537.327 2.064-.041 1.666-1.165 2.912-2.626 3.067-3.598.061-.379.226-.816.367-.972.611-.675.608-4.12-.004-5.054-.134-.205-.298-.665-.364-1.022-.169-.922-1.785-2.909-2.562-3.149a1.717 1.717 0 01-.693-.48c-.327-.404-6.234-.608-7.191-.248m.575 3.011c-.22.22-.265 7.36-.052 8.133.093.337.237.427.745.469.916.077 1.107-.163 1.107-1.387 0-.756.083-1.147.299-1.414l.299-.369.742.927c.409.509.879 1.118 1.045 1.353.629.89 2.282 1.262 2.282.513 0-.278-1.06-2.175-1.412-2.527-.333-.333-.344-.285.318-1.373.326-.535.585-1.194.6-1.525.063-1.35.004-1.534-.734-2.272l-.728-.728h-2.156c-1.454 0-2.22.065-2.355.2m3.633 1.8c.717.716.19 2-.821 2-.636 0-1.012-.393-1.012-1.058 0-1.146 1.077-1.699 1.833-.942m-177.827 3.989c.911.096 1.763.305 2.365.58.517.237 1.056.431 1.196.431.14 0 .61.225 1.043.5.434.275.848.5.921.5.548 0 4.636 3.884 4.636 4.405 0 .06.187.312.416.559.23.247.417.529.417.627 0 .097.217.519.482.937.265.417.536 1.013.604 1.324.067.311.26.76.428.998.169.239.389.801.489 1.25.1.449.362 1.417.582 2.15 1.09 3.629 1.08 13.51-.016 16.583-.212.596-.439 1.421-.502 1.834-.064.412-.33 1.154-.592 1.648-.261.494-.475 1.019-.476 1.167 0 .147-.225.605-.499 1.018-.274.412-.499.836-.499.941-.001.105-.187.367-.415.583-.227.216-.415.474-.416.574-.011.657-4.053 4.402-4.751 4.402-.111 0-.337.151-.504.335-.167.184-.647.44-1.067.568-.421.128-1.104.386-1.519.573-1.843.831-8.452.814-10.354-.026-.49-.217-1.097-.445-1.349-.508-.251-.063-.81-.338-1.241-.612-.431-.273-.844-.497-.918-.497-.073 0-.273-.131-.443-.291-.17-.161-.639-.549-1.042-.864-.715-.558-2.68-2.693-3.047-3.311a30.613 30.613 0 00-.559-.88c-.206-.314-.375-.676-.375-.805-.001-.128-.182-.471-.403-.761-.221-.29-.492-.859-.601-1.265a8.362 8.362 0 00-.508-1.345c-.171-.334-.387-1.089-.481-1.678a12.883 12.883 0 00-.541-2.06c-.356-.953-.37-1.21-.377-6.99l-.007-6 .443-1.416c.243-.78.489-1.743.546-2.141.057-.398.244-.998.415-1.334.171-.336.402-.945.512-1.354.11-.408.338-.919.508-1.134.169-.215.397-.668.508-1.006.11-.338.379-.84.598-1.115 1.526-1.915 2.631-3.173 3.19-3.632 1.399-1.151 1.628-1.317 2.03-1.474.23-.089.68-.339 1-.554.321-.215.846-.445 1.167-.511.321-.066.883-.273 1.25-.461 1.08-.553 4.79-.774 7.756-.462m53.715.855c1.49.13 2.25.28 2.862.563.459.213 1.081.468 1.384.567.947.312 3.2 2.253 3.2 2.758 0 .147.076.268.169.268.198 0 .485.63 1.025 2.25 1.383 4.148-.584 10.438-3.694 11.813a8.009 8.009 0 00-.961.546c-.299.199-.862.415-1.25.479s-.786.18-.883.259c-.782.628-9.743 1.002-10.221.426-.136-.164-.176-2.908-.145-9.953l.043-9.727.417-.211c.526-.266 5.19-.288 8.054-.038m48.353.006c2.062.162 2.453.242 3.259.667.505.265 1.007.482 1.117.483.764.001 3.152 2.301 3.634 3.5.093.229.353.754.579 1.167.655 1.192.638 6.634-.024 8a33.218 33.218 0 00-.683 1.5c-.253.615-2.343 2.831-2.677 2.836-.108.002-.516.22-.908.486s-1.03.536-1.417.6c-.387.064-.891.211-1.121.326-1.254.63-9.231.88-9.862.309-.288-.261-.304-.784-.304-9.781v-9.505l.362-.386c.43-.457 3.733-.54 8.045-.202" fill="#fff" /><path d="M314.236 38.993c-.397.163-1.234 1.103-1.241 1.395-.002.107-.227.49-.5.85-.272.36-.495.739-.495.843 0 .103-.192.446-.426.762-.234.315-.575.874-.758 1.24-.39.782-.753 1.427-1.291 2.295-.616.994-1.163 1.982-1.51 2.729-.176.379-.406.742-.51.807-.104.064-.377.504-.606.976-.503 1.04-.905 1.763-1.331 2.39-.175.258-.475.77-.666 1.137-.73 1.395-1.268 2.322-1.579 2.718-.178.225-.323.498-.323.605 0 .107-.192.454-.426.769a9.805 9.805 0 00-.754 1.241c-.479.971-1.149 2.129-1.397 2.417-.118.137-.378.587-.577 1-.45.93-.863 1.668-1.278 2.28-.175.258-.475.77-.666 1.136-.729 1.394-1.273 2.343-1.484 2.584-.12.137-.328.515-.462.84-.133.324-.355.702-.493.839-.137.138-.415.585-.617.994-.725 1.467-1.1 2.131-1.375 2.435-.153.17-.329.512-.391.76s-.286.638-.497.867a3.229 3.229 0 00-.577.996c-.105.32-.342.773-.527 1.007l-.334.426.541 1.126c.298.62.659 1.265.803 1.435.262.309.671 1.044 1.358 2.441.203.413.546.982.761 1.266.216.284.392.597.392.696 0 .099.176.391.39.651.215.259.475.72.579 1.025.104.305.378.779.61 1.054.232.275.421.597.421.715s.148.403.329.633c.401.51 1.025 1.593 1.565 2.717.222.462.521.937.663 1.055.143.118.345.475.45.793.105.318.364.765.576.994.211.228.435.618.497.866.062.249.238.591.391.76.269.298.465.64 1.362 2.383.23.445.508.884.62.976.111.091.325.466.475.833.149.367.396.805.547.975.271.304.651.979 1.371 2.435.202.409.48.856.617.994.138.137.359.51.492.829.133.318.414.809.624 1.09.21.281.439.698.508.927.069.229.303.629.519.888.217.259.394.568.394.686 0 .118.148.403.329.633.393.5 1.027 1.595 1.52 2.626.197.413.455.863.573 1 .118.138.42.625.67 1.084l.73 1.333c.534.974.854 1.368 1.272 1.558.312.142 6.171.192 22.503.192 24.574 0 22.969.078 23.453-1.133.148-.37.354-.724.457-.788.103-.064.336-.464.518-.889s.467-.923.634-1.107c.166-.183.359-.52.428-.75.069-.229.303-.628.519-.887.217-.26.394-.564.394-.676 0-.112.216-.5.479-.862s.536-.845.606-1.075c.07-.229.299-.622.51-.874.21-.251.434-.626.497-.833.063-.207.211-.488.329-.626.119-.138.421-.625.672-1.083.737-1.343 1.297-2.308 1.698-2.925.206-.316.375-.695.375-.841 0-.146.153-.404.34-.573.187-.169.486-.612.664-.984a27.43 27.43 0 01.917-1.677c.325-.55.738-1.309.917-1.687.179-.377.431-.773.559-.88.129-.107.332-.436.451-.731.118-.294.389-.768.601-1.051.212-.284.385-.592.385-.684 0-.092.216-.465.479-.829.264-.364.536-.838.604-1.055.069-.217.341-.691.604-1.055.264-.364.48-.737.48-.829 0-.092.176-.4.392-.684.216-.283.447-.684.512-.891.065-.207.291-.582.501-.834.21-.251.441-.644.513-.874.071-.229.298-.641.503-.916.205-.275.425-.669.488-.876.062-.207.286-.582.496-.834.21-.251.439-.644.508-.874.069-.229.263-.567.431-.752.169-.185.43-.635.58-1 .151-.365.408-.814.572-.998a2.36 2.36 0 00.425-.75c.07-.229.303-.648.519-.932.503-.66.497-1.171-.024-1.937-.229-.337-.416-.681-.416-.763 0-.083-.216-.449-.48-.812-.263-.364-.534-.844-.602-1.067-.067-.223-.293-.593-.502-.822-.208-.229-.435-.604-.503-.833-.068-.229-.274-.63-.457-.89s-.499-.785-.701-1.166c-.825-1.552-1.297-2.374-1.501-2.611a2.076 2.076 0 01-.329-.626c-.063-.207-.287-.582-.497-.833-.211-.252-.44-.645-.51-.874-.07-.229-.343-.713-.606-1.075-.263-.362-.479-.73-.479-.817 0-.088-.177-.392-.393-.676-.216-.284-.449-.703-.518-.932-.07-.229-.296-.604-.504-.834-.208-.229-.466-.692-.573-1.028-.108-.336-.309-.705-.447-.82-.138-.115-.363-.476-.499-.803-.137-.327-.386-.745-.555-.93a2.288 2.288 0 01-.428-.752 2.27 2.27 0 00-.428-.752c-.168-.185-.429-.635-.58-1-.15-.366-.408-.815-.572-.998a2.342 2.342 0 01-.421-.738c-.068-.223-.339-.703-.603-1.067-.263-.364-.479-.737-.479-.829 0-.092-.177-.4-.393-.684-.216-.283-.451-.703-.522-.932-.072-.229-.303-.623-.513-.874-.21-.252-.434-.627-.496-.833-.063-.207-.283-.601-.488-.876-.205-.275-.427-.669-.492-.876-.066-.207-.291-.582-.501-.834-.211-.251-.439-.644-.508-.874-.069-.229-.304-.655-.523-.947-.219-.292-.397-.599-.397-.683 0-.084-.216-.451-.48-.814-.263-.364-.534-.844-.602-1.067a2.37 2.37 0 00-.422-.739c-.164-.183-.407-.596-.541-.916-.574-1.379 1.837-1.246-23.264-1.283-12.251-.018-22.431.031-22.622.109m44.764.389c.229.116.575.529.769.917.193.389.462.837.597.996.135.158.347.551.47.872.124.32.392.787.597 1.037.204.25.457.712.561 1.027.104.315.283.609.398.653.115.044.314.397.441.783.128.386.321.736.429.777.108.042.332.39.498.774.166.384.426.849.577 1.032.152.183.376.596.498.917.123.32.352.71.51.865.157.155.417.624.577 1.041.159.418.359.76.443.76.085 0 .309.375.5.834.19.458.402.833.47.833.068 0 .287.379.486.842.199.463.471.883.604.934.133.051.242.195.242.32 0 .326.536 1.404.699 1.404.076 0 .33.394.563.875.611 1.258 1.188 2.291 1.453 2.604.126.149.33.524.452.833.123.309.347.684.499.833.152.149.376.534.498.855.123.321.355.733.516.917.161.183.42.652.574 1.041.155.39.336.709.402.709s.296.375.51.833c.215.458.443.833.506.833.064 0 .242.332.397.737.155.405.388.825.518.933.13.108.431.583.668 1.055.71 1.41 1.171 2.213 1.552 2.696.197.252.359.554.359.672s.174.427.387.686c.212.259.485.734.606 1.055.121.32.349.699.506.84.157.141.375.527.484.858.109.33.345.77.525.977.383.441.418.874.094 1.143-.128.106-.392.565-.588 1.02-.196.456-.415.828-.487.828-.161 0-.693 1.087-.693 1.414 0 .13-.113.299-.251.376-.248.14-.729.942-1.426 2.377-.2.412-.492.9-.65 1.083-.157.184-.386.596-.509.917-.122.321-.346.706-.498.855-.152.149-.376.524-.499.833-.122.309-.326.684-.452.833-.251.296-.78 1.236-1.467 2.604-.242.481-.495.875-.563.875-.152 0-.685 1.093-.685 1.404 0 .125-.107.268-.238.318-.131.05-.396.45-.59.887-.194.438-.414.836-.49.885-.076.049-.316.413-.535.809-.219.395-.638 1.145-.932 1.666-.294.521-.73 1.34-.969 1.819-.239.48-.513.921-.609.98-.096.06-.326.449-.51.866-.185.417-.407.838-.494.937-.233.264-.901 1.394-1.385 2.346-.233.458-.61 1.088-.836 1.399-.227.312-.412.706-.412.875 0 .17-.079.309-.175.309-.096 0-.346.372-.557.827-.211.454-.488.952-.617 1.105-.24.286-.627.982-1.403 2.526-.242.482-.495.875-.563.875-.152 0-.685 1.093-.685 1.405 0 .124-.112.269-.249.322-.137.053-.371.399-.52.771-.589 1.473 1.812 1.336-23.336 1.336h-22.226l-.455-.511c-.25-.28-.634-.861-.855-1.291l-.803-1.573c-.221-.436-.457-.792-.523-.792-.067 0-.258-.319-.425-.708-.168-.39-.438-.859-.602-1.042-.164-.183-.385-.604-.491-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.511-.411-.662 0-.151-.223-.569-.496-.929-.272-.36-.497-.777-.5-.926-.002-.149-.129-.374-.281-.5-.153-.126-.426-.566-.608-.979-.181-.412-.506-.962-.722-1.221-.217-.259-.394-.596-.394-.75 0-.153-.225-.541-.499-.862-.275-.321-.5-.709-.5-.863 0-.154-.132-.408-.292-.564-.288-.281-.783-1.16-1.612-2.865-.234-.481-.493-.875-.576-.875-.083 0-.274-.309-.425-.686a6.315 6.315 0 00-.685-1.224c-.226-.296-.41-.653-.41-.793 0-.141-.125-.359-.277-.485-.153-.125-.452-.622-.665-1.103-.213-.482-.458-.875-.543-.875-.086 0-.241-.258-.345-.572-.104-.315-.41-.85-.68-1.19-.269-.34-.49-.753-.49-.918 0-.165-.225-.546-.5-.847-.275-.301-.5-.666-.5-.811 0-.146-.186-.516-.413-.824-.227-.307-.495-.809-.596-1.115-.101-.306-.257-.557-.347-.557-.09 0-.32-.356-.511-.791-.191-.436-.524-1.004-.74-1.263-.217-.259-.393-.611-.393-.782 0-.17-.225-.556-.5-.857-.275-.301-.5-.668-.5-.814 0-.147-.223-.561-.496-.921-.272-.36-.497-.77-.5-.91-.002-.14-.119-.418-.26-.619-.183-.261-.208-.448-.09-.662.09-.163.322-.635.516-1.047.571-1.219 1.055-2.076 1.455-2.576.206-.258.375-.613.375-.788 0-.175.189-.494.42-.708.231-.215.538-.736.682-1.159.144-.423.333-.769.419-.769.087 0 .302-.338.479-.751.177-.414.475-.915.661-1.115.186-.2.341-.481.343-.624.003-.143.228-.555.5-.915.273-.36.496-.748.496-.862 0-.114.176-.42.393-.679.216-.259.555-.809.754-1.221.504-1.045 1.135-2.132 1.524-2.627.181-.23.329-.515.329-.633s.176-.426.392-.686c.216-.259.482-.746.592-1.082.11-.337.318-.711.464-.831.145-.121.409-.558.586-.972.178-.414.433-.874.568-1.024.259-.285.821-1.275 1.363-2.397.177-.368.441-.768.587-.889.145-.12.352-.494.46-.831.107-.336.33-.761.494-.945.164-.183.434-.652.602-1.041.167-.39.362-.709.433-.709.071 0 .321-.393.555-.875.737-1.516 1.145-2.248 1.429-2.566.151-.17.384-.574.518-.899.134-.324.348-.699.475-.833s.419-.607.648-1.052c.813-1.578 1.088-2.053 1.459-2.517.206-.258.375-.603.375-.767 0-.163.294-.603.653-.977l.654-.68 22.055.002c17.439.002 22.142.047 22.471.213m-39.417 7.462c-.38.112-.573.327-.808.901-.169.415-.366.755-.438.755-.071 0-.291.375-.488.833-.197.459-.423.834-.502.834-.079 0-.271.318-.426.708-.154.39-.413.858-.574 1.042-.161.183-.392.595-.514.916-.121.321-.358.739-.527.928-.168.189-.306.414-.307.5 0 .086-.169.414-.375.73a32.075 32.075 0 00-1.704 2.951c-.236.472-.536.947-.666 1.055-.13.108-.324.472-.431.808-.106.336-.286.687-.4.779-.114.092-.371.467-.572.833-.2.367-.622 1.116-.937 1.666-.315.55-.768 1.394-1.006 1.875-.238.482-.491.875-.562.875-.071 0-.267.319-.435.709-.169.389-.405.826-.525.971-.205.246-.632 1.011-1.437 2.57a7.792 7.792 0 01-.715 1.121c-.205.25-.423.687-.486.97-.062.283-.209.552-.326.597-.118.045-.35.396-.516.78-.166.385-.404.821-.528.97-.268.322-.854 1.378-1.467 2.646-.244.504-.53.97-.636 1.037-.143.089-.139.195.018.416.115.163.256.409.314.547.459 1.095 1.501 3.026 1.703 3.155.081.052.317.469.524.926.207.457.468.907.579 1 .111.093.302.431.425.752s.39.788.595 1.037c.204.25.459.719.566 1.042.106.323.261.588.343.588.082 0 .31.375.507.833.197.458.41.833.473.833s.251.319.418.709c.168.389.433.858.589 1.041.156.184.379.575.496.871.116.295.386.74.599.988.214.248.435.639.493.869.058.229.287.634.51.899.224.265.406.583.406.707 0 .123.174.436.387.695.212.259.486.734.609 1.055.123.32.353.695.51.833.157.138.417.606.579 1.042.162.435.357.791.435.791.077 0 .311.332.519.737 1 1.949 1.48 2.763 1.63 2.763.091 0 .165.139.165.309 0 .17.185.564.412.875.226.311.606.941.844 1.4.773 1.493 1.225 2.286 1.459 2.562.126.149.328.518.447.821.404 1.02.501 1.033 7.337 1.033h6.182l.41-.409.409-.409V99.359c0-9.108.027-10.167.263-10.258.456-.175 6.071-.112 6.414.072.314.167.323.457.323 10.257v10.086l.441.409.441.408h12.602l.3-.427c.164-.235.47-.642.678-.904.209-.262.465-.726.569-1.031.104-.305.364-.766.579-1.025.214-.26.392-.56.394-.667.003-.108.228-.49.5-.85.273-.36.496-.744.496-.852 0-.109.225-.481.5-.827s.5-.763.5-.927c0-.163.179-.51.397-.77.219-.26.521-.772.672-1.138.151-.366.373-.74.494-.832.12-.091.385-.504.588-.916.718-1.455 1.102-2.137 1.374-2.442.151-.17.397-.608.547-.975.149-.367.363-.742.475-.833.111-.092.376-.505.588-.917.212-.413.638-1.2.947-1.75.31-.55.675-1.225.812-1.5a8.79 8.79 0 01.677-1.074c.236-.316.429-.666.429-.779 0-.113.176-.417.393-.676.216-.259.556-.809.755-1.221.64-1.324 1.298-2.47 1.579-2.751.15-.15.273-.407.273-.572 0-.164.176-.477.392-.696.216-.219.483-.673.592-1.009.11-.337.316-.709.458-.827.143-.118.441-.593.662-1.055.222-.462.509-1.023.639-1.246.185-.32.193-.475.038-.728a44.025 44.025 0 01-1.628-2.949c-.199-.413-.483-.889-.632-1.059-.281-.319-.694-1.063-1.425-2.566-.234-.482-.493-.875-.576-.875-.083 0-.276-.314-.43-.698-.153-.383-.461-.914-.685-1.179-.223-.265-.406-.608-.406-.761 0-.154-.225-.542-.499-.862-.275-.321-.5-.715-.5-.875 0-.161-.135-.426-.299-.591-.164-.164-.401-.558-.527-.875a4.051 4.051 0 00-.595-.993 3.461 3.461 0 01-.561-.995 3.276 3.276 0 00-.584-1c-.215-.232-.436-.613-.491-.848-.056-.235-.29-.648-.522-.917-.231-.269-.421-.621-.421-.781 0-.161-.134-.426-.298-.589-.163-.164-.435-.595-.604-.959-.168-.363-.438-.811-.598-.994-.161-.183-.379-.604-.485-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.514-.411-.669 0-.155-.169-.493-.375-.751-.396-.495-.827-1.256-1.529-2.701-.234-.481-.491-.875-.572-.875-.081 0-.307-.356-.503-.791a8.987 8.987 0 00-.761-1.342c-.223-.302-.435-.639-.471-.75-.13-.388-13.004-.276-13.439.117-.349.317-.35.363-.35 10.35 0 9.507-.016 10.046-.305 10.307-.388.351-6.153.418-6.495.076-.151-.151-.201-2.668-.203-10.292-.003-10.754.023-10.43-.841-10.678-.709-.203-12.043-.191-12.74.014m12.656.319l.428.162v10.103c0 10.994-.005 10.939.928 11.173 1.188.298 6.216-.021 6.642-.422l.43-.404V57.692c0-9.148.025-10.111.275-10.387.258-.285.678-.305 6.459-.302l6.182.004.621.973c.341.535.702 1.19.803 1.454.1.265.309.621.463.791.281.309.691 1.039 1.373 2.442.201.412.487.888.636 1.058.262.298.463.653 1.354 2.383.23.445.521.918.648 1.052.128.134.342.509.475.833.134.325.368.729.519.899.277.31.693 1.053 1.368 2.441.201.413.462.863.58 1 .266.308.946 1.498 1.429 2.5.199.413.539.962.755 1.221.216.26.393.568.393.686 0 .118.145.4.323.625.316.402.886 1.387 1.579 2.725.191.371.512.9.712 1.177.2.277.414.705.476.951.062.247.173.449.247.449.073 0 .302.356.507.791.206.436.469.904.584 1.042.843 1.001 2.258 4.034 2.016 4.321-.122.144-.352.618-.513 1.053-.16.435-.387.848-.505.917-.117.069-.378.463-.58.876-.689 1.405-1.096 2.133-1.367 2.441-.149.17-.432.646-.628 1.059a19.747 19.747 0 01-.934 1.666 18.038 18.038 0 00-.846 1.49 7.261 7.261 0 01-.67 1.099c-.22.289-.401.624-.401.745 0 .12-.185.46-.41.756a6.263 6.263 0 00-.685 1.224c-.151.377-.333.686-.404.686-.071 0-.329.394-.573.875-.664 1.308-1.231 2.284-1.599 2.752-.181.23-.329.515-.329.633s-.189.44-.421.715c-.232.275-.506.75-.61 1.055a3.911 3.911 0 01-.579 1.025c-.214.259-.39.542-.39.628 0 .087-.189.444-.42.793-.474.715-1.061 1.774-1.554 2.798-.182.379-.417.742-.521.807-.104.064-.377.504-.606.976-.528 1.092-.917 1.786-1.464 2.613-.239.361-.435.729-.435.817 0 .77-12.115 1.114-12.974.369l-.359-.311V89.162l-.542-.33c-.488-.298-.845-.331-3.591-.331l-3.05-.001-.409.441-.408.441v10.039c0 9.135-.025 10.059-.276 10.267-.223.185-1.465.229-6.47.229-6.723 0-6.542.024-6.838-.925-.069-.225-.281-.627-.469-.895-.376-.533-.904-1.466-1.442-2.548-.191-.386-.429-.752-.529-.813-.099-.062-.351-.499-.561-.972-.209-.474-.493-.954-.631-1.069-.139-.115-.302-.412-.363-.66-.062-.248-.285-.639-.498-.868-.212-.229-.441-.604-.507-.834-.067-.229-.29-.641-.495-.916-.205-.275-.43-.688-.499-.917-.07-.229-.297-.604-.506-.833-.208-.229-.433-.604-.5-.834-.066-.229-.29-.604-.498-.833-.208-.229-.465-.689-.571-1.022-.106-.332-.334-.731-.505-.887a1.635 1.635 0 01-.416-.696c-.057-.227-.326-.72-.598-1.096-.272-.375-.495-.758-.495-.85 0-.092-.177-.4-.393-.683-.216-.284-.449-.703-.518-.933-.07-.229-.297-.604-.506-.833-.208-.229-.434-.604-.5-.833-.067-.229-.3-.656-.519-.948-.219-.291-.397-.599-.397-.683 0-.084-.223-.46-.495-.835-.272-.376-.542-.872-.6-1.102-.057-.23-.218-.512-.356-.627-.138-.115-.419-.587-.623-1.049-.205-.462-.497-.943-.649-1.068-.153-.126-.277-.322-.277-.435 0-.114-.2-.499-.444-.855-1.091-1.595-1.12-2.684-.105-3.962.203-.255.42-.626.482-.825.063-.199.283-.586.488-.861.205-.275.43-.688.499-.917.069-.229.297-.623.508-.874.21-.252.434-.627.497-.833.063-.207.211-.489.329-.626.204-.237.676-1.059 1.501-2.611.202-.382.518-.907.701-1.167.183-.26.384-.635.445-.834.062-.198.268-.558.457-.799.31-.395.647-.983 1.431-2.506.142-.275.424-.725.627-1s.428-.687.499-.917c.072-.229.302-.622.513-.874.21-.251.434-.626.499-.833.064-.207.272-.597.463-.867.328-.466.51-.782 1.348-2.342.197-.367.562-.966.81-1.331s.452-.728.452-.807c0-.079.159-.368.355-.643.195-.274.52-.81.723-1.192.824-1.552 1.296-2.374 1.5-2.611.119-.137.271-.437.338-.666.067-.229.26-.568.428-.753.169-.184.422-.611.563-.949.141-.337.388-.69.549-.784.387-.225 12.028-.242 12.616-.018" fill="#ec7c84" /><path d="M313.64 38.854c-.412.152-.973 1.008-.973 1.485 0 .114-.185.377-.41.586-.226.209-.46.593-.522.852-.061.26-.281.661-.488.89-.207.229-.432.604-.501.833-.069.229-.302.629-.519.888-.217.259-.443.671-.503.917-.06.245-.279.605-.486.8-.208.195-.45.617-.539.939-.089.322-.323.746-.519.943a1.945 1.945 0 00-.454.843c-.054.267-.242.617-.418.776-.176.16-.471.595-.656.967-.366.74-1.024 1.87-1.61 2.769-.206.316-.377.687-.381.825-.005.137-.23.509-.501.827-.271.317-.493.7-.493.85 0 .151-.182.47-.404.71-.222.239-.456.601-.521.804-.064.203-.333.667-.596 1.031-.264.363-.482.781-.486.928-.004.146-.229.526-.5.843-.271.318-.493.746-.493.953a.69.69 0 01-.328.551c-.18.096-.46.549-.622 1.005-.162.457-.357.831-.432.831-.075 0-.287.319-.471.708-.184.39-.517.964-.741 1.275-.223.311-.406.708-.406.88 0 .173-.111.357-.246.408-.29.112-.754.983-.754 1.415 0 .166-.141.378-.314.47-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.306.634-.528.899-.221.264-.447.702-.501.972-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368 0 .184-.14.41-.311.501-.171.092-.412.413-.535.715a7.63 7.63 0 01-.621 1.131c-.457.675-.416 1.489.104 2.066.174.193.402.606.507.919.104.312.33.666.501.785.171.12.354.435.407.701.053.265.277.699.497.964.22.265.451.69.513.944.062.255.259.609.438.788.179.179.435.588.569.909.134.32.395.745.579.943.184.197.383.577.441.844.059.266.278.65.488.852.21.203.428.569.485.814.057.245.281.657.497.916.216.26.486.758.6 1.108.114.351.309.676.433.723.123.048.349.413.501.811.153.399.377.763.499.81.122.047.315.394.428.772.113.378.38.824.593.991.213.168.387.444.387.614.001.367.597 1.393.81 1.393.081 0 .191.214.243.476.053.263.282.699.51.97.228.271.466.696.528.944s.239.543.394.655c.154.113.414.562.578.998.165.437.424.861.577.942.152.082.38.496.505.92.125.424.369.846.541.939.173.092.314.304.314.47 0 .166.206.595.459.952.252.358.588.932.747 1.275.158.344.362.625.451.625.09 0 .246.309.348.686.101.376.367.854.589 1.06.223.207.406.48.406.607.001.127.169.489.375.805a27.85 27.85 0 011.697 2.967c.233.482.498.875.589.875.091 0 .213.207.272.459.058.252.322.735.586 1.073.264.339.481.691.481.784 0 .411.436 1.062.857 1.28.47.243 45.196.375 46.087.136.232-.062.488-.39.713-.914.194-.45.419-.818.501-.818.082 0 .236-.264.343-.587.107-.323.363-.792.57-1.042.206-.25.463-.71.569-1.022.107-.312.338-.669.514-.792.175-.123.369-.45.43-.728.061-.277.278-.708.483-.958.204-.25.472-.717.595-1.037.122-.321.318-.663.435-.76.118-.098.337-.486.488-.863.151-.377.376-.724.502-.772.125-.048.32-.397.433-.775.113-.377.337-.778.497-.89.16-.112.42-.539.577-.947.158-.409.379-.82.492-.913.112-.093.371-.556.574-1.029.204-.474.476-.901.605-.951.129-.049.235-.232.235-.406 0-.173.23-.605.511-.959.282-.354.554-.855.606-1.112.051-.258.228-.563.392-.678.164-.115.429-.544.589-.952.159-.409.427-.878.596-1.041.168-.164.306-.376.306-.47 0-.095.214-.486.477-.869.262-.383.531-.868.596-1.077.066-.209.299-.575.519-.812.22-.237.447-.681.504-.987.058-.307.272-.664.479-.8.213-.139.465-.57.585-.997.116-.414.312-.791.436-.839.125-.048.345-.37.49-.717.144-.346.401-.781.569-.965.169-.185.361-.523.428-.753.066-.229.293-.604.503-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.625-.692.679-3 .071-3-.091 0-.312-.341-.491-.758-.179-.416-.513-1.005-.744-1.307-.231-.302-.419-.671-.419-.82 0-.148-.133-.341-.296-.428-.162-.087-.434-.546-.604-1.019-.171-.474-.409-.9-.531-.946-.121-.047-.305-.343-.409-.658a3.748 3.748 0 00-.569-1.027c-.208-.249-.435-.641-.504-.87a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.369-.736-.483-.831-.113-.095-.305-.435-.426-.756a3.832 3.832 0 00-.588-1c-.204-.229-.462-.703-.574-1.053-.112-.35-.305-.676-.429-.723-.124-.048-.314-.361-.424-.697a3.852 3.852 0 00-.577-1.064 3.769 3.769 0 01-.567-1.027c-.104-.315-.294-.613-.422-.662-.128-.049-.325-.398-.438-.776-.113-.378-.342-.783-.509-.899-.167-.117-.389-.468-.493-.781-.105-.312-.327-.719-.493-.903-.166-.185-.426-.632-.577-.995-.152-.362-.369-.736-.483-.831-.113-.094-.305-.435-.426-.755-.121-.321-.352-.734-.514-.917-.163-.183-.448-.69-.634-1.125-.186-.435-.411-.792-.498-.792-.088 0-.252-.281-.364-.625-.112-.343-.375-.831-.585-1.082-.209-.252-.432-.627-.495-.833a2.352 2.352 0 00-.401-.71c-.158-.183-.385-.596-.504-.916-.119-.321-.359-.711-.534-.866-.174-.155-.433-.624-.576-1.042-.142-.417-.327-.759-.411-.759-.085 0-.328-.394-.541-.875-.213-.481-.508-.974-.654-1.095-.146-.121-.314-.439-.373-.708-.059-.269-.24-.582-.402-.697-.162-.114-.385-.484-.496-.82-.373-1.138 1.498-1.052-23.501-1.085-14.566-.019-22.925.03-23.209.134m45.866.396c.205.183.483.596.616.917.134.32.377.733.541.916.164.184.354.516.422.739.068.223.339.703.602 1.067.264.363.48.73.48.814 0 .084.178.391.397.683.219.292.454.718.523.947.069.23.297.623.508.874.21.252.435.627.501.834.065.207.287.601.492.876.205.275.425.669.488.876.062.206.286.581.496.833.21.251.441.645.513.874.071.229.306.649.522.932.216.284.393.592.393.684 0 .092.216.465.479.829.264.364.535.844.603 1.067.067.222.257.555.421.738.164.183.422.632.572.998.151.365.412.815.58 1 .169.184.361.523.428.752.067.229.26.568.428.752.169.185.418.603.555.93.136.327.361.688.499.803.138.115.339.484.447.82.107.336.365.799.573 1.028.208.23.434.605.504.834.069.229.302.648.518.932.216.284.393.588.393.676 0 .087.216.455.479.817.263.362.536.846.606 1.075.07.229.299.622.51.874.21.251.434.626.497.833.063.207.211.488.329.626.204.237.676 1.059 1.501 2.611.202.381.518.906.701 1.166.183.26.389.661.457.89.068.229.295.604.503.833.209.229.435.599.502.822.068.223.339.703.602 1.067.264.363.48.729.48.812 0 .082.187.426.416.763.521.766.527 1.277.024 1.937-.216.284-.449.703-.519.932a2.36 2.36 0 01-.425.75c-.164.184-.421.633-.572.998-.15.365-.411.815-.58 1a2.344 2.344 0 00-.431.752c-.069.23-.298.623-.508.874-.21.252-.434.627-.496.834-.063.207-.283.601-.488.876-.205.275-.432.687-.503.916-.072.23-.303.623-.513.874-.21.252-.436.627-.501.834-.065.207-.296.608-.512.891-.216.284-.392.592-.392.684 0 .092-.216.465-.48.829-.263.364-.535.838-.604 1.055-.068.217-.34.691-.604 1.055-.263.364-.479.737-.479.829 0 .092-.173.4-.385.684a5.626 5.626 0 00-.601 1.051c-.119.295-.322.624-.451.731-.128.107-.38.503-.559.88a26.45 26.45 0 01-.917 1.687 27.43 27.43 0 00-.917 1.677c-.178.372-.477.815-.664.984-.187.169-.34.427-.34.573 0 .146-.169.525-.375.841-.401.617-.961 1.582-1.698 2.925-.251.458-.553.945-.672 1.083a2.076 2.076 0 00-.329.626c-.063.207-.287.582-.497.833-.211.252-.44.645-.51.874-.07.23-.343.713-.606 1.075-.263.362-.479.75-.479.862 0 .112-.177.416-.394.676-.216.259-.45.658-.519.887-.069.23-.262.567-.428.75-.167.184-.452.682-.634 1.107-.182.425-.415.825-.518.889-.103.064-.309.418-.457.788-.484 1.211 1.121 1.133-23.453 1.133-16.332 0-22.191-.05-22.503-.192-.418-.19-.738-.584-1.272-1.558l-.73-1.333c-.25-.459-.552-.946-.67-1.084-.118-.137-.376-.587-.573-1-.493-1.031-1.127-2.126-1.52-2.626-.181-.23-.329-.515-.329-.633s-.177-.427-.394-.686c-.216-.259-.45-.659-.519-.888-.069-.229-.298-.646-.508-.927a6.187 6.187 0 01-.624-1.09c-.133-.319-.354-.692-.492-.829-.137-.138-.415-.585-.617-.994-.72-1.456-1.1-2.131-1.371-2.435-.151-.17-.398-.608-.547-.975-.15-.367-.364-.742-.475-.833-.112-.092-.39-.531-.62-.976-.897-1.743-1.093-2.085-1.362-2.383a2.093 2.093 0 01-.391-.76c-.062-.248-.286-.638-.497-.866a3.231 3.231 0 01-.576-.994c-.105-.318-.307-.675-.45-.793-.142-.118-.441-.593-.663-1.055-.54-1.124-1.164-2.207-1.565-2.717-.181-.23-.329-.515-.329-.633s-.189-.44-.421-.715a3.95 3.95 0 01-.61-1.054 3.895 3.895 0 00-.579-1.025c-.214-.26-.39-.552-.39-.651 0-.099-.176-.412-.392-.696a9.465 9.465 0 01-.761-1.266c-.687-1.397-1.096-2.132-1.358-2.441-.144-.17-.505-.815-.803-1.435l-.541-1.126.334-.426c.185-.234.422-.687.527-1.007.106-.32.365-.768.577-.996.211-.229.435-.619.497-.867s.238-.59.391-.76c.275-.304.65-.968 1.375-2.435.202-.409.48-.856.617-.994.138-.137.36-.515.493-.839.134-.325.342-.703.462-.84.211-.241.755-1.19 1.484-2.584.191-.366.491-.878.666-1.136.415-.612.828-1.35 1.278-2.28.199-.413.459-.863.577-1 .248-.288.918-1.446 1.397-2.417.181-.367.52-.925.754-1.241.234-.315.426-.662.426-.769 0-.107.145-.38.323-.605.311-.396.849-1.323 1.579-2.718.191-.367.491-.879.666-1.137.426-.627.828-1.35 1.331-2.39.229-.472.502-.912.606-.976.104-.065.334-.428.51-.807.347-.747.894-1.735 1.51-2.729.538-.868.901-1.513 1.291-2.295.183-.366.524-.925.758-1.24.234-.316.426-.659.426-.762 0-.104.223-.483.495-.843.273-.36.498-.743.5-.85.007-.292.844-1.232 1.241-1.395.858-.35 44.868-.101 45.27.257m-39.883 7.931c-.161.094-.408.447-.549.784-.141.338-.394.765-.563.949a2.303 2.303 0 00-.428.753c-.067.229-.219.529-.338.666-.204.237-.676 1.059-1.5 2.611a13.15 13.15 0 01-.723 1.192c-.196.275-.355.564-.355.643 0 .079-.204.442-.452.807-.248.365-.613.964-.81 1.331-.838 1.56-1.02 1.876-1.348 2.342-.191.27-.399.66-.463.867-.065.207-.289.582-.499.833-.211.252-.441.645-.513.874-.071.23-.296.642-.499.917a8.991 8.991 0 00-.627 1c-.784 1.523-1.121 2.111-1.431 2.506-.189.241-.395.601-.457.799-.061.199-.262.574-.445.834s-.499.785-.701 1.167c-.825 1.552-1.297 2.374-1.501 2.611a2.064 2.064 0 00-.329.626c-.063.206-.287.581-.497.833-.211.251-.439.645-.508.874-.069.229-.294.642-.499.917-.205.275-.425.662-.488.861-.062.199-.279.57-.482.825-1.015 1.278-.986 2.367.105 3.962.244.356.444.741.444.855 0 .113.124.309.277.435.152.125.444.606.649 1.068.204.462.485.934.623 1.049.138.115.299.397.356.627.058.23.328.726.6 1.102.272.375.495.751.495.835 0 .084.178.392.397.683.219.292.452.719.519.948.066.229.292.604.5.833.209.229.436.604.506.833.069.23.302.649.518.933.216.283.393.591.393.683 0 .092.223.475.495.85.272.376.541.869.598 1.096.057.228.244.541.416.696.171.156.399.555.505.887.106.333.363.793.571 1.022.208.229.432.604.498.833.067.23.292.605.5.834.209.229.436.604.506.833.069.229.294.642.499.917.205.275.428.687.495.916.066.23.295.605.507.834.213.229.436.62.498.868.061.248.224.545.363.66.138.115.422.595.631 1.069.21.473.462.91.561.972.1.061.338.427.529.813.538 1.082 1.066 2.015 1.442 2.548.188.268.4.67.469.895.296.949.115.925 6.838.925 5.005 0 6.247-.044 6.47-.229.251-.208.276-1.132.276-10.267V89.382l.408-.441.409-.441 3.05.001c2.746 0 3.103.033 3.591.331l.542.33v20.216l.359.311c.859.745 12.974.401 12.974-.369 0-.088.196-.456.435-.817.547-.827.936-1.521 1.464-2.613.229-.472.502-.912.606-.976.104-.065.339-.428.521-.807.493-1.024 1.08-2.083 1.554-2.798.231-.349.42-.706.42-.793 0-.086.176-.369.39-.628.215-.259.475-.721.579-1.025.104-.305.378-.78.61-1.055.232-.275.421-.597.421-.715s.148-.403.329-.633c.368-.468.935-1.444 1.599-2.752.244-.481.502-.875.573-.875.071 0 .253-.309.404-.686.151-.377.459-.928.685-1.224.225-.296.41-.636.41-.756 0-.121.181-.456.401-.745.221-.29.523-.784.67-1.099.148-.315.529-.986.846-1.49.318-.504.738-1.254.934-1.666.196-.413.479-.889.628-1.059.271-.308.678-1.036 1.367-2.441.202-.413.463-.807.58-.876.118-.069.345-.482.505-.917.161-.435.391-.909.513-1.053.242-.287-1.173-3.32-2.016-4.321-.115-.138-.378-.606-.584-1.042-.205-.435-.434-.791-.507-.791-.074 0-.185-.202-.247-.449-.062-.246-.276-.674-.476-.951-.2-.277-.521-.806-.712-1.177-.693-1.338-1.263-2.323-1.579-2.725-.178-.225-.323-.507-.323-.625s-.177-.426-.393-.686c-.216-.259-.556-.808-.755-1.221-.483-1.002-1.163-2.192-1.429-2.5-.118-.137-.379-.587-.58-1-.675-1.388-1.091-2.131-1.368-2.441-.151-.17-.385-.574-.519-.899-.133-.324-.347-.699-.475-.833-.127-.134-.418-.607-.648-1.052-.891-1.73-1.092-2.085-1.354-2.383-.149-.17-.435-.646-.636-1.058-.682-1.403-1.092-2.133-1.373-2.442a2.972 2.972 0 01-.463-.791c-.101-.264-.462-.919-.803-1.454l-.621-.973-6.182-.004c-5.781-.003-6.201.017-6.459.302-.25.276-.275 1.239-.275 10.387v10.083l-.43.404c-.426.401-5.454.72-6.642.422-.933-.234-.928-.179-.928-11.173V47.325l-.428-.162c-.588-.224-12.229-.207-12.616.018m12.503 10.493l.043 10.258.48.576.48.575 2.894.054c3.28.061 4.134-.024 4.678-.465l.382-.309.084-10.473.083-10.473 6.129-.044c5.729-.041 6.136-.025 6.227.25.251.762.582 1.349.81 1.437.138.053.251.237.251.41s.183.569.406.88c.224.312.557.885.741 1.275.184.39.41.708.504.708.093 0 .252.309.354.686.101.376.355.845.563 1.041.209.196.429.557.489.802s.297.668.526.941c.229.272.417.61.417.75s.179.467.397.727c.219.26.517.759.664 1.109.146.349.405.761.576.915.172.154.412.603.534.998.122.395.359.791.525.881.167.089.304.298.304.465 0 .166.184.558.409.869.225.311.529.828.675 1.147.146.32.401.732.568.917.167.185.352.54.411.789s.279.624.488.833c.21.209.483.68.607 1.047.124.367.364.765.533.884.17.12.309.353.309.517 0 .165.186.555.414.866.227.311.562.885.744 1.275.181.389.402.708.489.708.088 0 .25.281.36.625.11.344.368.813.575 1.042.206.229.425.629.486.889.062.26.296.657.522.883.225.225.41.485.41.577 0 .274.528 1.224.755 1.358.73.429.572 2.61-.254 3.496-.191.205-.391.562-.444.793-.054.231-.189.495-.302.587-.25.204-.755 1.161-.755 1.431 0 .109-.183.366-.406.573-.222.207-.483.665-.579 1.019-.095.354-.316.732-.49.84-.174.108-.368.403-.432.656-.063.252-.302.68-.53.951-.228.271-.459.714-.513.984-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368a.636.636 0 01-.314.503c-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.302.629-.519.888-.217.259-.443.672-.503.917s-.282.608-.493.806c-.211.199-.434.574-.496.833-.061.26-.28.661-.486.89-.207.229-.467.703-.579 1.053-.112.35-.305.676-.429.723-.124.048-.315.361-.424.697-.11.335-.37.77-.578.965-.208.195-.451.617-.54.939-.089.322-.318.742-.51.933a2.013 2.013 0 00-.456.81c-.06.255-.279.651-.486.88-.207.229-.431.604-.497.833a2.27 2.27 0 01-.428.752c-.168.185-.425.597-.571.917-.146.32-.45.836-.675 1.147-.225.312-.409.697-.409.856 0 .159-.169.334-.375.39-.492.131-11.519.135-11.862.004-.236-.091-.263-1.154-.263-10.297 0-12.616.485-11.436-4.707-11.436h-2.999l-.647.647-.647.647v20.334l-.375.101c-.493.132-10.934.135-11.592.003-.41-.082-.574-.254-.848-.891-.186-.434-.451-.882-.587-.995-.136-.113-.335-.481-.442-.817-.107-.337-.367-.778-.578-.98-.21-.202-.429-.58-.486-.839-.056-.259-.285-.682-.507-.941a3.621 3.621 0 01-.586-1.022c-.1-.303-.276-.587-.392-.631-.115-.044-.313-.397-.441-.784s-.367-.788-.533-.891c-.165-.103-.42-.55-.567-.993-.147-.442-.369-.844-.492-.891-.124-.047-.313-.361-.42-.696-.108-.336-.333-.762-.5-.946-.168-.185-.418-.607-.557-.938-.138-.332-.349-.64-.467-.686-.119-.045-.357-.473-.528-.95-.172-.477-.411-.906-.533-.952-.121-.047-.308-.359-.415-.695-.107-.336-.365-.798-.572-1.027-.208-.229-.434-.604-.503-.833-.069-.229-.302-.629-.519-.888-.217-.259-.441-.672-.498-.917-.057-.245-.234-.558-.392-.695-.158-.138-.417-.585-.575-.993-.158-.409-.422-.838-.586-.953-.164-.115-.342-.426-.395-.692-.053-.265-.278-.699-.499-.964-.222-.265-.459-.669-.528-.898a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.378-.736-.504-.831-.125-.095-.344-.504-.485-.908-.141-.405-.397-.834-.568-.955-.64-.448-.569-2.082.117-2.692.176-.156.417-.547.537-.867.119-.321.32-.706.447-.855.253-.299.841-1.348 1.359-2.427.184-.384.485-.847.668-1.03.183-.184.407-.603.499-.933.091-.329.31-.728.487-.886.178-.157.42-.549.539-.869.119-.321.346-.734.504-.917.158-.183.339-.502.401-.709.063-.207.286-.582.497-.834.21-.251.438-.644.507-.874.069-.229.297-.604.507-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.207-.229.464-.691.571-1.027.107-.336.291-.647.408-.692.117-.045.351-.445.52-.89.168-.444.444-.906.612-1.025.168-.12.306-.328.306-.463 0-.134.262-.626.583-1.092.321-.467.583-.986.583-1.154 0-.167.149-.409.331-.537.182-.127.444-.549.581-.938.137-.389.389-.833.56-.986.171-.154.408-.595.527-.98.279-.905-.174-.85 6.751-.823l6 .024.043 10.257" fill="#f4acac" /></g></svg>

                                    <img className="akfa" src={akfa} />
                                    <img className="fabfix" src={fabfix} />
                                    <img className="stublina" src={stublina} />
                                    <img className="master" src={master} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item2 carousel12-item3">
                        <div className="images">

                            <img src={fittings12} class="d-block w-100" alt="..." />
                            <h3>Для алюминиевых конструкций</h3>
                            <div className="images_inner" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <div className="fittingss">
                                    <img src={fittings9} className="fittings9" alt="..." />
                                    <img src={fittings10} className="fittings10" alt="..." />
                                </div>
                                <div className="fittingss">
                                    <img src={fittings11} className="fittings11" alt="..." />
                                </div>

                                <div className="logos">

                                    <svg xmlns={roto} width="90" viewBox="1 1 400 164.384" ><path d="M79.795 80.736C35.908 124.962 0 161.567 0 162.08c0 .514 18.339.932 40.753.929l40.754-.004 75.92-76.834 75.921-76.833 75.906 76.838 75.907 76.838h7.533c4.144 0 7.329-.574 7.078-1.275-.251-.701-36.409-37.379-80.351-81.507L239.526 0l-39.968.163-39.969.162-79.794 80.411m72.26 50.771v31.507h15.068v-24.658l3.767.005c3.275.004 4.743 1.614 11.239 12.329l7.472 12.324h8.624c4.743 0 8.624-.245 8.624-.545 0-.3-3.39-6.057-7.534-12.794-8.103-13.174-8.633-14.714-5.487-15.921 3.428-1.315 7.531-9.475 7.537-14.986.014-14.088-7.982-18.694-32.529-18.738l-16.781-.03v31.507m120.548-23.448c-5.372 1.984-6.22 2.845-6.594 6.698-.377 3.88-.921 4.421-4.452 4.421-3.684 0-4.023.404-4.023 4.795 0 4.382.343 4.794 3.992 4.794h3.992l.46 15.867c.55 18.954 1.131 19.75 14.421 19.75h8.642v-4.795c0-4.375-.347-4.794-3.963-4.794-5.008 0-5.626-1.667-5.626-15.181v-10.847h4.795c4.566 0 4.794-.228 4.794-4.794 0-4.553-.238-4.795-4.723-4.795-4.683 0-4.726-.056-5.137-6.697l-.414-6.698-6.164 2.276m-94.126 3.788c14.02 2.317 8.264 15.55-6.764 15.55h-4.59v-8.219c0-9.144.079-9.195 11.354-7.331m42.756 7.82c-11.577 5.357-16.225 20.387-10.324 33.387 7.35 16.191 34.153 15.813 41.407-.585 9.271-20.959-10.831-42.174-31.083-32.802m87.671-.855c-12.722 3.185-19.135 21.865-12.136 35.351 7.497 14.446 33.159 13.962 40.559-.766 9.849-19.603-6.893-39.976-28.423-34.585m-72.54 11.948c7.296 7.296 3.433 24.623-5.3 23.769-10.606-1.037-10.18-27.132.443-27.132.822 0 3.007 1.513 4.857 3.363m86.581.462c2.457 3.126 2.177 16.82-.42 20.528-4.331 6.184-12.077 2.85-13.72-5.904-2.55-13.595 7.102-23.578 14.14-14.624" /></svg>



                                    <svg xmlns={hoppe} width="150" viewBox="1 1 400 156"><g fill-rule="evenodd"><path d="M313.82 39.847c-.359.374-.653.814-.653.977 0 .164-.169.509-.375.767-.371.464-.646.939-1.459 2.517-.229.445-.521.918-.648 1.052s-.341.509-.475.833c-.134.325-.367.729-.518.899-.284.318-.692 1.05-1.429 2.566-.234.482-.484.875-.555.875-.071 0-.266.319-.433.709-.168.389-.438.858-.602 1.041-.164.184-.387.609-.494.945-.108.337-.315.711-.46.831-.146.121-.41.521-.587.889-.542 1.122-1.104 2.112-1.363 2.397-.135.15-.39.61-.568 1.024-.177.414-.441.851-.586.972-.146.12-.354.494-.464.831-.11.336-.376.823-.592 1.082-.216.26-.392.568-.392.686 0 .118-.148.403-.329.633-.389.495-1.02 1.582-1.524 2.627-.199.412-.538.962-.754 1.221-.217.259-.393.565-.393.679 0 .114-.223.502-.496.862-.272.36-.497.772-.5.915-.002.143-.157.424-.343.624-.186.2-.484.701-.661 1.115-.177.413-.392.751-.479.751-.086 0-.275.346-.419.769-.144.423-.451.944-.682 1.159-.231.214-.42.533-.42.708 0 .175-.169.53-.375.788-.4.5-.884 1.357-1.455 2.576-.194.412-.426.884-.516 1.047-.118.214-.093.401.09.662.141.201.258.479.26.619.003.14.228.55.5.91.273.36.496.774.496.921 0 .146.225.513.5.814.275.301.5.687.5.857 0 .171.176.523.393.782.216.259.549.827.74 1.263.191.435.421.791.511.791.09 0 .246.251.347.557.101.306.369.808.596 1.115.227.308.413.678.413.824 0 .145.225.51.5.811.275.301.5.682.5.847 0 .165.221.578.49.918.27.34.576.875.68 1.19.104.314.259.572.345.572.085 0 .33.393.543.875.213.481.512.978.665 1.103.152.126.277.344.277.485 0 .14.184.497.41.793.225.296.534.847.685 1.224.151.377.342.686.425.686.083 0 .342.394.576.875.829 1.705 1.324 2.584 1.612 2.865.16.156.292.41.292.564 0 .154.225.542.5.863.274.321.499.709.499.862 0 .154.177.491.394.75.216.259.541.809.722 1.221.182.413.455.853.608.979.152.126.279.351.281.5.003.149.228.566.5.926.273.36.496.778.496.929 0 .151.185.449.411.662.227.213.499.657.604.987.106.33.327.751.491.934.164.183.434.652.602 1.042.167.389.358.708.425.708.066 0 .302.356.523.792l.803 1.573c.221.43.605 1.011.855 1.291l.455.511h22.226c25.148 0 22.747.137 23.336-1.336.149-.372.383-.718.52-.771.137-.053.249-.198.249-.322 0-.312.533-1.405.685-1.405.068 0 .321-.393.563-.875.776-1.544 1.163-2.24 1.403-2.526.129-.153.406-.651.617-1.105.211-.455.461-.827.557-.827.096 0 .175-.139.175-.309 0-.169.185-.563.412-.875.226-.311.603-.941.836-1.399.484-.952 1.152-2.082 1.385-2.346.087-.099.309-.52.494-.937.184-.417.414-.806.51-.866.096-.059.37-.5.609-.98.239-.479.675-1.298.969-1.819.294-.521.713-1.271.932-1.666.219-.396.459-.76.535-.809.076-.049.296-.447.49-.885.194-.437.459-.837.59-.887.131-.05.238-.193.238-.318 0-.311.533-1.404.685-1.404.068 0 .321-.394.563-.875.687-1.368 1.216-2.308 1.467-2.604.126-.149.33-.524.452-.833.123-.309.347-.684.499-.833.152-.149.376-.534.498-.855.123-.321.352-.733.509-.917.158-.183.45-.671.65-1.083.697-1.435 1.178-2.237 1.426-2.377.138-.077.251-.246.251-.376 0-.327.532-1.414.693-1.414.072 0 .291-.372.487-.828.196-.455.46-.914.588-1.02.324-.269.289-.702-.094-1.143-.18-.207-.416-.647-.525-.977-.109-.331-.327-.717-.484-.858-.157-.141-.385-.52-.506-.84a4.515 4.515 0 00-.606-1.055c-.213-.259-.387-.568-.387-.686 0-.118-.162-.42-.359-.672-.381-.483-.842-1.286-1.552-2.696-.237-.472-.538-.947-.668-1.055-.13-.108-.363-.528-.518-.933-.155-.405-.333-.737-.397-.737-.063 0-.291-.375-.506-.833-.214-.458-.444-.833-.51-.833s-.247-.319-.402-.709c-.154-.389-.413-.858-.574-1.041-.161-.184-.393-.596-.516-.917-.122-.321-.346-.706-.498-.855-.152-.149-.376-.524-.499-.833-.122-.309-.326-.684-.452-.833-.265-.313-.842-1.346-1.453-2.604-.233-.481-.487-.875-.563-.875-.163 0-.699-1.078-.699-1.404 0-.125-.109-.269-.242-.32-.133-.051-.405-.471-.604-.934-.199-.463-.418-.842-.486-.842s-.28-.375-.47-.833c-.191-.459-.415-.834-.5-.834-.084 0-.284-.342-.443-.76-.16-.417-.42-.886-.577-1.041-.158-.155-.387-.545-.51-.865-.122-.321-.346-.734-.498-.917-.151-.183-.411-.648-.577-1.032-.166-.384-.39-.732-.498-.774-.108-.041-.301-.391-.429-.777-.127-.386-.326-.739-.441-.783-.115-.044-.294-.338-.398-.653a3.86 3.86 0 00-.561-1.027 4.559 4.559 0 01-.597-1.037c-.123-.321-.335-.714-.47-.872-.135-.159-.404-.607-.597-.996-.604-1.211 1.112-1.127-23.24-1.13l-22.055-.002-.654.68m18.503 6.983c.864.248.838-.076.841 10.678.002 7.624.052 10.141.203 10.292.342.342 6.107.275 6.495-.076.289-.261.305-.8.305-10.307 0-9.987.001-10.033.35-10.35.435-.393 13.309-.505 13.439-.117.036.111.248.448.471.75.222.303.565.906.761 1.342.196.435.422.791.503.791.081 0 .338.394.572.875.702 1.445 1.133 2.206 1.529 2.701.206.258.375.596.375.751 0 .155.185.456.411.669.227.213.499.657.604.987.106.33.324.751.485.934.16.183.43.631.598.994.169.364.441.795.604.959.164.163.298.428.298.589 0 .16.19.512.421.781.232.269.466.682.522.917.055.235.276.616.491.848.215.232.478.682.584 1 .107.318.359.766.561.995.202.23.47.676.595.993.126.317.363.711.527.875.164.165.299.43.299.591 0 .16.225.554.5.875.274.32.499.708.499.862 0 .153.183.496.406.761.224.265.532.796.685 1.179.154.384.347.698.43.698.083 0 .342.393.576.875.731 1.503 1.144 2.247 1.425 2.566.149.17.433.646.632 1.059.33.686 1.142 2.158 1.628 2.949.155.253.147.408-.038.728-.13.223-.417.784-.639 1.246-.221.462-.519.937-.662 1.055-.142.118-.348.49-.458.827-.109.336-.376.79-.592 1.009-.216.219-.392.532-.392.696 0 .165-.123.422-.273.572-.281.281-.939 1.427-1.579 2.751-.199.412-.539.962-.755 1.221-.217.259-.393.563-.393.676 0 .113-.193.463-.429.779a8.79 8.79 0 00-.677 1.074c-.137.275-.502.95-.812 1.5-.309.55-.735 1.337-.947 1.75-.212.412-.477.825-.588.917-.112.091-.326.466-.475.833-.15.367-.396.805-.547.975-.272.305-.656.987-1.374 2.442-.203.412-.468.825-.588.916-.121.092-.343.466-.494.832-.151.366-.453.878-.672 1.138-.218.26-.397.607-.397.77 0 .164-.225.581-.5.927-.275.346-.5.718-.5.827 0 .108-.223.492-.496.852-.272.36-.497.742-.5.85-.002.107-.18.407-.394.667-.215.259-.475.72-.579 1.025-.104.305-.36.769-.569 1.031-.208.262-.514.669-.678.904l-.3.427h-12.602l-.441-.408-.441-.409V99.43c0-9.8-.009-10.09-.323-10.257-.343-.184-5.958-.247-6.414-.072-.236.091-.263 1.15-.263 10.258v10.156l-.409.409-.41.409h-6.182c-6.836 0-6.933-.013-7.337-1.033-.119-.303-.321-.672-.447-.821-.234-.276-.686-1.069-1.459-2.562a13.432 13.432 0 00-.844-1.4c-.227-.311-.412-.705-.412-.875 0-.17-.074-.309-.165-.309-.15 0-.63-.814-1.63-2.763-.208-.405-.442-.737-.519-.737-.078 0-.273-.356-.435-.791-.162-.436-.422-.904-.579-1.042-.157-.138-.387-.513-.51-.833a4.597 4.597 0 00-.609-1.055c-.213-.259-.387-.572-.387-.695 0-.124-.182-.442-.406-.707-.223-.265-.452-.67-.51-.899-.058-.23-.279-.621-.493-.869a4.167 4.167 0 01-.599-.988c-.117-.296-.34-.687-.496-.871-.156-.183-.421-.652-.589-1.041-.167-.39-.355-.709-.418-.709s-.276-.375-.473-.833c-.197-.458-.425-.833-.507-.833-.082 0-.237-.265-.343-.588a3.925 3.925 0 00-.566-1.042 4.474 4.474 0 01-.595-1.037c-.123-.321-.314-.659-.425-.752-.111-.093-.372-.543-.579-1-.207-.457-.443-.874-.524-.926-.202-.129-1.244-2.06-1.703-3.155a3.58 3.58 0 00-.314-.547c-.157-.221-.161-.327-.018-.416.106-.067.392-.533.636-1.037.613-1.268 1.199-2.324 1.467-2.646.124-.149.362-.585.528-.97.166-.384.398-.735.516-.78.117-.045.264-.314.326-.597.063-.283.281-.72.486-.97.204-.25.526-.754.715-1.121.805-1.559 1.232-2.324 1.437-2.57.12-.145.356-.582.525-.971.168-.39.364-.709.435-.709.071 0 .324-.393.562-.875.238-.481.691-1.325 1.006-1.875.315-.55.737-1.299.937-1.666.201-.366.458-.741.572-.833.114-.092.294-.443.4-.779.107-.336.301-.7.431-.808.13-.108.43-.583.666-1.055a32.075 32.075 0 011.704-2.951c.206-.316.375-.644.375-.73.001-.086.139-.311.307-.5.169-.189.406-.607.527-.928.122-.321.353-.733.514-.916.161-.184.42-.652.574-1.042.155-.39.347-.708.426-.708.079 0 .305-.375.502-.834.197-.458.417-.833.488-.833.072 0 .269-.34.438-.755.235-.574.428-.789.808-.901.697-.205 12.031-.217 12.74-.014" fill="#df222a" /><path d="M101.083 45.842c-2.525.154-4.086.398-4.75.741-.231.12-.792.274-1.247.342-.454.068-1.278.338-1.831.599-.553.262-1.168.476-1.367.476-.199 0-.586.188-.859.418-.273.229-.723.462-1.001.518-.278.056-.641.228-.808.383-.167.155-.697.496-1.178.758-.482.262-.875.527-.875.589 0 .063-.204.207-.453.32-.506.23-.462.191-2.881 2.584-2.151 2.129-2.392 2.406-3.272 3.763a31.088 31.088 0 01-1.024 1.5c-.177.23-.481.754-.675 1.167a14.51 14.51 0 01-.51 1c-.387.619-1.352 2.803-1.352 3.06 0 .156-.178.638-.396 1.071-.219.432-.449 1.123-.513 1.536-.064.412-.297 1.357-.518 2.099-.221.742-.478 2.13-.572 3.084-.094.953-.24 2.371-.325 3.15-.2 1.828-.205 4.826-.012 6.833.084.871.23 2.403.324 3.405.096 1.02.35 2.376.578 3.083.224.694.458 1.635.52 2.09.062.456.282 1.168.489 1.584.208.415.428.98.49 1.255.11.487.895 2.245 1.376 3.083.132.23.368.68.524 1 .157.321.333.621.391.667.059.046.321.429.584.852.262.423.677 1.069.923 1.436.591.883 3.907 4.308 4.886 5.045.425.321 1.022.79 1.326 1.042.304.252.621.458.706.458.084 0 .449.216.811.479.362.264.846.536 1.075.606.229.069.628.275.887.457.258.182.816.436 1.24.563.423.128.941.344 1.151.482.21.137.874.364 1.476.504.602.139 1.447.391 1.878.559 2.593 1.01 12.871.968 15.625-.064.554-.208 1.341-.434 1.75-.502.408-.068 1.08-.292 1.493-.497.412-.205.962-.424 1.222-.486.26-.063.747-.288 1.083-.5.336-.212.799-.443 1.028-.514.229-.071.713-.344 1.075-.608.361-.263.726-.479.811-.479.084 0 .402-.206.706-.458.305-.252.946-.758 1.426-1.125 1.104-.843 3.031-2.772 3.899-3.903.366-.477.873-1.117 1.125-1.421.252-.304.458-.626.458-.714 0-.088.144-.291.321-.45.176-.16.509-.69.74-1.177.231-.488.494-.932.584-.988.09-.056.256-.382.369-.724.113-.343.373-.886.578-1.206.205-.321.418-.846.474-1.167.056-.321.289-.952.518-1.403.229-.451.416-.996.416-1.212 0-.215.191-.934.424-1.596a14.53 14.53 0 00.585-2.539 57.93 57.93 0 01.451-2.917c.408-2.225.408-8.982 0-10.916a27.126 27.126 0 01-.395-2.584c-.062-.687-.327-1.918-.589-2.736-.262-.817-.476-1.627-.476-1.798 0-.172-.225-.794-.5-1.382-.275-.589-.5-1.212-.5-1.387 0-.174-.187-.592-.415-.928-.228-.336-.462-.815-.521-1.065-.059-.249-.285-.692-.503-.984-.217-.292-.394-.591-.394-.665 0-.075-.25-.511-.555-.97l-.792-1.191c-1.598-2.41-3.43-4.256-6.588-6.644-.838-.633-4.435-2.583-4.766-2.583-.081 0-.612-.215-1.181-.477-.569-.263-1.373-.528-1.785-.59-.413-.062-1.275-.29-1.917-.506-1.149-.388-1.865-.459-6.666-.664-.825-.035-2.55 0-3.834.079m-83.821 1.253c-.399.399-.401 62.132-.003 62.701.388.553 11.025.587 11.574.037.328-.327.334-.555.334-13.479 0-12.024.023-13.166.275-13.375.472-.392 26.063-.425 26.349-.034.163.223.209 3.145.209 13.383 0 11.585.03 13.141.259 13.468.388.553 11.025.587 11.574.037.526-.526.526-62.14 0-62.666-.459-.46-11.117-.526-11.571-.072-.233.233-.262 1.579-.262 12.3 0 9.141-.048 12.086-.2 12.238-.265.265-25.818.292-26.311.028-.314-.168-.322-.479-.322-12.167 0-11.772-.007-12-.334-12.327-.459-.46-11.117-.526-11.571-.072m123.02-.02c-.416.417-.439 62.127-.023 62.721.388.553 11.025.587 11.574.037.327-.326.334-.555.334-11.487V87.193l.541-.169c.298-.092 2.642-.199 5.209-.238 2.946-.044 4.838-.14 5.132-.26.256-.105 1.375-.347 2.486-.539 1.111-.191 2.176-.448 2.367-.57.192-.122.685-.313 1.098-.425.754-.204 2.847-1.187 4.08-1.916 1.312-.776 3.484-2.649 4.337-3.739.366-.469.862-1.093 1.102-1.386.24-.294.494-.722.566-.951.071-.229.306-.649.522-.932.216-.284.393-.667.393-.851 0-.184.196-.701.435-1.151.255-.478.499-1.299.589-1.983.085-.641.277-1.654.427-2.25.375-1.486.377-5.685.004-7.083a21.438 21.438 0 01-.43-2.204c-.095-.699-.3-1.399-.49-1.667a3.274 3.274 0 01-.443-.998c-.064-.295-.291-.794-.504-1.108-.213-.315-.444-.748-.512-.964-.418-1.32-4.074-4.792-6.019-5.716-.473-.225-.905-.482-.96-.571-.056-.09-.494-.287-.974-.437a10.794 10.794 0 01-1.484-.599c-.336-.179-1.161-.43-1.833-.559a41.404 41.404 0 01-2.556-.598c-1.878-.511-24.481-.741-24.968-.254m49.051-.123c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c1.075.656 11.032.45 11.497-.237.067-.1.124-5.141.125-11.204l.003-11.022.384-.252c.314-.206 1.272-.265 5.208-.323 3.153-.046 4.986-.139 5.29-.266.256-.107 1.375-.352 2.486-.544 1.111-.191 2.176-.451 2.367-.576.192-.125.791-.343 1.332-.483.542-.141 1.104-.359 1.25-.483.146-.125.594-.354.994-.509.4-.155.963-.448 1.25-.651.287-.203.642-.444.789-.535 1.739-1.082 4.983-4.256 4.983-4.876 0-.081.223-.443.495-.803.273-.36.498-.737.5-.838.003-.101.193-.538.424-.971.23-.433.495-1.138.587-1.567.093-.428.327-1.153.521-1.612.795-1.883.735-9.398-.094-11.705-.238-.663-.433-1.377-.433-1.586 0-.21-.176-.642-.392-.962a5.85 5.85 0 01-.595-1.203c-.112-.342-.274-.666-.36-.719-.086-.053-.421-.509-.743-1.013-1.038-1.622-3.233-3.61-5.219-4.726-.243-.136-.779-.442-1.191-.68-.412-.238-.975-.488-1.25-.554a7.604 7.604 0 01-1.178-.445c-.372-.178-1.122-.403-1.666-.501a21.14 21.14 0 01-2.073-.514c-1.703-.527-23.735-.989-25-.523m48 0c-.9.331-.833-2.222-.833 31.576v30.977l.542.33c.855.522 36.27.52 36.791-.002.548-.547.515-9.354-.037-9.74-.327-.229-1.796-.26-12.55-.26-9.251 0-12.227-.048-12.379-.2-.15-.15-.2-2.231-.2-8.341v-8.14l.409-.41.409-.409h18.128l.194-.424c.276-.608.27-9.432-.007-9.709-.151-.151-2.467-.201-9.375-.205-7.365-.005-9.233-.049-9.467-.227-.269-.205-.291-.751-.291-7.235v-7.014l.37-.26c.327-.228 1.743-.259 11.988-.259 10.339 0 11.647-.029 11.88-.262.429-.429.389-9.237-.043-9.629-.303-.274-34.796-.427-35.529-.157m43.292.237c-.252.095-.458.24-.458.323 0 .082-.248.253-.55.38-.759.317-2.373 2.197-2.596 3.025a8.28 8.28 0 01-.517 1.327c-.532 1.042-.488 3.803.079 4.923.23.452.417.969.417 1.148 0 .179.262.67.583 1.09.321.421.584.837.584.925 0 .089.218.274.484.412.266.138.589.355.716.483.418.417 1.272.775 1.849.775.327 0 .729.141.951.333.636.552 3.666.468 3.666-.101 0-.181-.333-.232-1.531-.232-1.315 0-1.582-.048-1.896-.343-.2-.189-.746-.443-1.212-.566-.82-.217-1.451-.731-2.623-2.138-.839-1.008-1.795-5.359-1.25-5.695.147-.091.548-1.219.742-2.091.051-.229.265-.604.475-.834a7.84 7.84 0 00.676-.875c.161-.252.382-.458.49-.458.108 0 .425-.218.705-.484 1.121-1.07 5.884-1.095 7.234-.038 1.181.925 2.196 2.108 2.378 2.772.101.367.336 1.066.522 1.554.435 1.139.427 2.756-.02 3.766-.177.401-.377.98-.444 1.288-.228 1.049-2.124 3.018-3.111 3.23-.81.174-1.135.384-1.027.665.136.355 1.537.327 2.064-.041 1.666-1.165 2.912-2.626 3.067-3.598.061-.379.226-.816.367-.972.611-.675.608-4.12-.004-5.054-.134-.205-.298-.665-.364-1.022-.169-.922-1.785-2.909-2.562-3.149a1.717 1.717 0 01-.693-.48c-.327-.404-6.234-.608-7.191-.248m.575 3.011c-.22.22-.265 7.36-.052 8.133.093.337.237.427.745.469.916.077 1.107-.163 1.107-1.387 0-.756.083-1.147.299-1.414l.299-.369.742.927c.409.509.879 1.118 1.045 1.353.629.89 2.282 1.262 2.282.513 0-.278-1.06-2.175-1.412-2.527-.333-.333-.344-.285.318-1.373.326-.535.585-1.194.6-1.525.063-1.35.004-1.534-.734-2.272l-.728-.728h-2.156c-1.454 0-2.22.065-2.355.2m3.633 1.8c.717.716.19 2-.821 2-.636 0-1.012-.393-1.012-1.058 0-1.146 1.077-1.699 1.833-.942m-177.827 3.989c.911.096 1.763.305 2.365.58.517.237 1.056.431 1.196.431.14 0 .61.225 1.043.5.434.275.848.5.921.5.548 0 4.636 3.884 4.636 4.405 0 .06.187.312.416.559.23.247.417.529.417.627 0 .097.217.519.482.937.265.417.536 1.013.604 1.324.067.311.26.76.428.998.169.239.389.801.489 1.25.1.449.362 1.417.582 2.15 1.09 3.629 1.08 13.51-.016 16.583-.212.596-.439 1.421-.502 1.834-.064.412-.33 1.154-.592 1.648-.261.494-.475 1.019-.476 1.167 0 .147-.225.605-.499 1.018-.274.412-.499.836-.499.941-.001.105-.187.367-.415.583-.227.216-.415.474-.416.574-.011.657-4.053 4.402-4.751 4.402-.111 0-.337.151-.504.335-.167.184-.647.44-1.067.568-.421.128-1.104.386-1.519.573-1.843.831-8.452.814-10.354-.026-.49-.217-1.097-.445-1.349-.508-.251-.063-.81-.338-1.241-.612-.431-.273-.844-.497-.918-.497-.073 0-.273-.131-.443-.291-.17-.161-.639-.549-1.042-.864-.715-.558-2.68-2.693-3.047-3.311a30.613 30.613 0 00-.559-.88c-.206-.314-.375-.676-.375-.805-.001-.128-.182-.471-.403-.761-.221-.29-.492-.859-.601-1.265a8.362 8.362 0 00-.508-1.345c-.171-.334-.387-1.089-.481-1.678a12.883 12.883 0 00-.541-2.06c-.356-.953-.37-1.21-.377-6.99l-.007-6 .443-1.416c.243-.78.489-1.743.546-2.141.057-.398.244-.998.415-1.334.171-.336.402-.945.512-1.354.11-.408.338-.919.508-1.134.169-.215.397-.668.508-1.006.11-.338.379-.84.598-1.115 1.526-1.915 2.631-3.173 3.19-3.632 1.399-1.151 1.628-1.317 2.03-1.474.23-.089.68-.339 1-.554.321-.215.846-.445 1.167-.511.321-.066.883-.273 1.25-.461 1.08-.553 4.79-.774 7.756-.462m53.715.855c1.49.13 2.25.28 2.862.563.459.213 1.081.468 1.384.567.947.312 3.2 2.253 3.2 2.758 0 .147.076.268.169.268.198 0 .485.63 1.025 2.25 1.383 4.148-.584 10.438-3.694 11.813a8.009 8.009 0 00-.961.546c-.299.199-.862.415-1.25.479s-.786.18-.883.259c-.782.628-9.743 1.002-10.221.426-.136-.164-.176-2.908-.145-9.953l.043-9.727.417-.211c.526-.266 5.19-.288 8.054-.038m48.353.006c2.062.162 2.453.242 3.259.667.505.265 1.007.482 1.117.483.764.001 3.152 2.301 3.634 3.5.093.229.353.754.579 1.167.655 1.192.638 6.634-.024 8a33.218 33.218 0 00-.683 1.5c-.253.615-2.343 2.831-2.677 2.836-.108.002-.516.22-.908.486s-1.03.536-1.417.6c-.387.064-.891.211-1.121.326-1.254.63-9.231.88-9.862.309-.288-.261-.304-.784-.304-9.781v-9.505l.362-.386c.43-.457 3.733-.54 8.045-.202" fill="#fff" /><path d="M314.236 38.993c-.397.163-1.234 1.103-1.241 1.395-.002.107-.227.49-.5.85-.272.36-.495.739-.495.843 0 .103-.192.446-.426.762-.234.315-.575.874-.758 1.24-.39.782-.753 1.427-1.291 2.295-.616.994-1.163 1.982-1.51 2.729-.176.379-.406.742-.51.807-.104.064-.377.504-.606.976-.503 1.04-.905 1.763-1.331 2.39-.175.258-.475.77-.666 1.137-.73 1.395-1.268 2.322-1.579 2.718-.178.225-.323.498-.323.605 0 .107-.192.454-.426.769a9.805 9.805 0 00-.754 1.241c-.479.971-1.149 2.129-1.397 2.417-.118.137-.378.587-.577 1-.45.93-.863 1.668-1.278 2.28-.175.258-.475.77-.666 1.136-.729 1.394-1.273 2.343-1.484 2.584-.12.137-.328.515-.462.84-.133.324-.355.702-.493.839-.137.138-.415.585-.617.994-.725 1.467-1.1 2.131-1.375 2.435-.153.17-.329.512-.391.76s-.286.638-.497.867a3.229 3.229 0 00-.577.996c-.105.32-.342.773-.527 1.007l-.334.426.541 1.126c.298.62.659 1.265.803 1.435.262.309.671 1.044 1.358 2.441.203.413.546.982.761 1.266.216.284.392.597.392.696 0 .099.176.391.39.651.215.259.475.72.579 1.025.104.305.378.779.61 1.054.232.275.421.597.421.715s.148.403.329.633c.401.51 1.025 1.593 1.565 2.717.222.462.521.937.663 1.055.143.118.345.475.45.793.105.318.364.765.576.994.211.228.435.618.497.866.062.249.238.591.391.76.269.298.465.64 1.362 2.383.23.445.508.884.62.976.111.091.325.466.475.833.149.367.396.805.547.975.271.304.651.979 1.371 2.435.202.409.48.856.617.994.138.137.359.51.492.829.133.318.414.809.624 1.09.21.281.439.698.508.927.069.229.303.629.519.888.217.259.394.568.394.686 0 .118.148.403.329.633.393.5 1.027 1.595 1.52 2.626.197.413.455.863.573 1 .118.138.42.625.67 1.084l.73 1.333c.534.974.854 1.368 1.272 1.558.312.142 6.171.192 22.503.192 24.574 0 22.969.078 23.453-1.133.148-.37.354-.724.457-.788.103-.064.336-.464.518-.889s.467-.923.634-1.107c.166-.183.359-.52.428-.75.069-.229.303-.628.519-.887.217-.26.394-.564.394-.676 0-.112.216-.5.479-.862s.536-.845.606-1.075c.07-.229.299-.622.51-.874.21-.251.434-.626.497-.833.063-.207.211-.488.329-.626.119-.138.421-.625.672-1.083.737-1.343 1.297-2.308 1.698-2.925.206-.316.375-.695.375-.841 0-.146.153-.404.34-.573.187-.169.486-.612.664-.984a27.43 27.43 0 01.917-1.677c.325-.55.738-1.309.917-1.687.179-.377.431-.773.559-.88.129-.107.332-.436.451-.731.118-.294.389-.768.601-1.051.212-.284.385-.592.385-.684 0-.092.216-.465.479-.829.264-.364.536-.838.604-1.055.069-.217.341-.691.604-1.055.264-.364.48-.737.48-.829 0-.092.176-.4.392-.684.216-.283.447-.684.512-.891.065-.207.291-.582.501-.834.21-.251.441-.644.513-.874.071-.229.298-.641.503-.916.205-.275.425-.669.488-.876.062-.207.286-.582.496-.834.21-.251.439-.644.508-.874.069-.229.263-.567.431-.752.169-.185.43-.635.58-1 .151-.365.408-.814.572-.998a2.36 2.36 0 00.425-.75c.07-.229.303-.648.519-.932.503-.66.497-1.171-.024-1.937-.229-.337-.416-.681-.416-.763 0-.083-.216-.449-.48-.812-.263-.364-.534-.844-.602-1.067-.067-.223-.293-.593-.502-.822-.208-.229-.435-.604-.503-.833-.068-.229-.274-.63-.457-.89s-.499-.785-.701-1.166c-.825-1.552-1.297-2.374-1.501-2.611a2.076 2.076 0 01-.329-.626c-.063-.207-.287-.582-.497-.833-.211-.252-.44-.645-.51-.874-.07-.229-.343-.713-.606-1.075-.263-.362-.479-.73-.479-.817 0-.088-.177-.392-.393-.676-.216-.284-.449-.703-.518-.932-.07-.229-.296-.604-.504-.834-.208-.229-.466-.692-.573-1.028-.108-.336-.309-.705-.447-.82-.138-.115-.363-.476-.499-.803-.137-.327-.386-.745-.555-.93a2.288 2.288 0 01-.428-.752 2.27 2.27 0 00-.428-.752c-.168-.185-.429-.635-.58-1-.15-.366-.408-.815-.572-.998a2.342 2.342 0 01-.421-.738c-.068-.223-.339-.703-.603-1.067-.263-.364-.479-.737-.479-.829 0-.092-.177-.4-.393-.684-.216-.283-.451-.703-.522-.932-.072-.229-.303-.623-.513-.874-.21-.252-.434-.627-.496-.833-.063-.207-.283-.601-.488-.876-.205-.275-.427-.669-.492-.876-.066-.207-.291-.582-.501-.834-.211-.251-.439-.644-.508-.874-.069-.229-.304-.655-.523-.947-.219-.292-.397-.599-.397-.683 0-.084-.216-.451-.48-.814-.263-.364-.534-.844-.602-1.067a2.37 2.37 0 00-.422-.739c-.164-.183-.407-.596-.541-.916-.574-1.379 1.837-1.246-23.264-1.283-12.251-.018-22.431.031-22.622.109m44.764.389c.229.116.575.529.769.917.193.389.462.837.597.996.135.158.347.551.47.872.124.32.392.787.597 1.037.204.25.457.712.561 1.027.104.315.283.609.398.653.115.044.314.397.441.783.128.386.321.736.429.777.108.042.332.39.498.774.166.384.426.849.577 1.032.152.183.376.596.498.917.123.32.352.71.51.865.157.155.417.624.577 1.041.159.418.359.76.443.76.085 0 .309.375.5.834.19.458.402.833.47.833.068 0 .287.379.486.842.199.463.471.883.604.934.133.051.242.195.242.32 0 .326.536 1.404.699 1.404.076 0 .33.394.563.875.611 1.258 1.188 2.291 1.453 2.604.126.149.33.524.452.833.123.309.347.684.499.833.152.149.376.534.498.855.123.321.355.733.516.917.161.183.42.652.574 1.041.155.39.336.709.402.709s.296.375.51.833c.215.458.443.833.506.833.064 0 .242.332.397.737.155.405.388.825.518.933.13.108.431.583.668 1.055.71 1.41 1.171 2.213 1.552 2.696.197.252.359.554.359.672s.174.427.387.686c.212.259.485.734.606 1.055.121.32.349.699.506.84.157.141.375.527.484.858.109.33.345.77.525.977.383.441.418.874.094 1.143-.128.106-.392.565-.588 1.02-.196.456-.415.828-.487.828-.161 0-.693 1.087-.693 1.414 0 .13-.113.299-.251.376-.248.14-.729.942-1.426 2.377-.2.412-.492.9-.65 1.083-.157.184-.386.596-.509.917-.122.321-.346.706-.498.855-.152.149-.376.524-.499.833-.122.309-.326.684-.452.833-.251.296-.78 1.236-1.467 2.604-.242.481-.495.875-.563.875-.152 0-.685 1.093-.685 1.404 0 .125-.107.268-.238.318-.131.05-.396.45-.59.887-.194.438-.414.836-.49.885-.076.049-.316.413-.535.809-.219.395-.638 1.145-.932 1.666-.294.521-.73 1.34-.969 1.819-.239.48-.513.921-.609.98-.096.06-.326.449-.51.866-.185.417-.407.838-.494.937-.233.264-.901 1.394-1.385 2.346-.233.458-.61 1.088-.836 1.399-.227.312-.412.706-.412.875 0 .17-.079.309-.175.309-.096 0-.346.372-.557.827-.211.454-.488.952-.617 1.105-.24.286-.627.982-1.403 2.526-.242.482-.495.875-.563.875-.152 0-.685 1.093-.685 1.405 0 .124-.112.269-.249.322-.137.053-.371.399-.52.771-.589 1.473 1.812 1.336-23.336 1.336h-22.226l-.455-.511c-.25-.28-.634-.861-.855-1.291l-.803-1.573c-.221-.436-.457-.792-.523-.792-.067 0-.258-.319-.425-.708-.168-.39-.438-.859-.602-1.042-.164-.183-.385-.604-.491-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.511-.411-.662 0-.151-.223-.569-.496-.929-.272-.36-.497-.777-.5-.926-.002-.149-.129-.374-.281-.5-.153-.126-.426-.566-.608-.979-.181-.412-.506-.962-.722-1.221-.217-.259-.394-.596-.394-.75 0-.153-.225-.541-.499-.862-.275-.321-.5-.709-.5-.863 0-.154-.132-.408-.292-.564-.288-.281-.783-1.16-1.612-2.865-.234-.481-.493-.875-.576-.875-.083 0-.274-.309-.425-.686a6.315 6.315 0 00-.685-1.224c-.226-.296-.41-.653-.41-.793 0-.141-.125-.359-.277-.485-.153-.125-.452-.622-.665-1.103-.213-.482-.458-.875-.543-.875-.086 0-.241-.258-.345-.572-.104-.315-.41-.85-.68-1.19-.269-.34-.49-.753-.49-.918 0-.165-.225-.546-.5-.847-.275-.301-.5-.666-.5-.811 0-.146-.186-.516-.413-.824-.227-.307-.495-.809-.596-1.115-.101-.306-.257-.557-.347-.557-.09 0-.32-.356-.511-.791-.191-.436-.524-1.004-.74-1.263-.217-.259-.393-.611-.393-.782 0-.17-.225-.556-.5-.857-.275-.301-.5-.668-.5-.814 0-.147-.223-.561-.496-.921-.272-.36-.497-.77-.5-.91-.002-.14-.119-.418-.26-.619-.183-.261-.208-.448-.09-.662.09-.163.322-.635.516-1.047.571-1.219 1.055-2.076 1.455-2.576.206-.258.375-.613.375-.788 0-.175.189-.494.42-.708.231-.215.538-.736.682-1.159.144-.423.333-.769.419-.769.087 0 .302-.338.479-.751.177-.414.475-.915.661-1.115.186-.2.341-.481.343-.624.003-.143.228-.555.5-.915.273-.36.496-.748.496-.862 0-.114.176-.42.393-.679.216-.259.555-.809.754-1.221.504-1.045 1.135-2.132 1.524-2.627.181-.23.329-.515.329-.633s.176-.426.392-.686c.216-.259.482-.746.592-1.082.11-.337.318-.711.464-.831.145-.121.409-.558.586-.972.178-.414.433-.874.568-1.024.259-.285.821-1.275 1.363-2.397.177-.368.441-.768.587-.889.145-.12.352-.494.46-.831.107-.336.33-.761.494-.945.164-.183.434-.652.602-1.041.167-.39.362-.709.433-.709.071 0 .321-.393.555-.875.737-1.516 1.145-2.248 1.429-2.566.151-.17.384-.574.518-.899.134-.324.348-.699.475-.833s.419-.607.648-1.052c.813-1.578 1.088-2.053 1.459-2.517.206-.258.375-.603.375-.767 0-.163.294-.603.653-.977l.654-.68 22.055.002c17.439.002 22.142.047 22.471.213m-39.417 7.462c-.38.112-.573.327-.808.901-.169.415-.366.755-.438.755-.071 0-.291.375-.488.833-.197.459-.423.834-.502.834-.079 0-.271.318-.426.708-.154.39-.413.858-.574 1.042-.161.183-.392.595-.514.916-.121.321-.358.739-.527.928-.168.189-.306.414-.307.5 0 .086-.169.414-.375.73a32.075 32.075 0 00-1.704 2.951c-.236.472-.536.947-.666 1.055-.13.108-.324.472-.431.808-.106.336-.286.687-.4.779-.114.092-.371.467-.572.833-.2.367-.622 1.116-.937 1.666-.315.55-.768 1.394-1.006 1.875-.238.482-.491.875-.562.875-.071 0-.267.319-.435.709-.169.389-.405.826-.525.971-.205.246-.632 1.011-1.437 2.57a7.792 7.792 0 01-.715 1.121c-.205.25-.423.687-.486.97-.062.283-.209.552-.326.597-.118.045-.35.396-.516.78-.166.385-.404.821-.528.97-.268.322-.854 1.378-1.467 2.646-.244.504-.53.97-.636 1.037-.143.089-.139.195.018.416.115.163.256.409.314.547.459 1.095 1.501 3.026 1.703 3.155.081.052.317.469.524.926.207.457.468.907.579 1 .111.093.302.431.425.752s.39.788.595 1.037c.204.25.459.719.566 1.042.106.323.261.588.343.588.082 0 .31.375.507.833.197.458.41.833.473.833s.251.319.418.709c.168.389.433.858.589 1.041.156.184.379.575.496.871.116.295.386.74.599.988.214.248.435.639.493.869.058.229.287.634.51.899.224.265.406.583.406.707 0 .123.174.436.387.695.212.259.486.734.609 1.055.123.32.353.695.51.833.157.138.417.606.579 1.042.162.435.357.791.435.791.077 0 .311.332.519.737 1 1.949 1.48 2.763 1.63 2.763.091 0 .165.139.165.309 0 .17.185.564.412.875.226.311.606.941.844 1.4.773 1.493 1.225 2.286 1.459 2.562.126.149.328.518.447.821.404 1.02.501 1.033 7.337 1.033h6.182l.41-.409.409-.409V99.359c0-9.108.027-10.167.263-10.258.456-.175 6.071-.112 6.414.072.314.167.323.457.323 10.257v10.086l.441.409.441.408h12.602l.3-.427c.164-.235.47-.642.678-.904.209-.262.465-.726.569-1.031.104-.305.364-.766.579-1.025.214-.26.392-.56.394-.667.003-.108.228-.49.5-.85.273-.36.496-.744.496-.852 0-.109.225-.481.5-.827s.5-.763.5-.927c0-.163.179-.51.397-.77.219-.26.521-.772.672-1.138.151-.366.373-.74.494-.832.12-.091.385-.504.588-.916.718-1.455 1.102-2.137 1.374-2.442.151-.17.397-.608.547-.975.149-.367.363-.742.475-.833.111-.092.376-.505.588-.917.212-.413.638-1.2.947-1.75.31-.55.675-1.225.812-1.5a8.79 8.79 0 01.677-1.074c.236-.316.429-.666.429-.779 0-.113.176-.417.393-.676.216-.259.556-.809.755-1.221.64-1.324 1.298-2.47 1.579-2.751.15-.15.273-.407.273-.572 0-.164.176-.477.392-.696.216-.219.483-.673.592-1.009.11-.337.316-.709.458-.827.143-.118.441-.593.662-1.055.222-.462.509-1.023.639-1.246.185-.32.193-.475.038-.728a44.025 44.025 0 01-1.628-2.949c-.199-.413-.483-.889-.632-1.059-.281-.319-.694-1.063-1.425-2.566-.234-.482-.493-.875-.576-.875-.083 0-.276-.314-.43-.698-.153-.383-.461-.914-.685-1.179-.223-.265-.406-.608-.406-.761 0-.154-.225-.542-.499-.862-.275-.321-.5-.715-.5-.875 0-.161-.135-.426-.299-.591-.164-.164-.401-.558-.527-.875a4.051 4.051 0 00-.595-.993 3.461 3.461 0 01-.561-.995 3.276 3.276 0 00-.584-1c-.215-.232-.436-.613-.491-.848-.056-.235-.29-.648-.522-.917-.231-.269-.421-.621-.421-.781 0-.161-.134-.426-.298-.589-.163-.164-.435-.595-.604-.959-.168-.363-.438-.811-.598-.994-.161-.183-.379-.604-.485-.934-.105-.33-.377-.774-.604-.987-.226-.213-.411-.514-.411-.669 0-.155-.169-.493-.375-.751-.396-.495-.827-1.256-1.529-2.701-.234-.481-.491-.875-.572-.875-.081 0-.307-.356-.503-.791a8.987 8.987 0 00-.761-1.342c-.223-.302-.435-.639-.471-.75-.13-.388-13.004-.276-13.439.117-.349.317-.35.363-.35 10.35 0 9.507-.016 10.046-.305 10.307-.388.351-6.153.418-6.495.076-.151-.151-.201-2.668-.203-10.292-.003-10.754.023-10.43-.841-10.678-.709-.203-12.043-.191-12.74.014m12.656.319l.428.162v10.103c0 10.994-.005 10.939.928 11.173 1.188.298 6.216-.021 6.642-.422l.43-.404V57.692c0-9.148.025-10.111.275-10.387.258-.285.678-.305 6.459-.302l6.182.004.621.973c.341.535.702 1.19.803 1.454.1.265.309.621.463.791.281.309.691 1.039 1.373 2.442.201.412.487.888.636 1.058.262.298.463.653 1.354 2.383.23.445.521.918.648 1.052.128.134.342.509.475.833.134.325.368.729.519.899.277.31.693 1.053 1.368 2.441.201.413.462.863.58 1 .266.308.946 1.498 1.429 2.5.199.413.539.962.755 1.221.216.26.393.568.393.686 0 .118.145.4.323.625.316.402.886 1.387 1.579 2.725.191.371.512.9.712 1.177.2.277.414.705.476.951.062.247.173.449.247.449.073 0 .302.356.507.791.206.436.469.904.584 1.042.843 1.001 2.258 4.034 2.016 4.321-.122.144-.352.618-.513 1.053-.16.435-.387.848-.505.917-.117.069-.378.463-.58.876-.689 1.405-1.096 2.133-1.367 2.441-.149.17-.432.646-.628 1.059a19.747 19.747 0 01-.934 1.666 18.038 18.038 0 00-.846 1.49 7.261 7.261 0 01-.67 1.099c-.22.289-.401.624-.401.745 0 .12-.185.46-.41.756a6.263 6.263 0 00-.685 1.224c-.151.377-.333.686-.404.686-.071 0-.329.394-.573.875-.664 1.308-1.231 2.284-1.599 2.752-.181.23-.329.515-.329.633s-.189.44-.421.715c-.232.275-.506.75-.61 1.055a3.911 3.911 0 01-.579 1.025c-.214.259-.39.542-.39.628 0 .087-.189.444-.42.793-.474.715-1.061 1.774-1.554 2.798-.182.379-.417.742-.521.807-.104.064-.377.504-.606.976-.528 1.092-.917 1.786-1.464 2.613-.239.361-.435.729-.435.817 0 .77-12.115 1.114-12.974.369l-.359-.311V89.162l-.542-.33c-.488-.298-.845-.331-3.591-.331l-3.05-.001-.409.441-.408.441v10.039c0 9.135-.025 10.059-.276 10.267-.223.185-1.465.229-6.47.229-6.723 0-6.542.024-6.838-.925-.069-.225-.281-.627-.469-.895-.376-.533-.904-1.466-1.442-2.548-.191-.386-.429-.752-.529-.813-.099-.062-.351-.499-.561-.972-.209-.474-.493-.954-.631-1.069-.139-.115-.302-.412-.363-.66-.062-.248-.285-.639-.498-.868-.212-.229-.441-.604-.507-.834-.067-.229-.29-.641-.495-.916-.205-.275-.43-.688-.499-.917-.07-.229-.297-.604-.506-.833-.208-.229-.433-.604-.5-.834-.066-.229-.29-.604-.498-.833-.208-.229-.465-.689-.571-1.022-.106-.332-.334-.731-.505-.887a1.635 1.635 0 01-.416-.696c-.057-.227-.326-.72-.598-1.096-.272-.375-.495-.758-.495-.85 0-.092-.177-.4-.393-.683-.216-.284-.449-.703-.518-.933-.07-.229-.297-.604-.506-.833-.208-.229-.434-.604-.5-.833-.067-.229-.3-.656-.519-.948-.219-.291-.397-.599-.397-.683 0-.084-.223-.46-.495-.835-.272-.376-.542-.872-.6-1.102-.057-.23-.218-.512-.356-.627-.138-.115-.419-.587-.623-1.049-.205-.462-.497-.943-.649-1.068-.153-.126-.277-.322-.277-.435 0-.114-.2-.499-.444-.855-1.091-1.595-1.12-2.684-.105-3.962.203-.255.42-.626.482-.825.063-.199.283-.586.488-.861.205-.275.43-.688.499-.917.069-.229.297-.623.508-.874.21-.252.434-.627.497-.833.063-.207.211-.489.329-.626.204-.237.676-1.059 1.501-2.611.202-.382.518-.907.701-1.167.183-.26.384-.635.445-.834.062-.198.268-.558.457-.799.31-.395.647-.983 1.431-2.506.142-.275.424-.725.627-1s.428-.687.499-.917c.072-.229.302-.622.513-.874.21-.251.434-.626.499-.833.064-.207.272-.597.463-.867.328-.466.51-.782 1.348-2.342.197-.367.562-.966.81-1.331s.452-.728.452-.807c0-.079.159-.368.355-.643.195-.274.52-.81.723-1.192.824-1.552 1.296-2.374 1.5-2.611.119-.137.271-.437.338-.666.067-.229.26-.568.428-.753.169-.184.422-.611.563-.949.141-.337.388-.69.549-.784.387-.225 12.028-.242 12.616-.018" fill="#ec7c84" /><path d="M313.64 38.854c-.412.152-.973 1.008-.973 1.485 0 .114-.185.377-.41.586-.226.209-.46.593-.522.852-.061.26-.281.661-.488.89-.207.229-.432.604-.501.833-.069.229-.302.629-.519.888-.217.259-.443.671-.503.917-.06.245-.279.605-.486.8-.208.195-.45.617-.539.939-.089.322-.323.746-.519.943a1.945 1.945 0 00-.454.843c-.054.267-.242.617-.418.776-.176.16-.471.595-.656.967-.366.74-1.024 1.87-1.61 2.769-.206.316-.377.687-.381.825-.005.137-.23.509-.501.827-.271.317-.493.7-.493.85 0 .151-.182.47-.404.71-.222.239-.456.601-.521.804-.064.203-.333.667-.596 1.031-.264.363-.482.781-.486.928-.004.146-.229.526-.5.843-.271.318-.493.746-.493.953a.69.69 0 01-.328.551c-.18.096-.46.549-.622 1.005-.162.457-.357.831-.432.831-.075 0-.287.319-.471.708-.184.39-.517.964-.741 1.275-.223.311-.406.708-.406.88 0 .173-.111.357-.246.408-.29.112-.754.983-.754 1.415 0 .166-.141.378-.314.47-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.306.634-.528.899-.221.264-.447.702-.501.972-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368 0 .184-.14.41-.311.501-.171.092-.412.413-.535.715a7.63 7.63 0 01-.621 1.131c-.457.675-.416 1.489.104 2.066.174.193.402.606.507.919.104.312.33.666.501.785.171.12.354.435.407.701.053.265.277.699.497.964.22.265.451.69.513.944.062.255.259.609.438.788.179.179.435.588.569.909.134.32.395.745.579.943.184.197.383.577.441.844.059.266.278.65.488.852.21.203.428.569.485.814.057.245.281.657.497.916.216.26.486.758.6 1.108.114.351.309.676.433.723.123.048.349.413.501.811.153.399.377.763.499.81.122.047.315.394.428.772.113.378.38.824.593.991.213.168.387.444.387.614.001.367.597 1.393.81 1.393.081 0 .191.214.243.476.053.263.282.699.51.97.228.271.466.696.528.944s.239.543.394.655c.154.113.414.562.578.998.165.437.424.861.577.942.152.082.38.496.505.92.125.424.369.846.541.939.173.092.314.304.314.47 0 .166.206.595.459.952.252.358.588.932.747 1.275.158.344.362.625.451.625.09 0 .246.309.348.686.101.376.367.854.589 1.06.223.207.406.48.406.607.001.127.169.489.375.805a27.85 27.85 0 011.697 2.967c.233.482.498.875.589.875.091 0 .213.207.272.459.058.252.322.735.586 1.073.264.339.481.691.481.784 0 .411.436 1.062.857 1.28.47.243 45.196.375 46.087.136.232-.062.488-.39.713-.914.194-.45.419-.818.501-.818.082 0 .236-.264.343-.587.107-.323.363-.792.57-1.042.206-.25.463-.71.569-1.022.107-.312.338-.669.514-.792.175-.123.369-.45.43-.728.061-.277.278-.708.483-.958.204-.25.472-.717.595-1.037.122-.321.318-.663.435-.76.118-.098.337-.486.488-.863.151-.377.376-.724.502-.772.125-.048.32-.397.433-.775.113-.377.337-.778.497-.89.16-.112.42-.539.577-.947.158-.409.379-.82.492-.913.112-.093.371-.556.574-1.029.204-.474.476-.901.605-.951.129-.049.235-.232.235-.406 0-.173.23-.605.511-.959.282-.354.554-.855.606-1.112.051-.258.228-.563.392-.678.164-.115.429-.544.589-.952.159-.409.427-.878.596-1.041.168-.164.306-.376.306-.47 0-.095.214-.486.477-.869.262-.383.531-.868.596-1.077.066-.209.299-.575.519-.812.22-.237.447-.681.504-.987.058-.307.272-.664.479-.8.213-.139.465-.57.585-.997.116-.414.312-.791.436-.839.125-.048.345-.37.49-.717.144-.346.401-.781.569-.965.169-.185.361-.523.428-.753.066-.229.293-.604.503-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.625-.692.679-3 .071-3-.091 0-.312-.341-.491-.758-.179-.416-.513-1.005-.744-1.307-.231-.302-.419-.671-.419-.82 0-.148-.133-.341-.296-.428-.162-.087-.434-.546-.604-1.019-.171-.474-.409-.9-.531-.946-.121-.047-.305-.343-.409-.658a3.748 3.748 0 00-.569-1.027c-.208-.249-.435-.641-.504-.87a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.369-.736-.483-.831-.113-.095-.305-.435-.426-.756a3.832 3.832 0 00-.588-1c-.204-.229-.462-.703-.574-1.053-.112-.35-.305-.676-.429-.723-.124-.048-.314-.361-.424-.697a3.852 3.852 0 00-.577-1.064 3.769 3.769 0 01-.567-1.027c-.104-.315-.294-.613-.422-.662-.128-.049-.325-.398-.438-.776-.113-.378-.342-.783-.509-.899-.167-.117-.389-.468-.493-.781-.105-.312-.327-.719-.493-.903-.166-.185-.426-.632-.577-.995-.152-.362-.369-.736-.483-.831-.113-.094-.305-.435-.426-.755-.121-.321-.352-.734-.514-.917-.163-.183-.448-.69-.634-1.125-.186-.435-.411-.792-.498-.792-.088 0-.252-.281-.364-.625-.112-.343-.375-.831-.585-1.082-.209-.252-.432-.627-.495-.833a2.352 2.352 0 00-.401-.71c-.158-.183-.385-.596-.504-.916-.119-.321-.359-.711-.534-.866-.174-.155-.433-.624-.576-1.042-.142-.417-.327-.759-.411-.759-.085 0-.328-.394-.541-.875-.213-.481-.508-.974-.654-1.095-.146-.121-.314-.439-.373-.708-.059-.269-.24-.582-.402-.697-.162-.114-.385-.484-.496-.82-.373-1.138 1.498-1.052-23.501-1.085-14.566-.019-22.925.03-23.209.134m45.866.396c.205.183.483.596.616.917.134.32.377.733.541.916.164.184.354.516.422.739.068.223.339.703.602 1.067.264.363.48.73.48.814 0 .084.178.391.397.683.219.292.454.718.523.947.069.23.297.623.508.874.21.252.435.627.501.834.065.207.287.601.492.876.205.275.425.669.488.876.062.206.286.581.496.833.21.251.441.645.513.874.071.229.306.649.522.932.216.284.393.592.393.684 0 .092.216.465.479.829.264.364.535.844.603 1.067.067.222.257.555.421.738.164.183.422.632.572.998.151.365.412.815.58 1 .169.184.361.523.428.752.067.229.26.568.428.752.169.185.418.603.555.93.136.327.361.688.499.803.138.115.339.484.447.82.107.336.365.799.573 1.028.208.23.434.605.504.834.069.229.302.648.518.932.216.284.393.588.393.676 0 .087.216.455.479.817.263.362.536.846.606 1.075.07.229.299.622.51.874.21.251.434.626.497.833.063.207.211.488.329.626.204.237.676 1.059 1.501 2.611.202.381.518.906.701 1.166.183.26.389.661.457.89.068.229.295.604.503.833.209.229.435.599.502.822.068.223.339.703.602 1.067.264.363.48.729.48.812 0 .082.187.426.416.763.521.766.527 1.277.024 1.937-.216.284-.449.703-.519.932a2.36 2.36 0 01-.425.75c-.164.184-.421.633-.572.998-.15.365-.411.815-.58 1a2.344 2.344 0 00-.431.752c-.069.23-.298.623-.508.874-.21.252-.434.627-.496.834-.063.207-.283.601-.488.876-.205.275-.432.687-.503.916-.072.23-.303.623-.513.874-.21.252-.436.627-.501.834-.065.207-.296.608-.512.891-.216.284-.392.592-.392.684 0 .092-.216.465-.48.829-.263.364-.535.838-.604 1.055-.068.217-.34.691-.604 1.055-.263.364-.479.737-.479.829 0 .092-.173.4-.385.684a5.626 5.626 0 00-.601 1.051c-.119.295-.322.624-.451.731-.128.107-.38.503-.559.88a26.45 26.45 0 01-.917 1.687 27.43 27.43 0 00-.917 1.677c-.178.372-.477.815-.664.984-.187.169-.34.427-.34.573 0 .146-.169.525-.375.841-.401.617-.961 1.582-1.698 2.925-.251.458-.553.945-.672 1.083a2.076 2.076 0 00-.329.626c-.063.207-.287.582-.497.833-.211.252-.44.645-.51.874-.07.23-.343.713-.606 1.075-.263.362-.479.75-.479.862 0 .112-.177.416-.394.676-.216.259-.45.658-.519.887-.069.23-.262.567-.428.75-.167.184-.452.682-.634 1.107-.182.425-.415.825-.518.889-.103.064-.309.418-.457.788-.484 1.211 1.121 1.133-23.453 1.133-16.332 0-22.191-.05-22.503-.192-.418-.19-.738-.584-1.272-1.558l-.73-1.333c-.25-.459-.552-.946-.67-1.084-.118-.137-.376-.587-.573-1-.493-1.031-1.127-2.126-1.52-2.626-.181-.23-.329-.515-.329-.633s-.177-.427-.394-.686c-.216-.259-.45-.659-.519-.888-.069-.229-.298-.646-.508-.927a6.187 6.187 0 01-.624-1.09c-.133-.319-.354-.692-.492-.829-.137-.138-.415-.585-.617-.994-.72-1.456-1.1-2.131-1.371-2.435-.151-.17-.398-.608-.547-.975-.15-.367-.364-.742-.475-.833-.112-.092-.39-.531-.62-.976-.897-1.743-1.093-2.085-1.362-2.383a2.093 2.093 0 01-.391-.76c-.062-.248-.286-.638-.497-.866a3.231 3.231 0 01-.576-.994c-.105-.318-.307-.675-.45-.793-.142-.118-.441-.593-.663-1.055-.54-1.124-1.164-2.207-1.565-2.717-.181-.23-.329-.515-.329-.633s-.189-.44-.421-.715a3.95 3.95 0 01-.61-1.054 3.895 3.895 0 00-.579-1.025c-.214-.26-.39-.552-.39-.651 0-.099-.176-.412-.392-.696a9.465 9.465 0 01-.761-1.266c-.687-1.397-1.096-2.132-1.358-2.441-.144-.17-.505-.815-.803-1.435l-.541-1.126.334-.426c.185-.234.422-.687.527-1.007.106-.32.365-.768.577-.996.211-.229.435-.619.497-.867s.238-.59.391-.76c.275-.304.65-.968 1.375-2.435.202-.409.48-.856.617-.994.138-.137.36-.515.493-.839.134-.325.342-.703.462-.84.211-.241.755-1.19 1.484-2.584.191-.366.491-.878.666-1.136.415-.612.828-1.35 1.278-2.28.199-.413.459-.863.577-1 .248-.288.918-1.446 1.397-2.417.181-.367.52-.925.754-1.241.234-.315.426-.662.426-.769 0-.107.145-.38.323-.605.311-.396.849-1.323 1.579-2.718.191-.367.491-.879.666-1.137.426-.627.828-1.35 1.331-2.39.229-.472.502-.912.606-.976.104-.065.334-.428.51-.807.347-.747.894-1.735 1.51-2.729.538-.868.901-1.513 1.291-2.295.183-.366.524-.925.758-1.24.234-.316.426-.659.426-.762 0-.104.223-.483.495-.843.273-.36.498-.743.5-.85.007-.292.844-1.232 1.241-1.395.858-.35 44.868-.101 45.27.257m-39.883 7.931c-.161.094-.408.447-.549.784-.141.338-.394.765-.563.949a2.303 2.303 0 00-.428.753c-.067.229-.219.529-.338.666-.204.237-.676 1.059-1.5 2.611a13.15 13.15 0 01-.723 1.192c-.196.275-.355.564-.355.643 0 .079-.204.442-.452.807-.248.365-.613.964-.81 1.331-.838 1.56-1.02 1.876-1.348 2.342-.191.27-.399.66-.463.867-.065.207-.289.582-.499.833-.211.252-.441.645-.513.874-.071.23-.296.642-.499.917a8.991 8.991 0 00-.627 1c-.784 1.523-1.121 2.111-1.431 2.506-.189.241-.395.601-.457.799-.061.199-.262.574-.445.834s-.499.785-.701 1.167c-.825 1.552-1.297 2.374-1.501 2.611a2.064 2.064 0 00-.329.626c-.063.206-.287.581-.497.833-.211.251-.439.645-.508.874-.069.229-.294.642-.499.917-.205.275-.425.662-.488.861-.062.199-.279.57-.482.825-1.015 1.278-.986 2.367.105 3.962.244.356.444.741.444.855 0 .113.124.309.277.435.152.125.444.606.649 1.068.204.462.485.934.623 1.049.138.115.299.397.356.627.058.23.328.726.6 1.102.272.375.495.751.495.835 0 .084.178.392.397.683.219.292.452.719.519.948.066.229.292.604.5.833.209.229.436.604.506.833.069.23.302.649.518.933.216.283.393.591.393.683 0 .092.223.475.495.85.272.376.541.869.598 1.096.057.228.244.541.416.696.171.156.399.555.505.887.106.333.363.793.571 1.022.208.229.432.604.498.833.067.23.292.605.5.834.209.229.436.604.506.833.069.229.294.642.499.917.205.275.428.687.495.916.066.23.295.605.507.834.213.229.436.62.498.868.061.248.224.545.363.66.138.115.422.595.631 1.069.21.473.462.91.561.972.1.061.338.427.529.813.538 1.082 1.066 2.015 1.442 2.548.188.268.4.67.469.895.296.949.115.925 6.838.925 5.005 0 6.247-.044 6.47-.229.251-.208.276-1.132.276-10.267V89.382l.408-.441.409-.441 3.05.001c2.746 0 3.103.033 3.591.331l.542.33v20.216l.359.311c.859.745 12.974.401 12.974-.369 0-.088.196-.456.435-.817.547-.827.936-1.521 1.464-2.613.229-.472.502-.912.606-.976.104-.065.339-.428.521-.807.493-1.024 1.08-2.083 1.554-2.798.231-.349.42-.706.42-.793 0-.086.176-.369.39-.628.215-.259.475-.721.579-1.025.104-.305.378-.78.61-1.055.232-.275.421-.597.421-.715s.148-.403.329-.633c.368-.468.935-1.444 1.599-2.752.244-.481.502-.875.573-.875.071 0 .253-.309.404-.686.151-.377.459-.928.685-1.224.225-.296.41-.636.41-.756 0-.121.181-.456.401-.745.221-.29.523-.784.67-1.099.148-.315.529-.986.846-1.49.318-.504.738-1.254.934-1.666.196-.413.479-.889.628-1.059.271-.308.678-1.036 1.367-2.441.202-.413.463-.807.58-.876.118-.069.345-.482.505-.917.161-.435.391-.909.513-1.053.242-.287-1.173-3.32-2.016-4.321-.115-.138-.378-.606-.584-1.042-.205-.435-.434-.791-.507-.791-.074 0-.185-.202-.247-.449-.062-.246-.276-.674-.476-.951-.2-.277-.521-.806-.712-1.177-.693-1.338-1.263-2.323-1.579-2.725-.178-.225-.323-.507-.323-.625s-.177-.426-.393-.686c-.216-.259-.556-.808-.755-1.221-.483-1.002-1.163-2.192-1.429-2.5-.118-.137-.379-.587-.58-1-.675-1.388-1.091-2.131-1.368-2.441-.151-.17-.385-.574-.519-.899-.133-.324-.347-.699-.475-.833-.127-.134-.418-.607-.648-1.052-.891-1.73-1.092-2.085-1.354-2.383-.149-.17-.435-.646-.636-1.058-.682-1.403-1.092-2.133-1.373-2.442a2.972 2.972 0 01-.463-.791c-.101-.264-.462-.919-.803-1.454l-.621-.973-6.182-.004c-5.781-.003-6.201.017-6.459.302-.25.276-.275 1.239-.275 10.387v10.083l-.43.404c-.426.401-5.454.72-6.642.422-.933-.234-.928-.179-.928-11.173V47.325l-.428-.162c-.588-.224-12.229-.207-12.616.018m12.503 10.493l.043 10.258.48.576.48.575 2.894.054c3.28.061 4.134-.024 4.678-.465l.382-.309.084-10.473.083-10.473 6.129-.044c5.729-.041 6.136-.025 6.227.25.251.762.582 1.349.81 1.437.138.053.251.237.251.41s.183.569.406.88c.224.312.557.885.741 1.275.184.39.41.708.504.708.093 0 .252.309.354.686.101.376.355.845.563 1.041.209.196.429.557.489.802s.297.668.526.941c.229.272.417.61.417.75s.179.467.397.727c.219.26.517.759.664 1.109.146.349.405.761.576.915.172.154.412.603.534.998.122.395.359.791.525.881.167.089.304.298.304.465 0 .166.184.558.409.869.225.311.529.828.675 1.147.146.32.401.732.568.917.167.185.352.54.411.789s.279.624.488.833c.21.209.483.68.607 1.047.124.367.364.765.533.884.17.12.309.353.309.517 0 .165.186.555.414.866.227.311.562.885.744 1.275.181.389.402.708.489.708.088 0 .25.281.36.625.11.344.368.813.575 1.042.206.229.425.629.486.889.062.26.296.657.522.883.225.225.41.485.41.577 0 .274.528 1.224.755 1.358.73.429.572 2.61-.254 3.496-.191.205-.391.562-.444.793-.054.231-.189.495-.302.587-.25.204-.755 1.161-.755 1.431 0 .109-.183.366-.406.573-.222.207-.483.665-.579 1.019-.095.354-.316.732-.49.84-.174.108-.368.403-.432.656-.063.252-.302.68-.53.951-.228.271-.459.714-.513.984-.054.27-.202.531-.33.581-.293.112-.72.924-.72 1.368a.636.636 0 01-.314.503c-.172.092-.44.489-.596.881-.156.392-.419.863-.585 1.046a2.366 2.366 0 00-.426.75c-.069.23-.302.629-.519.888-.217.259-.443.672-.503.917s-.282.608-.493.806c-.211.199-.434.574-.496.833-.061.26-.28.661-.486.89-.207.229-.467.703-.579 1.053-.112.35-.305.676-.429.723-.124.048-.315.361-.424.697-.11.335-.37.77-.578.965-.208.195-.451.617-.54.939-.089.322-.318.742-.51.933a2.013 2.013 0 00-.456.81c-.06.255-.279.651-.486.88-.207.229-.431.604-.497.833a2.27 2.27 0 01-.428.752c-.168.185-.425.597-.571.917-.146.32-.45.836-.675 1.147-.225.312-.409.697-.409.856 0 .159-.169.334-.375.39-.492.131-11.519.135-11.862.004-.236-.091-.263-1.154-.263-10.297 0-12.616.485-11.436-4.707-11.436h-2.999l-.647.647-.647.647v20.334l-.375.101c-.493.132-10.934.135-11.592.003-.41-.082-.574-.254-.848-.891-.186-.434-.451-.882-.587-.995-.136-.113-.335-.481-.442-.817-.107-.337-.367-.778-.578-.98-.21-.202-.429-.58-.486-.839-.056-.259-.285-.682-.507-.941a3.621 3.621 0 01-.586-1.022c-.1-.303-.276-.587-.392-.631-.115-.044-.313-.397-.441-.784s-.367-.788-.533-.891c-.165-.103-.42-.55-.567-.993-.147-.442-.369-.844-.492-.891-.124-.047-.313-.361-.42-.696-.108-.336-.333-.762-.5-.946-.168-.185-.418-.607-.557-.938-.138-.332-.349-.64-.467-.686-.119-.045-.357-.473-.528-.95-.172-.477-.411-.906-.533-.952-.121-.047-.308-.359-.415-.695-.107-.336-.365-.798-.572-1.027-.208-.229-.434-.604-.503-.833-.069-.229-.302-.629-.519-.888-.217-.259-.441-.672-.498-.917-.057-.245-.234-.558-.392-.695-.158-.138-.417-.585-.575-.993-.158-.409-.422-.838-.586-.953-.164-.115-.342-.426-.395-.692-.053-.265-.278-.699-.499-.964-.222-.265-.459-.669-.528-.898a2.333 2.333 0 00-.432-.753c-.168-.184-.43-.632-.581-.994-.152-.362-.378-.736-.504-.831-.125-.095-.344-.504-.485-.908-.141-.405-.397-.834-.568-.955-.64-.448-.569-2.082.117-2.692.176-.156.417-.547.537-.867.119-.321.32-.706.447-.855.253-.299.841-1.348 1.359-2.427.184-.384.485-.847.668-1.03.183-.184.407-.603.499-.933.091-.329.31-.728.487-.886.178-.157.42-.549.539-.869.119-.321.346-.734.504-.917.158-.183.339-.502.401-.709.063-.207.286-.582.497-.834.21-.251.438-.644.507-.874.069-.229.297-.604.507-.833.211-.229.459-.7.553-1.047.093-.347.315-.759.492-.917.178-.157.42-.549.538-.869.119-.321.305-.659.414-.75.109-.092.356-.523.548-.959.192-.435.423-.791.513-.791.09 0 .253-.282.363-.625.11-.344.369-.813.576-1.042.207-.229.464-.691.571-1.027.107-.336.291-.647.408-.692.117-.045.351-.445.52-.89.168-.444.444-.906.612-1.025.168-.12.306-.328.306-.463 0-.134.262-.626.583-1.092.321-.467.583-.986.583-1.154 0-.167.149-.409.331-.537.182-.127.444-.549.581-.938.137-.389.389-.833.56-.986.171-.154.408-.595.527-.98.279-.905-.174-.85 6.751-.823l6 .024.043 10.257" fill="#f4acac" /></g></svg>

                                    <img className="akfa" src={akfa} />
                                    <img className="fabfix" src={fabfix} />
                                    <img className="stublina" src={stublina} />
                                    <img className="master" src={master} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="control-prev control-prev12" onClick={handleClickL12}>

                    <svg className="prev" xmlns={prev} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z">
                        </path>
                    </svg>
                </a>
                <a class="control-next control-next12" onClick={handleClickR12}>

                    <svg className="next" xmlns={next} width="10vw" viewBox="0 0 443.52 443.52">
                        <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z">
                        </path>
                    </svg>
                </a>
            </div>

            <div className="location_wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.809587013854!2d69.21868641517736!3d41.22591981395283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61a39f1c4825%3A0x330b5e258040332d!2sMediapark%20Sergeli!5e0!3m2!1sru!2s!4v1627510593018!5m2!1sru!2s"
                    width="100%"
                    height="500px"
                    allowFullScreen
                    title="location"
                />

            </div>

        </>

    );
};