
import { useSearchParams, useRouter } from "next/navigation";
import { trpc } from "../_trpc/client";
import { error } from "console";


const Page = async () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data, isLoading } = trpc.authCallback.useQuery();

    // const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    //     onSuccess: ({ success }) => {
    //         if (success) {
    //             // user is synced to db
    //             router.push(origin ? `/${origin}` : '/dashboard')
    //         }
    //     },
    //     onError: (err) => {
    //         if (err.data?.code === "UNAUTHORIZED") {
    //             router.push("/sign-in")
    //         }
    //     },
    //     retry: true,
    //     retryDelay: 500,
    // })

    // return (
    //     <div className='w-full mt-24 flex justify-center'>
    //         <div className='flex flex-col items-center gap-2'>
    //             {/* <Loader2 className='h-8 w-8 animate-spin text-zinc-800' /> */}
    //             <h3 className='font-semibold text-xl'>
    //                 Setting up your account...
    //             </h3>
    //             <p>You will be redirected automatically.</p>
    //         </div>
    //     </div>
    // )

    if (isLoading) {
        return <div>Performing authentication check...</div>
    }


    if (error && (error as any).data && (error as any).data.code === "UNAUTHORIZED") {
        // Handle error; redirect to login page
        router.push("/sign-in")
        return null;
    }

    if (data && data.success) {
        // If authentication works then redirect user to dashboard
        const searchParams = new URLSearchParams(window.location.search);
        const origin = searchParams.get("origin");
        router.push(origin ? `/${origin}` : "/dashboard");
    }

};

export default Page