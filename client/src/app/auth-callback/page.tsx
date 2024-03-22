import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { redirect } from "next/dist/server/api-utils";
import { useSearchParams, useRouter } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const apiResponse = await fetch('/api/whatever')

    const { data, error } = trpc.authCallback.useQuery();

    if (error) {
        // Handle error; redirect to login page
        console.error("Authentication check failed:", error);
        return <div>Error occurred, please try again later.</div>;
    }

    if (data && data.success) {
        // If authentication works then redirect user to dashboard
        const searchParams = new URLSearchParams(window.location.search);
        const origin = searchParams.get("origin");
        router.push(origin ? `/${origin}` : "/dashboard");
    }

    return <div>Performing authentication check...</div>

};

export default Page