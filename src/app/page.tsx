import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "@/components/template/button";
import { User } from "@/components/template/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";


export default async function App() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
        <User />
      </div>
    </main>
  )
}
