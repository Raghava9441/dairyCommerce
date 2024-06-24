import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 835) => {
    const [isMobile, setIsMobile] = useState(window.outerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.outerWidth <= breakpoint);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
