import * as CryptoJS from 'crypto-js'

class Block {
  index: number
  hash: string
  previous: string
  data: string
  timestamp: number

  static getHash = (
    index: number,
    previous: string,
    data: string,
    timestamp: number
  ): string => CryptoJS.SHA256(index + previous + data + timestamp).toString()

  constructor(
    index: number,
    hash: string,
    previous: string,
    data: string,
    timestamp: number
  ) {
    const struct = { index, hash, previous, data, timestamp }
    Object.keys(struct).forEach((key) => {
      this[key] = struct[key]
    })
  }
}


let blockChain: Block[] = []

const getBlockChain = (): Block[] => blockChain
const getLatestBlock = (): Block => blockChain[blockChain.length - 1]
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)
const createBlock = (data: string): Block => {
  const previousBlock = getLatestBlock()
  const newIndex = previousBlock.index + 1
  const newTimeStamp = getNewTimeStamp()
  const newHash = Block.getHash(newIndex, previousBlock.hash, data, newTimeStamp)

  const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp)
  return newBlock
}
const newBlock = new Block(0, Block.getHash(0, "", "Dasomi block", getNewTimeStamp()), '', 'Dasomi block', 1604615)
blockChain = [newBlock]

console.log(createBlock("kelly Block"))

// const newBlock = new Block(0, '202020202020', '', 'Dasomi block', 1604615)
// blockChain = [newBlock]

// console.log(blockChain)
