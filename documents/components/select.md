# Select
Here are the some examples of usage of the select component:

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

## Value
If you want to dynamically change the value name, you can give value prop as a string. By default, it is set to "value"

```
const items = [
    {
        name: "Plane",
        selected: true,
        id: 3,
        variant: "secondary",
    }
]
<Select items={items} value="id"/>
```

## Name
Similarly, if you want to dynamically change the name, you can give this prop as a string. By default, it is set to "name"

```
const items = [
    {
        myNewName: "Plane",
        selected: true,
        id: 3,
        variant: "secondary",
    }
]
<Select items={items} name="myNewName" value="id"/>
``` 
 
