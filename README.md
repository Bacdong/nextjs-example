# NextJS Example 

## Reference Links
* [Next.js](https://nextjs.org/) version 11.1.2.

## Enviroment
* NodeJS: v16.10.0
* NPM: 7.24.0

## Enviroment Installation
* Install packages:
```
cd example/
npm install
npm install --also=dev
```

## Start App
```
cd example/
npm run dev
npm run dev -- -p <Your port>
```

## Build & Deploy
* Build
```
cd example/
npx next build
```

* Deploy
```
docker build . -t example
docker run -p 3000:3000 example
```
