const args = process.argv.slice(2);
const alarms = [];

for (let i = 0; i < args.length; i++) {
  const num = Number(args[i]);

  if (!isNaN(num) && num > 0) {
    alarms.push(num);
  }
}

for (let i = 0; i < alarms.length; i++) {
  const seconds = alarms[i];
  setTimeout(() => {
    console.log(`Beep! ${seconds} seconds have passed.`);
  }, seconds * 1000);
}
