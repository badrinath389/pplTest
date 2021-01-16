import * as passwordGenerator from "generate-password";

export class GeneratePasswordService {
    public generateRandomString(count, numbersFlag, symbolsFlag, lowerCaseFlag, upperCaseFlag) {
        return passwordGenerator.generate({
            length: count,
            numbers: numbersFlag,
            symbols: symbolsFlag,
            lowercase: lowerCaseFlag,
            uppercase: upperCaseFlag,
            exclude: "![&;{}[]^<>:;/.,~-_`|",
            strict: true
        });
    }
}