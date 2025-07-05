"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export const LoginButton = () => {
    const signInWithGithub = async () => await authClient.signIn.social({
       callbackURL: "/home",
       provider: "github",  
    });

    const signInWithGoogle = async () => await authClient.signIn.social({
        callbackURL: "/home",
        provider: "google",
    });
    
    return (
        <div className="flex items-center justify-between">
            <Button 
            className="w-[45%]" 
            variant="outline"
            onClick={signInWithGithub}
            >
                <FaGithub />
                Github  
            </Button>
            <Button 
            className="w-[45%]" 
            variant="outline"
            onClick={signInWithGoogle}
            >
                <FcGoogle />
                Google  
            </Button>
        </div>
    )
}