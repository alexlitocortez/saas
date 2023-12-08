import * as React from "react"

import { Button } from "../../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"


export default function CreateAccount() {
    return (
        <>
            <Card className="w-[350px] bg-black">
                <CardHeader>
                    <CardTitle className="text-white">Create Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input id="first_name" className="text-white bg-black" placeholder="First Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input id="last_name" className="text-white bg-black" placeholder="Last Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" className="text-white bg-black" placeholder="Password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" className="bg-black text-white">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </>
    )
}
