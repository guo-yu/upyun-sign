var base64 = require('js-base64').Base64;
var md5 = require('blueimp-md5').md5;

module.exports = createSignature;

/**
*
* [Create signature and policy strings from upyun params]
* @param {String} form_api_secret
* @param {Object} params the params object to be upload
*
**/
function createSignature(form_api_secret, params) {
  var tokens = {};

  if (!form_api_secret) 
    return tokens;

  if (params && typeof(params) !== 'object') 
    return tokens;

  try {
    tokens.policy = base64.encode(JSON.stringify(params || defaultParams()));
  } catch (err) {
    throw err;
  }

  tokens.signature = md5(tokens.policy + '&' + form_api_secret);

  return tokens;
}

function defaultParams() {
  return {
    'expiration': (new Date().getTime()) + 600,
    'save-key': '/{year}/{mon}/{day}/upload_{filemd5}{.suffix}',
    'allow-file-type': 'jpg,jpeg,gif,png'
  }
}
