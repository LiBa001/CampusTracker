module.exports = {
    pwa: {
        name: 'KIT Campus Tracker',
        themeColor: '#009682',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            short_name: 'CampusTracker',
            start_url: '/',
            background_color: '#ffffff',
            display: 'standalone',
            description: 'A utility to simplify Covid-19 related contact tracing on the KIT Campus. Creates a list of your used rooms.',
        },

        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {}

    },
}