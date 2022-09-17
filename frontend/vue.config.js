const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    // devServer: {
    //   allowedHosts: true,
    // },

    transpileDependencies: ['vuetify'],

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
})
