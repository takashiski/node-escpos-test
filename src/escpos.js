const escpos = require('escpos');
// install escpos-usb adapter module manually
escpos.USB = require('escpos-usb');
const getPixels = require("get-pixels");
const getPixelsAsync = require("util").promisify(getPixels);
// Select the adapter based on your printer type
const device = new escpos.USB(0x067b, 0x2305);


const encoding = {
    shift_jis: "Shift_JIS",
    w31j: "Windows-31j",
    c932: "Windows932",
    eucjp: "EUC-JP",
    cn: "GB18030"
}
const options = { encoding: encoding.cn /* default */ }
    //     // encoding is optional

const printer = new escpos.Printer(device, options);

device.open(async function(error) {
    // await printer.getStatuses();
    // printer.print("\x1b\x4c")
    // printer.cut().close();
    // printer.print("\x1b\x0c")
    // printer.cut().close();
    // printer.buffer.write("FF");
    printer.buffer.write("^S(CLM,D,W");
    // printer.cut();
    printer.print("\x1c\x28\x4c\x02\x00\x67\x48")
    printer.feed(1);
    printer.flush();
    printer.close();
    // printer.print("^S(CLM,T,P*");
    // const path = "test-thermal-printer.png";
    // const pixels = await getPixelsAsync(path);
    // const image = await new escpos.Image(pixels);
    // printer.println("\x1c\x28\x4c\x02\x00\x65\x48");
    // printer.print("\x1c\x28\x4c\x02\x00\x67\x48")
    // printer.print("\x1c\x28\x4c\x02\x00\x41\x31").cut().close();
    // const buffer = Buffer.from(["\x1c", "\x28", "\x4c", "\x02", "\x00", "\x41", "\x31"]);
    // const str = "\x1c\x28" //\x4c\x02\x00\x41\x31 ";
    // console.log(str);
    // await printer.print(str).flush() //.cut(0, 0);
    // printer.close();
    // printer
    //     .font('a')
    //     .align('ct')
    //     .style('bu')
    //     .size(1, 1)
    //     .text("天高工房")
    //     .cut()
    //     .close();
    // .print("\x1c\x28\x4c\x02\x00\x67\x48");
    // .close();
    // .size(2, 2)
    // .text("ご購入いただきありがとうございました")
    // .text("久檻夜くぅ")
    // .text("風海みかん")
    // .table(["One", "Two", "Three"])
    //     // .barcode('1234567', 'EAN8')
    // printer
    // .cut()
    // .close();
    // .tableCustom(
    //     [
    //         { text: "Left", align: "LEFT", width: 0.33, style: 'B' },
    //         { text: "Center", align: "CENTER", width: 0.33 },
    //         { text: "Right", align: "RIGHT", width: 0.33 }
    //     ], { encoding: 'cp857', size: [1, 1] } // Optional
    // )
    // await printer.qrimage('https://github.com/song940/node-escpos', { type: "png", size: 7 });
    // await printer.image(image);
    // printer.cut();
    // printer.close();
});

function setInitial(pL, pH, sm, sa, sb, sc, sd, se, sf) {
    let command = "\x1c\x28\x4c";
    command += pL.toString(16);
    command += pH.toString(16);
    command += "\x21";


}