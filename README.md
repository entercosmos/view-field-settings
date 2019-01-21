# ![FieldSettings](https://user-images.githubusercontent.com/44801418/48110644-d4941a80-e27f-11e8-8b34-25f86db21daa.png) FieldSettings

Used for ordering, showing, hiding fields in a view.	

[![npm package][npm-badge]][npm]

## Example

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

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/@cmds/field-settings
