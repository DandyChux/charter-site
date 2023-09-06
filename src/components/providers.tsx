"use client"

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { env } from "~/env.mjs";
import { trpc } from "~/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";
import superjson from 'superjson';

export default function Providers({ children }: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient({}))
    const [trpcClient] = useState(() => 
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${env.NEXT_PUBLIC_API_URL}/trpc`,
                })
            ],
            transformer: superjson,
        }))

    return (
        <trpc.Provider queryClient={queryClient} client={trpcClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}