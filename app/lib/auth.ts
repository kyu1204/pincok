import { getAuth } from "@clerk/react-router/ssr.server";
import { redirect } from "react-router";
import type { LoaderFunctionArgs } from "react-router";

/**
 * 서버 사이드에서 인증된 사용자 정보를 가져옵니다
 */
export async function getAuthUser(args: LoaderFunctionArgs) {
  return await getAuth(args);
}

/**
 * 인증이 필요한 페이지에서 사용하는 로더 함수
 */
export async function requireAuth(args: LoaderFunctionArgs) {
  const auth = await getAuthUser(args);
  
  // Clerk auth 객체에서 userId 추출
  const userId = (auth as any)?.userId || null;
  
  if (!userId) {
    throw redirect("/sign-in");
  }
  
  return userId;
}

/**
 * 이미 로그인한 사용자가 접근하면 안 되는 페이지에서 사용
 */
export async function requireGuest(args: LoaderFunctionArgs) {
  const auth = await getAuthUser(args);
  
  // Clerk auth 객체에서 userId 추출
  const userId = (auth as any)?.userId || null;
  
  if (userId) {
    throw redirect("/map");
  }
  
  return null;
}