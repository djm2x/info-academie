const fs = require('fs')

/**
 * @param {string[]} argv
 */

async function main(argv) {
    const isDev = argv.indexOf('dev') > -1 ? true : false;

    const file = `${__dirname}/.env`;

    const r = await fs.promises.readFile(file, 'utf8')

    await fs.promises.writeFile(file, r.replace(`APP_DEBUG=${!isDev}`, `APP_DEBUG=${isDev}`))

    console.log(`.env file changed APP_DEBUG=${!isDev} to APP_DEBUG=${isDev}`)
}

//

main(process.argv);
