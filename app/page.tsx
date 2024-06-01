import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { SignIn } from "@/components/page";
const user = async () => {
  const user = await prisma.user.findMany();
  return user;
};

export default async function Home() {
  const users = await user();
  const session = await auth();
  console.log("Bukky:", users);
  return (
    <div className="text-xl">
      <p>
        {users.map((user) => {
          return user.email;
        })}
      </p>
      <p>Dan May</p>
      <p>You must be: {session?.user?.name} and you are an arsehole.</p>
      <SignIn />
    </div>
  );
}
