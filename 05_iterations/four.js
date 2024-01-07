const obj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
}

for (const key in obj) {
    console.log(`${key} Shortcut is for ${obj[key]}`);   
}

const programming = ["JS", "cpp" ,"rb" ];
for (const key in programming) {
    console.log(key);
}