var o = function o(k, v, _o, l) {
  for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {
    ;
  }

  return _o;
},
    $V0 = [1, 4],
    $V1 = [1, 5],
    $V2 = [1, 8],
    $V3 = [1, 6],
    $V4 = [1, 7],
    $V5 = [1, 9],
    $V6 = [1, 13],
    $V7 = [1, 14],
    $V8 = [1, 15],
    $V9 = [1, 12],
    $Va = [1, 16],
    $Vb = [1, 18],
    $Vc = [1, 19],
    $Vd = [1, 20],
    $Ve = [1, 21],
    $Vf = [1, 22],
    $Vg = [1, 23],
    $Vh = [1, 24],
    $Vi = [1, 25],
    $Vj = [1, 26],
    $Vk = [1, 27],
    $Vl = [5, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 31, 32],
    $Vm = [5, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 31, 32, 34],
    $Vn = [5, 11, 12, 14, 15, 16, 17, 18, 31, 32],
    $Vo = [5, 11, 14, 15, 16, 17, 31, 32],
    $Vp = [5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 31, 32],
    $Vq = [14, 31, 32];

var parser = {
  trace: function trace() {},
  yy: {},
  symbols_: {
    "error": 2,
    "expressions": 3,
    "expression": 4,
    "EOF": 5,
    "variableSequence": 6,
    "NUMBER": 7,
    "%": 8,
    "STRING": 9,
    "&": 10,
    "=": 11,
    "+": 12,
    "(": 13,
    ")": 14,
    "<": 15,
    ">": 16,
    "NOT": 17,
    "-": 18,
    "*": 19,
    "/": 20,
    "^": 21,
    "FUNCTION": 22,
    "e": 23,
    "expseq": 24,
    "cell": 25,
    "ABSOLUTE_CELL": 26,
    "RELATIVE_CELL": 27,
    "MIXED_CELL": 28,
    ":": 29,
    "ARRAY": 30,
    ";": 31,
    ",": 32,
    "VARIABLE": 33,
    "DECIMAL": 34,
    "ERROR": 35,
    "$accept": 0,
    "$end": 1
  },
  terminals_: {
    5: "EOF",
    7: "NUMBER",
    8: "%",
    9: "STRING",
    10: "&",
    11: "=",
    12: "+",
    13: "(",
    14: ")",
    15: "<",
    16: ">",
    17: "NOT",
    18: "-",
    19: "*",
    20: "/",
    21: "^",
    22: "FUNCTION",
    23: "e",
    26: "ABSOLUTE_CELL",
    27: "RELATIVE_CELL",
    28: "MIXED_CELL",
    29: ":",
    30: "ARRAY",
    31: ";",
    32: ",",
    33: "VARIABLE",
    34: "DECIMAL",
    35: "ERROR"
  },
  productions_: [0, [3, 2], [4, 1], [4, 1], [4, 2], [4, 1], [4, 3], [4, 3], [4, 3], [4, 3], [4, 4], [4, 4], [4, 4], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 2], [4, 2], [4, 3], [4, 4], [4, 3], [4, 4], [4, 1], [4, 1], [4, 2], [25, 1], [25, 1], [25, 1], [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], [25, 3], [24, 1], [24, 1], [24, 3], [24, 3], [6, 1], [6, 3], [2, 1]],
  performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate
  /* action[1] */
  , $$
  /* vstack */
  , _$
  /* lstack */
  ) {
    /* this == yyval */
    var $0 = $$.length - 1;

    switch (yystate) {
      case 1:
        return $$[$0 - 1];
        break;

      case 2:
        this.$ = yy.callVariable($$[$0][0]);
        break;

      case 3:
        this.$ = yy.toNumber($$[$0]);
        break;

      case 4:
        this.$ = $$[$0 - 1] * 0.01;
        break;

      case 5:
        this.$ = yy.trimEdges($$[$0]);
        break;

      case 6:
        this.$ = yy.evaluateByOperator('&', [$$[$0 - 2], $$[$0]]);
        break;

      case 7:
        this.$ = yy.evaluateByOperator('=', [$$[$0 - 2], $$[$0]]);
        break;

      case 8:
        this.$ = yy.evaluateByOperator('+', [$$[$0 - 2], $$[$0]]);
        break;

      case 9:
        this.$ = $$[$0 - 1];
        break;

      case 10:
        this.$ = yy.evaluateByOperator('<=', [$$[$0 - 3], $$[$0]]);
        break;

      case 11:
        this.$ = yy.evaluateByOperator('>=', [$$[$0 - 3], $$[$0]]);
        break;

      case 12:
        this.$ = yy.evaluateByOperator('<>', [$$[$0 - 3], $$[$0]]);
        break;

      case 13:
        this.$ = yy.evaluateByOperator('NOT', [$$[$0 - 2], $$[$0]]);
        break;

      case 14:
        this.$ = yy.evaluateByOperator('>', [$$[$0 - 2], $$[$0]]);
        break;

      case 15:
        this.$ = yy.evaluateByOperator('<', [$$[$0 - 2], $$[$0]]);
        break;

      case 16:
        this.$ = yy.evaluateByOperator('-', [$$[$0 - 2], $$[$0]]);
        break;

      case 17:
        this.$ = yy.evaluateByOperator('*', [$$[$0 - 2], $$[$0]]);
        break;

      case 18:
        this.$ = yy.evaluateByOperator('/', [$$[$0 - 2], $$[$0]]);
        break;

      case 19:
        this.$ = yy.evaluateByOperator('^', [$$[$0 - 2], $$[$0]]);
        break;

      case 20:
        var n1 = yy.invertNumber($$[$0]);
        this.$ = n1;

        if (isNaN(this.$)) {
          this.$ = 0;
        }

        break;

      case 21:
        var n1 = yy.toNumber($$[$0]);
        this.$ = n1;

        if (isNaN(this.$)) {
          this.$ = 0;
        }

        break;

      case 22:
        this.$ = yy.callFunction($$[$0 - 2]);
        break;

      case 23:
        this.$ = yy.evaluateByOperator('*', [$$[$0 - 3], yy.evaluateByOperator('^', [10, yy.invertNumber($$[$0])])]);
        break;

      case 24:
        this.$ = yy.evaluateByOperator('*', [$$[$0 - 2], yy.evaluateByOperator('^', [10, $$[$0]])]);
        break;

      case 25:
        this.$ = yy.callFunction($$[$0 - 3], $$[$0 - 1]);
        break;

      case 29:
      case 30:
      case 31:
        this.$ = yy.cellValue($$[$0]);
        break;

      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
        this.$ = yy.rangeValue($$[$0 - 2], $$[$0]);
        break;

      case 41:
      case 45:
        this.$ = [$$[$0]];
        break;

      case 42:
        this.$ = yy.trimEdges(yytext).split(',');
        break;

      case 43:
      case 44:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;

      case 46:
        this.$ = Array.isArray($$[$0 - 2]) ? $$[$0 - 2] : [$$[$0 - 2]];
        this.$.push($$[$0]);
        break;

      case 47:
        this.$ = yy.throwError($$[$0]);
        break;
    }
  },
  table: [{
    2: 11,
    3: 1,
    4: 2,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    1: [3]
  }, {
    5: [1, 17],
    10: $Vb,
    11: $Vc,
    12: $Vd,
    15: $Ve,
    16: $Vf,
    17: $Vg,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }, o($Vl, [2, 2], {
    34: [1, 28]
  }), o($Vl, [2, 3], {
    8: [1, 29],
    23: [1, 30]
  }), o($Vl, [2, 5]), {
    2: 11,
    4: 31,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 32,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 33,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    13: [1, 34]
  }, o($Vl, [2, 26]), o($Vl, [2, 27], {
    2: 35,
    35: $Va
  }), o($Vm, [2, 45]), o($Vl, [2, 29], {
    29: [1, 36]
  }), o($Vl, [2, 30], {
    29: [1, 37]
  }), o($Vl, [2, 31], {
    29: [1, 38]
  }), o([5, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 31, 32, 35], [2, 47]), {
    1: [2, 1]
  }, {
    2: 11,
    4: 39,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 40,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 41,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 44,
    6: 3,
    7: $V0,
    9: $V1,
    11: [1, 42],
    12: $V2,
    13: $V3,
    16: [1, 43],
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 46,
    6: 3,
    7: $V0,
    9: $V1,
    11: [1, 45],
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 47,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 48,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 49,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 50,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 51,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    33: [1, 52]
  }, o($Vl, [2, 4]), {
    7: [1, 54],
    18: [1, 53]
  }, {
    10: $Vb,
    11: $Vc,
    12: $Vd,
    14: [1, 55],
    15: $Ve,
    16: $Vf,
    17: $Vg,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }, o($Vl, [2, 20]), o($Vn, [2, 21], {
    10: $Vb,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), {
    2: 11,
    4: 58,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    14: [1, 56],
    18: $V4,
    22: $V5,
    24: 57,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    30: [1, 59],
    33: $V9,
    35: $Va
  }, o($Vl, [2, 28]), {
    26: [1, 60],
    27: [1, 61],
    28: [1, 62]
  }, {
    26: [1, 63],
    27: [1, 64],
    28: [1, 65]
  }, {
    26: [1, 66],
    27: [1, 67],
    28: [1, 68]
  }, o($Vl, [2, 6]), o([5, 11, 14, 31, 32], [2, 7], {
    10: $Vb,
    12: $Vd,
    15: $Ve,
    16: $Vf,
    17: $Vg,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vn, [2, 8], {
    10: $Vb,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), {
    2: 11,
    4: 69,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 70,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, o($Vo, [2, 15], {
    10: $Vb,
    12: $Vd,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), {
    2: 11,
    4: 71,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, o($Vo, [2, 14], {
    10: $Vb,
    12: $Vd,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o([5, 11, 14, 17, 31, 32], [2, 13], {
    10: $Vb,
    12: $Vd,
    15: $Ve,
    16: $Vf,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vn, [2, 16], {
    10: $Vb,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vp, [2, 17], {
    10: $Vb,
    21: $Vk
  }), o($Vp, [2, 18], {
    10: $Vb,
    21: $Vk
  }), o([5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 31, 32], [2, 19], {
    10: $Vb
  }), o($Vm, [2, 46]), {
    7: [1, 72]
  }, o($Vl, [2, 24]), o($Vl, [2, 9]), o($Vl, [2, 22]), {
    14: [1, 73],
    31: [1, 74],
    32: [1, 75]
  }, o($Vq, [2, 41], {
    10: $Vb,
    11: $Vc,
    12: $Vd,
    15: $Ve,
    16: $Vf,
    17: $Vg,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vq, [2, 42]), o($Vl, [2, 32]), o($Vl, [2, 33]), o($Vl, [2, 34]), o($Vl, [2, 35]), o($Vl, [2, 36]), o($Vl, [2, 37]), o($Vl, [2, 38]), o($Vl, [2, 39]), o($Vl, [2, 40]), o($Vo, [2, 10], {
    10: $Vb,
    12: $Vd,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vo, [2, 12], {
    10: $Vb,
    12: $Vd,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vo, [2, 11], {
    10: $Vb,
    12: $Vd,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vl, [2, 23]), o($Vl, [2, 25]), {
    2: 11,
    4: 76,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 77,
    6: 3,
    7: $V0,
    9: $V1,
    12: $V2,
    13: $V3,
    18: $V4,
    22: $V5,
    25: 10,
    26: $V6,
    27: $V7,
    28: $V8,
    33: $V9,
    35: $Va
  }, o($Vq, [2, 43], {
    10: $Vb,
    11: $Vc,
    12: $Vd,
    15: $Ve,
    16: $Vf,
    17: $Vg,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  }), o($Vq, [2, 44], {
    10: $Vb,
    11: $Vc,
    12: $Vd,
    15: $Ve,
    16: $Vf,
    17: $Vg,
    18: $Vh,
    19: $Vi,
    20: $Vj,
    21: $Vk
  })],
  defaultActions: {
    17: [2, 1]
  },
  parseError: function parseError(str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      var error = new Error(str);
      error.hash = hash;
      throw error;
    }
  },
  parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [],
        // token stack
    vstack = [null],
        // semantic value stack
    lstack = [],
        // location stack
    table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;
    var args = lstack.slice.call(arguments, 1); //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = {
      yy: {}
    }; // copy state

    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;

    if (typeof lexer.yylloc == 'undefined') {
      lexer.yylloc = {};
    }

    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
      this.parseError = sharedState.yy.parseError;
    } else {
      this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack(n) {
      stack.length = stack.length - 2 * n;
      vstack.length = vstack.length - n;
      lstack.length = lstack.length - n;
    }

    _token_stack: var lex = function lex() {
      var token;
      token = lexer.lex() || EOF; // if token isn't its numeric value, convert

      if (typeof token !== 'number') {
        token = self.symbols_[token] || token;
      }

      return token;
    };

    var symbol,
        preErrorSymbol,
        state,
        action,
        a,
        r,
        yyval = {},
        p,
        len,
        newState,
        expected;

    while (true) {
      // retreive state number from top of stack
      state = stack[stack.length - 1]; // use default actions if available

      if (this.defaultActions[state]) {
        action = this.defaultActions[state];
      } else {
        if (symbol === null || typeof symbol == 'undefined') {
          symbol = lex();
        } // read action for current state and first input


        action = table[state] && table[state][symbol];
      }

      _handle_error: // handle parse error
      if (typeof action === 'undefined' || !action.length || !action[0]) {
        // Return the rule stack depth where the nearest error rule can be found.
        // Return FALSE when no error recovery rule was found.
        var locateNearestErrorRecoveryRule = function locateNearestErrorRecoveryRule(state) {
          var stack_probe = stack.length - 1;
          var depth = 0; // try to recover from error

          for (;;) {
            // check for error recovery rule in this state
            if (TERROR.toString() in table[state]) {
              return depth;
            }

            if (state === 0 || stack_probe < 2) {
              return false; // No suitable error recovery rule available.
            }

            stack_probe -= 2; // popStack(1): [symbol, action]

            state = stack[stack_probe];
            ++depth;
          }
        };

        var error_rule_depth;
        var errStr = '';

        if (!recovering) {
          // first see if there's any chance at hitting an error recovery rule:
          error_rule_depth = locateNearestErrorRecoveryRule(state); // Report error

          expected = [];

          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }

          if (lexer.showPosition) {
            errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }

          this.parseError(errStr, {
            text: lexer.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer.yylineno,
            loc: yyloc,
            expected: expected,
            recoverable: error_rule_depth !== false
          });
        } else if (preErrorSymbol !== EOF) {
          error_rule_depth = locateNearestErrorRecoveryRule(state);
        } // just recovered from another error


        if (recovering == 3) {
          if (symbol === EOF || preErrorSymbol === EOF) {
            throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
          } // discard current lookahead and grab another


          yyleng = lexer.yyleng;
          yytext = lexer.yytext;
          yylineno = lexer.yylineno;
          yyloc = lexer.yylloc;
          symbol = lex();
        } // try to recover from error


        if (error_rule_depth === false) {
          throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
        }

        popStack(error_rule_depth);
        preErrorSymbol = symbol == TERROR ? null : symbol; // save the lookahead token

        symbol = TERROR; // insert generic error symbol as new lookahead

        state = stack[stack.length - 1];
        action = table[state] && table[state][TERROR];
        recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
      } // this shouldn't happen, unless resolve defaults are off


      if (action[0] instanceof Array && action.length > 1) {
        throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
      }

      switch (action[0]) {
        case 1:
          // shift
          //this.shiftCount++;
          stack.push(symbol);
          vstack.push(lexer.yytext);
          lstack.push(lexer.yylloc);
          stack.push(action[1]); // push state

          symbol = null;

          if (!preErrorSymbol) {
            // normal execution/no error
            yyleng = lexer.yyleng;
            yytext = lexer.yytext;
            yylineno = lexer.yylineno;
            yyloc = lexer.yylloc;

            if (recovering > 0) {
              recovering--;
            }
          } else {
            // error just occurred, resume old lookahead f/ before error
            symbol = preErrorSymbol;
            preErrorSymbol = null;
          }

          break;

        case 2:
          // reduce
          //this.reductionCount++;
          len = this.productions_[action[1]][1]; // perform semantic action

          yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
          // default location, uses first token for firsts, last for lasts

          yyval._$ = {
            first_line: lstack[lstack.length - (len || 1)].first_line,
            last_line: lstack[lstack.length - 1].last_line,
            first_column: lstack[lstack.length - (len || 1)].first_column,
            last_column: lstack[lstack.length - 1].last_column
          };

          if (ranges) {
            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
          }

          r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

          if (typeof r !== 'undefined') {
            return r;
          } // pop off stack


          if (len) {
            stack = stack.slice(0, -1 * len * 2);
            vstack = vstack.slice(0, -1 * len);
            lstack = lstack.slice(0, -1 * len);
          }

          stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)

          vstack.push(yyval.$);
          lstack.push(yyval._$); // goto new state = table[STATE][NONTERMINAL]

          newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          break;

        case 3:
          // accept
          return true;
      }
    }

    return true;
  }
};
/* generated by jison-lex 0.3.4 */

var lexer = function () {
  var lexer = {
    EOF: 1,
    parseError: function parseError(str, hash) {
      if (this.yy.parser) {
        this.yy.parser.parseError(str, hash);
      } else {
        throw new Error(str);
      }
    },
    // resets the lexer, sets new input
    setInput: function setInput(input, yy) {
      this.yy = yy || this.yy || {};
      this._input = input;
      this._more = this._backtrack = this.done = false;
      this.yylineno = this.yyleng = 0;
      this.yytext = this.matched = this.match = '';
      this.conditionStack = ['INITIAL'];
      this.yylloc = {
        first_line: 1,
        first_column: 0,
        last_line: 1,
        last_column: 0
      };

      if (this.options.ranges) {
        this.yylloc.range = [0, 0];
      }

      this.offset = 0;
      return this;
    },
    // consumes and returns one char from the input
    input: function input() {
      var ch = this._input[0];
      this.yytext += ch;
      this.yyleng++;
      this.offset++;
      this.match += ch;
      this.matched += ch;
      var lines = ch.match(/(?:\r\n?|\n).*/g);

      if (lines) {
        this.yylineno++;
        this.yylloc.last_line++;
      } else {
        this.yylloc.last_column++;
      }

      if (this.options.ranges) {
        this.yylloc.range[1]++;
      }

      this._input = this._input.slice(1);
      return ch;
    },
    // unshifts one char (or a string) into the input
    unput: function unput(ch) {
      var len = ch.length;
      var lines = ch.split(/(?:\r\n?|\n)/g);
      this._input = ch + this._input;
      this.yytext = this.yytext.substr(0, this.yytext.length - len); //this.yyleng -= len;

      this.offset -= len;
      var oldLines = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1);
      this.matched = this.matched.substr(0, this.matched.length - 1);

      if (lines.length - 1) {
        this.yylineno -= lines.length - 1;
      }

      var r = this.yylloc.range;
      this.yylloc = {
        first_line: this.yylloc.first_line,
        last_line: this.yylineno + 1,
        first_column: this.yylloc.first_column,
        last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
      };

      if (this.options.ranges) {
        this.yylloc.range = [r[0], r[0] + this.yyleng - len];
      }

      this.yyleng = this.yytext.length;
      return this;
    },
    // When called from action, caches matched text and appends it on next action
    more: function more() {
      this._more = true;
      return this;
    },
    // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
    reject: function reject() {
      if (this.options.backtrack_lexer) {
        this._backtrack = true;
      } else {
        return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }

      return this;
    },
    // retain first n characters of the match
    less: function less(n) {
      this.unput(this.match.slice(n));
    },
    // displays already matched input, i.e. for error messages
    pastInput: function pastInput() {
      var past = this.matched.substr(0, this.matched.length - this.match.length);
      return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
    },
    // displays upcoming input, i.e. for error messages
    upcomingInput: function upcomingInput() {
      var next = this.match;

      if (next.length < 20) {
        next += this._input.substr(0, 20 - next.length);
      }

      return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },
    // displays the character position where the lexing error occurred, i.e. for error messages
    showPosition: function showPosition() {
      var pre = this.pastInput();
      var c = new Array(pre.length + 1).join("-");
      return pre + this.upcomingInput() + "\n" + c + "^";
    },
    // test the lexed token: return FALSE when not a match, otherwise return token
    test_match: function test_match(match, indexed_rule) {
      var token, lines, backup;

      if (this.options.backtrack_lexer) {
        // save context
        backup = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        };

        if (this.options.ranges) {
          backup.yylloc.range = this.yylloc.range.slice(0);
        }
      }

      lines = match[0].match(/(?:\r\n?|\n).*/g);

      if (lines) {
        this.yylineno += lines.length;
      }

      this.yylloc = {
        first_line: this.yylloc.last_line,
        last_line: this.yylineno + 1,
        first_column: this.yylloc.last_column,
        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
      };
      this.yytext += match[0];
      this.match += match[0];
      this.matches = match;
      this.yyleng = this.yytext.length;

      if (this.options.ranges) {
        this.yylloc.range = [this.offset, this.offset += this.yyleng];
      }

      this._more = false;
      this._backtrack = false;
      this._input = this._input.slice(match[0].length);
      this.matched += match[0];
      token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);

      if (this.done && this._input) {
        this.done = false;
      }

      if (token) {
        return token;
      } else if (this._backtrack) {
        // recover context
        for (var k in backup) {
          this[k] = backup[k];
        }

        return false; // rule action called reject() implying the next rule should be tested instead.
      }

      return false;
    },
    // return next match in input
    next: function next() {
      if (this.done) {
        return this.EOF;
      }

      if (!this._input) {
        this.done = true;
      }

      var token, match, tempMatch, index;

      if (!this._more) {
        this.yytext = '';
        this.match = '';
      }

      var rules = this._currentRules();

      for (var i = 0; i < rules.length; i++) {
        tempMatch = this._input.match(this.rules[rules[i]]);

        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
          match = tempMatch;
          index = i;

          if (this.options.backtrack_lexer) {
            token = this.test_match(tempMatch, rules[i]);

            if (token !== false) {
              return token;
            } else if (this._backtrack) {
              match = false;
              continue; // rule action called reject() implying a rule MISmatch.
            } else {
              // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
              return false;
            }
          } else if (!this.options.flex) {
            break;
          }
        }
      }

      if (match) {
        token = this.test_match(match, rules[index]);

        if (token !== false) {
          return token;
        } // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)


        return false;
      }

      if (this._input === "") {
        return this.EOF;
      } else {
        return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }
    },
    // return next match that has a token
    lex: function lex() {
      var r = this.next();

      if (r) {
        return r;
      } else {
        return this.lex();
      }
    },
    // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
    begin: function begin(condition) {
      this.conditionStack.push(condition);
    },
    // pop the previously active lexer condition state off the condition stack
    popState: function popState() {
      var n = this.conditionStack.length - 1;

      if (n > 0) {
        return this.conditionStack.pop();
      } else {
        return this.conditionStack[0];
      }
    },
    // produce the lexer rule set which is active for the currently active lexer condition state
    _currentRules: function _currentRules() {
      if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      } else {
        return this.conditions["INITIAL"].rules;
      }
    },
    // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
    topState: function topState(n) {
      n = this.conditionStack.length - 1 - Math.abs(n || 0);

      if (n >= 0) {
        return this.conditionStack[n];
      } else {
        return "INITIAL";
      }
    },
    // alias for begin(condition)
    pushState: function pushState(condition) {
      this.begin(condition);
    },
    // return the number of states currently on the stack
    stateStackSize: function stateStackSize() {
      return this.conditionStack.length;
    },
    options: {},
    performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
      var YYSTATE = YY_START;

      switch ($avoiding_name_collisions) {
        case 0:
          /* skip whitespace */
          break;

        case 1:
          return 23;
          break;

        case 2:
          return 8;
          break;

        case 3:
          return 9;
          break;

        case 4:
          return 9;
          break;

        case 5:
          return 22;
          break;

        case 6:
          return 35;
          break;

        case 7:
          return 26;
          break;

        case 8:
          return 28;
          break;

        case 9:
          return 28;
          break;

        case 10:
          return 27;
          break;

        case 11:
          return 22;
          break;

        case 12:
          return 33;
          break;

        case 13:
          return 33;
          break;

        case 14:
          return 30;
          break;

        case 15:
          return 10;
          break;

        case 16:
          return ' ';
          break;

        case 17:
          return 29;
          break;

        case 18:
          return 31;
          break;

        case 19:
          return 32;
          break;

        case 20:
          return 19;
          break;

        case 21:
          return 20;
          break;

        case 22:
          return 18;
          break;

        case 23:
          return 12;
          break;

        case 24:
          return 21;
          break;

        case 25:
          return 13;
          break;

        case 26:
          return 14;
          break;

        case 27:
          return 16;
          break;

        case 28:
          return 15;
          break;

        case 29:
          return 7;
          break;

        case 30:
          return 17;
          break;

        case 31:
          return '"';
          break;

        case 32:
          return "'";
          break;

        case 33:
          return "!";
          break;

        case 34:
          return 11;
          break;

        case 35:
          return 8;
          break;

        case 36:
          return '#';
          break;

        case 37:
          return 5;
          break;
      }
    },
    rules: [/^(?:\s+)/, /^(?:[e])/, /^(?:%)/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(]))/, /^(?:#[A-Z0-9\/]+(!|\?)?)/, /^(?:\$[A-Za-z]+\$[0-9]+)/, /^(?:\$[A-Za-z]+[0-9]+)/, /^(?:[A-Za-z]+\$[0-9]+)/, /^(?:[A-Za-z]+[0-9]+)/, /^(?:[A-Za-z\.]+(?=[(]))/, /^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/, /^(?:[A-Za-z_]+)/, /^(?:\[(.*)?\])/, /^(?:&)/, /^(?: )/, /^(?::)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\/)/, /^(?:-)/, /^(?:\+)/, /^(?:\^)/, /^(?:\()/, /^(?:\))/, /^(?:>)/, /^(?:<)/, /^(?:([+-]?[0-9]+\.[0-9]*|[+-]?[0-9]*\.[0-9]+|[+-]?[0-9]+))/, /^(?:NOT\b)/, /^(?:")/, /^(?:')/, /^(?:!)/, /^(?:=)/, /^(?:%)/, /^(?:[#])/, /^(?:$)/],
    conditions: {
      "INITIAL": {
        "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
        "inclusive": true
      }
    }
  };
  return lexer;
}();

parser.lexer = lexer;

function Parser() {
  this.yy = {};
}

;
Parser.prototype = parser;
parser.Parser = Parser;
export { parser, Parser };