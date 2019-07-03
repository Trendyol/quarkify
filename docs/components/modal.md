# Modals
 
Modals are predefined styled components which covers full width and height of the page.
 
By default, Modals may have 3 different sub components:
 
 - Title
 - Content
 - Actions
 
These sub components are optional, but it is preferred to use.
 
Here is the simple usage of the modal component:
 
 ```
<Button onClick={handleChange}>Toggle Me</Button>
<Modal show={show} animation={animation} onClose={closeModal}>
 <Modal.Title>My Title</Modal.Title>
 <Modal.Content>
   <p>Some content</p>
 </Modal.Content>
 <Modal.Actions>
   <Button fluid onClick={closeModal}>
     Close
   </Button>
 </Modal.Actions>
</Modal>
 ```
 
As it can be seen, Modal component is shown or hidden by the prop it takes show. If show prop is true, modal will be shown. Otherwise it will not be rendered.
 
## Animation
 
 To change the animation type, you can modify the animation prop which takes a string. For now, only 2 different animations are possible:
 
 - slideInLeft
 - slideInRight
 
## Sub components
 
Title, Content and Actions sub components are only suggested for style issues. It is okay to not use, but it will look nicer if it is been used.
 
<b>Bad Example:</b> 
 ```
 <Modal show={show} animation={animation} onClose={closeModal}>
  <Modal.Title>My Title</Modal.Title>
 </Modal>
 ```
