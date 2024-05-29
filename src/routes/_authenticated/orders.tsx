import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/orders')({
    loader: ({ context: { queryClient } }) => {
        queryClient
    },
    component: () => <div>Hello /orders!</div>
})