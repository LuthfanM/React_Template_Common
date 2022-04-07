// material
import { Box, Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../components/Page";
import { useSelector, useDispatch } from 'react-redux';
import ComplexCard from "../../components/ComplexCard";
import MCard from "../../components/@material-extend/MCard";
import dataDashboard from "../../helpers/datacolumn/dashboardmenu-data.json";
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../utils/i18n/translations";
import DashboardChart from "../../components/charts/DashboardChart";
import { ICON_1, ICON_2, LINE, TRIPLE_WIDTH } from "../../utils/constants";
import MainAvatar from "../../components/avatars";
import MainCard from "../../components/cards/MainCard";
import MainProgress from "../../components/progress";

const dashboardAvatar = [ICON_1, ICON_2, ICON_2, ICON_2];
const cardDashboardColor = ["red", "green", "purple"]

const ContainerStyle = styled(Container)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.primaryBackground.global,
  overflow: "visible",
}));

const DashboardApp = (props) => {
  const classes = useStyles();

  // const dashboard = useSelector((state) => state.auth.dashboard); redux
  const dashboard = dataDashboard;//--------for testing
  const i18n = useTranslation();
  const theme = useTheme();

  const randomColor = [];
  for (var x in theme.palette.lightColor)
    randomColor.push(theme.palette.lightColor[x]);
  // console.log("nilai rand"+JSON.stringify(randomColor))
  // console.log("nilai rand"+randomColor.length)
  var num = Math.floor(Math.random() * (randomColor.length - 0)) + 0;

  const generateCardContent = () => {
    var temp = [];
    dashboard.data.map((data, index) =>
      temp.push(<Grid item lg={4} md={6} sm={6} xs={12}>
        <MCard
          mb={1.5}
          sx={{
            boxShadow: "0 1px 7px " + theme.palette.custom.lightBlueCustom
          }}
        >
          <ComplexCard
            destination={data.destination}
            bgColor={cardDashboardColor[index]}
            color="primary"
            icon={{
              ic: data.icon,
              color: "light"
            }}
            title={i18n[data.data_title]}
            count={
              {
                info: "Rp 100000000",
                color: "secondary"
              }}
            botInfo={{
              color: "secondary",
              label: i18n[data.data_title],
            }}
          />
        </MCard>
      </Grid>)
    )
    return temp;
  }

  return (
    <MainCard sx={{
      mt: -2, width: '100%', height: 'fit-content', flexDirection: 'column', padding: '5px',
      borderRadius: '2%'
    }}>
    <Page title="Dashboard">
      <ContainerStyle maxWidth="xl">
        {/* <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Dashboard App</Typography>
            </Box> */}
        <Grid container spacing={3}>
          {generateCardContent()}
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <Box sx={{
              border: '1px solid',
              mt: 3,
              padding: 3,
              borderRadius: 4,
              width: 'fit-content'
            }}>
              <DashboardChart type={LINE} />
            </Box>
          </Grid>
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <Box sx={{
              border: '1px solid',
              backgroundColor: 'white',
              mt: 3,
              padding: 3,
              borderRadius: 4,
              display: 'inline-grid',
              width: TRIPLE_WIDTH
            }}>
              {
                dashboardAvatar.map((val, index) => {
                  return (
                    <MainCard sx={{
                      mt: 2, width: '95%', height: 'fit-content', flexDirection: 'column', padding: '5px'
                    }}>
                      <div className={classes.progressTypo}>
                        <MainAvatar>
                          {dashboardAvatar[index]}
                        </MainAvatar>
                        <Typography>Lorem</Typography>
                        <Typography>60%</Typography>
                      </div>
                      <div>
                        <MainProgress cWidth={TRIPLE_WIDTH} />
                      </div>
                    </MainCard>
                  )
                })
              }
            </Box>
          </Grid>
        </Grid>
      </ContainerStyle>
    </Page>
    </MainCard>
  );
};

export default DashboardApp;
