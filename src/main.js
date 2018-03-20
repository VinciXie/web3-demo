var Web3 = require('web3');
console.log('hello! Web3.givenProvider', Web3.givenProvider);

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
// console.log('hello! Web3', Web3);

console.log('web3 instance', web3);
