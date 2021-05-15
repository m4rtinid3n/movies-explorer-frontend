import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import myPhoto from '../../images/myPhoto.JPG';
import ScrollableAnchor from 'react-scrollable-anchor';

function AboutMe() {

    return (
        <ScrollableAnchor id={'section3'}>
            <section className="aboutMe page__section" >
                <h2 className="page__title">Студент</h2>
                <div className="aboutMe__resume">
                    <h3 className="aboutMe__name">Илья</h3>
                    <h4 className="aboutMe__job">Фронтенд-разработчик, 30 лет</h4>
                    <p className="page__text aboutMe__text">Я родился и живу в Санкт-Петербурге, закончил факультет экономики СПБГЭУ. У меня есть жена и собака. Я увлекаюсь спортом, занимаюсь теннисом и бегом. Недавно начал кодить. Хочу стать уверенным фронтендером и работать в сильной команде.
                    </p>
                    <div className="aboutMe__links">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
                            className="page__link">Facebook</a>
                        <a href="https://github.com/m4rtinid3n" target="_blank" rel="noreferrer"
                            className="page__link"> GitHub</a>

                    </div>
                    <img className="aboutMe__photo" src={myPhoto} alt="Фото Илья"></img>
                </div>
                <Portfolio />
            </section>
        </ScrollableAnchor>
    );
}

export default AboutMe;
