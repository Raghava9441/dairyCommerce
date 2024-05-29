import { redirect } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unAuthenticated')({
    beforeLoad: async ({ context }) => {
        const { isLogged } = context.auth;
        if (isLogged()) {
            throw redirect({ to: "/profile" });
        }
    }
})