# SubHeader

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
