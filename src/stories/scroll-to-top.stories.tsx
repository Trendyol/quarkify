import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import Button from "../components/button";
import ScrollToTop from "../components/scroll-to-top";
import "./styles/scroll-to-top.scss";

const stories = storiesOf("Scroll To Top", module);

class ScrollToTopWrapper extends PureComponent {
  public render() {
    return(
      <div>
        {Array.from({ length: 60 }, (_, i) => <p>Down {i}</p>)}
        <ScrollToTop className="basket-scroll" duration={300} showUnder={500}/>
        <div className={"price"}>
          <div className={"price__container discount__container"}>
            <div className={"price__discount"}>
              Sepette %60 İndirim
              <div className="price__container__discount__price"><span>99,99</span> <span>TL</span></div>
            </div>
            <div className={"price__add_to_basket__discount"}>
              <Button className={"price__add-button primary"} variant={"primary"}>Sepete Ekle</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

stories.add("Default", () => <ScrollToTopWrapper/>);
