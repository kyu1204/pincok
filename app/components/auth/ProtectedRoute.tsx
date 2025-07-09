import { useUser } from "@clerk/react-router";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: string;
}

export function ProtectedRoute({ children, fallback = "/sign-in" }: ProtectedRouteProps) {
  const { isSignedIn, isLoaded } = useUser();

  // 로딩 중일 때는 스피너 표시
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  if (!isSignedIn) {
    return <Navigate to={fallback} replace />;
  }

  return <>{children}</>;
}