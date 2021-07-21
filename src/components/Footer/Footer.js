import React from 'react';

function Footer() {

    return (
        <footer className="footer page__section">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__down">
                <p className="footer__text"> &#169; 2021 </p>
                <div className="footer__list">
                    <a href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer"
                        className="page__link footer__item">Яндекс.Практикум</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
                        className="page__link footer__item">Facebook</a>
                    <a href="https://github.com/m4rtinid3n" target="_blank" rel="noreferrer"
                        className="page__link footer__item"> GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
