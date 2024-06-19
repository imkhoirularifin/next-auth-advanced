/**
 * An array of public routes.
 * These routes are accessible to all users.
 * don't include the private routes here.
 */
export const publicRoutes = ['/'];

/**
 * Array of authentication routes.
 * @type {string[]}
 */
export const authRoutes: string[] = ['/auth/login', '/auth/register'];

/**
 * The prefix for API authentication routes.
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default login redirect path.
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
