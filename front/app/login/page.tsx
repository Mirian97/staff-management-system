import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "./_components/login-form";

const Login = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entrar
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
