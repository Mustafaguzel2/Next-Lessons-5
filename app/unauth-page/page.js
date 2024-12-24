import { auth } from "@/auth";
import { redirect } from "next/navigation";
async function UnauthPage() {
    const getSession = await auth();

    if(getSession?.user) {
        redirect('/');
    }
    return (
        <div className="p-20">
            <h1 className="text-5xl font-extrabold">You are not logged in. Please login!</h1>
        </div>
    );
}
export default UnauthPage;