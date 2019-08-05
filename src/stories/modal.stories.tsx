import { storiesOf } from "@storybook/react";
import * as faker from "faker";
import React, { PureComponent } from "react";
import Button from "../components/button";
import Modal from "../components/modal";
import { animationTypes } from "../types/modal";

const stories = storiesOf("Modal", module);

interface IProps {
  animation?: animationTypes;
  rightIcon?: string;
  leftIcon?: string;
}

interface IState {
  show: boolean;
}

class ModalWrapper extends PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {show: false};
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  public render() {
    return (
      <>
        <Button onClick={this.handleChange}>Toggle Me</Button>
        <Modal show={this.state.show} animation={this.props.animation}>
          <Modal.Header
            rightIconOnClick={this.closeModal}
            rightIcon={this.props.rightIcon}
            leftIcon={this.props.leftIcon}
            leftIconOnClick={this.closeModal}
          >
            Cok y cok g cok cok cok cok cok cok cok cok cok cok cok cok cok cok
            cok uzun title
          </Modal.Header>
          <Modal.Content>
            <p>{faker.lorem.words(1000)}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button fluid onClick={this.closeModal}>
              Ok
            </Button>
          </Modal.Actions>
        </Modal>
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

stories.add("Default", () => <ModalWrapper/>);
stories.add("Left Icon", () => (
  <ModalWrapper leftIcon="back-button"/>
));
stories.add("Right Icon", () => (
  <ModalWrapper rightIcon="close"/>
));
stories.add("SlideInLeft", () => <ModalWrapper animation="slideInLeft" rightIcon="close"/>);
stories.add("SlideInDown", () => <ModalWrapper animation="slideInDown" rightIcon="close"/>);
stories.add("SlideInUp", () => <ModalWrapper animation="slideInUp" rightIcon="close"/>);
