"use client"

import { useState } from "react"

import { Button } from "../../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export default function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "username": username, "password": password })
            });

            if (response.ok) {
                // Registration successful, navigate to the success page
                window.location.href = '/welcome';
            } else {
                // Handle registration error
                console.error('Registration failed:', await response.json());
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
        }
    }

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
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" className="text-white bg-black" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" className="text-white bg-black" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button onClick={handleRegister}>Register</Button>
                </CardFooter>
            </Card>
        </>
    )
}
