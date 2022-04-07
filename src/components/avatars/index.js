import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Icon } from '@mui/material';

const MainAvatar = forwardRef(
    (
        {
            shape,
            size,
            children,
            colorAva,
            sx = {},
            title,
            ...others
        }, ref
    ) => {
        const theme = useTheme();

        return (
            <Avatar
                sx={{
                    ...sx
                }}
                variant={shape}
            >
                <Icon fontSize="large" sx={{ color: colorAva, fontSize: size }}>
                    {children}
                </Icon>
            </Avatar>
        )
    });

MainAvatar.defaultProps = {
    shape: "rounded",
    size: 100,
    colorAva: "white"
};

export default MainAvatar;
