const publicPath = process.env.NODE_ENV === 'production'
        ? '/fake-yiban/dist/'
        : '/';

module.exports = {
    publicPath,
    pwa: {
        name: 'Fake Yiban',
        themeColor: '#6cb0f9',
        msTileColor: '#6cb0f9',
        manifestOptions: {
            name: 'Fake Yiban: 不一般的易班',
            background_color: 'white'
        },

        workboxOptions: {
            cleanupOutdatedCaches: true,
            exclude: [
                'manifest.json',
                'robots.txt'
            ]
        }
    }
}
