# Step Progress Bar

A progress bar indicating what stage an action is. It is green by default and should get childrens of type Step.

```html
<StepProgressBar>
 <Step name="step name"/>
</StepProgressBar>
```

## Step

Step Progress Bar can have unlimited steps. Each added step will adjust the style in occurding to the width of the parent.

```html
<StepProgressBar>
 <Step name="step 1" active/>
 <Step name="step 2" active/>
 <Step name="step 3"/>
</StepProgressBar>
```

Giving an active prop to a step declares that step as an active. Consecutive steps must be all active in order to properly display styles. For example if only the last Step element is active, other Steps will not be shown as active. To accomplish this set all Steps to active through the latest active step.

An all completed step progress bar example is like this

```html
<StepProgressBar>
 <Step name="step 1" active/>
 <Step name="step 2" active/>
 <Step name="step 3" active/>
 <Step name="step 4" active/>
</StepProgressBar>
```

## Color

You can change the color prop to give some predefined styles to the component. For now, there are only 4 type of variants which are:

  * "primary"
  * "green"
  * "red"
  * "black"
  * "dark-gray"
  * "light-gray"
  * "border-gray"

```html
<StepProgressBar color="red">
 <Step name="step name"/>
</StepProgressBar>
```

#### Additional content
You can give additional class names.

```html
<StepProgressBar className="myClass">
 <Step name="step name"/>
</StepProgressBar>
```