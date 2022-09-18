const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({


    transpileDependencies: ['vuetify'],

    pluginOptions: {
        i18n: {
            locale: 'fa',
            fallbackLocale: 'fa',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
})
