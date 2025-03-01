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
    expect(parser.parse('0.2e2')).toMatchObject({error: null, result: 20});
  });

  it('should parse with decimal tokens 1', () => {
    expect(parser.parse('0.2e0.2').error).toBe(null);
  });

  it('should parse with negative exponents', () => {
    expect(parser.parse('2e-1')).toMatchObject({error: null, result: 0.2})
  });

  it('should parse with negative base', () => {
    expect(parser.parse('-2e1')).toMatchObject({error: null, result: -20})
  });

  it('should parse with negative base and exponent', () => {
    expect(parser.parse('-2e-1')).toMatchObject({error: null, result: -0.2})
  });

  it('should parse with negative decimal', () => {
    expect(parser.parse('-2e-.1').error).toBe(null)
  });

  it('should parse percentage signs', () => {
    expect(parser.parse('2%')).toMatchObject({error: null, result: 0.02})
  });

  it('should respect pemdas', () => {
    expect(parser.parse('2+2*8/4')).toMatchObject({error: null, result: 6})
  });

  it('should parse exp 1', () => {
    expect(parser.parse('exp(1)')).toMatchObject({error: null, result: 2.718281828459045})
  })

  it('should parse exp 2', () => {
    parser.setVariable('alnxb', 0.5)
    parser.setVariable('Compr', 2)
    expect(parser.parse('exp((0.85- alnxb)/ Compr )')).toMatchObject({error: null, result: 1.191246216612358})
  });
});
