module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/codebright.test/'
      : '/',
  lintOnSave: false,
  outputDir: 'docs',
  assetsDir: "assets"
};