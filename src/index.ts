const bytesToString = (bytes: number[]): string => {
  return bytes.map((x) => String.fromCharCode(x)).join('');
};

const stringToBytes = (str: string): number[] => {
  return str.split('').map((x) => x.charCodeAt(0));
};

export namespace UTF8 {
  export function bytesToString(bytes: number[]): string {
    return decodeURIComponent(escape(bytesToString(bytes)));
  }

  export function stringToBytes(str: string): number[] {
    return stringToBytes(unescape(encodeURIComponent(str)));
  }
}

export default {
  bytesToString,
  stringToBytes,
};
