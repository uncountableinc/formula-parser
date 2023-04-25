import Parser from '../../../src/parser';

describe('.parse() general', () => {
  let parser;

  beforeEach(() => {
    parser = new Parser();
  });
  afterEach(() => {
    parser = null;
  });

  it('should parse an empty string as it is', () => {
    expect(parser.parse('')).toMatchObject({error: null, result: ''});
  });

  it('should not parse an number type data', () => {
    expect(parser.parse(200)).toMatchObject({error: '#ERROR!', result: null});
    expect(parser.parse(20.1)).toMatchObject({error: '#ERROR!', result: null});
  });

  it('should not parse null type data', () => {
    expect(parser.parse(null)).toMatchObject({error: '#ERROR!', result: null});
  });

  it('should not parse undefined type data', () => {
    expect(parser.parse(void 0)).toMatchObject({error: '#ERROR!', result: null});
  });

  it('should not parse object type data', () => {
    expect(parser.parse({})).toMatchObject({error: '#ERROR!', result: null});
    expect(parser.parse({a: 1})).toMatchObject({error: '#ERROR!', result: null});
  });

  it('should not parse array type data', () => {
    expect(parser.parse([])).toMatchObject({error: '#ERROR!', result: null});
    expect(parser.parse([1, 2])).toMatchObject({error: '#ERROR!', result: null});
  });

  it('should not parse array type data', () => {
    expect(parser.parse(() => {})).toMatchObject({error: '#ERROR!', result: null});
  });

  it('should parse scientific notation with whitespace', () => {
    expect(parser.parse('1 e 2')).toMatchObject({error: null, result: 100});
  });

  it('should parse scientific notation without whitespace', () => {
    expect(parser.parse('1e2')).toMatchObject({error: null, result: 100});
  });

  it('should parse scientific notation with addition', () => {
    expect(parser.parse('2*1e2')).toMatchObject({error: null, result: 200});
  });

  it('should parse scientific notation within complex formula respecting order of operations', () => {
    expect(parser.parse('2*1e2^3')).toMatchObject({error: null, result: 2000000});
  });

  it('should parse scientific notation within complex formula respecting order of operations 2', () => {
    expect(parser.parse('(2*1e2)^3')).toMatchObject({error: null, result: 8000000});
  });

  it('should not parse with non numeric tokens', () => {
    expect(parser.parse('(2)e(4)')).toMatchObject({error: "#ERROR!", result: null});
  });

  it('should parse with decimal tokens 1', () => {
    expect(parser.parse('0.2e2)')).toMatchObject({error: null, result: 20});
  });

  it('should parse with decimal tokens 1', () => {
    expect(parser.parse('0.2e0.2)').error).toBe(null);
  });
});
