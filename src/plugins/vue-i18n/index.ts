import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18n = createI18n({
    locale: "en", // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
    globalInjection: true,
});

export default i18n;