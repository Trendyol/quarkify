import React, { PureComponent } from "react";
import { CONTINUE_TO_SHOPPING } from "../../enums/not-found";
import IDiv from "../../interfaces/div";
import "../../styles/components/_not-found.scss";
import { variantTypes } from "../../types/button";
import { colorTypes } from "../../types/color";
import { sizeTypes } from "../../types/icon";
import { Box } from "../box";
import Button from "../button";
import Icon from "../icon";
import Typography from "../typography";

export default class NotFound extends PureComponent<INotFoundProps> {
  public render() {
    const {
      title,
      subtitle,
      buttonText = CONTINUE_TO_SHOPPING,
      buttonVariant = "secondary",
      buttonOnClick,
      icon = "not-found",
      iconSize = "xlarge",
      iconColor = "dark-gray",
      stroke,
    } = this.props;

    return (
      <Box className="q-not-found" spaced textAlign="center">
        <Icon
          className="q-icon__icon"
          name={icon}
          size={iconSize}
          color={iconColor}
          stroke={stroke}
        />
        {
          title && <Typography
            variant="body"
            className="q-not-found__title"
          >
            {title}
          </Typography>
        }
        {
          subtitle && <Typography
            variant="smallParagraph"
            className="q-not-found__subtitle"
            color="dark-gray"
          >
            {subtitle}
          </Typography>
        }
        <Button
          onClick={buttonOnClick}
          variant={buttonVariant}
          className="q-not-found__button"
        >
          {buttonText}
        </Button>
      </Box>
    );
  }
}

interface INotFoundProps extends IDiv {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  buttonVariant?: variantTypes;
  icon?: string;
  iconColor?: colorTypes;
  iconSize?: sizeTypes;
  stroke?: number;
}
