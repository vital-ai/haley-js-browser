# haley-js-bower
haley js client packaged for bower

The modules is currently taking 4 config parameters that passed in file package.json.

"config": {
    "DOMAIN_DIR_PATH": "./webroot/js/vitalservice/domains/",
    "DOMAIN_OUT_PATH": "./webroot/js/domains.js",
    "DOMAIN_SRC": "http://localhost:6098/js/vitalservice/domains/",
    "COPY_TO_PATH": "./webroot/haley-js-browser/"
},

**DOMAIN_DIR_PATH**: Indicate which folder to read the domains flies and create a file.
**DOMAIN_OUT_PATH**: Indicate the path to save the file created by running script: ./scripts/create-domains.js;
**DOMAIN_SRC**: Indicate the SRC to get domains files.
**COPY_TO_PATH**: Indicate the destination path that to copy when we run script: ./scripts/copy-modules-and-check.js
