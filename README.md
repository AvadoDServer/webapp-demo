# AVADO sample web-app

This small DApp shows you how you can access resources on your AVADO box.

## To install and run locally:

`yarn && yarn start`

## To deploy to IPFS

```
yarn build 
ipfs --api  /dns4/my.ipfs.dnp.dappnode.eth/tcp/5001 add -r build
```

This will result in all files being uploaded... Note the last IPFS hash
```
...
added QmUYLrRyWDHtT2YbVC2E6NeggaonmpRtTpZSF4hDSrcfHE build/static/media
added QmSAPNfVGcaErgqh8ASdAU7rV4FojeArKKpn7WAtRkhLdU build/static
added QmTdAMoTqEKGQ58zAZPwYShjL23f3H7xWsbDFpmNxi7sF3 build
```

Then browse to the IPFS hash of the 'build' folder.

The root path to access IPFS is

`http://my.ipfs.dnp.dappnode.eth:8080/ipfs/`


So add your hash to access the app: 

`http://my.ipfs.dnp.dappnode.eth:8080/ipfs/QmTdAMoTqEKGQ58zAZPwYShjL23f3H7xWsbDFpmNxi7sF3`





