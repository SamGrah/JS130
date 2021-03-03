function bind(func, context) {
  return function(...args) {
    func.call(context, ...args);
  };
}

function printInfo(name, team, coach) {
  console.log(`${name} is a ${this.position} for the ${team} and coach ${coach}`);
}

let player = { position: 'Forward' };
let boundPrint = bind(printInfo, player);

boundPrint('Dennis', 'Bulls', 'Phil');