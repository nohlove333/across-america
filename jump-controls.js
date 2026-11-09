// World-space feet keep the original sprite and camera scale unchanged.
export const JUMP_SPEED=310,JUMP_GRAVITY=1000;
export const createJump=()=>({active:false,height:0,velocity:0});
export function resetJump(state,ground=0){state.active=false;state.height=ground;state.velocity=0;}
export function startJump(state,ground){if(state.active)return false;state.active=true;state.height=ground;state.velocity=JUMP_SPEED;return true;}
export function settleJump(state,ground){if(!state.active){state.height=ground;return;}if(state.velocity<=0&&state.height<=ground){resetJump(state,ground);}}
export function advanceJump(state,ground,dt){if(!state.active){state.height=ground;return;}const t=Math.max(0,Math.min(dt,.05));state.height+=state.velocity*t-.5*JUMP_GRAVITY*t*t;state.velocity-=JUMP_GRAVITY*t;settleJump(state,ground);}
