window.onload = function () {
    const dataSource = [
        {
            label: ' About Europe',
            items: [{
                label: 'aboutEurope'
            }]
        },
        { label: 'Russia' },
        { label: 'Ukraine' },
        { label: 'France' },
        { label: 'Spain' },
        { label: 'Sweden' },
        { label: 'Norway' },
        { label: 'Germany' },
        { label: 'Finland' },
        { label: 'Poland' },
        { label: 'Italy' },
        { label: 'United Kingdom' },
        { label: 'Romania' },
        { label: 'Belarus' },
        { label: 'Kazakhstan' },
        { label: 'Greece' },
        { label: 'Bulgaria' },
        { label: 'Iceland' },
        { label: 'Hungary' },
        { label: 'Portugal' },
        { label: 'Austria' },
        { label: 'Czech Republic' },
        { label: 'Serbia' },
        { label: 'Ireland' },
        { label: 'Lithuania' },
        { label: 'Latvia' },
        { label: 'Croatia' },
        { label: 'Bosnia and Herzegovina' },
        { label: 'Slovakia' },
        { label: 'Estonia' },
        { label: 'Denmark' },
        { label: 'Switzerland' },
        { label: 'Netherlands' },
        { label: 'Moldova' },
        { label: 'Belgium' },
        { label: 'Albania' },
        { label: 'Macedonia' },
        { label: 'Turkey' },
        { label: 'Slovenia' },
        { label: 'Montenegro' },
        { label: 'Kosovo' },
        { label: 'Azerbaijan' },
        { label: 'Luxembourg' },
        { label: 'Georgia' },
        { label: 'Andorra' },
        { label: 'Malta' },
        { label: 'Liechtenstein' },
        { label: 'San Marino' },
        { label: 'Monaco' },
        { label: 'Vatican City' }
    ];

    document.getElementById('listMenu').dataSource = dataSource;
}