import locale from "../i18n/fr";

export const renameKeys = (obj, pageName) => {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = locale.resources[pageName].fields[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};
