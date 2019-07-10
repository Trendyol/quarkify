import { storiesOf } from "@storybook/react";
import React from "react";
import Box from "../components/box";
import Button from "../components/button";
import Icon from "../components/icon";
import Select from "../components/select";
import "./demo.css";

const stories = storiesOf("Demo", module);
const items = [
  {
    id: 1,
    name: "XS",
    variant: "primary",
  },
  {
    id: 2,
    name: "S",
    variant: "primary",
  },
  {
    id: 3,
    name: "M",
    variant: "primary",
  },
];

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
      <div className={"product-info__size"}>
        <div className={"product-info__size-name"}>
          Beden
        </div>
        <div className={"product-info__size-name__table"}>
          Beden Tablosu
        </div>
      </div>
      <div className={"product-info__size-select"}>
        <Select items={items} fluid/>
      </div>
      <div className={"product-info__information"}>
        <h3 className={"description__header__title"}>Ürün Bilgileri</h3>
        <div className={"description__body"}>
          <ul>
            <li data-free-returns="true">15 gün içerisinde ücretsiz iade. Detaylı bilgi için
              <span
                className="description__body__return_conditions"
              >
                Tıklayın.
              </span>
            </li>
            <li data-market-place-supplier="true">Bu ürün Trendyol adına
              <span
                className="description__body__merchant"
              >
                AVVA
              </span>tarafından gönderilecektir.
            </li>
          </ul>
        </div>
      </div>
      <div className={"product-info__promotion"}>
        <h3 className={"description__header__title"}>Avva - Alışveriş Fırsatı</h3>
        <div className={"product-info__promotion-body"}>
          <div className={"product-info__promotion-item"}>
            <Icon name={"time"} style={{ color: "#b00000" }}/>
            <span className={"product-info__promotion-item__label"} style={{ color: "#b00000" }}>Kalan Süre: </span>
            <span className={"product-info__promotion-item__label-name"}>&nbsp;&nbsp;1 gün 18:35:04</span>
          </div>
          <div className={"product-info__promotion-item"}>
            <Icon name={"info-tag"} style={{ color: "#f27a1a" }}/>
            <span className={"product-info__promotion-item__label"} style={{ color: "#f27a1a" }}>Kampanya: </span>
            <span className={"product-info__promotion-item__label-name"}>&nbsp;&nbsp;Sepette %60 İndirim</span>
          </div>
          <div className={"product-info__promotion-item"}>
            <Icon name={"info-tag"} style={{ color: "#f27a1a" }}/>
            <span className={"product-info__promotion-item__label"} style={{ color: "#f27a1a" }}>Kampanya: </span>
            <span className={"product-info__promotion-item__label-name"}>&nbsp;&nbsp;Kargo Bedava</span>
          </div>
        </div>
      </div>
      <div className={"more-buttons"}>
        <Box>
          <div className={"more-buttons__item"}>
            <Icon name={"forward-button"} style={{ color: "#f27a1a" }}/>
            <span className="redirection-box__text">Daha Fazla Avva</span>
          </div>
        </Box>
        <Box>
          <div className={"more-buttons__item"}>
            <Icon name={"forward-button"} style={{ color: "#f27a1a" }}/>
            <span className="redirection-box__text">Daha Fazla Pantolon</span>
          </div>
        </Box>
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
