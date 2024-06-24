import HeroSection from '@/features/products/HeroSection';
import Navbar from './shared/Navbar';
import SubNav from './shared/SubNav';
import Products from '@/routes/Products';
import { Box } from '@mui/material';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <Box sx={{ backgroundColor: "#E5F1FF", padding:"1rem 4rem"}}>
                <HeroSection />
                <Products />
            </Box>
        </>
    );
};

export default LandingPage;
