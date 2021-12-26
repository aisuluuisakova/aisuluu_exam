import React from 'react'
import './Main.css'
import Carousel1 from '../../components/Carousel/Carousel1'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
    return (
        <div className="main-block">
            <h1 className="main-h1">Isay</h1>
            <h2 className="main-h2"> New Day, New Dress!</h2>
            <p>
                Isay - это производители женской молодежной одежды. <br/>Отшиваем вещи на заказ, также продаем оптом уже готовые вещи в широком ассортименте!<br/> Мы находимся в г.Бишкек!
            </p>
            <Carousel1/>
        </div>
    )
}
