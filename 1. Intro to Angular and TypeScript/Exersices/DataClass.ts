class Data {
  method: string;
  uri: string;
  version: string;
  message: string;
  response: undefined = undefined;
  fulfilled: boolean = false;

  constructor(method: string, uri: string, version: string, message: string) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
  }
}

const myData = new Data("GET", "http://google.com", "HTTP/1.1", "");

console.log(myData);
