/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2024-11-20 19:16:35
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2024-11-20 19:17:17
 * @FilePath: \test\src\store\useCounter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

// 定义 State 的接口
interface CounterState {
  count: number; // 存储计数器的值
}

// 定义一个名为 "counter" 的 Store
export const useCounterStore = defineStore("counter", {
  // State：使用类型注解来定义状态
  state: (): CounterState => ({
    count: 0,
  }),

  // Getters：计算双倍的计数值
  getters: {
    doubleCount: (state: CounterState): number => state.count * 2,
  },

  // Actions：定义修改 State 的方法
  actions: {
    increment() {
      this.count++; // 增加计数
    },
    decrement() {
      this.count--; // 减少计数
    },
  },
});
