import { UserButton as ClerkUserButton, useUser } from "@clerk/react-router";

export function UserButton() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-700">
        Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
      </span>
      <ClerkUserButton 
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "w-8 h-8",
          },
        }}
      />
    </div>
  );
}