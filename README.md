# AVADO sample web-app

# To install and run locally:

`yarn && yarn start`

## To deploy to IPFS

```
yarn build 
ipfs --api  /dns4/my.ipfs.dns.dappnode.eth/tcp/5001 add -r build
```

This will result in all files being uploaded... Note the last IPFS hash
```
...
added QmUYLrRyWDHtT2YbVC2E6NeggaonmpRtTpZSF4hDSrcfHE build/static/media
added QmSAPNfVGcaErgqh8ASdAU7rV4FojeArKKpn7WAtRkhLdU build/static
added QmTdAMoTqEKGQ58zAZPwYShjL23f3H7xWsbDFpmNxi7sF3 build
```

Then browse to the IPFS hash of the 'build' folder.

`http://my.ipfs.dnp.dappnode.eth:8080/ipfs/<the ipfs hash>`



