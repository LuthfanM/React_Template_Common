import { styled } from "@mui/material/styles";
import Page from "../../components/Page";
import { Card, Checkbox, InputBase } from "@mui/material";

export const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
  backgroundImage: theme.palette.gradients.bgBlueComb,
}));

export const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export const InputBaseStyle = styled(InputBase)(({ theme }) => ({
  "& input::placeholder": {
    fontWeight: "bold",
    opacity: 1,
  },
  background: "white",
  border: "solid 3px #070c80",
  borderRadius: theme.shape.borderRadius,
  height: "9vh",
  paddingLeft: "10px",
}));
