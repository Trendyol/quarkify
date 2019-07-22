# Accordion

Accordion component hides and reveals its contents depending on user
action. By default accordion holds an expanded state set to false.
But you can implement your own state to control accordion component.

## Default

```html
      <Accordion>
        <Accordion.Header>
          Accordion 1
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
```
## Controlled

```js
 const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Accordion expanded={expanded} onChange={handleChange}>
        <Accordion.Header>
          Accordion 1
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
      <Button onClick={handleClick}>Toggle Accordion</Button>
    </>
  );
```
