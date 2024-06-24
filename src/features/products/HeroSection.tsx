import useIsMobile from "@/hooks/useIsMobile";
import { Box } from "@mui/material";
import Banner from "@/icons/banner.png"
import ProductTypes from "@/components/ProductTypes";

type Props = {};

const HeroSection = (props: Props) => {
    const isMobile = useIsMobile()
    return isMobile ?
        (
            <Box>
                Mobile
            </Box>
        )
        : (
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "vh", padding: "20px", border: "1px solid white", borderRadius: "3px", bgcolor: "white" }}>
                    <ProductTypes />
                    <Box><img src={Banner} alt="" /></Box>
                    <Box>right</Box>
                </Box>
            </Box>
        );
};

export default HeroSection;
