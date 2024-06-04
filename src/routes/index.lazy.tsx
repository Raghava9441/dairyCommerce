import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <></>
        // <ThemeProvider theme={lightTheme}>
        // <h3>Welcome Home!</h3>
        // </ThemeProvider>
    )
}