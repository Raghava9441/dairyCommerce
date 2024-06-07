import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/cart')({
    component: () => <div>Hello /cart!</div>,
});
