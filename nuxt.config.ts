// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		assets: '/<rootDir>/assets',
	},
	css: [
		'~/assets/main.scss',
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
		'vue-toast-notification/dist/theme-default.css',
	],
	build: {
		transpile: ['vuetify'],
	},
	// modules: ['@vee-validate/nuxt'],
});

