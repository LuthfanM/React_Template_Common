import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
   <div>
     {console.log("other "+JSON.stringify(other))}
      <title>{title}</title>
    </div>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
