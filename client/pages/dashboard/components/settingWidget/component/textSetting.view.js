import React from 'react'
import cssModules from 'react-css-modules'
import style from './chooseWidget.style.scss'
import { Editor } from 'react-draft-wysiwyg'
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const TextSettingView = cssModules(() => {
    return (
        <div styleName="container--setting-widget">
            <h5 styleName="title--setting-widget">Text Content:</h5>
            <div styleName="text-widget-setting">
                <Editor/>
            </div>
        </div>
    )
}, style)