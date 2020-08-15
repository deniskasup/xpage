module.exports = {
    plugins: [
        require('postcss-sort-media-queries')({
            sort: 'mobile-first'
        }),
        require('autoprefixer')({
            grid: true
        }),
        require('cssnano')
    ]
}