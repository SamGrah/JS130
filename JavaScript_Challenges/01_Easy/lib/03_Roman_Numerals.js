/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
  number

OUTPUTS ==>
  string, corresponding to roman numeral of number

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>
  1 = I
  2 = II
  3 = III
  4 = IV
  5 = V
  6 = VI
  7 = VII
  8 = VIII
  9 = IX
  10 = X
  11 = X1

MENTAL MODEL ==>
  - object containing values conversions
  - build from empty string, subtracting value if value is greater than 
    current number

    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==>

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>


RULESET ==>
create array containing converstions as static property of constructor
converstions are ordered from least to greatest
array elements are objects with keyValue pairs as { 'roman numeral': number }

    ALGORITHM
--------------------------------------
1. set currentValue variable equal to value passed to constructor
2. set romanNumeral as empty string
3. iterate over array of converstions
  3.1 for each object, if currentValue is greater than value, subtract
      value from current
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static CONVERSIONS = [
    [ 'M'  , 1000 ],
    [ 'CM' , 900  ],
    [ 'D'  , 500  ],
    [ 'CD' , 400  ],
    [ 'C'  , 100  ],
    [ 'XC' , 90   ],
    [ 'L'  , 50   ],
    [ 'XL' , 40   ],
    [ 'X'  , 10   ],
    [ 'IX' , 9    ],
    [ 'V'  , 5    ],
    [ 'IV' , 4    ],
    [ 'I'  , 1    ],
  ]

  toRoman() {
    let currentValue = this.number;
    let conversionStr = '';
    RomanNumeral.CONVERSIONS.forEach(subArray => {
      let [ numeral, value ] = subArray;
      while (currentValue >= value) {
        currentValue -= value;
        conversionStr += numeral;
      }
    });
    return conversionStr;
  }
}

module.exports = RomanNumeral;
