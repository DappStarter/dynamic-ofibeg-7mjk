require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note rural snake give clinic slot gesture'; 
let testAccounts = [
"0x3706fafe39a1c3bc8aca1e8425924cc407244f0c6ba863bb400d72265774dc80",
"0x38acc00301602faa4dbfc7b5068efa42866dd09cb1690a96432fbc3d61c70eb0",
"0xf58bf330e9d0a3dfd1f21a2c2e9e6c0e2da034089b64ccc102e690287a5c6bd2",
"0x3299d4769255dad65966433c0af1ec865a3e77ce8ede0fcb741d5a45233e5b24",
"0x7086208f4d1547e29edc8e448bc6b9ff6be7938735c3e2a76457f6879ea9f53d",
"0x9bd02b3c82fc0b1e2d5642bd684219c5599ccf90903229f042a394f968e79630",
"0x7c7b5c6b9ffcf90a04ca27b49c4f89e5e135b5cf958e3b5e8de59d8868d0dd4d",
"0x7c1726a28cdbd65c0cbb8d026958780e92542cd6d92de863d95c25f021162ba5",
"0x41e93de23269fb71a87cf6e081b17274fbeabe293127eb265071bf5d3f0ebbb8",
"0xbb3593e239f3733e5c7d2c73ef09cd02b19a08a6e6691f838bf80cefcff9f848"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


