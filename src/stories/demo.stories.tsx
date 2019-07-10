import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import Box from "../components/box";
import Button from "../components/button";
import CheckBox from "../components/checkbox";
import Icon from "../components/icon";
import Input from "../components/input";
import Modal from "../components/modal";
import Popup from "../components/popup";
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

const BasketStory = () => {
  const [show, setShow] = useState(false);
  const [popup, setShowPopup] = useState(false);
  const basketItems = [
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
  const closePopup = () => {
    setShowPopup(false);
  };
  const showPopup = () => {
    setShowPopup(true);
  };
  const showModal = () => {
    setShow(true);
  };

  return(
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
      <div className={"product-info"} style={{ marginBottom: "70px" }}>
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
      <div className={"product-reviews"}>
        <div className={"product-reviews__header"}>
          <div className={"product-reviews__header-title"}>
            Ürün Değerlendirmeleri
          </div>
          <div className={"product-reviews__header-comments-count"}>
            Tüm Yorumlar (7) <Icon name={"forward-button"}/>
          </div>
        </div>
        <div className={"product-reviews__body"}>
          <div className={"product-reviews__body-img"}>
            {/* tslint:disable-next-line:max-line-length */}
            <img src="https://img-trendyol.mncdn.com/mnresize/400/-/Assets/ProductImages/oa/76/5930871/1/8698669560489_1_org.jpg"/>
          </div>
          <div className={"product-reviews__body-info"}>
            <h5 className={"product-reviews__body-info__title"}>Avva</h5>
            <div className={"product-reviews__body-info__subtitle"}>Erkek Taş Basic Pantolon - A91B3556</div>
            <div className={"product-info__footer-wrapper__stars"} style={{ marginTop: "50px"}}>
              <div className={"product-info__footer-wrapper__stars-name"}>
                5.0
              </div>
              <div className={"product-info__footer-wrapper__stars-icon"}>
                <Icon name={"star"} style={{ color: "#ffc000" }}/>
              </div>
            </div>
            <div className={"product-info__footer-wrapper-reviews"}>
              11 Değerlendirme 7 Yorum
            </div>
          </div>
        </div>
        <div className={"product-reviews__footer"}>
          <Button onClick={showPopup} fluid variant={"primary"}>Ürünü Değerlendir</Button>
          <Popup
            show={popup}
            onClose={closePopup}
          >
            <h2>Ürünü Değerlendir</h2>
            {/* tslint:disable-next-line:max-line-length */}
            <div style={{ display: "flex", justifyContent: "space-between", width: "60%", textAlign: "center", margin: "auto" }}>
              <CheckBox style={{ width: "30%" }} value={"kotu"} label={"Kötü"}/>
              <CheckBox style={{ width: "30%" }} value={"orta"} label={"Orta"}/>
              <CheckBox style={{ width: "30%" }} value={"iyi"} label={"İyi"}/>
            </div>
            <Input style={{ marginTop: "30px" }} size={5} placeholder={"Lütfen Yorumunuzu Yazın..."} fluid/>
            <Button style={{ marginTop: "30px" }} onClick={closePopup} variant={"primary"} fluid>Gönder</Button>
          </Popup>
        </div>
      </div>
        <div className={"comments"}>
          <Box>
            <div className={"comment"}>
              <div className={"comment-header"}>
                <div className={"comment-header__star"}>
                  <Icon name={"star"} style={{ color: "#ffc000" }}/>
                </div>
                <div className={"comment-header__options"}>
                  <Icon name={"more-vertical"}/>
                </div>
              </div>
              <div className={"comment-body"}>
                <div className={"comment-body__text"}>
                  Çok kaliteli bir ürün bedenide gayet güzel geldi rengide göründüğü gibi rahatlıkla alabilirsiniz
                </div>
                <div className={"comment-body__author"}>
                  Berkin inan <span className={"trusted-user"}>Ürünü Satın Aldı<Icon name={"checkmark-full"}/></span>
                </div>
                <div className={"comment-body__date"}>
                  08 Temmuz 2019 | 13:29
                </div>
              </div>
            </div>
          </Box>
          <Box>
            <div className={"comment"}>
              <div className={"comment-header"}>
                <div className={"comment-header__star"}>
                  <Icon name={"star"} style={{ color: "#ffc000" }}/>
                </div>
                <div className={"comment-header__options"}>
                  <Icon name={"more-vertical"}/>
                </div>
              </div>
              <div className={"comment-body"}>
                <div className={"comment-body__text"}>
                  Yorumum üstte dursun diye 5 yıldız verdim yoksa beş para etmez
                </div>
                <div className={"comment-body__author"}>
                  Ant Kaynak <span className={"trusted-user"}>Ürünü Satın Aldı<Icon name={"checkmark-full"}/></span>
                </div>
                <div className={"comment-body__date"}>
                  12 Ocak 2019 | 23:09
                </div>
              </div>
            </div>
          </Box>
          <Box>
            <div className={"comment"}>
              <div className={"comment-header"}>
                <div className={"comment-header__star"}>
                  <Icon name={"star"} style={{ color: "#ffc000" }}/>
                </div>
                <div className={"comment-header__options"}>
                  <Icon name={"more-vertical"}/>
                </div>
              </div>
              <div className={"comment-body"}>
                <div className={"comment-body__text"}>
                  Ürün görselde ki gibi degil rengi bira daha koyu
                </div>
                <div className={"comment-body__author"}>
                  Yavuz Koca <span className={"trusted-user"}>Ürünü Satın Aldı<Icon name={"checkmark-full"}/></span>
                </div>
                <div className={"comment-body__date"}>
                  18 mayıs 2018 | 17:31
                </div>
              </div>
            </div>
          </Box>
        </div>
    </div>

      <div className={"price"}>
        <div className={"price__container discount__container"}>
          <div className={"price__discount"}>
            Sepette %60 İndirim
            <div className="price__container__discount__price"><span>99,99</span> <span>TL</span></div>
          </div>
          <div className={"price__add_to_basket__discount"}>
            <Button className={"price__add-button primary"} variant={"primary"} onClick={showModal}>Sepete Ekle</Button>
          </div>
        </div>
      </div>
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
                  <Select items={basketItems}/>
                  <div className="basket-card__sale-price">
                    149,97 TL
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal.Content>
      </Modal>
    </div>
  );
};

stories.add("Basket", () => <BasketStory />);
