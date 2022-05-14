/* applyTokenDamage(damageDetail, totalDamage, theTargets, item, saves, options = { existingDamage: [], superSavers: new Set(), semiSuperSavers: new Set(), workflow: undefined })

 */

// get basic data on tokens

console.log("args: ", args);
const lastArg = args[args.length - 1];
const actorD = game.actors.get(lastArg.actor._id);
const me = canvas.tokens.get(token.id);
let targets = MidiQOL.findNearby(null, me, 30, null);
const itemD = await fromUuid(lastArg.itemUuid);
let damageMultiplier = 0;
let damageType = "force";
let multiplier = 0;
// Define the staff of power and get its remaining charges
let staffPower = actorD.items.getName("Staff of Power");
let chargesLeft = staffPower.data.flags.magicitems.uses;
console.log("Charges Left in staff: ", chargesLeft);

// deal damage to targets
targets.reduce((list, target) => {
  let distance = MidiQOL.getDistance(me, target, true);
  let multiplier =
    distance <= 10 ? 8 : distance <= 20 ? 6 : distance <= 30 ? 4 : false;
  console.log(
    target.data.name,
    "multiplier: ",
    multiplier,
    ", distance: ",
    distance,
    ", Damage: ",
    multiplier * chargesLeft
  );
  if (multiplier) {
//  applyTokenDamag(damageDetail, (multiplier * chargesLeft), target, itemD, [], []);
    list.push(
      `${target.data.name} + " takes " + ${
        multiplier * chargesLeft
      } + " points of " + ${damageType} + " damage!"`
    );
  }
  return list;
}, []);

// set up 50-50 chance of survival

let randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber >= 0.5) {
  multiplier = 16;
  console.log(
    "You take " + multiplier * chargesLeft + " points of force damage!"
    // apply damage using applyTokenDamage
    
	
}

  );
} else {
  console.log("You are transported to another plane. Bye bye");
  canvas.scene.deleteEmbebeddedDocuments("Token",[me])

}