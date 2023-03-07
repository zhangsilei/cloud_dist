import {
  getRole,
  removeRole,
  removeToken,
  removeUser,
  removeUserId,
} from './cookie';
import createEnum from './createEnum';
import moment from 'moment';

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
  const testEnv = 'http://140.210.213.108/';
  const prodEnv = 'http://176.123.9.123:8080/';

  const isServer = () =>
    location.hostname !== 'localhost' || url.indexOf('http') === 0;
  const isLocalImg = () => url.indexOf('/img/') !== -1;
  const endWithSlash = (str) => str.charAt(str.length - 1) === '/';
  const startWithSlash = (str) => str.substring(0, 1) === '/';

  if (isServer() || isLocalImg()) return url;

  return endWithSlash(testEnv) && startWithSlash(url)
    ? testEnv + url.slice(1, url.length)
    : testEnv + url;
}

export const resourceTypeEnum = createEnum({
  VIDEOS: ['VIDEO', 'Videos'],
  PHOTOS: ['PICTURE', 'Photos'],
});

export const favoriteTypeEnum = createEnum({
  FAVORITE: ['Most_favorite', 'Most favorite'],
  MY_FAVORITE: ['My_favorite', 'My favorite'],
});

export const popularCategoryEnum = createEnum({
  POPULAR: ['popularity', 'Popularity'],
});

export const resourceSortEnum = createEnum({
  DEFAULT: ['', '默认'],
  POPULAR: ['like_num', '人气'],
});

export function filterTableMater(id, arr) {
  const queue = [...arr];
  while (queue.length) {
    const o = queue.shift();
    if (o.id === id) return o;
    queue.push(...(o.items || []));
  }
}

export function getBreadcrumbCategory(arr, id, result = []) {
  const re = filterTableMater(id, arr);
  if (!re) return result;
  result.unshift(re.name);
  if (re.parent_category_id) {
    return getBreadcrumbCategory(arr, re.parent_category_id, result);
  }
  return result;
}

export function formatDate(second, format) {
  return moment(second * 1000).format(format || 'YYYY-MM-DD HH:mm:ss');
}

export const RESOURCE_TYPE_VIDEO = 1;
export const RESOURCE_TYPE_PICTURE = 2;

export const DIR_FAVORITE_KEY = 'Most favorite';
export const DIR_FAVORITE_LABEL = 'Most favorite';
export const DIR_MY_FAVORITE_KEY = 'My favorite';
export const DIR_MY_FAVORITE_LABEL = 'My favorite';

export const DIR_VIDEOS_KEY = 1;
export const DIR_VIDEOS_LABEL = 'Videos';
export const DIR_PHOTOS_KEY = 2;
export const DIR_PHOTOS_LABEL = 'Photos';

export const DEFAULT_SORT_KEY = '';
export const DEFAULT_SORT_LABEL = '默认';
export const POPULAR_SORT_KEY = 'like_num';
export const POPULAR_SORT_LABEL = '人气';

export const POPULAR_CATEGORY_KEY = 'popularity';
export const POPULAR_CATEGORY_VALUE = 'Popularity';
