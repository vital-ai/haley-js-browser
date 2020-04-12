const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m%s\x1b[0m';
const OUTPUT_DOMAINS_PATH = path.resolve(__dirname, '../../../', process.env.npm_package_config_DOMAIN_OUT_PATH);
const DOMAINS_PATH = path.join(__dirname, '../../../', process.env.npm_package_config_DOMAIN_DIR_PATH);

if(!fs.existsSync(DOMAINS_PATH) || !fs.lstatSync(DOMAINS_PATH).isDirectory()) {
    console.error(RED, `${DOMAINS_PATH} does not exist`);
    throw new Error(`${DOMAINS_PATH} does not exist`);
}

const items = fs.readdirSync(DOMAINS_PATH);
const text = 'VITAL_DOMAINS = ["' + items.join('", "') + '"];'
fs.writeFile(OUTPUT_DOMAINS_PATH, text, {flag: 'w+'}, function (err) {
    if(err) {
        console.error(RED, err);
        throw err;
    }
    console.log('write files as list in domains.js');
});