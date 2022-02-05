class Block {
  index: number
  hash: string
  previous: string
  data: string
  timestamp: number
  constructor(
    index: number,
    hash: string,
    previous: string,
    data: string,
    timestamp: number
  ) {
    const struct = { index, hash, previous, data, timestamp }
    Object.keys(struct).forEach(key => {
      this[key] = struct[key]
    })
  }
}

let blockChain: Block[]

const newBlock = new Block(0, '202020202020', '', 'Dasomi block', 1604615)
blockChain = [newBlock]
console.log(blockChain)
