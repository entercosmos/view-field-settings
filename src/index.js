import React from 'react'
import FieldContainer from './FieldContainer'
import Field from './Field'
import {css} from 'emotion'

export default class FieldSettings extends React.Component {

    render() {

        return (
            <div
                className={css`
                    width: 100%;
                    height: 100%;
                    position: relative;
                    background: #fff;
                `}
            >
                <div
                    className={css`
                        overflow-x: hidden;
                        overflow-y: auto;
                        height: calc(100% - 60px);
                    `}
                >
                    {this.props.fields && this.props.fields.length ? (
                        <FieldContainer
                            fields={this.props.fields}
                            onSortEnd={this.handleSort}
                            disabled={this.props.fields.length === 1}
                            pressDelay={200}
                            onRenderItem={this.renderItem}
                            lockAxis={'y'}
                            helperClass={css`
                                z-index: 2000;
                                transform: scale(1.1);
                            `}
                        />
                    ) : (
                        <div
                            className={css`
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding: 16px;
                                text-align: center;
                                color: #888;
                            `}
                        >
                            No fields available to be hidden
                        </div>
                    )}
                </div>
                <div
                    className={css`
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 60px;
                            display: flex;
                        `}
                >
                    <div
                        className={css`
                                padding: 10px 15px;
                                width: 100%;
                            `}
                    >
                        <button
                            type="button"
                            className={css`
                            font-size: 16px;
                                    height: 40px;
                                    width: 100%;
                                    border: none;
                                    background: none;
                                    border-radius: 3px;
                                    cursor: pointer;
                                    &:hover {
                                        background-color: #eee;
                                    }
                                `}
                            onClick={() => this.handleShowOrHideAll({visibility: false})}
                        >
                            Hide all
                        </button>
                    </div>
                    <div
                        className={css`
                                padding: 10px 15px;
                                width: 100%;
                            `}
                    >
                        <button
                            type="button"
                            className={css`
                            font-size: 16px;
                                    height: 40px;
                                    width: 100%;
                                    border: none;
                                    background: none;
                                    border-radius: 3px;
                                    cursor: pointer;
                                    &:hover {
                                        background-color: #eee;
                                    }
                                `}
                            onClick={() => this.handleShowOrHideAll({visibility: true})}
                        >
                            Show all
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderItem = ({field}) => {

        return (
            <Field
                id={field.id}
                visibility={field.visibility}
                name={field.name}
                onShowOrHide={this.props.onShowOrHide}
            />
        )
    }

    handleShowOrHideAll = ({visibility}) => {

        this.props.onShowOrHideAll({
            visibility
        })
    }

    handleSort = ({oldIndex, newIndex}) => {

        this.props.onSort({oldIndex, newIndex})
    }
}