const coding = ["JS","Python","Ruby","CPP","HTML" ]

coding.forEach(function item(val) {
    // console.log(val);
})

coding.forEach( (val) => {
    // console.log(val);
} )

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)