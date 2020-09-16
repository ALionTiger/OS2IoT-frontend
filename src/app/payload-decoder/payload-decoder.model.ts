export class PayloadDecoder {
    public name: string;
    public id: number;
    public decodingFunction = `
    function bin16dec(bin) {
        var num = bin & 0xffff;
        if (0x8000 & num) num = -(0x010000 - num);
        return num;
      }
    function bin8dec(bin) {
        var num = bin & 0xff;
        if (0x80 & num) num = -(0x0100 - num);
        return num;
      }
    function base64ToBytes(str) {
        return atob(str)
          .split("")
          .map(function (c) {
            return c.charCodeAt(0);
          });
      }
    function hexToBytes(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2)
          bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
      }
    function decode(payload, metadata) {
        let res = {};
        res.some_field = "some value"
        // Will be sent as the JSON: '{"some_field": "some value"}' after decoding.
        return res;
      }
    `;
}

export interface PayloadDecoderResponse {
    data: PayloadDecoder[];
    count: number;
}