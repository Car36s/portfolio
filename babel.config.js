const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
]

const clientPlugins = [
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
]

module.exports = (api) => {
    api.cache(true)

    plugins.push(...clientPlugins)

    return {
        presets: ['@babel/preset-react'],
        plugins,
    }
}
