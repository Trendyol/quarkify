# Icons
Icon component uses icomoon library to render icon elements. Of course it is possible to overwrite the icons by giving appropriate class names to the Icon component.

## Name
Icon component takes name prop as required to specify which icon will be rendered. 

```html
<Icon name="account"/>
<Icon name="heart" />
```

<iframe src="https://codesandbox.io/embed/summer-feather-37cl6?fontsize=14" title="summer-feather-37cl6" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Here are the list of possible names:

- search
- spinner
- shopping-cart
- like
- account

...

## Size
An icon can have the following sizes:
- xlarge
- large
- small

By default, the size of the Icon component is set to normal.

```html
<Icon name="account" size="small" />
<Icon name="account"/>
<Icon name="account" size="large" />
<Icon name="account" size="xlarge" />
```

## Circular
An icon can have a circular background

```html
<Icon name="account" circular/>
```


<iframe src="https://codesandbox.io/embed/delicate-wildflower-lk1i0?fontsize=14" title="delicate-wildflower-lk1i0" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Variant
It is possible to use most used icon color schemas which are:

- primary (orange theme)
- gray

```html
<Icon name="search" variant="primary"/>
<Icon name="search" variant="gray"/>
```

## Color

Icon has different color variants.

  * "primary"
  * "green"
  * "red"
  * "black"
  * "dark-gray"
  * "light-gray"
  * "border-gray"

```html
<Icon name="account" color={"green"} />
```

#### Additional content
You can use some other props as well such as:

```html
<Icon name="account" disabled />
<Icon name="account" className="someClassName" />
```

<iframe src="https://codesandbox.io/embed/cranky-dream-imo6l?fontsize=14" title="cranky-dream-imo6l" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
