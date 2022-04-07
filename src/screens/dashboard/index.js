import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { styled } from '@mui/material/styles';

import DashboardSidebar from './DashboardSidebar';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  height: '100%',
  overflow: 'hidden',
  // width: '100vw'
  overflowX: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  marginTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  height: window.innerHeight,
  paddingTop: APP_BAR_MOBILE/2 + 56,
  backgroundImage: theme.palette.common.white,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP/2 + 56,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

const Dashboard = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header onOpenSidebar={() => setOpen(!open)} isOpen={open} />
      <div>
    <RootStyle>
       {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
      
    </RootStyle>
    <Footer />
    </div>
    </>
  );
}

export default Dashboard;
