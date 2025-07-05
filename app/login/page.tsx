import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { LoginButton } from "@/components/auth/login-button";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const Loginpage = async () => {
    const session =  await getSession();

    if(session) redirect("/home");

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
           <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>
                Create an account
            </CardTitle>
             <CardDescription>Using your preferred login method</CardDescription>
            </CardHeader>
            <CardContent>
                <LoginButton />
            </CardContent>
           </Card>
        </div>
    )
}

export default Loginpage;