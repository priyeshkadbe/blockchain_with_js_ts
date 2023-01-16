const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.currentHash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.timestamp +
        this.previousHash +
        JSON.stringify(this.data)
    ).toString();
  }
}


class Blockchain{
  constructor(){
    this.chain=[this.genesisBlock()]
  }

  genesisBlock() {
    return new Block(0,new Date(),{name:"genesis block"},0)
  }

  getLatestBlock(){
    return this.chain[this.chain.length-1]
  }

  addNewBlock(newBlock){
    newBlock.previousHash=this.getLatestBlock().currentHash;
    newBlock.currentHash=newBlock.calculateHash();
    this.chain.push(newBlock)
  }
}

let priyesh=new Blockchain();
priyesh.addNewBlock(new Block(1,new Date(),{name:"priyesh"}));
priyesh.addNewBlock(new Block(2,new Date(),{name:"adarsh"}));

console.log(priyesh.getLatestBlock())
