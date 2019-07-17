# Icons
Icon component uses icomoon library to render icon elements. Of course it is possible to overwrite the icons by giving appropriate class names to the Icon component.

## Name
Icon component takes name prop as required to specify which icon will be rendered. 

```
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
To change the size of the icon, you can give size prop to the Icon component:
- large
- small

By default, the size of the Icon component is set to normal.

```
<Icon name="account" size="small"/>
<Icon name="account"/>
<Icon name="account" size="large"/>
```

<iframe src="https://codesandbox.io/embed/delicate-wildflower-lk1i0?fontsize=14" title="delicate-wildflower-lk1i0" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

#### Additional content
You can use some other props as well such as:
```
<Icon name="account" disabled/>
<Icon name="account" className="someClassName"/>
```

<iframe src="https://codesandbox.io/embed/cranky-dream-imo6l?fontsize=14" title="cranky-dream-imo6l" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
