import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Menu from "@/icons/menu.svg?react";
import ExpandMore from "@/icons/expand_more.svg?react";

const SubNav = () => {
    return <Box>
        <Grid container direction="row" spacing={2} sx={{ padding: "10px 0" }} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Grid item container xs={12} md={8} alignItems="flex-start" spacing={2}>
                <Grid item sx={{ cursor: "pointer", display: "flex", gap: "10px" }}>
                    <Menu />
                    <Typography>All category</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ cursor: "pointer" }}>Hot offers</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ cursor: "pointer" }}>Gift boxes</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ cursor: "pointer" }}>Projects</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ cursor: "pointer" }}>Menu item</Typography>
                </Grid>
                <Grid item>
                    <Box sx={{ cursor: "pointer" }}>
                        <Typography>Help</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} justifyContent={{ xs: 'center', md: 'flex-end' }} alignItems="center" spacing={2}>
                <Grid item sx={{ cursor: "pointer", display: "flex", gap: "5px" }}>
                    <Typography>English, USD</Typography>
                    <ExpandMore />
                </Grid>
                <Grid item sx={{ cursor: "pointer", display: "flex", gap: "5px" }}>
                    <Typography>Ship to</Typography>
                    <ExpandMore />
                </Grid>
            </Grid>
        </Grid>

        <Divider />
    </Box>;
};

export default SubNav;
