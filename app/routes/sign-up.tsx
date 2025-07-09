import { SignUp } from "@clerk/react-router";
import { requireGuest } from "~/lib/auth";
import type { LoaderFunctionArgs } from "react-router";

export async function loader(args: LoaderFunctionArgs) {
  await requireGuest(args);
  return null;
}

export function meta() {
  return [
    { title: "Sign Up - Pincok" },
    { name: "description", content: "Create your Pincok account" },
  ];
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join Pincok and start sharing your favorite places
          </p>
        </div>
        <SignUp 
          routing="path" 
          path="/sign-up"
          afterSignUpUrl="/map"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  );
}