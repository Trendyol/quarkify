# QuantitySelector

QuantitySelector is an component capable of incrementing and decrementing the count on it

```html
       <QuantitySelector
            count={0}
            onIncrementClick={() => {
                console.log("onIncrementClick");
            }}
            onDecrementClick={() => {
                console.log("onDecrementClick");
            }}
            buttonText="Sepete Ekle" />
```

### Props

| prop                      | description                                            |
| -------------             |:-------------:                                         |
| _count_                   | specifies the initial count to be displayed on element |
| _buttonText_ (*)          | text to be displayed on button when count is 0         |
| _onDecrementClick_(*)     | decrement callback                                     |
| _onIncrementClick_(*)     | increment callback                                     |

(*) required