const fs = require('fs');

for(let i = 0 ; i<50000 ; i ++){
let name = '"name" :'+'"Seed #' +i +'"';
let image = '"image" :' + '"https://firedao.mypinata.cloud/ipfs/QmTN9bafqSdzCVdQUuukC6ky2rTTTSc9xkSipsCEhotv44?pinataGatewayToken=56JDDIrkxPZKrpQ9Bw6ToqJuSz_qcSIr5m48sLAlRDEcxkAIiUrlvl3MemfWshTm&_gl=1*1n30ll5*_ga*MTc1Nzk0NjI1OS4xNjc3NTc0NzY1*_ga_5RMPXG14TE*MTY3NzU3NDc2Ny4xLjEuMTY3NzU3NTMzMC4yMS4wLjA."'
let data = '{'+'"id":'+i +','+name+',' +image
            +'}';

fs.writeFileSync(i+".json",data);

console.log(fs.readFileSync( i +".json", "utf8"));
}
console.log("File written successfully\n");
