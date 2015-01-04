var md5 = require('blueimp-md5').md5;
var base64 = require('js-base64').Base64;

module.exports = createSignature;

/**
*
* [Create signature and policy strings from upyun params]
* @param {String} form_api_secret
* @param {Object} params the params object to be upload
*
**/
function createSignature(params) {
  var tokens = {};

  if (!params.form_api_secret || !params.bucket) 
    return tokens;

  if (!params.expiration)
    params.expiration = (new Date().getTime()) + 10000;

  if (!params['save-key'])
    params['save-key'] = '/{year}/{mon}/{day}/upload_{filemd5}{.suffix}';

  if (!params['allow-file-type'])
    params['allow-file-type'] = 'jpg,jpeg,gif,png';

  if (params._)
    delete params._;

  try {
    tokens.policy = base64.encode(JSON.stringify(params));
  } catch (err) {
    throw err;
  }

  tokens.signature = md5(tokens.policy + '&' + params.form_api_secret);

  return tokens;
}
