import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite( "sting", "string", "string", "string", true)).toBeTruthy();
  });
});
