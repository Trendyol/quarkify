import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import BottomSheet from "../components/bottom-sheet";
import Button from "../components/button";
import Icon from "../components/icon";
import { animationTypes } from "../types/modal";
import "./styles/bottom-sheet.css";

const stories = storiesOf("Bottom Sheet", module);

interface IProps {
  animation?: animationTypes;
  rightIcon?: string;
  leftIcon?: string;
}

interface IState {
  show: boolean;
}

class BottomSheetWrapper extends PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {show: false};
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  public render() {
    return (
      <>
        <span style={{ padding: `5000px` }}>WebKit Scroll Bug Test</span>
        <Button onClick={this.handleChange}>Toggle Me</Button>
        <BottomSheet show={this.state.show} onClose={this.handleChange}>
          <Icon name="close" onClick={this.handleChange}/>
          <p>Some stuff</p>
          <p>Some another stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <p>Some stuff</p>
          <Button>sa</Button>
          <p>Some stuff</p>
          <p>Some stuff</p>
        </BottomSheet>
      </>
    );
  }

  private handleChange() {
    this.setState({show: !this.state.show});
  }

  private closeModal() {
    this.setState({show: false});
  }
}

stories.add("Default", () => <BottomSheetWrapper/>);
