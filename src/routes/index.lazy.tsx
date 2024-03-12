import { ThemeProvider } from '@emotion/react';
import { createLazyFileRoute } from '@tanstack/react-router';
import theme from '../theme';

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <ThemeProvider theme={theme}>
            <h3>Welcome Home!</h3>
        </ThemeProvider>
    )
}