export const arr = [10, 20, 30, 40];

const info = { loc: "seoul" };
const arr2 = [100, 2000, 300, 400];
export {arr2, getName, info }; //default가 아닌 상태로 export하여 외부에서 다 쓸 수 있다.

alert("common.js");
function getName() {
    return "getName함수";
}
