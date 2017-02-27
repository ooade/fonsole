import { expect } from 'chai';
import fonsole from '../src';

describe('fonsole', () => {
  it('has a log method', () => {
    expect(fonsole.log).to.exist;
    expect(fonsole.log).to.be.a('function');
  });
});
