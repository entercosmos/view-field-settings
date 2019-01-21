import React from 'react'
import {css} from 'emotion'
import Switch from './Switch'

export default class Field extends React.Component {

    render() {

        return (
            <div onClick={this.handleShowOrHide}>
                <div
                    className={css`
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                        padding: 16px;
                        background-color: #fff;
                        user-select: none;
                        transition: 200ms ease background-color;
                        &:hover {
                            background-color: #f9f9f9;
                        }
                        &:active {
                            background-color: #eee;
                        }
                    `}
                >
                    <div
                        className={css`
                            display: flex;
                            margin-right: 16px;
                        `}
                    >
                        <Switch
                            width={30}
                            value={this.props.visibility}
                            onChange={this.handleShowOrHide}
                        />
                    </div>
                    <div
                        className={css`
                            display: flex;
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                    >
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }

    handleShowOrHide = (e) => {

        e.stopPropagation()

        this.props.onShowOrHide({
            id: this.props.id,
            visibility: !this.props.visibility
        })
    }
}