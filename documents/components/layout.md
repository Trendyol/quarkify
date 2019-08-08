# Layout

## Props

| Name      	| Type                                            	| Description                                                  	|
|-----------	|-------------------------------------------------	|--------------------------------------------------------------	|
| fitted    	| boolean                                         	| Sets padding of the box to 0                                 	|

Layout is a wrapper component used to display elements in a set style.

```html
<Layout>
 {children}
</Layout>
```

## Fluid

The fluid prop adds a padding to the layout component.

```html
<Layout fluid>
 <Box>
   <p>random text</p>
 </Box>
</Layout>
```

