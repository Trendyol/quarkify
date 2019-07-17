# Modals
 
Modals are predefined styled components which covers full width and height of the page.
 
By default, Modals may have 3 different sub components:
 
 - Header
 - Content
 - Actions
 
These sub components are optional, but it is preferred to use.
 
Here is the simple usage of the modal component:
 
 ```
<Button onClick={this.handleChange}>Toggle Me</Button>
<Modal show={this.state.show} animation={"slideInRight"}>
  <Modal.Header onClose={this.closeModal}>Adres Ekle</Modal.Header>
  <Modal.Content>
    <Input
      fluid
      label="E-posta"
      subtext="Siparis bilgileriniz bu adrese gonderilecektir"
    />
    <Input fluid label="Adres Basligi" />
    <div style={{ display: "flex" }}>
      <Input style={{ width: "100" }} fluid label="Ad" />
      <Input style={{ width: "100" }} fluid label="Soyad" />
    </div>
  </Modal.Content>
  <Modal.Actions>
    <Button fluid disabled onClick={this.closeModal}>
      Kaydet ve Devam Et
    </Button>
  </Modal.Actions>
</Modal>
 ```
 
<iframe src="https://codesandbox.io/embed/bold-surf-0ee63?fontsize=14" title="bold-surf-0ee63" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 
As it can be seen, Modal component is shown or hidden by the prop it takes show. If show prop is true, modal will be shown. Otherwise it will not be rendered.
 
## Animation
 
 To change the animation type, you can modify the animation prop which takes a string. For now, only 4 different animations are possible:
 
 - slideInLeft
 - slideInRight
 - slideInUp
 - slideInDown
 
## Sub components
 
Header, Content and Actions sub components are only suggested for style issues. It is okay to not use, but it will look nicer if it is been used.
 
<b>Bad Example:</b> 
 ```
<Button onClick={this.handleChange}>Toggle Me</Button>
<Modal show={this.state.show} animation={"slideInDown"}>
  <Modal.Header onClose={this.closeModal}>My Header</Modal.Header>
  <p>First paragraph</p>
  <p>Seconda paragraph</p>
  <p>Third paragraph</p>
  <p>Fourth paragraph</p>>
</Modal>
 ```
 
<iframe src="https://codesandbox.io/embed/amazing-mayer-p8miw?fontsize=14" title="amazing-mayer-p8miw" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

As it can be seen, without giving Content subcomponent, first paragraph will not be shown because of it hides behind of the header sub component.
