import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { dashboardFlags } from '../helpers/common';

export default function Logo({ sx }) {
  return <Box component="img" src={dashboardFlags.logoCSHoriz} sx={{ width: '100%', height: '100%', ...sx }} />;
}

Logo.propTypes = {
  sx: PropTypes.object
};