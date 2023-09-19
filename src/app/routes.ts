export const routes = {
  root: '/',
  home: '/home',
  edit: (username: string, topic: string) => `/${username}/${topic}/edit`,
  articles: (username: string, topic: string) => `/${username}/${topic}/articles`,
  dashboard: (username: string) => `/${username}/dashboard`,
}