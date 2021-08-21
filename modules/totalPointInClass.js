import { moduleFn } from "./index.js";
/**
 * Tính tổng điểm của học viên trong 7 ngày
 * @param {*} list | danh sách điểm học viên trong 7 ngày
 * @returns | danh sách học viên và tổng điểm trong 7 ngày
 */
export const totalPointInClass = (list, id) => {
    // tạo list tổng điểm
    // return list.map((e) =>
    //     let totalPoint = moduleFn.days.map((o)=>{ // tính tổng điểm
    //         let sum = 0;
    //         sum += e.points[o.dayId-1].point;
    //         return sum
    //     }).reduce((pre,cur) => 
    //         pre+cur
    //     )
    //     if (!("totalPoint" in s)) {
    //         s.totalPoint = 0;
    //     }
    //     s.totalPoint;
    // }))
    let rs = [...list];
      let a = rs.map((e) => {
        const totalPoint = {};
        let total = e.points.map((o) => {
            let sum = 0;
            sum += e.points[o.dayId - 1].point;
            return sum
        }).reduce((pre, cur) => pre + cur, 0)
        if (!("totalPoint" in e)) {
            e.totalPoint = total;
        }
       return e.totalPoint;
     })
    return a
    
}
//cái bày này kiểu j ý, tjw nhiên là module.days....
