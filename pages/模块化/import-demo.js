/*
import {i, name} from "./export-demo" 这样写会报错，因为暂时不支持简写，如果是给予node.js的项目中，可以省略掉.js后缀
 */
/* ES6 规范导入 */
import {i, name} from "./export-demo.js";

/* 导入所有：
* import * as all from "./export-demo.js";
* 使用【*】通配符，同时需要起一个别名，需要使用某个属性或函数时，使用别名【.】调用
* */


console.log(i);
console.log(name);