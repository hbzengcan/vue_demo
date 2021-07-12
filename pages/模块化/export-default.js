const address = '武汉';

/*
注意：
    1、一个JS文件中，只能存在一条【export default】语句
    2、被【export default】导出的变量是被其他模块导入时，可以将变量名改写
    假设在b.js中导入属性【address】，但是觉得【address】这个名称太长，希望改成【addr】，所以直接使用
    import addr from "export-default.js";
    addr会自动寻找export-default.js中使用【export default】导出的变量，并获取变量的值
    即：addr = address

    3、真是由于其他模块导出时可以将【export default】导出的数据的变量名所改写，
    因此一个JS文件中，只能存在一条【export default】语句
 */
export default address;