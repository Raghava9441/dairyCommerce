import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient } from '@tanstack/react-query';
import { AuthContext } from '../hooks/useAuthHook';
import { Box } from '@mui/material';

type RouterContext = {
    auth: AuthContext;
    queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <Box sx={{ marginTop: "10px" }}>
            <Outlet />
            <TanStackRouterDevtools />
        </Box>
    ),
});
