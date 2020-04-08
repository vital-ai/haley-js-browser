VITAL_DOMAINS.forEach(file => {
    console.log('loading domain file: ', file);
    $.ajax({
        async: false,
        url: `${PREFIX}js/vitalservice/domains/${file}`,
        dataType: "script"
    });
});