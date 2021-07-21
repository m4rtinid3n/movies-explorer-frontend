import React from 'react';

function Portfolio() {

    return (

        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <p className="portfolio__text">Статичный сайт</p>
                    <a href="https://m4rtinid3n.github.io/russian-travel/" target="_blank" rel="noreferrer" className="page__link portfolio__arrow"> ↗</a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__text">Адаптивный сайт </p>
                    <a href="https://m4rtinid3n.github.io/russian-travel/" target="_blank" rel="noreferrer" className="page__link portfolio__arrow"> ↗</a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__text">Одностраничное приложение </p>
                    <a href="http://m4rtinid3n.mesto.nomoredomains.icu/" target="_blank" rel="noreferrer" className="page__link portfolio__arrow" > ↗</a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;