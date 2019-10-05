import React, { PureComponent } from "react";
import EmbeddedGist from "../partials/EmbeddedGist";
import { Box as QBox } from "quarkify/components/box";
import renderTable from "../partials/Table";
import faker from "faker";
import QButton from "quarkify/components/button";
import QList from "quarkify/components/list";
import QModal from "quarkify/components/modal";
import { animationTypes } from "quarkify/types/modal";

const props = [
  {
    name: "show",
    type: "boolean",
    default: "false",
    description: "Open status of modal component."
  },
  {
    name: "animation",
    type: "enum: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight']",
    default: "'slideInRight'",
    description: "Animation of opening and closing the modal."
  },
  {
    name: "leftIcon",
    type: "string",
    default: "",
    description: "Adds icon to the left header."
  },
  {
    name: "rightIcon",
    type: "string",
    default: "",
    description: "Adds icon to the right header."
  },
  {
    name: "leftIconOnClick",
    type: "function",
    default: "",
    description: "Function to be called on click of the icon."
  },
  {
    name: "rightIconOnClick",
    type: "function",
    default: "",
    description: "Function to be called on click of the icon."
  }
];

interface IProps {
  animation?: animationTypes;
  rightIcon?: string;
  leftIcon?: string;
}

interface IState {
  show: boolean;
}

class ModalWrapper extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {show: false};
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return (
      <>
        <QButton onClick={this.handleChange}>Toggle Me</QButton>
        <QModal show={this.state.show} animation={this.props.animation}>
          <QModal.Header
            rightIconOnClick={this.closeModal}
            rightIcon={this.props.rightIcon}
            leftIcon={this.props.leftIcon}
            leftIconOnClick={this.closeModal}
          >
            Cok y cok g cok cok cok cok cok cok cok cok cok cok cok cok cok cok
            cok uzun title
          </QModal.Header>
          <QModal.Content>
            <p>{faker.lorem.words(1000)}</p>
          </QModal.Content>
          <QModal.Actions>
            <QButton fluid onClick={this.closeModal}>
              Ok
            </QButton>
          </QModal.Actions>
        </QModal>
      </>
    );
  }

  handleChange() {
    this.setState({show: !this.state.show});
  }

  closeModal() {
    this.setState({show: false});
  }
}

function Modal() {
  return (
    <>
      <section id="dashboards" className="doc-section">
        <h2 className="section-title">Modal</h2>
        <div className="section-block">
          <p>Modals are predefined styled components which covers full width and height of the page. By default, Modals may have 3 different sub components:</p>
          <QList>
            <QList.Item>Header</QList.Item>
            <QList.Item>Content</QList.Item>
            <QList.Item>Actions</QList.Item>
          </QList>
          <p>These sub components are optional, but it is preferred to use.</p>
        </div>

        <h2 className="section-title">Usage</h2>
        <div className="section-block">
          <p>Here is the simple usage of the modal component:</p>
          <QBox>
            <ModalWrapper/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/bf9b10345d7f2502e2dba210126526e9" file="modal_1.jsx"/>
        </div>

        <h2 className="section-title">Examples</h2>

        <div className="section-block">
          <h4 className="subsection-title">Animation</h4>
          <p>Animation prop determines the opening and closing animation of the modal. It is possible to write custom animations for this purpose or simply use the ones that are already written.</p>
          <QBox>
            <ModalWrapper animation="slideInLeft" rightIcon="close"/> <br/>
            <ModalWrapper animation="slideInDown" rightIcon="close"/> <br/>
            <ModalWrapper animation="slideInUp" rightIcon="close"/> <br/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/1df6140d28f188594bf09b04b84b57f3" file="modal_2.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Left Icon</h4>
          <p>Modal header takes some additional props for icons. One them is left icon which appears on the left side of the modal header. In this example, it is set to close the modal on click of the left icon.</p>
          <QBox>
            <ModalWrapper animation="slideInLeft" leftIcon="close"/> <br/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/b23a04425a73f960ccb8e04eec06cfdc" file="modal_3.jsx"/>
        </div>

        <div className="section-block">
          <h4 className="subsection-title">Right Icon</h4>
          <p>Similarly, right icon appears on the right side of the modal header sub component.</p>
          <QBox>
            <ModalWrapper animation="slideInRight" rightIcon="close"/> <br/>
          </QBox>
          <EmbeddedGist gist="yavuzkoca/1f7b925ee6b618c8270432514a7b69ba" file="modal_4.jsx"/>
        </div>

        <div className="callout-block callout-info">
          <div className="icon-holder">
            <i className="fas fa-bullhorn"></i>
          </div>
          <div className="content">
            <h4 className="callout-title">Note</h4>
            <p>The functions of clicking the icons is set in the ModalWrapper component. Check out the first gist for the example usage.</p>
          </div>
        </div>

        {renderTable(props)}

      </section>
    </>
  );
}

export default Modal;
