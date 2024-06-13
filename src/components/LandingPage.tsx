import HeroSection from '@/features/products/HeroSection';
import Navbar from './shared/Navbar';
import SubNav from './shared/SubNav';
import Products from '@/routes/Products';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <HeroSection />
            <Products />
        </>
    );
};

export default LandingPage;
