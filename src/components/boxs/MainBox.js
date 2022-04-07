import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Typography, Button, Card } from '@mui/material';

const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

const MainBox = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        }, ref
    ) => {
        const theme = useTheme();

        return (
            <Box
            sx={{
                border: border ? '1px solid' : 'none',
                borderColor: theme.palette.primary[200] + 75,
                borderRadius: '3px',
                ':hover': {
                    boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                },
                ...sx
            }}
            >
                <Card>

                </Card>
                <Card>
                {children}
                </Card>
            </Box>
        )
    });

export default MainBox;
