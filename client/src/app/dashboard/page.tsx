import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server"
import { redirect } from "next/navigation"
import Dashboard from "src/components/Dashboard"

const Page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const


    // If userData is null, redirect to auth callback with a URL
    if (!user || !user.id) {
        redirect('/auth-callback?origin=dashboard');
    }

    // return <div>{user && user.email}</div>
    return <Dashboard />
}

export default Page