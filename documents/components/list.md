#List
Lists can be defined as continuous, vertical indexes of text or images.

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.

### Simple List

```js
<List>
    <Item>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</Item>
    <Item>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</Item>
    <Item>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</Item>
    <Item>Mankenin üzerindeki ürün S/36 bedendir.</Item>
</List>
```

### Dotted
Setting dotted prop to false will remove predefined dot from the items. This option is set to true by default.

```js
<List>
    <Item dotted={false}>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</Item>
    <Item dotted={false}>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</Item>
    <Item dotted={false}>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</Item>
    <Item dotted={false}>Mankenin üzerindeki ürün S/36 bedendir.</Item>
</List>
```

### Item
To customize more, it is possible to give an icon name

```js
<List>
    <Item icon={"search"} dotted={false}>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</Item>
    <Item icon={"search"} dotted={false}>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</Item>
    <Item icon={"search"} dotted={false}>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</Item>
    <Item icon={"search"} dotted={false}>Mankenin üzerindeki ürün S/36 bedendir.</Item>
</List>
```
