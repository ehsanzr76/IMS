import Vue from 'vue'
import VueI18n from 'vue-i18n'

import fa from 'vuetify/lib/locale/fa'

Vue.use(VueI18n)

const messages = {
  fa: {
    ...require('@/locales/fa.json'),
    $vuetify: fa,
  },
}

export default new VueI18n({
  locale: 'fa',
  fallbackLocale: 'fa',
  messages,
})
