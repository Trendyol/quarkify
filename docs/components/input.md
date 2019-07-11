# Inputs
Custom input styles in numerous elements can be found here.

## Variant
You can change the variant prop to give some predefined styles to the input component. For now, there are only 2 type of variants which are:
- primary
- secondary
```
<Input variant="primary"/>
<Input variant="secondary"/>
```

## Label
It is also possible to add label next to the input by giving label property

```
<Input label="My Label"/>
``` 

## Sub Text
Sub texts are less attractive than labels but gives enough information about the content.
```
<Input subtext="Your email has to be at least 8 characters"/>
``` 

## Fluid
Adding fluid prop to input element makes the component spread into the div's width.

```
<Input fluid/>
```

#### Additional content
And of course you can use any other HTML input properties:
```
<Input placeholder="Some Placeholder"/>
<Input value={"Bike"}/>
<Input label={"I have a bike"}/>
<Input id="1" disabled />
<Input name={"vehicle1"} />
```
