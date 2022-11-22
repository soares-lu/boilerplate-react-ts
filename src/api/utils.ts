export type IParamsOptions = {
  [prop: string]: string | string[] | number;
};

export const convertToParams = (options: IParamsOptions) => {
  const params = Object.entries(options).reduce((acumulator, el, index, arr) => {
    let uniqQueryStr = '';
    const prop = el[0];
    const value = el[1];

    if (Array.isArray(value)) {
      uniqQueryStr = `${prop}=${value.join(',')}`;
    } else {
      uniqQueryStr = `${prop}=${value}&`;
    }

    if (arr?.length - 1 == index) {
      return (acumulator + uniqQueryStr).replace(/&$/, '');
    }

    return acumulator + uniqQueryStr;
  }, '?');

  return encodeURI(params);
};
