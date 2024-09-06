import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit " className="bg-red-500 px-3 py-2 text-white rounded-lg">Sign Out</button>
    </form>
  )
}