import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient } from '@tanstack/react-query';
import { AuthContext } from '../hooks/useAuthHook';

type RouterContext = {
    auth: AuthContext;
    queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})