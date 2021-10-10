module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fake-yiban/dist/'
        : '/',
    pwa: {
        name: 'Fake Yiban',
        themeColor: '#6cb0f9',
        manifestOptions: {
            name: 'Fake Yiban: 不一般的易班',
            backgroundColor: '#6cb0f9'
        }
    }
}