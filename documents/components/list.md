# List
Lists can be defined as continuous, vertical indexes of text or images.

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.

### Simple List

```js
<List>
    <List.Item>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</List.Item>
    <List.Item>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</List.Item>
    <List.Item>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</List.Item>
    <List.Item>Mankenin üzerindeki ürün S/36 bedendir.</List.Item>
</List>
```

### Dotted
Setting dotted prop to false will remove predefined dot from the items. This option is set to true by default.

```js
<List noDot>
    <List.Item>15 gün içerisinde ücretsiz iade. Detaylı bilgi için.Tıklayın.</List.Item>
    <List.Item>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</List.Item>
    <List.Item>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</List.Item>
    <List.Item>Mankenin üzerindeki ürün S/36 bedendir.</List.Item>
</List>
```

### Item
To customize more, it is possible to give an icon name

```js
<List noDot>
    <List.Item icon={"search"}>15 gün içerisinde ücretsiz iade. Detaylı bilgi için  </List.Item>
    <List.Item icon={"search"}>24 saatte kargoda fırsatı iş günlerinde geçerlidir.</List.Item>
    <List.Item icon={"search"}>Modelin Ölçüleri: Boy: 1.75, Göğüs: 80, Bel: 60, Kalça: 88</List.Item>
    <List.Item icon={"search"}>Mankenin üzerindeki ürün S/36 bedendir.</List.Item>
</List>
```
