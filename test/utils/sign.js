function toEthSignedMessageHash(messageHex) {
  const messageBuffer = Buffer.from(messageHex.substring(2), "hex");
  const prefix = Buffer.from(`\u0019Ethereum Signed Message:\n${messageBuffer.length}`);
  return web3.utils.sha3(Buffer.concat([prefix, messageBuffer]));
}

function toMessageHash(message) {
  return web3.utils.sha3(message);
}

async function signMessageHash(messageHash, signer) {
  return await web3.eth.sign(messageHash, signer);
}

async function signMessageHashWithPrivateKey(messageHash, privateKey) {
  let result = await web3.eth.accounts.sign(messageHash, privateKey);
  return result.signature;
}

module.exports = {
  toEthSignedMessageHash,
  toMessageHash,
  signMessageHash,
  signMessageHashWithPrivateKey
};
