'use strict';

function Fighter (obj) {
  let { name, damage, hp, agility } = obj;
  const initHp = obj.hp;
  let wins = 0;
  let losses = 0;

  function logCombatHistory () {
    console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`)
  }

  function heal (num) {
    hp += num;
    hp > initHp ? hp = initHp : null;
  }

  function dealDamage (num) {
    hp -= num;
    hp < 0 ? hp = 0 : null;
  }

  function attack (fighter) {
    const hundred = 100;
    const successProbability = hundred - fighter.getAgility();
    const random = Math.random() * hundred;
    if (successProbability > random) {
      fighter.dealDamage(damage);
      console.log(`${name} make ${damage} damage to ${fighter.getName()}`);
    } else {
      console.log(`${name} attack missed`);
    }
  }

  return {
    getName: () => name,
    getDamage: () => damage,
    getHealth: () => hp,
    getAgility: () => agility,
    addWin: () => wins++,
    addLoss: () => losses++,
    heal,
    dealDamage,
    logCombatHistory,
    attack
  }
}

function battle (fighter1, fighter2) {
  if (fighter1.getHealth() <= 0) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (fighter2.getHealth() <= 0) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  } else {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      if (fighter2.getHealth() === 0) {
        fighter1.addWin();
        fighter2.addLoss();
        break;
      }
      fighter2.attack(fighter1)
      if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWin();
        break;
      }
    }
  }
}

const fighter1 = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });
const fighter2 = new Fighter({ name: 'Jim', damage: 10, hp: 120, agility: 40 });
