
// Available languages
import I18n from 'react-native-i18n';
I18n.fallbacks = true;
I18n.translations = {
    'en': require('./en'),
    'ru': require('./ru')
};
export { I18n };