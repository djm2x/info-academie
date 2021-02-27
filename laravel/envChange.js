const fs = require('fs')

/**
 * @param {string[]} argv
 */

async function main(argv) {
    const isDev = argv.indexOf('dev') > -1 ? true : false;

    const file = `${__dirname}/.env`;

    const r = await fs.promises.readFile(file, 'utf8')

    await fs.promises.writeFile(file, r.replace(`IS_DEV=${!isDev}`, `IS_DEV=${isDev}`))

    console.log(`.env file changed IS_DEV=${!isDev} to IS_DEV=${isDev}`)
}

//

main(process.argv);
