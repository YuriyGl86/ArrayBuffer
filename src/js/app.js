// TODO: write your code here

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let res = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      res += String.fromCharCode(bufferView[i]);
      // console.log(String.fromCharCode(bufferView[i]));
    }
    return res;
  }
}

const converter = new ArrayBufferConverter();
export default converter;
