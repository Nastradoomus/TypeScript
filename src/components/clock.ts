/*
    _______    .---.       ,-----.        _______   .--.   .--.
   /   __  \   | ,_|     .'  .-,  '.     /   __  \  |  | _/  /
  | ,_/  \__),-./  )    / ,-.|  \ _ \   | ,_/  \__) | (`' ) /
,-./  )      \  '_ '`) ;  \  '_ /  | :,-./  )       |(_ ()_)
\  '_ '`)     > (_)  ) |  _`,/ \ _/  |\  '_ '`)     | (_,_)   __
(  .  .-'_/  )`-'`-'|___\ `"/  \  ) / (  .  .-'_/  )|  | \ `'   /
 `-'`-'     /  |        \'. \_/``".'   `-'`-'     / |  |  \    /
   `._____.'   `--------`  '-----'       `._____.'  `--'   `'-'

*/

//Just playing around with interfaces, functions, variable types and classes

export interface ClockConstructor {
  new (
    hour: number,
    minute: number,
    second: number,
    element: string | HTMLElement
  ): ClockInterface;
}

export interface ClockInterface {
  tick(i?: number): void;
}

export function createClock(
  construct: ClockConstructor,
  hour: number,
  minute: number,
  second: number,
  element: string | HTMLElement
): ClockInterface {
  return new construct(hour, minute, second, element);
}

export class Clock implements ClockInterface {
  h: number;
  m: number;
  s: number;
  e: HTMLElement;

  constructor(h: number, m: number, s: number, e: string) {
    this.h = h;
    this.m = m;
    this.s = s;
    this.e = document.getElementById(e) as HTMLElement;
  }
  tick(i?: number) {
    if (isNaN(i)) {
      i = 0;
    }
    setTimeout(() => {
      i += 1;
      if (this.s < 59) this.s += 1;
      else {
        this.s = 0;
        if (this.m < 59) this.m += 1;
        else {
          this.m = 0;
          if (this.h < 23) this.h += 1;
          else this.h = 0;
        }
      }
      /*
      if (i % 2 === 0) console.log("tock");
      else console.log("tick");
      */
      this.e.innerHTML =
        "<h2 style='text-align: center'>Counter h:" +
        this.h +
        " m:" +
        this.m +
        " s:" +
        this.s +
        "</h2>";
      this.tick(i);
    }, 1000);
  }
}
