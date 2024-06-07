import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/Adresses')({
    component: () => <div>Hello /_authenticated/Adresses!</div>,
});
