import English from './english.language';
import Indonesia from './bahasa.language';
import {result} from 'lodash';

const current = {
  id: 'id'
};

const languageMap = {
  en: {id: 'en', label: 'English', translation: English},
  id: {id: 'id', label: 'Indonesia', translation: Indonesia}
};

export default {
  get language () {
    const selectedLangugage = languageMap[result(current, 'id', 'id')];
    return selectedLangugage.translation;
  },
  setCurrentLang (languageId) {
    current.id = languageId;
    return languageId;
  },
  languageMap
};
