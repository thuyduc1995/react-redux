import React from 'react'
import cssModules from 'react-css-modules'
import style from './orgchartWidget.style.scss'
import {TitleWidgetView} from '../titleWidget.view'
import {Orgchart} from './orgchartComponent/orgchart.view'

export const OrgchartWidgetView = cssModules(({data, settingClick, dashboardMode, onRemove, layoutType}) => {
    let layout = ''

    switch (layoutType) {
        case '1_COLUMN':
            layout = 'col-md-8'
            break
        case '2_COLUMN':
            layout = 'col-md-6'
            break
        case '3_COLUMN':
            layout = 'col-md-4'
            break
        default:
            break
    }

    return (
        <div className={layout}>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView widgetTitle={data.title}
                                 settingClick={settingClick}
                                 dashboardMode={dashboardMode}
                                 onRemove={onRemove}/>
                <div className="panel-body" styleName="panel-body">
                    <div styleName="body-content" >
                        <ul styleName='tree'>
                            <li>
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
                                <ul style={{display: 'block'}}>
                                    <li>
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
                                    </li>
                                    <li>
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
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}, style)