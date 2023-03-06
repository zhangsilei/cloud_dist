/**
 * 枚举定义工具
 * 示例：
 * const STATUS = createEnum({
 *     AUDIT_WAIT: [1, '审核中'],
 *     AUDIT_PASS: [2, '审核通过']
 * })
 * 获取枚举值：STATUS.AUDIT_WAIT // 1
 * 获取枚举描述：STATUS.getDesc('AUDIT_WAIT') // 审核中
 * 通过枚举值获取描述：STATUS.getDescFromValue(STATUS.AUDIT_WAIT) // 审核中
 * 通过枚举描述获取枚举值：STATUS.getValueFromDesc(STATUS.getDesc('AUDIT_WAIT')) // 1
 * 获取枚举键值对列表，适用于select的option：STATUS.getValueDescList() // [{value:1,desc:'审核中'},{value:2,desc:'审核通过'}]
 */
export default function createEnum(definition) {
  const strToValueMap = {};
  const numToDescMap = {};
  const valueDescList = [];

  for (const enumName of Object.keys(definition)) {
    const [value, desc] = definition[enumName];

    strToValueMap[enumName] = value; // { AUDIT_WAIT:1, ... }
    numToDescMap[value] = desc; // { 1:'审核中', ... }
    valueDescList.push({
      value,
      desc,
      label: desc, // 该label为了方便el-select使用
    });
  }

  return {
    ...strToValueMap,
    getDesc(enumName) {
      return (definition[enumName] && definition[enumName][1]) || '';
    },
    getDescFromValue(value) {
      return numToDescMap[value] || '';
    },
    getValueFromDesc(value) {
      return strToValueMap[value] || '';
    },
    getValueDescList() {
      return valueDescList;
    },
  };
}
