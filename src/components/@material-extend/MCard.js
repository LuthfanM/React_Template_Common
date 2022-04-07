import { forwardRef } from "react";
import PropTypes from "prop-types";
import CustomBox from "../../layout/overrides/Box";

const MCard = forwardRef(
  (
    { variant, bgColor, color, opacity, shadow, coloredShadow, borderRadius, ...rest },
    ref
  ) => (
    <CustomBox
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, shadow, coloredShadow, borderRadius }}
      {...rest}
    />
  )
);

MCard.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

MCard.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};

export default MCard;
