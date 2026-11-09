// Shared emote timed to the user's 56 × 30 ms wiggle reference.
export const DANCE_DURATION=1.68,DANCE_FRAMES=16;
export function dancePose(seconds){
 const t=Math.max(0,Number.isFinite(seconds)?seconds:0),angle=t/DANCE_DURATION*Math.PI*4;
 // Keep the face visible: the body wiggles rather than repeatedly turning sideways.
 return {height:(1-Math.cos(angle*2))*1.25,rotation:Math.sin(angle)*.035,direction:'front',phase:Math.floor(t/DANCE_DURATION*DANCE_FRAMES)%DANCE_FRAMES};
}
