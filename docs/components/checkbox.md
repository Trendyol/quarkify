# Checkbox

## Variant
You can change the variant prop to give some predefined styles to the checkbox component. For now, there are only 2 type of variants which are:
- primary
- secondary
```
<CheckBox variant="primary" name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
<CheckBox variant="secondary" name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
``` 

## Fluid
Adding fluid prop to checkbox element makes the component spread into the div's width.

```
<CheckBox fluid name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

## Label
It is also possible to add label next to the checkbox by giving label property

```
<CheckBox fluid name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

#### Additional content
And of course you can use any other HTML checkbox properties:
```
<CheckBox id="1" disabled name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```
