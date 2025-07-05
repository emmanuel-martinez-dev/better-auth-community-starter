import { SignoutButton } from "@/components/auth/signup-button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const HomePage = async () => {
    const session = await authClient.getSession();
    if (!session) {
        redirect("/login");
    }   
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            This is the home page
            <SignoutButton />
        </div>
    )
}

export default HomePage;