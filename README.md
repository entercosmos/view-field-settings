# ViewFieldSettings

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/view-field-settings.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for ordering, showing, hiding fields in a view.	

## Getting started

````
npm install @cmds/view-field-settings --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| fields | [Field!]! | ✓ | Unique id for the instance of this foreign record selector |
| onSort | Function | ✓ | Triggers when the user sorts the fields: `({oldIndex: number, newIndex: number})` |
| onShowOrHide | Function | ✓ | Triggers when the user hide or shows a field: `({id: string, visibility: boolean})` |
| onShowOrHideAll | Function | ✓ | Triggers when the user hide or shows all fields: `({visibility: boolean})` |

#### Field

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | ID | ✓ | Field ID |
| name | String | ✓ | Name of the field |
| visibility | Boolean | ✓ | Whether or not it is visible |

### Example

````jsx harmony
<FieldSettings 
    fields={[{
        id: '1',
        name: 'Field 1',
        visibility: true
    }, {
        id: '2',
        name: 'Field 2',
        visibility: true
    }, {
        id: '3',
        name: 'Field 3',
        visibility: false
    }]}
    onSort={({oldIndex, newIndex}) => {
        // do something
    }}
    onShowOrHide={({id, visibility}) => {
        // do something
    }}
    onShowOrHideAll={({visibility}) => {
        // do something
    }}
/>
````

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/view-field-settings.svg
[npm]: https://www.npmjs.org/package/@cmds/view-field-settings