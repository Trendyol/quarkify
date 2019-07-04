# Select
Select components are one of the most used elements in the web world. Here are the some examples of usage of the select component:

```
const items = [
    {
        name: "Plane",
        selected: true,
        value: 3,
        variant: "secondary",
    }
]
<Select items={items}/>
``` 

## Items
Select component has one required property which is items. Items takes an array of JSON objects which keys of each object must be:
- name: string
- selected: boolean
- value: any
- variant: "primary" | "secondary" | string
- disabled: boolean

Boolean fields are not required and it is possible to give any other HTML properties by passing as a prop.

