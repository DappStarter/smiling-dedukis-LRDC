require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note muscle prosper install forget fresh genius'; 
let testAccounts = [
"0xd22ad4e1a5576e4bd77690188e74a2ee8d5f0733135372c77467f7e4d576f097",
"0x64375f9a570f0e87da3f16281321d8111ad5474b6c7cd5f40f3a5f06d034bd5e",
"0x84c196638f30418994bb1fc74ca850a132230391099bab15c817182de17eb4f5",
"0x9288ff374e643e5dd38c43ee3e372feb03058a7737c3442c3873b2e2b0bd3dfc",
"0x897a63e932d3777919d4c0d8fabaa1e366271bfd32a1e8a3ccbee0d2fecd772a",
"0x5df6891ce569f100949b0f0703b06ee7b603fe59612c74504aee979a4c8391e2",
"0xccfdc0ad218841ef23ac6926ee3936ed9c5a5e22aba0a83505ace7e67ff7fb67",
"0x25625b40b8eebab37ca3896ce1518538fc56d67a63c92a7b396e0d6ebabdaa09",
"0x65687bc8952aa1ec332a36b9073fb59975600e6f6457331f8b92157659707900",
"0x502e94fc5ddff0b27b2c1b203210337e105e4566942d2db3c611bca767d50c51"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

