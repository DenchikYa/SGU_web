let str = "3.5 +4*10-5.3/5 + 1 =";

function handler() {
    let req = document.getElementById('req');
    let res = document.getElementById('res');

    res.value = calculate(req.value);
}

function calculate(str) {
  let result;
  try {
      result = (str.replace(/\s/g, '').match(/[+\-\*\/]?([0-9\.]+)/g) || [])
          .reduce(function(sum, value) {
              console.log(value);
              switch (value[0]) {
                  case "*":
                      return parseFloat(sum) * parseFloat(value.substr(1));
                  case "/":
                      return parseFloat(sum) / parseFloat(value.substr(1));
                  default:
                      return parseFloat(sum) + parseFloat(value);
              }
          });
  } catch (e) {
      return 'Уравнение введено не верно';
  }

  return parseFloat(result).toFixed(2);
}