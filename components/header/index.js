'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { loginAction } from "@/actions/action";
import { logoutAction } from "@/actions/action";
function Header({getSession}) {

    console.log(getSession,'get session in header');
    async function handleOauthSignIn() {
        await loginAction();
    }
    async function handleOauthSignOut() {
        await logoutAction();
    }
    return (
        <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-screen">
                <Link href={'/'} className="text-2xl font-bold">
                    Shopping Cart
                </Link>
                </div>
                    <ul className="flex gap-7 items-center justify-center mr-8 text-lg font-semibold">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/cart'}>Cart</Link>
                        </li>
                    </ul>
                <div className="flex space-x-3">
                    <form action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}>
                        <Button type='submit'>
                            {getSession?.user ? 'Sign Out' : 'Sign In'}
                        </Button>
                    </form>
                </div>
        </header>
    );
}
export default Header;