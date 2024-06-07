import { ErrorComponent, RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { Spinner } from './components/Spinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';
import { useAuthHook } from './hooks/useAuthHook';
import { ThemeProviderWrapper, useThemeContext } from './components/ThemeProviderWrapper ';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
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

const ToggleButton: React.FC = () => {
    const { toggleTheme } = useThemeContext();
    return (
        <Button variant="contained" color="secondary" onClick={toggleTheme} size="small">
            Theme
        </Button>
    );
};

function App() {
    const isLogged = useAuthHook();

    return (
        <ThemeProviderWrapper>
            <QueryClientProvider client={queryClient}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <ToggleButton />
                </div>
                <RouterProvider
                    router={router}
                    context={{
                        auth: isLogged,
                    }}
                />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </QueryClientProvider>
        </ThemeProviderWrapper>
    );
}

export default App;
