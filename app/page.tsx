import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { SignIn } from "@/components/page";

export default async function Home() {
  const session = await auth();
  console.log(session ? session.user?.email : "nothing there");
  if (session?.user && session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email || "",
      },
    });

    return (
      <div className="text-xl">
        Logged IN!
        {user?.role}
        <SignIn />
      </div>
    );
  } else {
    return (
      <div className="text-xl">
        Logged OUT!
        <SignIn />
      </div>
    );
  }
}
