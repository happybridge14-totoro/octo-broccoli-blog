const isoFormat = (time) => (new Date(time)).toISOString();
const localFormat = (time) => (new Date(time)).toLocaleDateString('en-US');

const TEN_SECOND = 10000;

export {isoFormat, localFormat, TEN_SECOND};