function convertToRoman(num) {
    let val = 0;
   const convert = [
     { symbol: 'M', value: 1000 }, { symbol: 'CM', value: 900 },
     { symbol: 'D', value: 500 }, { symbol: 'CD', value: 400 },
     { symbol: 'C', value: 100 }, { symbol: 'XC', value: 90 },
     { symbol: 'L', value: 50 }, { symbol: 'XL', value: 40 },
     { symbol: 'X', value: 10 }, { symbol: 'IX', value: 9 },
     { symbol: 'V', value: 5 }, { symbol: 'IV', value: 4 },
     { symbol: 'I', value: 1 },
   ];
    let arr = "";
    val = num;
    for (let i = 0; i < convert.length; i++) {
      while (convert[i].value <= val) {
        arr += convert[i].symbol;
        val -= convert[i].value;
      }
    }
   return arr;
  }
  
  // M
  console.log(convertToRoman(1000));
  // DCXLIX
  console.log(convertToRoman(649));