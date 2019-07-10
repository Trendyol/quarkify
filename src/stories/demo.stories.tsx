import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Box from "../components/box";
import Button from "../components/button";
import Icon from "../components/icon";
import Modal from "../components/modal";
import Select from "../components/select";
import "./demo.css";

const stories = storiesOf("Demo", module);

stories.add("First Page", () => (
  <div>
    <div className={"image-container"}>
      <img
        className="gallery__image"
        alt="gallery image"
        src="https://img-trendyol.mncdn.com//Assets/ProductImages/oa/67/4720220/2/8681825033965_1_org_zoom.jpg"
        style={{float: "left", width: "458px", position: "relative"}}
        data-index="0"
      />
    </div>
    <div className={"product-info"}>
      <div className={"product-info__container"}>
        <h1 className="product-info__brand">TRENDYOLMİLLA</h1>
        <h2 className="product_info__product_name">Lacivert Baskılı Basic Örme T-shirt TWOSS19TC0012</h2>
      </div>
      <div className={"product-info__footer"}>
        <div className={"product-info__footer-wrapper"}>
          <div className={"product-info__footer-wrapper__stars"}>
            <div className={"product-info__footer-wrapper__stars-name"}>
              5.0
            </div>
            <div className={"product-info__footer-wrapper__stars-icon"}>
              <Icon name={"star"} style={{ color: "#ffc000" }}/>
            </div>
          </div>
        </div>
        <div className={"product-info__footer-favourites"}>
          <Icon name={"heart"}/>
          215
        </div>
      </div>
      <div className={"product-info__campaigns"}>
        <Button icon={"info-tag"} variant={"secondary"} round style={{ marginRight: "10px" }}>Kargo Bedava</Button>
        <Button icon={"info-tag"} variant={"secondary"} round>Sepette %60 İndirim</Button>
      </div>
      <div className={"product-info__delivery"}>
        <span className="product-info-delivery__normal__title">
          <div>
            <span className="product-info-delivery__text">Teslimat: &nbsp;&nbsp;</span>
            <span className="product-info-delivery__normal__time">11 - 16 Temmuz</span>
          </div>
        </span>
      </div>
    </div>

    {/*<div className={"price"}>*/}
    {/*  <div className={"price__container discount__container"}>*/}
    {/*    <div className={"price__discount"}>*/}
    {/*      Sepette %60 İndirim*/}
    {/*      <div className="price__container__discount__price"><span>99,99</span> <span>TL</span></div>*/}
    {/*    </div>*/}
    {/*    <div className={"price__add_to_basket__discount"}>*/}
    {/*      <Button className={"price__add-button primary"} variant={"primary"}>Sepete Ekle</Button>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}
  </div>
));

const BasketStory = () => {
  const [show, setShow] = useState(true);
  const items = [
    {
      id: 1,
      name: "Adet: 1",
    },
    {
      id: 2,
      name: "Adet: 2",
    },
    {
      id: 3,
      name: "Adet: 3",
    },
  ];
  const closeModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  return(
    <Modal show={show}>
      <Modal.Header onClose={closeModal} leftIcon="back-button" leftIconOnClick={closeModal} noIcon>
        Sepetim (1 Urun)
      </Modal.Header>
      <Modal.Content className="basket-content">
        <Box>
          <div className="box-content">
            <img
              alt="gallery image"
              src="https://img-trendyol.mncdn.com//Assets/ProductImages/oa/67/4720220/2/8681825033965_1_org_zoom.jpg"
              style={{borderRadius: "3px", width: "100px", position: "relative"}}
              data-index="0"
            />
            <div className="product-details">
              <div className="basket-card-header">
                <h1 className="basket-card__brand">TRENDYOLMİLLA</h1>
                <Icon name="close"/>
              </div>
              <h2 className="basket-card__product-name">Lacivert Baskılı Basic Örme T-shirt TWOSS19TC0012</h2>
              <h2 className="basket-card__product-name">Beden: S</h2>
              <div className="product-details-bottom">
                <Select items={items}/>
                <div className="basket-card__sale-price">
                  149,97 TL
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal.Content>

    </Modal>
  );
};

stories.add("Basket", () => <BasketStory />);
