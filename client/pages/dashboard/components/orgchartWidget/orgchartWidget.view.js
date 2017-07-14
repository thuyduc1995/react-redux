import React from 'react'
import cssModules from 'react-css-modules'
import style from './orgchartWidget.style.scss'
import { TitleWidgetView } from '../titleWidget.view'

export const OrgchartWidgetView = cssModules(({ data, settingClick, dashboardMode, onRemove, layoutType, contacts, fullscreen, onFullscreenChange }) => {
    let layout = ''
    let fullscreenstyle = {}

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
    }
    if (fullscreen) {
        fullscreenstyle = {
            position: 'fixed',
            transform: 'scale(1.7)',
            margin: 'auto',
            zIndex: '10',
            top: '400px'
        }
    }

    let findNode = (rootId = null, first = false, info) => {
        let datas = []

        info.forEach((contact) => {
            if (first && (contact.id === rootId || (!contact.hasOwnProperty('superiorId') && rootId === null))) {
                datas.push(contact.id)
            }
        })
        info.forEach((contact) => {
            if (contact.superiorId === rootId) {
                datas.push(contact.id)
            }
        })

        return datas
    }

    const Orgchart = cssModules(({ rootId, first = false }) => {
        let personInfo = contacts.filter((contact) => {
            return contact.id === rootId
        })[0]

        return (
            <li>
                <a styleName="card">
                    <div styleName="card__container--left">
                        <img src="./images/avatar.png" styleName="card__image"/>
                    </div>
                    <div styleName="card__container--middle">
                        <p styleName="card__name">{ personInfo.firstName } { personInfo.lastName }</p>
                        <p styleName="card__dept">{ personInfo.department }</p>
                        <p styleName="card__email--head">{ personInfo.employeeId }</p>
                        <p styleName="card__email--tail">@kms-technology.com</p>
                    </div>
                </a>
                {findNode(rootId, first, contacts).length > 0 &&
                    <ul>
                        {
                            findNode(rootId, false, contacts).map(id => {
                                return <Orgchart rootId={id}/>
                            })
                        }
                    </ul>
                }
            </li>
        )
    }, style)

    return (
        <div className={ layout } style={ fullscreenstyle }>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView
                    widgetTitle={ data.title }
                    settingClick={ settingClick }
                    dashboardMode={ dashboardMode }
                    onRemove={ onRemove }
                    onFullscreenChange={ onFullscreenChange }
                />
                <div className="panel-body" styleName="panel-body">
                    <div styleName="body-content">
                        <ul styleName='tree'>
                            <Orgchart rootId={ data.configs.rootId } first={ true } />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}, style)

