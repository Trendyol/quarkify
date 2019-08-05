import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import Button from "../components/button";

const stories = storiesOf("Button", module);

const action = () => alert("Clicked");
// tslint:disable-next-line:no-console
const actionLog = () => console.log("Clicked");

class LoadingWrapper extends PureComponent {
  public state = {
    loading: false,
  };
  public render() {
    return (
      <>
        <Button variant="primary" loading={this.state.loading} onClick={this.handleClick}>Add to Basket</Button>
        <Button variant="secondary" loading={this.state.loading} onClick={this.handleClick}>Add to Basket</Button>
        <Button variant="gray" loading={this.state.loading} onClick={this.handleClick}>Add to Basket</Button>
      </>
    );
  }
  private handleClick = () => {
    this.setState({loading: true});
    setTimeout(() => this.setState({loading: false}), 1000);
  }
}

stories.add("Variants", () => (
  <div>
    <Button onClick={actionLog}>Primary</Button>
    &nbsp;
    <Button variant="secondary" onClick={actionLog}>
      Secondary
    </Button>
    &nbsp;
    <Button variant="gray" onClick={actionLog}>
      Gray
    </Button>
  </div>
));

stories.add("Button with Action", () => (
  <div>
    <Button onClick={action} variant="primary">Click</Button>
  </div>
));

stories.add("Disabled", () => (
  <Button disabled onClick={actionLog}>
    Disabled
  </Button>
));
stories.add("Fluid", () => (
  <Button variant="primary" fluid onClick={actionLog}>
    Fluid
  </Button>
));
stories.add("Button with Icon", () => (
  <div>
    <Button variant="primary" icon="star" onClick={actionLog}>
      Favorilere ekle
    </Button>
    &nbsp;
    <Button variant="secondary" icon="like" onClick={actionLog}>
      3
    </Button>
    &nbsp;
    <Button variant="secondary" icon="basket" round onClick={actionLog}>
      Sepette %20 indirim
    </Button>
    &nbsp;
    <Button variant="secondary" icon="heart" onClick={actionLog}/>
  </div>
));

stories.add("Circular", () => (
  <Button variant="primary" circular icon="heart" onClick={actionLog}/>
));

stories.add("Ripple", () => (
  <>
    <Button variant="primary" ripple>Ripple</Button>
    <Button variant="secondary" ripple>Ripple</Button>
  </>
));

stories.add("Loading", () => (<LoadingWrapper/>));
