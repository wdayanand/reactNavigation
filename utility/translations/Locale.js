
// Available languages
import I18n from 'react-native-i18n';
translations = {
    'en': require('./en')
};
I18n.fallbacks = true;
I18n.translations=translations;
export { I18n };