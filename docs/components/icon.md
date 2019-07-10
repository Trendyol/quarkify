# Icons
Icon component uses icomoon library to render icon elements. Of course it is possible to overwrite the icons by giving appropriate class names to the Icon component.

## Name
Icon component takes name prop as required to specify which icon will be rendered. 

```
<Icon name="account"/>
```

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

#### Additional content
You can use some other props as well such as:
```
<Icon name="account" disabled/>
<Icon name="account" className="someClassName"/>
```
