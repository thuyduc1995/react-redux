import React from 'react'
import cssModules from 'react-css-modules'
import style from './style.scss'

export const Orgchart = cssModules(({rootId}) => {
    return (
        <a styleName="card">
            <div styleName="card__container--left">
                <img src="./images/avatar.png" styleName="card__image"/>
            </div>
            <div styleName = "card__container--middle">
                <h1 styleName= "card__name">Hung Nguyen</h1>
                <p styleName="card__dept">Duc Ho</p>
                <p styleName="card__email--head">Vu Lam</p>
                <p styleName="card__email--tail">@kms-technology.com</p>
            </div>
        </a>
    )
}, style)