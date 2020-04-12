VITAL_DOMAINS.forEach(file => {
    $.ajax({
        async: false,
        url: `${DOMAIN_SRC}${file}`,
        dataType: "script"
    });
});