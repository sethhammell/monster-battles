import { mossGolem } from "./mossGolem";
import { rodent } from "./rodent";

const monsters = [];

for (let i = 1; i <= 20; i++) {
  monsters.push(new mossGolem(i));
  monsters.push(new rodent(i));
}

export { monsters };
