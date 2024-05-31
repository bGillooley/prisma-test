import prisma from "@/lib/prisma";

const user = async () => {
  const user = await prisma.user.findMany();
  return user;
};

export default async function Home() {
  const users = await user();
  console.log("Bukky:", users);
  return (
    <div className="text-xl">
      <p>
        {users.map((user) => {
          return user.email;
        })}
      </p>
      <p>Dan May</p>
    </div>
  );
}
