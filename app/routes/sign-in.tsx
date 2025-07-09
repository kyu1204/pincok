import { SignIn } from "@clerk/react-router";
import { requireGuest } from "~/lib/auth";
import type { LoaderFunctionArgs } from "react-router";

export async function loader(args: LoaderFunctionArgs) {
  await requireGuest(args);
  return null;
}

export function meta() {
  return [
    { title: "Sign In - Pincok" },
    { name: "description", content: "Sign in to your Pincok account" },
  ];
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your Pincok account
          </p>
        </div>
        <SignIn 
          routing="path" 
          path="/sign-in"
          afterSignInUrl="/map"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
}