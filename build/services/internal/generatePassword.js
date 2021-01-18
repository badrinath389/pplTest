"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratePasswordService = void 0;
const passwordGenerator = require("generate-password");
class GeneratePasswordService {
    generateRandomString(count, numbersFlag, symbolsFlag, lowerCaseFlag, upperCaseFlag) {
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
exports.GeneratePasswordService = GeneratePasswordService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC9nZW5lcmF0ZVBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUF1RDtBQUV2RCxNQUFhLHVCQUF1QjtJQUN6QixvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYTtRQUNyRixPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUM5QixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFaRCwwREFZQyIsImZpbGUiOiJzZXJ2aWNlcy9pbnRlcm5hbC9nZW5lcmF0ZVBhc3N3b3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGFzc3dvcmRHZW5lcmF0b3IgZnJvbSBcImdlbmVyYXRlLXBhc3N3b3JkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVQYXNzd29yZFNlcnZpY2Uge1xyXG4gICAgcHVibGljIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGNvdW50LCBudW1iZXJzRmxhZywgc3ltYm9sc0ZsYWcsIGxvd2VyQ2FzZUZsYWcsIHVwcGVyQ2FzZUZsYWcpIHtcclxuICAgICAgICByZXR1cm4gcGFzc3dvcmRHZW5lcmF0b3IuZ2VuZXJhdGUoe1xyXG4gICAgICAgICAgICBsZW5ndGg6IGNvdW50LFxyXG4gICAgICAgICAgICBudW1iZXJzOiBudW1iZXJzRmxhZyxcclxuICAgICAgICAgICAgc3ltYm9sczogc3ltYm9sc0ZsYWcsXHJcbiAgICAgICAgICAgIGxvd2VyY2FzZTogbG93ZXJDYXNlRmxhZyxcclxuICAgICAgICAgICAgdXBwZXJjYXNlOiB1cHBlckNhc2VGbGFnLFxyXG4gICAgICAgICAgICBleGNsdWRlOiBcIiFbJjt7fVtdXjw+OjsvLix+LV9gfFwiLFxyXG4gICAgICAgICAgICBzdHJpY3Q6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
