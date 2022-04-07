import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// material
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const RootStyle = styled('div')(({ theme })=>({
  flexGrow: 1,
  height: window.screen.height,
  overflow: 'auto',  
  backgroundColor: theme.palette.common.white,
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  // backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
  //     theme.palette.primary.dark,
  //     0.24
  //   )} 100%)`,
  // maxHeight: '100vw',
  // marginBottom: 10,
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  '& .simplebar-wrapper .simplebar-placeholder':{
      height: '0 !important',
      paddingBottom:  window.screen.height/10,
  }
}));

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
};

export default function Scrollbar({ children, sx, ...other }) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
