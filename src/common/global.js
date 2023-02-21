import {
  getRole,
  removeRole,
  removeToken,
  removeUser,
  removeUserId,
} from './cookie';

export const ROLE_ADMIN = 'ADMIN';
export const ROLE_USER = 'CUSTOMER';

export const isUser = () => getRole() === ROLE_USER;
export const isAdmin = () => getRole() === ROLE_ADMIN;

export const isMobile = () => {
  const mobileTags = ['Mobi', 'Android', 'iPhone'];
  return mobileTags.some((tag) => navigator.userAgent.includes(tag));
};

export const logout = () => {
  removeToken();
  removeUser();
  removeRole();
  removeUserId();
  import('@/router').then((module) => {
    module.default.push('/');
  });
};

export const onlyAllowNumber = (value) => !value || /^\d+$/.test(value);

export const getTableMaxHeight = (
  containerSelector,
  filterSelector,
  actionSeletor
) => {
  const $ = (selector) => document.querySelector(selector);
  const containerHeight = $(containerSelector);
  let otherDomsHeight = 0;
  // TODO: 更灵活的计算

  if (filterSelector) {
    otherDomsHeight += $(filterSelector).offsetHeight;
  }
  if (actionSeletor) {
    otherDomsHeight += $(actionSeletor).offsetHeight;
  }
  return containerHeight.offsetHeight - otherDomsHeight;
};

export function resetParams(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      obj[key] = null;
    }
  }
}
