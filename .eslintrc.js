module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/max-attributes-per-line': [2, {
            singleline: 10,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'space-before-function-paren': [2, 'never'],
        // camelcase: [2, {
        //     properties: 'always'
        // }]
    }
}