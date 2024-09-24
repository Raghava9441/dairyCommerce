/// <reference types="vite-plugin-svgr/client" />
import { Box, Button, Divider, SvgIcon } from "@mui/material";
import { useThemeContext } from "../ThemeProviderWrapper ";
import Logo from "@/icons/logo-colored.svg?react";
import Profile from "@/icons/Profile.svg?react";
import Message from "@/icons/Message.svg?react";
import Orders from "@/icons/Orders.svg?react";
import Cart from "@/icons/Cart.svg?react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useNavigate } from "@tanstack/react-router";
import ProductSearch from "./ProductSearch";
import useIsMobile from "@/hooks/useIsMobile";
// import { ReactComponent as ReactLogo } from '../../icons/logo.svg';

type Props = {};

const ToggleTheme: React.FC = () => {
    const { toggleTheme, isDarkMode } = useThemeContext();
    return (
        isDarkMode ? (
            <Brightness4Icon onClick={toggleTheme} sx={{ cursor: "pointer", marginBottom: "10px", color: "white", height: "30px", width: "30px", marginLeft: "10px" }} />
        ) : (
            <NightlightRoundIcon onClick={toggleTheme} sx={{ cursor: "pointer", marginBottom: "10px", marginLeft: "10px" }} />
        )
    );
};

const Navbar = (props: Props) => {
    const isMobile = useIsMobile()
    const navigate = useNavigate();

    const handleSearch = (searchTerm: string, category: string) => {
        // Implement your search logic here
        console.log('Search term:', searchTerm);
        console.log('Category:', category);
        // Perform API call or any other action based on search term and category
    };
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px 4rem " }}>
                <Box>
                    <Logo style={{ cursor: "pointer" }} />
                </Box>
                <Box>
                    {
                        !isMobile && <ProductSearch onSearch={(searchTerm, category) => handleSearch(searchTerm, category)} />
                    }
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    {
                        isMobile ?
                            <>
                                <Cart style={{ cursor: "pointer" }} />
                                <Profile style={{ cursor: "pointer" }} onClick={() => navigate({ to: "/profile" })} />
                            </> :
                            <>
                                <Profile style={{ cursor: "pointer" }} onClick={() => navigate({ to: "/profile" })} />
                                <Message style={{ cursor: "pointer" }} />
                                <Orders style={{ cursor: "pointer" }} onClick={() => navigate({ to: "/orders" })} />
                                <Cart style={{ cursor: "pointer" }} />
                            </>
                    }
                    <ToggleTheme />
                </Box>
            </Box>
            {
                !isMobile && <Divider />
            }
        </>
    );
};

export default Navbar;
