import React from "react";
import { dashboardFlags } from '../helpers/common';
import { Box, Stack, Typography, Button, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function CardProfile() {
    const theme = useTheme();

    return (
        <Box sx={{ px: 2, pb: 2, mt: 5 }}>
            <Stack
                alignItems="center"
                spacing={2}
                direction="row"
                sx={{
                    p: 1,
                    borderLeft: '5px solid white',
                    borderRight: '5px solid white',
                    borderRadius: 2,
                    position: 'relative',
                    bgcolor: theme.palette.custom.lightBlueCustom
                }}
            >
                <Avatar
                    src={dashboardFlags.shortBoost}
                    sx={{ width: 54, height: 54 }} />

                <Box sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h8" sx={{ color: 'text.secondary' }}>
                        Admin
                    </Typography>
                    <Typography gutterBottom variant="h8" sx={{ color: 'text.secondary' }}>
                        Business Development
                    </Typography>
                </Box>

                {/* <Button
                    fullWidth
                    target="_blank"
                    variant="contained"
                >
                    Edit Profile
                </Button> */}
            </Stack>
        </Box>
    );
}
