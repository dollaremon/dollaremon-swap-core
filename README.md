# dollaremon-swap-core

## Binance Smart Chain Mainnet (56)

- DollaremonFactory : [0xcb4Ee9910811EdB5fF3fe0e3CE3A8cEd25E24079](https://bscscan.com/address/0xcb4Ee9910811EdB5fF3fe0e3CE3A8cEd25E24079)
- DollaremonFactory.feeToSetter : [0xCA7cCdd2F45C54470f02230E09055Cf18e14a704](https://bscscan.com/address/0xCA7cCdd2F45C54470f02230E09055Cf18e14a704)

## Binance Smart Chain Testnet (97)

- DollaremonFactory : [0xe4c1dB765AFbbc76CEcd25A15299522D6c812087](https://testnet.bscscan.com/address/0xe4c1dB765AFbbc76CEcd25A15299522D6c812087)
- DollaremonFactory.feeToSetter : [0xCA7cCdd2F45C54470f02230E09055Cf18e14a704](https://testnet.bscscan.com/address/0xCA7cCdd2F45C54470f02230E09055Cf18e14a704)

## build

```bash
$ nvm use
$ npm ci
$ npm ci --ignore-scripts
```

### DollaremonFactory

```bash
$ export DEPLOY_ADDRESS=""
$ export DEPLOY_PRIVATE_KEY=""
$ npx truffle migrate --network bsctest
$ npx truffle migrate --network bscmain
```

## remix-ide

```bash
$ npm run flatten
```
