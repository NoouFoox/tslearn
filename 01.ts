// 普通数组定义类型
const arr0: number[] = [1, 2, 3];
const arr1: Array<number> = [1, 2, 3, 4, 5];
// 元组类型
const tuple: [number, string] = [1, "set"];
// 接口表示对象类型
interface Person {
  age: number;
  name: string;
}
// 接口只读属性 readonly
// 可选属性?
interface Person1 {
  readonly age: number;
  name?: string;
  [prop: string]: any;
}
let xiaoming: Person = {
  age: 12,
  name: "小明",
};
// 类型别名
type count = number | number[];
function n1(params: count): void {
  console.log(params);
}
// 函数类型
function add(a: number, b: number): number {
  return a + b;
}
// 接口方式定义函数类型
interface Add {
  (x: number, y: number): number;
}
const add2: Add = (x, y) => x + y;
// 函数重载
// 泛型
function getValue<T, U>(arg: [T, U]): [T, U] {
  return arg;
}

// 泛型约束
interface LetObj {
  length: number;
}
function getObj<T extends LetObj>(arg: T): T {
  return arg;
}
// 泛型接口
interface KeyVal<K, U> {
  key: K;
  value: U;
}
const k1: KeyVal<number, string> = { key: 123, value: "12343" };
// 联合类型
let status1: string | number;
status1 = 123;
status1 = "sdd";
// 交叉类型
interface Ia {
  age: number;
  sex: boolean;
}
interface Ib {
  name: string;
  age: number;
}
let obj: Ib & Ia = {
  name: "a",
  age: 123,
  sex: false,
};
// 类型断言
let str: any = "str字符串";

let setLength: number = (<string>str).length;
// 也可以用as来进行
let strLenght: number = (str as string).length;
// 非空断言
let uses: string | null | undefined;

// 变量后面加!表示变量不为空
console.log(uses!.toUpperCase());
console.log(uses?.toUpperCase());
// 确定断言赋值
let value!: number;
console.log(value);
// 类型守卫
str
// in 或者typeof,interfaceof 判断类型是否存在
// 枚举
enum Color {
  BLACK = "黑色",
  BLUE = "蓝色",
  PINK = "粉色",
}
