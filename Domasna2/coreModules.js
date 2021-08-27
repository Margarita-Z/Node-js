//1. URL modul - url.host metod

const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);

myURL.host = 'example.com:82';
console.log(myURL.href);

//2. Console modul - console.count([label])  metod
console.count();
console.count('default');
console.count('abc');
console.count('xyz');
console.count('abc');
console.count();



