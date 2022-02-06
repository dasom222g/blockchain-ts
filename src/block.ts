import * as CryptoJS from 'crypto-js'

class Block {
  index: number
  hash: string
  previousHash: string
  data: string
  timestamp: number

  static getHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString()

  static isValidStructure = (block: Block): boolean =>
    typeof block.index === 'number' &&
    typeof block.hash === 'string' &&
    typeof block.previousHash === 'string' &&
    typeof block.data === 'string' &&
    typeof block.timestamp === 'number'

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    const struct = { index, hash, previousHash, data, timestamp }
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
  const newHash = Block.getHash(
    newIndex,
    previousBlock.hash,
    data,
    newTimeStamp
  )

  const newBlock = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  )
  addBlock(newBlock) // 블록추가

  return newBlock
}

const addBlock = (candidateBlock: Block): void => {
  isValidBlock(candidateBlock, getLatestBlock()) && blockChain.push(candidateBlock)
}

const isValidBlock = (newBlock: Block, previousBlock: Block): boolean => {
  if (!Block.isValidStructure(newBlock)) {
    return false
  } else if (previousBlock.index + 1 !== newBlock.index) {
    return false
  } else if (previousBlock.hash !== newBlock.previousHash) {
    return false
  } else if (
    // block데이터로 추출한 hash값과 cadidateBlock의 hash값이 같은지 체크
    Block.getHash(
      newBlock.index,
      newBlock.previousHash,
      newBlock.data,
      newBlock.timestamp
    ) !== newBlock.hash
  ) {
    return false
  }
  return true
}

// block추가
const newBlock = new Block(
  0,
  Block.getHash(0, '', 'Dasomi block', getNewTimeStamp()),
  '',
  'Dasomi block',
  1604615
)
blockChain = [...blockChain, newBlock]
createBlock('second Block')
createBlock('third Block')
createBlock('fourth Block')

console.log(blockChain)
