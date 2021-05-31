const contract = require('@truffle/contract')

const DollaremonFactory = contract(require('../build/DollaremonFactory.json'))

DollaremonFactory.setProvider(this.web3._provider)

const DEPLOY_ADDRESS = process.env.DEPLOY_ADDRESS || ''

module.exports = async function(deployer, network, accounts) {
  if (network === 'development') {
    const owner = accounts[0]
    await deployer.deploy(DollaremonFactory, owner, { from: owner })
    console.log(`DollaremonFactory: ${DollaremonFactory.address}`)
  } else {
    await deployer.deploy(DollaremonFactory, DEPLOY_ADDRESS, {
      from: DEPLOY_ADDRESS
    })
    console.log(`DollaremonFactory: ${DollaremonFactory.address}`)
  }
}
