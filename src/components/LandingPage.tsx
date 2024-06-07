import HeroSection from '@/features/products/HeroSection';
import Navbar from './shared/Navbar';
import SubNav from './shared/SubNav';

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <>
            <Navbar />
            <SubNav />
            <HeroSection />
        </>
    );
};

export default LandingPage;
