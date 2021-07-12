let i = 100;
let name = '老王';

/* 1、导出变量 */
export {i, name}

/* 2、导出函数 */
export function add(a, b) {
    return a + b;
};

/* 3、导出类 */
export class person {
    play() {
        return "玩游戏";
    }
};