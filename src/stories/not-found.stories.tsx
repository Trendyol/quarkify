import { storiesOf } from "@storybook/react";
import React from "react";
import NotFound from "../components/not-found";

const stories = storiesOf("NotFound", module);

stories.add("No Result Error", () => (
  <NotFound
    title="İlgili Sonuç Bulunamadı"
    subtitle="Farklı marka, ürün ve kategori için tekrar aramayı deneyin."
    buttonVariant="secondary"
    icon="label-magnify"
    iconColor="light-gray"
    stroke={4}
  />
));
stories.add("Page Error", () => (
  <NotFound
    title="Üzgünüz, aradığınız sayfa bulunamadı"
    buttonVariant="primary"
    icon="not-found"
    iconSize="xlarge"
    iconColor="primary"
  />
));
stories.add("No Parameters", () => (
  <NotFound />
));
