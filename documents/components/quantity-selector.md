# QuantitySelector

QuantitySelector is an component capable of incrementing and decrementing the count on it

```html
       <QuantitySelector
            count={0}
            onIncrement={() => {
                console.log("onIncrement");
            }}
            onDecrement={() => {
                console.log("onDecrement");
            }}
            iconProps={ } />
```

### Props

| prop                      | description                                            |
| -------------             |:-------------:                                         |
| _count_                   | specifies the initial count to be displayed on element |
| _iconProps_ (*)           | common icon properties                                 |
| _onDecrement_(*)          | decrement callback                                     |
| _onIncrement_(*)          | increment callback                                     |

(*) required