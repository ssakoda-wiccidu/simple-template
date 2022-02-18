#!/usr/bin/env node

const fs = require('fs')
const  path = require('path')

const currentDir = process.cwd();
const templatePath = path.resolve(currentDir, "templates");

const logo = `
-------------------
  simple-template  
-------------------
`

const helpMessage = `
    Usage: npx github:ssakoda-wiccidu/simple-template <command>

    Where <command> is one of:
        - list
        - create <template-name>
    
    list: show template-name list
    create: generate dirs/files from template
`

if (process.argv.length <= 2) {
    console.log(helpMessage)
    process.exit(1);
}

switch (process.argv[2]) {
    case "list":
        const files = fs.readdirSync(templatePath)
        console.log("<template-name> list")
        for(t in files){
            console.log("- "+files[t])
        }
        break
    case "create":
        const targetTemplate = process.argv[3]
        console.log("create "+targetTemplate)
        break
    default:
        console.error("ERROR: '" + process.argv[2] + "' is not vaild command.")
        console.log(helpMessage)
        process.exit(1);
}