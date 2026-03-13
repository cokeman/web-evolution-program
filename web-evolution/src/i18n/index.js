import es from './es';
import en from './en';

const langs = { es, en };
const lang = process.env.REACT_APP_LANG || 'es';
const t = langs[lang] || es;

export default function useTranslations() {
  return t;
}

export { t };
