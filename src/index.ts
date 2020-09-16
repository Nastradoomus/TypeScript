import { createTrex, Dinosaur } from "./components/dinosaurs";
import { log } from "./components/log";
import { createClock, Clock } from "./components/clock";

import "./styles/style.scss";

let clock = createClock(Clock, 0, 0, 0, "clock");
clock.tick();

/*
   ___     ______                __          ______    ____
  <  /    / ____/_______  ____ _/ /____     /_  __/   / __ \___  _  __
  / /    / /   / ___/ _ \/ __ `/ __/ _ \     / /_____/ /_/ / _ \| |/_/
 / /    / /___/ /  /  __/ /_/ / /_/  __/    / /_____/ _, _/  __/>  <
/_(_)   \____/_/   \___/\__,_/\__/\___/    /_/     /_/ |_|\___/_/|_|
*/

const trex = createTrex();

/*
  ___      ____                      _
 |__ \    |  _ \                    | |
    ) |   | |_) | __ _ ___  ___  ___| | __ _ ___ ___
   / /    |  _ < / _` / __|/ _ \/ __| |/ _` / __/ __|
  / /_ _  | |_) | (_| \__ \  __/ (__| | (_| \__ \__ \
 |____(_) |____/ \__,_|___/\___|\___|_|\__,_|___/___/

2. Create one base class (something like animal/car/geometric shapes)

*/

class BaseClass {
  base: string;
  #private: string = "Top secret private string from BC";
  protected _protected?: string = '"Not so secret" protected string';
  constructor(base: string, _protected?: string) {
    this.base = base;
  }
  get private(): string {
    return this.#private;
  }

  set private(basePrivate: string) {
    this.#private = basePrivate;
    log("Top secret private string from BC changed to: " + this.#private);
  }
  disp(): void {
    log("Base from BC:  " + this.base);
  }
}

const base = new BaseClass("Default Base from BC");
base.disp();
log(base.private);
base.private = "New top secret string to BC";
log("\n");

/*
 ____     _______ _                     _       _               _ _           _        _
|___ \   |__   __| |                   (_)     | |             (_) |         | |      | |
  __) |     | |  | |__  _ __ ___  ___   _ _ __ | |__   ___ _ __ _| |_ ___  __| |   ___| | __ _ ___ ___  ___  ___
 |__ <      | |  | '_ \| '__/ _ \/ _ \ | | '_ \| '_ \ / _ \ '__| | __/ _ \/ _` |  / __| |/ _` / __/ __|/ _ \/ __|
 ___) |     | |  | | | | | |  __/  __/ | | | | | | | |  __/ |  | | ||  __/ (_| | | (__| | (_| \__ \__ \  __/\__ \
|____(_)    |_|  |_| |_|_|  \___|\___| |_|_| |_|_| |_|\___|_|  |_|\__\___|\__,_|  \___|_|\__,_|___/___/\___||___/

3. Create three inhered classes from the base and extend the functionally of the base on them.

*/

class First extends BaseClass {
  first?: string;
  constructor(base: string, f?: string) {
    super(base);
    this.first = f;
  }
  disp(): void {
    log("First class, Base from BC:  " + this.base);
    log("First class, first:  " + this.first);
  }
}
class Second extends BaseClass {
  second?: string;
  constructor(base: string, s?: string) {
    super(base);
    this.second = s;
  }
  disp(): void {
    log("Second class, Base from BC:  " + this.base);
    log("Second class, second:  " + this.second);
  }

  // NOT MY FUNCTION but lets break it down
  //union takes in a string or an array and returns it as a string. With arrays it breaks down the individual values as an array joined with a ",".

  union(arg: string | string[] | (() => string) | { s: string }): string {
    if (typeof arg === "string") {
      return this.commonCase(arg);
    } else if (Array.isArray(arg)) {
      return "Array out: " + arg.map(this.commonCase).join(",");
    } else log("Not a string or an array");
    return;
  }
  commonCase(s: string): string {
    return s;
  }
}

class Third extends BaseClass {
  third: string;
  number: number | null = 120;

  constructor(base: string, _protected: string, t: string) {
    super(base, _protected);
    this.third = t;
  }
  disp(): void {
    log("Third Class, Base from BC: " + this.base);
    log("Third Class, Protected from BC: " + this._protected);
  }
  identity<T>(arg: T): T {
    return arg;
  }
}

/*
| || | |  \/  |         | (_)/ _(_)                 | |                           ___                (_)
| || |_| \  / | ___   __| |_| |_ _  ___ _ __ ___    | |_ _   _ _ __   ___  ___   ( _ )    _   _ _ __  _  ___  _ __  ___
|__   _| |\/| |/ _ \ / _` | |  _| |/ _ \ '__/ __|   | __| | | | '_ \ / _ \/ __|  / _ \/\ | | | | '_ \| |/ _ \| '_ \/ __|
   | |_| |  | | (_) | (_| | | | | |  __/ |  \__ \_  | |_| |_| | |_) |  __/\__ \ | (_>  < | |_| | | | | | (_) | | | \__ \
   |_(_)_|  |_|\___/ \__,_|_|_| |_|\___|_|  |___( )  \__|\__, | .__/ \___||___/  \___/\/  \__,_|_| |_|_|\___/|_| |_|___/
                                                |/        __/ | |
                                                         |___/|_|

4. Use access modifiers, generic types, nullable types, and Unions in these classes.

*/

const firstModifier = new First("First In", "First out");
firstModifier.disp();
log("\n");
const secondModifier = new Second("Second in", "Second out");
secondModifier.disp();
log("\n");
const thirdModifier = new Third("Third in", "Third to protected", "Third out");
thirdModifier.disp();
log("\n");
log(
  "The next output is function called identity which accepts arg as any type and returns it with the same type:"
);
log(thirdModifier.identity(typeof thirdModifier.base));
log(thirdModifier.identity(typeof thirdModifier.number));
log("\n");
log("Lets null the third.number and log the value and identity");
thirdModifier.number = null;
if (thirdModifier.number === null) log("null");
log(thirdModifier.identity(typeof thirdModifier.number));
log("\n");
log("Function union accepts a string or an array and returns it as a string.");
log('"Array in: ["Dick", "Donkey", "Jane", "Austin"]');
log(typeof ["Dick", "Donkey", "Jane", "Austin"]);
log(secondModifier.union(["Dick", "Donkey", "Jane", "Austin"]));
log(typeof secondModifier.union(["Dick", "Donkey", "Jane", "Austin"]));
log("\n");

/*

   ____     ____     __          ___
  / __/    /  _/__  / /____ ____/ _/__ ________
 /__ \_   _/ // _ \/ __/ -_) __/ _/ _ `/ __/ -_)
/____(_) /___/_//_/\__/\__/_/ /_/ \_,_/\__/\__/

5. Create an Interface that has a function with the name of 'IsBaseClass'.
   The function can accept each of these four classes instance as an argument.
   The 'IsBaseClass' function must have only and only one argument.
   The return type of function must be Boolean.

  ____     ____         __
 / __/    /  _/__  ___ / /____ ____  _______
/ _ \_   _/ // _ \(_-</ __/ _ `/ _ \/ __/ -_)
\___(_) /___/_//_/___/\__/\_,_/_//_/\__/\__/

6. Create an instance of the interface and implement 'IsBaseClass'. The function must print the real class name in the console. ( the name of input class)

*/

interface Compare {
  (arg: First | Second | Third | Dinosaur): boolean;
}

const compare: Compare = function (
  arg: First | Second | Third | Dinosaur
): boolean {
  log("Classname: " + arg.constructor.name);
  if (arg instanceof BaseClass) {
    return true;
  } else return false;
};

log("Some random compares");
const compareSecond = new Second("compare");
let compareOne: First = compareSecond;

if (compareOne === compareSecond) log("TRUE!");
else log("FALSE!");
if (typeof compareOne === typeof compareSecond) log("TRUE!");
else log("FALSE!");
log("\n");
log("Compare First to BC");
log(compare(compareOne));
log("\n");
log("Compare DinosaurInterface to BC");
const compareDino = new Dinosaur({
  name: "Tyrannosaurus Rex",
  description:
    'Tyrannosaurus is a genus of coelurosaurian theropod dinosaur. The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the large theropods. Tyrannosaurus lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids. Fossils are found in a variety of rock formations dating to the Maastrichtian age of the upper Cretaceous period, 68 to 66 million years ago. It was the last known member of the tyrannosaurids, and among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.',
  image:
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Tyrannosaurus_Rex_Holotype.jpg",
  size: "Huge",
});
log(compare(compareDino));
