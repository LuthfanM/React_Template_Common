import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";
import MCard from "../components/@material-extend/MCard";
import MTypography from "../components/@material-extend/MTypography";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const RootCard = styled(MCard)(({ theme }, bgColor) => ({
  overflow: "hidden",
  borderRadius: '3%',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 180,
    height: 180,
    background: 'white',
    borderRadius: '50%',
    bottom: -95,
    right: -95,
    opacity: 0.1,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 180,
    height: 180,
    background: 'white',
    borderRadius: '50%',
    bottom: -135,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

function ComplexCard({ color, title, count, botInfo, icon, destination, bgColor }) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <RootCard
      bgColor={bgColor}
      sx={{ height: '100%' }}
      onClick={() => {
        navigate(destination);
      }}
    >
      <MCard display="flex" justifyContent="space-between" pt={1} px={2} sx={{ backgroundColor: 'inherit' }} >
        <MCard
          bgColor={bgColor}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          sx={{
            border: '5px solid ' + theme.palette.common.white
          }}
        >
          <Icon fontSize="medium" sx={{ color: icon.color == "light" ? theme.palette.common.white : theme.palette.common.black }}>
            {icon.ic}
          </Icon>
        </MCard>
        <MCard lineHeight={1.25} borderRadius="sm" sx={{ backgroundColor: 'inherit', padding: '5px' }} >
          {/* <MTypography variant="h5" fontWeight="bold" sx={{ color: theme.palette.custom.bluePurle }}>
            {title}
          </MTypography> */}
          {
            console.log("isi count info " + JSON.stringify(count))
          }
          <MTypography variant="h4" color={count.color}>{count.info}</MTypography>
        </MCard>
      </MCard>
      <Divider sx={{
        borderWidth: '1px',
        backgroundColor: theme.palette.common.white,
        mx: 0.75,
        mt: 2,
        mb: 2
      }} />
      <MCard pb={2} px={2} pt={1} sx={{ display: "inline-block", backgroundColor: 'inherit' }}>
        <MTypography component="p" variant="button" color="text" display="flex">
          <MTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={botInfo.color}
            mx={1}
          >
            {botInfo.label}
          </MTypography>
          {/* <Icon fontSize="large" color="inherit">
            {botInfo.icon}
          </Icon> */}
        </MTypography>
      </MCard>
    </RootCard>
  );
}

// Setting default values for the props of ComplexCard
ComplexCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

ComplexCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexCard;
