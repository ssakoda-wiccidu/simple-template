# simple-template
Create dirs/files from template where npm (npx) exists.

## usage

### Run only once
Use the mechanism of [npx](https://docs.npmjs.com/cli/v8/commands/npx) to execute the node module on github only once. `bin` should be described in package.json. Running with npx does not pollute your directory.

```
//run once
npx github:ssakoda-wiccidu/simple-template
```

### Install current directory & Run
```
// 1. Please move to some directory
cd xxx

// 2. simple-template command install
npm install github:ssakoda-wiccidu/simple-template

// The command will be installed in the current directory as shown below
$ tree
.
├── node_modules
│   └── simple-template
│       ├── LICENSE
│       ├── README.md
│       ├── index.js
│       └── package.json
└── package-lock.json

2 directories, 5 files
```
