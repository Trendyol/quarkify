# SubHeader

## Props
| Name             	| Type     	| Description                                 	|
|------------------	|----------	|---------------------------------------------	|
| className        	| string   	| Additional classes                          	|
| title            	| string   	| String displayed on the subheader           	|
| leftIcon         	| string   	| Name of the left icon                       	|
| rightIcon        	| string   	| Name of the right icon                      	|
| leftIconOnClick  	| function 	| A callback fired when left icon is clicked  	|
| rightIconOnClick 	| function 	| A callback fired when right icon is clicked 	|

SubHeader is a wrapper component with a set style.

```html
  <SubHeader title="Hello there!"/>
```

## Icon

SubHeader can have a left or right oriented icon.

```html
<SubHeader rightIcon="close" title="This is a title!"/>
<SubHeader leftIcon="close" title="This is a title!"/>
```

## Action
SubHeader icons can have a callback function.

```html
<SubHeader leftIcon="close" rightIcon="search" rightIconOnClick={action} title="This is a title!"/>
```
