const { outputFile } = require('fs-extra');

console.log('proj a');
async function main() {
  await outputFile('./dist/proj-a/hello.txt', 'hi');
  await outputFile('./proj-a/.sst.config.1235.mjs', generateRandomText(100));
}
// Generate random text
function generateRandomText(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

main().then(() => process.exit(0));
