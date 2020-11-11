import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import namespaces from '../namespaces';
import { TranslateData } from '../translations.types';

type TranslateFunction = (data: TranslateData) => string;
type Namespace = keyof typeof namespaces;

/**
 * Returns a translate function
 * @param ns namespace or array of the namespaces where to check the translation
 */
const useTranslate = (ns: Namespace | Namespace[]): TranslateFunction => {
  const { t } = useTranslation(ns);

  return useCallback((data: TranslateData) => t(data.key, { defaultValue: data.defaultValue }), [
    t,
  ]);
};

export default useTranslate;
