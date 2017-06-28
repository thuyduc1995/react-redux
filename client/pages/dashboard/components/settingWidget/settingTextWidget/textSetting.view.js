import React from 'react'
import cssModules from 'react-css-modules'
import style from '../settingWidget.style.scss'
import { Editor } from 'react-draft-wysiwyg'
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState, ContentState } from 'draft-js'


export const TextSettingView = cssModules(({data, onEditorChange}) => {
    const text = 'text' in data.configs ? data.configs.text : ''
    const contentState = ContentState.createFromText(text)
    let editorState = EditorState.createEmpty()

    if (contentState.hasText()) {
        editorState = EditorState.createWithContent(contentState)
    }

    return (
        <div styleName="container--setting-widget">
            <h5 styleName="title--setting-widget">Text Content:</h5>
            <div styleName="text-widget-setting">
                <Editor
                    defaultEditorState = {editorState}
                    onContentStateChange = {onEditorChange}
                />
            </div>
        </div>
    )
}, style)