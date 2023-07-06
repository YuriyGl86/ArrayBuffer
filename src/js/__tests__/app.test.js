import converter, { getBuffer } from '../app';

test('test converter', () => {
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
