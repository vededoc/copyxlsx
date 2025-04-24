const XLSX = require('xlsx');
const fs = require('fs');
const { program } = require('commander');
program
    .option('-o, --output <string>', 'output')
    .argument('<string>');

program.parse();
const opts = program.opts();

console.log('output: ', opts.output)
console.log(program.argument[0])
//
// // 원본 파일 경로
// const sourceFile = '/home/netmind/Documents/testsampl.xlsx';
// // 복사할 새 파일 경로
// const targetFile = 'copied.xlsx';
//
// // 1. 원본 파일 읽기
// const workbook = XLSX.readFile(sourceFile);
//
// // 2. 새 워크북 생성
// const newWorkbook = XLSX.utils.book_new();
//
// // 3. 모든 시트를 새 워크북에 복사
// workbook.SheetNames.forEach(sheetName => {
//     const sheet = workbook.Sheets[sheetName];
//     XLSX.utils.book_append_sheet(newWorkbook, sheet, sheetName);
// });
//
// // 4. 새 워크북을 파일로 저장
// XLSX.writeFile(newWorkbook, targetFile);
//
// console.log(`모든 시트를 ${targetFile}로 복사 완료.`);
