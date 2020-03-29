const nrf24=require("nrf24");


let rf24 = new nrf24.nRF24(22,0);
let addr = "0x544e4c4331"
rf24.begin(true);
rf24.config({
    PALevel: nrf24.RF24_PA_MAX,
    DataRate: nrf24.RF24_250KBPS
}, true);
rf24.useWritePipe(addr);


let ct = 0;

function sender()
{
    let cur_msg = "message " + ct + "\n";
    success = rf24.write(Buffer.from(cur_msg));
    //success = rf24.write(cur_msg);
    ct += 1;
    console.log(cur_msg);
}

setInterval(() => {sender();}, 125);




