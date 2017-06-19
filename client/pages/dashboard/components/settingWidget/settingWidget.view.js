import React from 'react'
import { ButtonToolbar, Button, Panel, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './settingWidget.style.scss'
import {ToDoSettingView} from './component/todoSetting.view'
import {DatatableSettingView} from './component/datatableSetting.view'
import {TextSettingView} from './component/textSetting.view'
import {OrgChartSettingView} from './component/orgchartSetting.view'


export const SettingWidgetView = cssModules(({ changeDropdown, typeWidget }) => {
    switch (typeWidget) {
        case 'text':
            return (
                <div>
                    <div className="panel panel-default" styleName="panel">
                        <div className="panel-heading" styleName="panel-heading">
                            Widget Settings
                            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                        </div>
                        <div className="panel-body" styleName="panel-body">
                            <form>
                                <div styleName="container--title">
                                    <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="New Widget"

                                    />
                                </div>
                                <div styleName="container--type">
                                    <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                                    <FormControl componentClass="select" onChange= {changeDropdown}>
                                        <option value="default"> </option>
                                        <option value="text">Text</option>
                                        <option value="datatable">Datatable</option>
                                        <option value="orgchart">OrgChart</option>
                                        <option value="todos">ToDos</option>
                                    </FormControl>
                                </div>
                                <div styleName="container--width">
                                    <ControlLabel styleName="form--label">Min Width:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="400"
                                    />
                                </div>
                                <div styleName="container--height">
                                    <ControlLabel styleName="form--label">Min Height:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="200"
                                    />
                                </div>
                                <Button bsStyle="primary" styleName="form--button">OK</Button>
                                <Button styleName="form--button">Cancel</Button>
                            </form>
                        </div>
                        <TextSettingView/>
                    </div>
                </div>
            )
        case 'todos':
            return (
                <div>
                    <div className="panel panel-default" styleName="panel">
                        <div className="panel-heading" styleName="panel-heading">
                            Widget Settings
                            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                        </div>
                        <div className="panel-body" styleName="panel-body">
                            <form>
                                <div styleName="container--title">
                                    <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="New Widget"

                                    />
                                </div>
                                <div styleName="container--type">
                                    <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                                    <FormControl componentClass="select" onChange= {changeDropdown}>
                                        <option value="default"> </option>
                                        <option value="text">Text</option>
                                        <option value="datatable">Datatable</option>
                                        <option value="orgchart">OrgChart</option>
                                        <option value="todos">ToDos</option>
                                    </FormControl>
                                </div>
                                <div styleName="container--width">
                                    <ControlLabel styleName="form--label">Min Width:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="400"
                                    />
                                </div>
                                <div styleName="container--height">
                                    <ControlLabel styleName="form--label">Min Height:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="200"
                                    />
                                </div>
                                <Button bsStyle="primary" styleName="form--button">OK</Button>
                                <Button styleName="form--button">Cancel</Button>
                            </form>
                        </div>
                        <ToDoSettingView/>
                    </div>
                </div>
            )
        case 'orgchart':
            return (
                <div>
                    <div className="panel panel-default" styleName="panel">
                        <div className="panel-heading" styleName="panel-heading">
                            Widget Settings
                            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                        </div>
                        <div className="panel-body" styleName="panel-body">
                            <form>
                                <div styleName="container--title">
                                    <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="New Widget"

                                    />
                                </div>
                                <div styleName="container--type">
                                    <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                                    <FormControl componentClass="select" onChange= {changeDropdown}>
                                        <option value="default"> </option>
                                        <option value="text">Text</option>
                                        <option value="datatable">Datatable</option>
                                        <option value="orgchart">OrgChart</option>
                                        <option value="todos">ToDos</option>
                                    </FormControl>
                                </div>
                                <div styleName="container--width">
                                    <ControlLabel styleName="form--label">Min Width:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="400"
                                    />
                                </div>
                                <div styleName="container--height">
                                    <ControlLabel styleName="form--label">Min Height:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="200"
                                    />
                                </div>
                                <Button bsStyle="primary" styleName="form--button">OK</Button>
                                <Button styleName="form--button">Cancel</Button>
                            </form>
                        </div>
                        <OrgChartSettingView/>
                    </div>
                </div>
            )
        case 'datatable':
            return (
                <div>
                    <div className="panel panel-default" styleName="panel">
                        <div className="panel-heading" styleName="panel-heading">
                            Widget Settings
                            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                        </div>
                        <div className="panel-body" styleName="panel-body">
                            <form>
                                <div styleName="container--title">
                                    <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="New Widget"

                                    />
                                </div>
                                <div styleName="container--type">
                                    <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                                    <FormControl componentClass="select" onChange= {changeDropdown}>
                                        <option value="default"> </option>
                                        <option value="text">Text</option>
                                        <option value="datatable">Datatable</option>
                                        <option value="orgchart">OrgChart</option>
                                        <option value="todos">ToDos</option>
                                    </FormControl>
                                </div>
                                <div styleName="container--width">
                                    <ControlLabel styleName="form--label">Min Width:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="400"
                                    />
                                </div>
                                <div styleName="container--height">
                                    <ControlLabel styleName="form--label">Min Height:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="200"
                                    />
                                </div>
                                <Button bsStyle="primary" styleName="form--button">OK</Button>
                                <Button styleName="form--button">Cancel</Button>
                            </form>
                        </div>
                        <DatatableSettingView/>
                    </div>
                </div>
            )
        default:
            return (
                <div>
                    <div className="panel panel-default" styleName="panel">
                        <div className="panel-heading" styleName="panel-heading">
                            Widget Settings
                            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                        </div>
                        <div className="panel-body" styleName="panel-body">
                            <form>
                                <div styleName="container--title">
                                    <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="New Widget"

                                    />
                                </div>
                                <div styleName="container--type">
                                    <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                                    <FormControl componentClass="select" onChange= {changeDropdown}>
                                        <option value="default"> </option>
                                        <option value="text">Text</option>
                                        <option value="datatable">Datatable</option>
                                        <option value="orgchart">OrgChart</option>
                                        <option value="todos">ToDos</option>
                                    </FormControl>
                                </div>
                                <div styleName="container--width">
                                    <ControlLabel styleName="form--label">Min Width:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="400"
                                    />
                                </div>
                                <div styleName="container--height">
                                    <ControlLabel styleName="form--label">Min Height:</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="200"
                                    />
                                </div>
                                <Button bsStyle="primary" styleName="form--button">OK</Button>
                                <Button styleName="form--button">Cancel</Button>
                            </form>
                        </div>
                    </div>
                </div>
            )
    }

// return (
//             <div>
//                 <div className="panel panel-default" styleName="panel">
//                     <div className="panel-heading" styleName="panel-heading">
//                         Widget Settings
//                         <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
//                     </div>
//                     <div className="panel-body" styleName="panel-body">
//                         <form>
//                             <div styleName="container--title">
//                                 <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
//                                 <FormControl
//                                     type="text"
//                                     placeholder="New Widget"
//
//                                 />
//                             </div>
//                             <div styleName="container--type">
//                                 <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
//                                 <FormControl componentClass="select" onChange= {changeDropdown}>
//                                     <option value="default"> </option>
//                                     <option value="text">Text</option>
//                                     <option value="datatable">Datatable</option>
//                                     <option value="orgchart">OrgChart</option>
//                                     <option value="todos">ToDos</option>
//                                 </FormControl>
//                             </div>
//                             <div styleName="container--width">
//                                 <ControlLabel styleName="form--label">Min Width:</ControlLabel>
//                                 <FormControl
//                                     type="text"
//                                     placeholder="400"
//                                 />
//                             </div>
//                             <div styleName="container--height">
//                                 <ControlLabel styleName="form--label">Min Height:</ControlLabel>
//                                 <FormControl
//                                     type="text"
//                                     placeholder="200"
//                                 />
//                             </div>
//                             <Button bsStyle="primary" styleName="form--button">OK</Button>
//                             <Button styleName="form--button">Cancel</Button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
}, style)