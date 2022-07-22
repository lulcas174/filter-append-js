let fatorialList = [1,2,3,4];
let fatoriais = []
fatorialList.map(values => {
    if (values == 0) {
        return 1;
    }

    var fatoriais = values;
    while(values > 2 ){
        fatoriais *= --values;
    }
    console.log (fatoriais)
});
