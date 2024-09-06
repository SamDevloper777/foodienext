
import { signIn } from "@/auth"
import { FcGoogle } from "react-icons/fc"

export function SignIn() {
    return (
        <div className="flex flex-1 h-screen justify-center items-center">
            <div className="bg-white border rounded-lg shadow-lg">
            <h1 className="text-xl font-bold p-4 text-center  ">Login to Foodie app</h1>
                <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <button className="text-red-600 flex shadow-lg gap-1 w-[400px] items-center justify-center" type="submit">
                        <div className="flex items-center border-slate-400 border rounded-xl mb-3 px-3">
                        <FcGoogle/>
                        <span className="py-2">SignIn With Google</span>
                        </div>
                    </button>
                </form>


            </div>
        </div>
    )
} 