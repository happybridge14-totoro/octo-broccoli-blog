const isoFormat = (time) => (new Date(time)).toISOString();
const localFormat = (time) => (new Date(time)).toLocaleDateString('en-US');

export {isoFormat, localFormat};