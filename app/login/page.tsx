import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";

const Loginpage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
           <Card className="w-[350px]">Create an account
            <CardHeader>
             <CardDescription>Using your preferred login method</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <Button className="w-[45%]" variant="outline">
                        <FaGithub />    
                        Github  
                    </Button>
                    <Button className="w-[45%]" variant="outline">
                        <FcGoogle />    
                        Google  
                    </Button>
                </div>
            </CardContent>
           </Card>
        </div>
    )
}

export default Loginpage;