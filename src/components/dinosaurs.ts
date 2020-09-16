import { log } from "./log";
/*
 ______     .-./`) ,---.   .--.    ,-----.       .-'''-.    ____      ___    _ .-------.       .-'''-.
|    _ `''. \ .-.')|    \  |  |  .'  .-,  '.    / _     \ .'  __ `. .'   |  | ||  _ _   \     / _     \
| _ | ) _  \/ `-' \|  ,  \ |  | / ,-.|  \ _ \  (`' )/`--'/   '  \  \|   .'  | || ( ' )  |    (`' )/`--'
|( ''_'  ) | `-'`"`|  |\_ \|  |;  \  '_ /  | :(_ o _).   |___|  /  |.'  '_  | ||(_ o _) /   (_ o _).
| . (_) `. | .---. |  _( )_\  ||  _`,/ \ _/  | (_,_). '.    _.-`   |'   ( \.-.|| (_,_).' __  (_,_). '.
|(_    ._) ' |   | | (_ o _)  |: (  '\_/ \   ;.---.  \  :.'   _    |' (`. _` /||  |\ \  |  |.---.  \  :
|  (_.\.' /  |   | |  (_,_)\  | \ `"/  \  ) / \    `-'  ||  _( )_  || (_ (_) _)|  | \ `'   /\    `-'  |
|       .'   |   | |  |    |  |  '. \_/``".'   \       / \ (_ o _) / \ /  . \ /|  |  \    /  \       /
'-----'`     '---' '--'    '--'    '-----'      `-...-'   '.(_,_).'   ``-'`-'' ''-'   `'-'    `-...-'
*/

export interface DinosaurInterface {
  name: string;
  description: string;
  image: string;
  size: string;
}

export class Dinosaur implements DinosaurInterface {
  name: string;
  description: string;
  image: string;
  size: string;
  id?: number;

  constructor({ name, description, image, size }: DinosaurInterface) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.size = size;
  }
}

export class DinosaurWithDiet extends Dinosaur {
  private _diet: string = "";

  get diet(): string {
    return this._diet;
  }
  set diet(diet: string) {
    this._diet = diet;
  }
}

export function createTrex() {
  const trexInterface: DinosaurInterface = {
    name: "Tyrannosaurus Rex",
    description:
      'Tyrannosaurus is a genus of coelurosaurian theropod dinosaur. The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the large theropods. Tyrannosaurus lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids. Fossils are found in a variety of rock formations dating to the Maastrichtian age of the upper Cretaceous period, 68 to 66 million years ago. It was the last known member of the tyrannosaurids, and among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.',
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Tyrannosaurus_Rex_Holotype.jpg",
    size: "Huge",
  };

  const trex = new Dinosaur(trexInterface);
  log("<img style='max-width: 500px;' src='" + trex.image + "' />");
  log("\n");
  log("<h2>" + trex.name + "</h2>");
  log("\n");
  log(trex.description);
  log("\n");
  log("<b>Size: " + trex.size + "</b>");
  log("\n");

  const trexWithDiet = new DinosaurWithDiet(trexInterface);
  trexWithDiet.diet = "MEAT!";
  log("Diet: " + trexWithDiet.diet);
  log("\n");
}
