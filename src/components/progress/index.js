import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { LinearProgress, Box } from '@mui/material';

const MainProgress = forwardRef(
    (
        {
            type,
            variant,
            progress,
            cWidth, flexing,
            sx = {},
            title,
            ...others
        }, ref
    ) => {
        const theme = useTheme();

        return (
            <Box sx={{ width: '80%', mt: 1, mx: 2, mb: 1 }}>
                <LinearProgress
                    variant={variant}
                    value={progress}
                    sx={{
                        flex: flexing,
                        ...sx
                    }}
                />
            </Box>
        )
    });

MainProgress.defaultProps = {
    variant: "determinate",
    progress: "100",
    flexing: 1,
    colorAva: "white"
};

export default MainProgress;
