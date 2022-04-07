import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const MainCard = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            display,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            height,
            width,
            shadow,
            sx = {},
            title,
            ...others
        }, ref
    ) => {
        console.log("isi sx"+JSON.stringify(sx))
        const theme = useTheme();

        return (
            <Card
                sx={{
                    display: display? display : 'flex',
                    borderRadius: '2px',
                    height: height? height : 'fit-content',
                    width: width? width: 'fit-content',
                    ':hover': {
                        boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                    },
                    ...sx
                }}
            >
                {children}
            </Card>
        )
    });

export default MainCard;
