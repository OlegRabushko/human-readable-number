module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    const functionOne = function (num) {
        let a;
        switch (num) {
            case "1":
                a = "one";
                break;
            case "2":
                a = "two";
                break;
            case "3":
                a = "three";
                break;
            case "4":
                a = "four";
                break;
            case "5":
                a = "five";
                break;
            case "6":
                a = "six";
                break;
            case "7":
                a = "seven";
                break;
            case "8":
                a = "eight";
                break;
            case "9":
                a = "nine";
                break;
            case "10":
                a = "ten";
                break;
            case "11":
                a = "eleven";
                break;
            case "12":
                a = "twelve";
                break;
            case "13":
                a = "thirteen";
                break;
            case "14":
                a = "fourteen";
                break;
            case "15":
                a = "fifteen";
                break;
            case "16":
                a = "sixteen";
                break;
            case "17":
                a = "seventeen";
                break;
            case "18":
                a = "eighteen";
                break;
            case "19":
                a = "nineteen";
                break;
        }

        return a;
    };
    const functionTwo = function (num) {
        let b;
        switch (num) {
            case "10":
                b = "ten";
                break;
            case "2":
                b = "twenty";
                break;
            case "3":
                b = "thirty";
                break;
            case "4":
                b = "forty";
                break;
            case "5":
                b = "fifty";
                break;
            case "6":
                b = "sixty";
                break;
            case "7":
                b = "seventy";
                break;
            case "8":
                b = "eighty";
                break;
            case "9":
                b = "ninety";
                break;
            default:
                b = "";
                break;
        }

        return b;
    };

    if (number < 20) {
        return functionOne(number.toString());
    }

    if (number < 100) {
        let numeral = number.toString().split("");
        let c = functionTwo(numeral[0]);

        if (Number(numeral[1]) !== 0) {
            let d = functionOne(numeral[1]);
            return `${c} ${d}`;
        } else {
            return `${c}`;
        }
    }

    if (number > 99) {
        let numeral = number.toString().split("");
        let e = functionOne(numeral[0]);

        if (Number(numeral[1] + numeral[2]) > 19) {
            let f = functionTwo(numeral[1]);

            if (Number(numeral[2]) !== 0) {
                let g = functionOne(numeral[2]);
                return `${e} hundred ${f} ${g}`;
            } else {
                return `${e} hundred ${f}`;
            }
        }

        if (
            Number(numeral[1] + numeral[2]) < 20 &&
            Number(numeral[1] + numeral[2]) !== 0
        ) {
            return `${e} hundred ${functionOne(
                Number(numeral[1] + numeral[2]).toString()
            )}`;
        } else {
            return `${e} hundred`;
        }
    }
};
