import { routes } from '@/app/routes';
import { useSession } from 'next-auth/react';
import { useParams, usePathname } from 'next/navigation';

export const useAuth = () => {
  const { data: session } = useSession();
  const params = useParams();
  const pathname = usePathname();
  const currentUseername = params.user as string ?? "";
  const currentTopic = params.topic as string ?? "";
  const authenticatedUsername = session?.user?.name ?? "";
  const isAuthenticated = (typeof authenticatedUsername === 'string');

  const isSameUsername = () => {
    return authenticatedUsername === currentUseername;
  }

  const retrieveDynamicValue = (key: string)  => {
    return params[key] as string ?? "";
  }

  const isAuthenticatedDashboardPage = () => {
    return pathname === routes.dashboard(authenticatedUsername);
  }
  
  const isAuthenticatedEditPage = () => {
    return pathname === routes.edit(authenticatedUsername, currentTopic);
  }
  
  const isAuthenticatedArticlePage = () => {
    return pathname === routes.articles(authenticatedUsername, currentTopic);
  }

  const hasTopic = () => {
    return true;
  }

  return {
    isAuthenticated,
    authenticatedUsername,
    currentUseername,
    currentTopic,
    isAuthenticatedDashboardPage,
    isAuthenticatedEditPage,
    isAuthenticatedArticlePage,
    retrieveDynamicValue,
    isSameUsername,
    hasTopic,
  }
}