import { ErrorComponent, RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { Spinner } from './components/Spinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Button } from '@mui/material';
import { useAuthHook } from './hooks/useAuthHook';
import { ThemeProviderWrapper, useThemeContext } from './components/ThemeProviderWrapper ';
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 120000,
            retry: false,
        },
    },
});

const router = createRouter({
    routeTree,
    defaultPendingComponent: () => (
        <div className={`p-2 text-2xl`}>
            <Spinner />
        </div>
    ),
    defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
    context: {
        auth: undefined!, // We'll inject this when we render
        queryClient,
    },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}



function App() {
    const isLogged = useAuthHook();

    return (
        <ThemeProviderWrapper>
            <QueryClientProvider client={queryClient}>
                
                <RouterProvider
                    router={router}
                    context={{
                        auth: isLogged,
                    }}
                />
            </QueryClientProvider>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />
        </ThemeProviderWrapper>
    );
}

export default App;
