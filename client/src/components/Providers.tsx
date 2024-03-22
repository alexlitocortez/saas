"use client"

import { QueryClient } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { ReactNode, useState } from "react"
import { trpc } from "src/app/_trpc/client"

const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:3000/api/trpc',
                })
            ]
        })
    )

    return (
        <trpc.Provider
            client={trpcClient}
            queryClient={queryClient}>
            {children}
        </trpc.Provider>
    )
}

export default Providers