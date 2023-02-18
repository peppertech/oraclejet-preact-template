import path from 'path';

export default (config, env, helpers, options) => {
  // Add @oracle/oraclejet-preact to Webpack dev server static path
  const oraclejetPreact = path.join(__dirname, 'node_modules/@oracle/oraclejet-preact/es');
  config.resolve.alias['@oracle/oraclejet-preact'] = '@oracle/oraclejet-preact/es'

  const devServer = config.devServer;
  if (devServer) {
    if (devServer.static.push) {
      devServer.static.push({ directory: oraclejetPreact });
    } else {
      devServer.static = [
        devServer.static,
        { directory: oraclejetPreact }
      ]
    }
  }
} 