import React from 'react';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import ko from './lang/ko';
import en from './lang/en';

i18n.translation = {ko, en};

i18n.fallbacks = true;

const defaultLanguage = {languageTag: 'ko', isRTL: false};
const availableLanguages = Object.Keys(i18n.translations);

i18n.locale = languageTag;

export default i18n;
