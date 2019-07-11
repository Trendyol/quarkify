# Popups
 
Popus are predefined styled components which covers some width and height of the page.
 
Here is the simple usage of the popup component:
 
 ```
<Button onClick={handleChange}>Toggle Me</Button>
<Popup show={show} onClose={closePopup} closeOnOverlayClick={closeOnOverlayClick}>
    <p>Popup content</p>
</Popup>
 ```
 
Popup component is shown or hidden by the prop it takes show. If show prop is true, popup will be shown. Otherwise it will not be rendered.

## onClose
onClose property of Popup component is called whenever popup's show property goes from true to false. In other words, whenever popup component has been closed, this function gets triggered.

## closeOnOverlayClick
Similarly, closeOnOverlayClick property of Popup component is called whenever the user clicks the outside box of the popup window. By default, it closes the popup but it can be modified.
