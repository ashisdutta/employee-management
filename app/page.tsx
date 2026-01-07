import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";

export default async function Home() {
  const session = await getServerSession(authOption);
  const role = session?.user.role;
  if (session) {
    if (role === "Admin") {
      redirect("/dashboard");
    } else {
      redirect("/employeedashboard");
    }
  } else {
    redirect("/login");
  }
}
