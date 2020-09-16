/*
  .---.       ,-----.      .-_'''-.
  | ,_|     .'  .-,  '.   '_( )_   \
,-./  )    / ,-.|  \ _ \ |(_ o _)|  '
\  '_ '`) ;  \  '_ /  | :. (_,_)/___|
 > (_)  ) |  _`,/ \ _/  ||  |  .-----.
(  .  .-' : (  '\_/ \   ;'  \  '-   .'
 `-'`-'|___\ `"/  \  ) /  \  `-'`   |
  |        \'. \_/``".'    \        /
  `--------`  '-----'       `'-...-'
*/

let el: HTMLElement;
let oldMessage = "";

export function log(message: any) {
  el = document.querySelector("#message");
  if (typeof message === "object") message = JSON.stringify(message);
  else {
    if (oldMessage === "") {
      oldMessage = message;
    } else {
      oldMessage = el.innerHTML;
      if (message === "\n") message = oldMessage + "</br>";
      else message = oldMessage + "<br />" + message;
    }
  }
  el.innerHTML = message;
}
