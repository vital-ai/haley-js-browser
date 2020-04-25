
VITAL_DOMAINS.forEach(file => {
    console.log('loading domain file: ', file);
    $.ajax({
        async: false,
        url: `${PREFIX}js/vitalservice/domains/${file}`,
        dataType: "script",
        success: function() {
            console.log('loaded file: ', file);
        }, 
        error: function() {
            console.error(`loading file ${file} failed. installation time: ${TIME_DOMAIN_LIST_CREATED}`)
        }
    });
});
console.log('Loaded domains updated at: ', TIME_DOMAIN_LIST_CREATED);

$.ajax({
    async: false,
    url: `${PREFIX}haley-js-browser/created-time.js`,
    dataType: "script",
    success: function() {
        console.log(`Loaded vital installed at: ${TIME_VITAL_INSTALLED}`);
    }
});