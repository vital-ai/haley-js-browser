const prefix = `${DOMAIN_SRC}` || `${PREFIX}js/vitalservice/domains/`;

VITAL_DOMAINS.forEach(file => {
    console.log('loading domain file: ', file);
    $.ajax({
        async: false,
        url: `${prefix}${file}`,
        dataType: "script"
    });
});