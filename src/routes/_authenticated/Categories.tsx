import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/Categories')({
    component: () => <div>Hello /_authenticated/Categories!</div>
})