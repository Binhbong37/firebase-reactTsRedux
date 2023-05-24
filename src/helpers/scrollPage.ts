const SHS_B = (e:any, sc:any, eAmt:any, start:any, y:any) =>{
  e.scrollLeft = eAmt*sc + start
}

export const SmootHorizonScolling = (e:any, time:any, amout:any, start:any) => {
  const eAmt = amout / 100;
  let curTime:any = 0;
  let scrollCounter:any = 0;
  const y = window.scrollY;
  while(curTime <= time) {
    window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start, y);
    curTime += time / 100;
    scrollCounter++
  }
}

