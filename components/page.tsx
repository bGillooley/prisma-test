import { signIn, signOut } from "@/auth";

export function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}>
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <button className="bg-white text-black font-xl" type="submit">
          Signout with Google
        </button>
      </form>
    </>
  );
}
