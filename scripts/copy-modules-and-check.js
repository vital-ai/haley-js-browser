const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m%s\x1b[0m';
const COPY_TO_PATH = process.env.npm_package_config_COPY_TO_PATH;

const FOLDERS_TO_BE_CREATED = [
    COPY_TO_PATH,
    path.join(COPY_TO_PATH, 'dist'),
    path.join(COPY_TO_PATH, 'lib-vital'),
    path.join(COPY_TO_PATH, 'lib-vital/haley-js-api'),
    path.join(COPY_TO_PATH, 'lib-vital/vitalservice-js'),
];

const FILES_TO_BE_COPIED = [
    'dist/main.js',
    'lib-vital/haley-js-api/haley-js-api-0.0.1.js',
    'lib-vital/haley-js-api/haley-js-api-wrapped-0.0.1.js',
    'lib-vital/haley-js-api/haley-js-vitalservice-implementation-0.0.1.js',
    'lib-vital/vitalservice-js/vital-core-0.2.304.js',
    'lib-vital/vitalservice-js/vital-0.2.304.js',
    'lib-vital/vitalservice-js/jquery.cookie-1.4.0.js',
    'lib-vital/vitalservice-js/lru.js',
    'lib-vital/vitalservice-js/sockjs-0.3.4.min.js',
    'lib-vital/vitalservice-js/tv4.min.js',
    'lib-vital/vitalservice-js/vertx-eventbus-3.2.1.js',
    'lib-vital/vitalservice-js/vitalservice-json-0.2.304.js',
    'lib-vital/vitalservice-js/vitalservice-impl-0.2.304.js',
    'lib-vital/vitalservice-js/vitalservice-0.2.304.js',
];

console.log('Creating Neccessary Folder');
FOLDERS_TO_BE_CREATED.forEach(function(dir) {
    const absoluteDir = path.join(__dirname, '../../../', dir);
    if (!fs.existsSync(absoluteDir)){
        fs.mkdirSync(absoluteDir);
    } else {
        console.log(`${absoluteDir} already exist`);
    }
});

// remove file.
console.log(`Removing files from folder: ${COPY_TO_PATH}`);
FILES_TO_BE_COPIED.forEach(function(file) {
    const destinationPath = path.join(__dirname, '../../../', COPY_TO_PATH, file);
    if(fs.existsSync(destinationPath)) {
        fs.unlink(destinationPath, function (err) {            
            if (err) {                                                 
                console.error(RED, err);                          
            }                                                          
           console.log(`Deleted file: ${file}`);                           
        });
    }
});

// copy the latest file.
console.log(`Copying files to folder: ${COPY_TO_PATH}`);
FILES_TO_BE_COPIED.forEach(function(file) {
    const sourcePath = path.join(__dirname, '../', file);
    const destinationPath = path.join(__dirname, '../../../', COPY_TO_PATH, file);
    fs.readFile(sourcePath, 'utf8', function (err,data) {
        if (err) {
          console.log(RED, err)
          throw err;
        }

        var result = data.replace(/\${DOMAIN_SRC}/g, process.env.npm_package_config_DOMAIN_SRC);

        fs.writeFile(destinationPath, result, 'utf8', function (err) {
            if (err) {
                console.log(RED, err);
                throw err;
            }
            console.log('Copied file: ', file);
        });
    });
});

