import { getRole } from './cookie';

export const ROLE_ADMIN = 'ADMIN';
export const ROLE_USER = 'CUSTOMER';

export const isUser = () => getRole() === ROLE_USER;
export const isAdmin = () => getRole() === ROLE_ADMIN;

export const isMobile = () => {
  const mobileTags = ['Mobi', 'Android', 'iPhone'];
  return mobileTags.some((tag) => navigator.userAgent.includes(tag));
};
