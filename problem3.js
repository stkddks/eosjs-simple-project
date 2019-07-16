const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const { PrivateKey, PublicKey, Signature, Aes, key_utils, config } = require('eosjs-ecc');
const { TextEncoder, TextDecoder } = require('util');
const fetch = require('node-fetch');

let privateKeys = [];// user private keys
const rpc = new JsonRpc('http://192.168.1.75:8010', { fetch });
const signatureProvider = new JsSignatureProvider(privateKeys);
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

async function main() {
    try{
        const result = await rpc.get_account("baekseok1115");
        console.log(result.core_liquid_balance);
        //console.log(result.timestamp);
        //console.log(result.producer);

    }catch(error){
        console.error(error);   //파란색의 error는 에러내용이 들어가있는 변수다.

    }

}

main();