const colors = require("colors");

let c = 1;

let n = process.argv[2];


    if (isNaN(n) == true)
        console.log(colors.red("Введенные данные не являются числом"));
    else if (n<2)
        console.log(colors.yellow("Простых чисел не найдено"));
    else

        for (i = 2; i <= n; i++) {
            for ( j = 2; j <= i; j++) {
                if ((i % j == 0) && (j != i)){
                    break;
                }else
                    if (c == 1){
                        console.log(colors.green(i));
                        c = 2;
                        break;
                    } else if (c == 2){
                        console.log(colors.yellow(i));
                        c = 3;
                        break;
                    } else if (c == 3){
                        console.log(colors.red(i));
                        c = 1;
                        break;
                    }
                
            }
        }
