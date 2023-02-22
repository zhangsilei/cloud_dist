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

export function parseUrlToPath(url) {
  const testEnv = 'http://116.63.139.2/';
  const prodEnv = 'http://176.123.9.123:8080/';

  const isServer = () => location.hostname !== 'localhost';
  const endWithSlash = (str) => str.charAt(str.length - 1) === '/';
  const startWithSlash = (str) => str.substring(0, 1) === '/';

  if (isServer(url)) return url;

  return endWithSlash(testEnv) && startWithSlash(url)
    ? testEnv + url.slice(1, url.length)
    : testEnv + url;
}

export const TYPE_DIR_FAVORITE = 0;
export const TYPE_DIR_VIDEO = 0;
export const TYPE_DIR_PICTURE = 0;
