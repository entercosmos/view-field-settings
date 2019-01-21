import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

const Item = SortableElement(({field, onRender}) => onRender({field}))
const FieldContainer = SortableContainer(({fields, onRenderItem, disabled}) => (
    <div>
        {fields.map((field, index) => (
            <Item
                key={index}
                index={index}
                field={field}
                disabled={disabled}
                onRender={onRenderItem}
            />
        ))}
    </div>
))

export default FieldContainer