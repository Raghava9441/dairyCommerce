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
                <img src={Banner} alt="" style={{ width: "100%", height: "auto" }} />
            </Box>
        )
        : (
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "vh", padding: "20px", border: "1px solid white", borderRadius: "3px", bgcolor: "white" }}>
                    <Box sx={{ flex: "0 0 30%" }}>
                        <ProductTypes />
                    </Box>
                    <Box sx={{ flex: "0 0 50%" }}>
                        <img src={Banner} alt="Banner" style={{ width: "100%", height: "auto" }} />
                    </Box>
                    <Box sx={{ flex: "0 0 20%" }}>
                        Right content
                    </Box>
                </Box>
            </Box>
        );
};

export default HeroSection;
