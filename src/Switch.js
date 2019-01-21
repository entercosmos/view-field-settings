import React from 'react'
import {css} from 'emotion'

export default class Switch extends React.Component {

    render() {

        const width = this.props.width || 46
        const height = width * 0.56
        const padding = 2
        const size = height - (padding * 2)

        const active = this.props.value

        return (
            <div
                className={css`
                    background-color: ${active ? '#3acc85' : '#000'};
                    display: flex;
                    flex: none;
                    border-radius: 99999px;
                    justify-content: ${active ? 'flex-end' : 'flex-start'};
                    transition: 300ms ease justify-content;
                    cursor: pointer;
                `}
                style={{
                    height,
                    width,
                    padding
                }}
                onClick={(e) => {
                    this.props.onChange({
                        e,
                        value: !active
                    })
                }}
            >
                <div
                    className={css`
                        background-color: #fff;
                        border-radius: 50%;
                        flex: none;
                    `}
                    style={{
                        width: size
                    }}
                />
            </div>
        )
    }
}
