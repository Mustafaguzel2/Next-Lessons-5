const { default: ReduxProvider } = require("@/provider");
import { auth } from "@/auth";
import Loading from "@/loading";
import { Suspense } from "react";

async function CommonLayout({ children }) {
    const getSession = await auth();

    return (
        <div>
            <ReduxProvider getSession={getSession} >
                <Suspense fallback={<Loading />}>{children}</Suspense>
                </ReduxProvider>
        </div>
    )
    
}

export default CommonLayout;