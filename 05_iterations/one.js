//  For Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);    
}


for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop Element : ${i}`);    
    for (let j = 0; j < 10; j++) {
        console.log(`Inner Loop Element : ${j} And Outer Loop Element : ${i}`);
        
    }
}