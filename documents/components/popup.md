# Popups
 
Popups are intrusive components which covers some width and height of the page.
 
Here is the simple usage of the popup component:
 
 ```
<Button onClick={handleChange}>Toggle Me</Button>
<Popup show={show} onChange={handleChange}>
    <Icon name="basket" style={{ fontSize: "6rem" }} />
    <h1>URUN SEPETINE EKLENDI</h1>
    <h4 style={{ color: "grey" }}>
      Alışverişe devam etmek mi istersin sepete gitmek mi?
    </h4>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "60px",
      }}
    >
      <Button variant="secondary" style={{ flex: 1, margin: "0 5px" }}>
        Alisverise Devam Et
      </Button>
      <Button variant="primary" style={{ flex: 1, margin: "0 5px" }}>
        Sepete Git (1)
      </Button>
    </div>
</Popup>
 ```
 
<iframe src="https://codesandbox.io/embed/confident-hertz-yn4x6?fontsize=14" title="confident-hertz-yn4x6" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 
## Show 
Popup component is shown or hidden by the prop it takes show. If show prop is true, popup will be shown. Otherwise it will not be rendered.

## onChange
onChange property of Popup component is called whenever popup's show is changed. onChange function is called with a status parameter indicating the current state of the popup.

### onChange Example
      const [show, setShow] = useState(false);
      const handleChange = (status: boolean) => {
        setShow(status);
      }
      <Popup
        show={show}
        onChange={handleChange}
      >

## closeOnOverlayClick
By default, popup component will be closed whenever the user clicks to the out of the box. It can be disabled by simply setting this prop to false.
 ```
<Button onClick={handleChange}>Toggle Me</Button>
<Popup show={show} onClose={closePopup} closeOnOverlayClick={false}>
    <p>Popup content</p>
</Popup>
 ```
 
<iframe src="https://codesandbox.io/embed/boring-firefly-0pp0b?fontsize=14" title="boring-firefly-0pp0b" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## iconLeft
It is possible to set the icon position to the left by giving iconLeft prop.
 ```
<Button onClick={handleChange}>Toggle Me</Button>
<Popup show={show} onClose={closePopup} iconLeft>
    <p>Popup content</p>
</Popup>
 ```
 
<iframe src="https://codesandbox.io/embed/crazy-yonath-j1bpk?fontsize=14" title="crazy-yonath-j1bpk" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## noIcon
Or, set the noIcon prop to remove the icon. But remember, if you use noIcon with closeOnOverlayClick, you will not be able to close the popup.
 ```
<Button onClick={handleChange}>Toggle Me</Button>
<Popup show={show} onClose={closePopup} noIcon>
    <p>Popup content</p>
</Popup>
 ```
 
<iframe src="https://codesandbox.io/embed/crazy-yonath-j1bpk?fontsize=14" title="crazy-yonath-j1bpk" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
