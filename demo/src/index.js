import React, {Component} from 'react'
import {injectGlobal, css} from 'emotion'
import {render} from 'react-dom'
import FieldSettings from '../../src'
import times from 'lodash/times'
import sample from 'lodash/sample'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${JSON.stringify(args, null, 2)}
    `)
}


class Demo extends Component {
    render() {
        return <div>
            <h1>ViewFieldSettings Demo</h1>
            Used for ordering, showing, hiding fields in a view.
            <h2>
                Default
            </h2>
            <Viewport>
                <div
                    className={css`
                        width: 250px;
                        height: 400px;
                    `}
                >
                    <FieldSettings
                        fields={[{
                            id: '1',
                            name: 'Name',
                            visibility: true
                        }, {
                            id: '2',
                            name: 'Height',
                            visibility: true
                        }, {
                            id: '3',
                            name: 'Mass',
                            visibility: false
                        }]}
                        onSort={log('onSort')}
                        onShowOrHide={log('onShowOrHide')}
                        onShowOrHideAll={log('onShowOrHideAll')}
                    />
                </div>
            </Viewport>
            <h2>
                Random big list
            </h2>
            <Viewport>
                <div
                    className={css`
                        width: 250px;
                        height: 400px;
                    `}
                >
                    <FieldSettings
                        fields={times(30).map(i => ({
                            id: `${i + 1}`,
                            name: `Field ${i + 1}`,
                            visibility: sample([true, false])
                        }))}
                        onSort={log('onSort')}
                        onShowOrHide={log('onShowOrHide')}
                        onShowOrHideAll={log('onShowOrHideAll')}
                    />
                </div>
            </Viewport>
            <h2>
                Empty list
            </h2>
            <Viewport>
                <div
                    className={css`
                        width: 250px;
                        height: 400px;
                    `}
                >
                    <FieldSettings
                        fields={[]}
                        onSort={log('onSort')}
                        onShowOrHide={log('onShowOrHide')}
                        onShowOrHideAll={log('onShowOrHideAll')}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
