const crypto = require("crypto");
const BYTE_TABLE = [];
for (let i = 0; i < 16; ++i) {
    BYTE_TABLE[i] = "0" + i.toString(16);
}
for (let i = 16; i < 256; ++i) {
    BYTE_TABLE[i] = i.toString(16);
}
BYTE_TABLE[256] = "-";
const position = [4, 6, 8, 10];
const generatUUID = () => {
    const rnds = crypto.randomBytes(16);
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    let positionIndex = 0;
    return rnds.reduce((prev, bit, index) => {
        if (index === position[positionIndex]) {
            ++positionIndex;
            prev += "-";
        }
        return prev += BYTE_TABLE[bit];
    }, "");
};
module.exports = generatUUID;