import { UselessPipe } from './useless.pipe';

describe('UselessPipe', () => {
  it('create an instance', () => {
    const pipe = new UselessPipe();
    expect(pipe).toBeTruthy();
  });
});
