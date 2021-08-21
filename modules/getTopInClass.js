import { generatorPointClass } from "./generatorPointClass.js";
import data from "../data/data.json" assert { type: "json" };
// import { listPointStudent } from '../main.js'
let list = generatorPointClass(data)
// /**
//  * Lấy số nguyên
//  * @param {*} studentId
//  * @returns trả về xếp hạng của học viên đó trong lớp
//  */
export const getTopInClass = (studentId) => {
    let top;
    const listPointClass = list.map((o) => {
        let sumPoint = o.points.reduce((accumulator, currenValue) => {
            return accumulator + currenValue.point
        }, 0)
        return {
            id: o.id,
            totalPoint: sumPoint,
        }
    })
    listPointClass.sort((a, b) => a.totalPoint - b.totalPoint)
    for (const key in listPointClass) {
        if (listPointClass[key].id == studentId) {
            top = parseInt(key) + 1;
            break;
        }
    }
    return top;
};