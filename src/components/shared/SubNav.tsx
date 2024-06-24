import { Box, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import Menu from "@/icons/menu.svg?react";
import ExpandMore from "@/icons/expand_more.svg?react";
import useIsMobile from "@/hooks/useIsMobile";

const SubNav = () => {
    const isMobile = useIsMobile()

    return isMobile ? (
        <>
            <TextField
                placeholder="Search for products, brands and more"
                fullWidth
            />
        </>
    )
        : (
            <>
                <Box sx={{ padding: "5px 4rem " }}>
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
                </Box>
                <Box sx={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)' }}>
                    <Divider />
                </Box>
            </>
        )
};

export default SubNav;
