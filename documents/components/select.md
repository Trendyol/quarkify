# Select
Here are the some examples of usage of the select component:

```
const items = [
    {
        name: "Plane",
        value: 3,
        variant: "secondary",
    }
]
<Select items={items}/>
``` 

<iframe src="https://codesandbox.io/embed/gifted-sun-5f0gr?fontsize=14" title="gifted-sun-5f0gr" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Items
Select component has one required property which is items. Items takes an array of JSON objects which keys of each object must be:
- name: string
- value: any
- valueKey: any
- variant: "primary" | "secondary" | string
- disabled: boolean

Boolean fields are not required and it is possible to give any other HTML properties by passing as a prop.

## Value
If you want to dynamically change the value name, you can give valueKey prop as a string. By default, it is set to "value".

```
const items = [
    {
        name: "Plane",
        id: 3,
        variant: "secondary",
    }
]
<Select items={items} valueKey="id"/>
```

## Name
Similarly, if you want to dynamically change the name, you can give this prop as a string. By default, it is set to "name".

```
const items = [
    {
        myNewName: "Plane",
        id: 3,
        variant: "secondary",
    }
]
<Select items={items} name="myNewName" valueKey="id"/>
``` 

## Default Selected Value
To display select component with a default selected value, you must give it a value prop controlled by external structure ( e.g. states).

The example below renders the Select component and gives it a initial selected default value "Bike" by using states.

const items = [
  {
    id: 1,
    name: "Car",
    variant: "primary",
  },
  {
    id: 2,
    name: "Bike",
    variant: "primary",
  }
];

// Default state value 2 sets the select component to 
// have a default vlaue from the provided items array 
// with the id 2.
 const [value, setValue] = React.useState("2"); 

  const handleSelect = (e: any) => {
    setValue(e.target.value);
  };


  return (
      ```html
            <Select
                items={items}
                valueKey="id"
                value={value}
                onChange={handleSelect}
            />
      ```
  );

## Error
Select can be displayed in an error state

```html
    <Select items={items} error/>
```
