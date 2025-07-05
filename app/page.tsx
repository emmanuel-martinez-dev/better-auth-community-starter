import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LandingPage = async () => {
  const session = await authClient.getSession();
  if (session) {
    redirect("/home");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
       This is the landing page
      <Link href="/login">
        <Button>Login</Button>
      </Link> 
    </div>
  )
}

export default LandingPage;
