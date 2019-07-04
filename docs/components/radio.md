# Radio

## Variant
You can change the variant prop to give some predefined styles to the radio component. For now, there are only 2 type of variants which are:
- primary
- secondary
```
<Radio variant="primary" name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
<Radio variant="secondary" name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
``` 

## Fluid
Adding fluid prop to radio element makes the component spread into the div's width.

```
<Radio fluid name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

## Label
It is also possible to add label next to the radio by giving label property

```
<Radio fluid name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```

#### Additional content
You can use any other HTML radio properties:
```
<Radio id="1" disabled name={"vehicle1"} value={"Bike"} label={"I have a bike"}/>
```
