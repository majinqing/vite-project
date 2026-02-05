// prettier的默认配置文件
export default {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 在语句末尾添加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 多行逗号分割的语法中，最后一行不加逗号
  trailingComma: 'es5',
  // 箭头函数总是包含参数括号 例如：(x) => x 而不是 x => x。保持一致性，避免混淆
  arrowParens: 'always',
  // 对象大括号内两边是否加空格 { a:0 }
  bracketSpacing: true,
  endOfLine: 'lf',
  // 缩进 Vue 文件中的 <script> 和 <style> 标签内容。
  vueIndentScriptAndStyle: true,
};
