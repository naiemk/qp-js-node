# Deploying miners and finalizers:

1. `ssh` into your node machine
2. Download `index.js`

```
wget https://raw.githubusercontent.com/naiemk/qp-js-node/refs/heads/main/dist/index.js
```

3. Update config files `config.json` and `providers.json`
4. Create your private key in a `.env`
```
$ echo PRIVATE_KEY=[PRIVATE_KEY] > ./.env
$ npx dotenvx encrypt
```

Running above will encrypte the env values in .env and create .env.key and .env files.

5. Run the node as service

```
$ pm2 start ./index.js --name MINER -- --loop
```

### Running miner and finalizer on the same machine

Miners and finalizers follow a systen lock pattern that prevents them from running in parallel hence guaranteeing not wasted transactions
