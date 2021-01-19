"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrapper_1 = require("./bootstrapper");
const server_1 = require("./server");
bootstrapper_1.default.load(__dirname).then(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server_1.default.start();
        console.log('Server started');
    }
    catch (error) {
        console.error(error);
    }
}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUEwQztBQUMxQyxxQ0FBOEI7QUFFOUIsc0JBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtJQUN6QyxJQUFJO1FBQ0EsTUFBTSxnQkFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNqQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4QjtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9vdHN0cmFwcGVyIGZyb20gXCIuL2Jvb3RzdHJhcHBlclwiO1xyXG5pbXBvcnQgc2VydmVyIGZyb20gJy4vc2VydmVyJztcclxuXHJcbkJvb3RzdHJhcHBlci5sb2FkKF9fZGlybmFtZSkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHNlcnZlci5zdGFydCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgc3RhcnRlZCcpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxufSk7Il19
