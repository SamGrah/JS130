function bind(func, context, ...boundArgs) {
  return function(...args) {
    let allArgs = [...boundArgs, ...args];
    return func.call(context, ...allArgs);
  };
}

function printInfo(name, team, coach) {
  console.log(`${name} is a ${this.position} for the ${team} and coach ${coach}`);
}

let player = { position: 'Forward' };
let boundPrint = bind(printInfo, player, 'Michael', 'Bulls');

boundPrint('Steve');