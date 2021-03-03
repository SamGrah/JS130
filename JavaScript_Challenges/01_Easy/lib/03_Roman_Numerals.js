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
