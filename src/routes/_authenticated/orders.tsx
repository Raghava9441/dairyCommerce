import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/orders')({
    component: () => <div>Hello /_authenticated/orders!</div>,
});
