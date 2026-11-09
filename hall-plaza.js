// A depth-sorted architectural plaza, drawn at export resolution as well as on screen.
// All character art remains the original avatar/NPC sprites.
export function paintHallPlaza(p,w,h,interview=false){
 p.save();p.scale(w/1120,h/640);
 const sky=p.createLinearGradient(0,0,0,640);sky.addColorStop(0,'#a8ced5');sky.addColorStop(.6,'#e6e6cc');sky.addColorStop(1,'#efe0b7');p.fillStyle=sky;p.fillRect(0,0,1120,640);
 const poly=(pts,color)=>{p.fillStyle=color;p.beginPath();pts.forEach(([x,y],i)=>i?p.lineTo(x,y):p.moveTo(x,y));p.closePath();p.fill();};
 const at=(x,z,y=0)=>[560+(x-z)*15,260+(x+z)*6.3-y*15];
 const face=(pts,c)=>poly(pts.map(v=>at(...v)),c);
 const box=(x,z,dx,dz,dy,c,base=0)=>{face([[x,z,base],[x+dx,z,base],[x+dx,z,base+dy],[x,z,base+dy]],c[1]);face([[x+dx,z,base],[x+dx,z+dz,base],[x+dx,z+dz,base+dy],[x+dx,z,base+dy]],c[2]);face([[x,z,base+dy],[x+dx,z,base+dy],[x+dx,z+dz,base+dy],[x,z+dz,base+dy]],c[0]);};
 const text=(t,x,z,y,size=16,c='#fff2d1')=>{const[a,b]=at(x,z,y);p.font=`bold ${size}px "AA Journal",sans-serif`;p.fillStyle=c;p.textAlign='center';p.fillText(t,a,b);};
 // Remote skyline and calm water beyond the garden terraces.
 for(let i=0;i<19;i++){const x=i*66-35,hh=35+(i*37)%85;p.fillStyle=i%2?'#9cb5b0':'#b3c6bd';p.fillRect(x,190-hh,48,hh);p.fillStyle='#dce3cc';for(let j=0;j<3;j++)p.fillRect(x+8+j*11,180-hh,5,8);}
 p.fillStyle='#94bbbc';p.fillRect(0,192,1120,100);p.strokeStyle='#bad5cd';p.lineWidth=2;for(let i=0;i<20;i++){p.beginPath();p.moveTo((i*103)%1100,212+i*3);p.lineTo((i*103)%1100+46,212+i*3);p.stroke();}
 face([[-19,-7,0],[19,-7,0],[23,27,0],[-20,27,0]],'#aeb594');
 box(-17,-4,34,29,.4,['#ded4b4','#b6a987','#a79779']);
 // Fine paving keeps the centre open for the traveler and photographs.
 for(let x=-16;x<17;x++)for(let z=-3;z<25;z++)face([[x,z,.42],[x+.94,z,.42],[x+.94,z+.94,.42],[x,z+.94,.42]],(x+z)%3?'#e8dabb':'#dfcfae');
 const tree=(x,z,tall=3)=>{box(x-.6,z-.6,1.2,1.2,.5,['#b9b99a','#929c7e','#7b8b72'],.4);box(x-.12,z-.12,.24,.24,tall,['#997a57','#82694d','#705a43'],.9);const[a,b]=at(x,z,tall+1.2);p.fillStyle='#607f70';p.beginPath();p.ellipse(a+5,b+7,24,30,0,0,7);p.fill();p.fillStyle='#8fa28a';p.beginPath();p.ellipse(a-5,b-2,25,32,0,0,7);p.fill();p.fillStyle='#acb796';p.beginPath();p.ellipse(a-11,b-10,15,20,-.4,0,7);p.fill();};
 const building=(x,z,dx,dz,name,c)=>{ // shadow, stone plinth, facade, cornice, hipped roof
 face([[x+1,z+1,.44],[x+dx+3,z+1,.44],[x+dx+3,z+dz+2,.44],[x+1,z+dz+2,.44]],'#c6b99b');
 box(x-.2,z-.2,dx+.4,dz+.4,.6,['#d9c8a5','#c4b08c','#ac997b'],.45);
 box(x,z,dx,dz,5.2,[c,c,'#b5a78a'],1);box(x-.2,z-.2,dx+.4,dz+.4,.3,['#f4e5c4','#d9c7a4','#b5a789'],6.2);
 const ridge=[[x+.5,z+dz/2,8],[x+dx-.5,z+dz/2,8]];face([[x-.5,z-.5,6.5],[x+dx+.5,z-.5,6.5],ridge[1],ridge[0]],'#687f74');face([[x+dx+.5,z-.5,6.5],[x+dx+.5,z+dz+.5,6.5],ridge[1]],'#485f59');face([[x-.5,z+dz+.5,6.5],[x+dx+.5,z+dz+.5,6.5],ridge[1],ridge[0]],'#789083');
 for(let k=1;k<dx;k+=1.5){face([[x+k-.35,z-.02,2.3],[x+k+.35,z-.02,2.3],[x+k+.35,z-.02,4.4],[x+k-.35,z-.02,4.4]],'#638782');face([[x+k-.05,z-.04,2.3],[x+k+.04,z-.04,2.3],[x+k+.04,z-.04,4.4],[x+k-.05,z-.04,4.4]],'#f2ddb6');}
 for(let k=1;k<dz;k+=1.5)face([[x+dx+.02,z+k-.3,2.2],[x+dx+.02,z+k+.3,2.2],[x+dx+.02,z+k+.3,4.5],[x+dx+.02,z+k-.3,4.5]],'#5a7b76');
 box(x+.8,z-.12,dx-1.6,.15,.6,['#746c55','#746c55','#615e4c'],4.95);text(name,x+dx/2,z-.3,5.06,13);
 };
 // Civic pavilion with a clock, colonnade and broad ceremonial steps.
 building(-6,-5,12,5,'AA  EXPLORERS HALL','#e5d7b7');
 for(let i=0;i<3;i++)box(-6.8+i*.3,.2+i*.45,13.6-i*.6,.6,.22,['#eee1c2','#c6b794','#b7a886'],.45+(2-i)*.22);
 for(const x of[-5,-2,2,5]){box(x-.25,-.15,.5,.5,4.5,['#fff0ce','#e5d7b7','#c9ba97'],1);box(x-.4,-.3,.8,.8,.25,['#f6e7c5','#e6d4ad','#bbae8e'],5.4);}
 box(-1.8,-3.7,3.6,2.5,3,['#decfae','#e9dbb9','#b7aa8e'],7.5);box(-2,-3.9,4,2.9,.3,['#789084','#65796e','#4b635d'],10.5);
 const[clockX,clockY]=at(0,-3.92,9.1);p.fillStyle='#fff6dc';p.beginPath();p.arc(clockX,clockY,17,0,7);p.fill();p.strokeStyle='#6c7160';p.lineWidth=2;p.stroke();p.beginPath();p.moveTo(clockX,clockY-10);p.lineTo(clockX,clockY);p.lineTo(clockX+8,clockY+4);p.stroke();
 building(-15,5,5,5,'POST OFFICE','#dfc3ab');building(10,5,5,5,'AA DAILY','#d8d6bd');
 // Water garden and low planters flank the broad entrance avenue.
 for(const x of[-10,9]){box(x,1,1,3,.6,['#a5ad8d','#8d987c','#7a896f'],.45);for(let z=1;z<4;z+=.5){const[a,b]=at(x+.5,z,.95);p.fillStyle=z%1?'#d49c89':'#e7c380';p.beginPath();p.arc(a,b,4,0,7);p.fill();}}
 for(const [x,z] of[[-16,1],[15,1],[-16,13],[15,13],[-12,18],[11,18]])tree(x,z,3.3);
 // Circular central mosaic and a small fountain behind the photo spot.
 const[cx,cy]=at(0,10,.45);p.fillStyle='#c3b397';p.beginPath();p.ellipse(cx,cy,124,48,0,0,7);p.fill();p.strokeStyle='#f6ead0';p.lineWidth=4;p.stroke();p.fillStyle='#8da99c';p.beginPath();p.ellipse(cx,cy,106,39,0,0,7);p.fill();p.strokeStyle='#d8e4cd';p.lineWidth=2;for(let i=0;i<8;i++){const a=i*Math.PI/4;p.beginPath();p.moveTo(cx,cy);p.lineTo(cx+99*Math.cos(a),cy+35*Math.sin(a));p.stroke();}text('AA',0,10,.15,26,'#fff0ca');
 const lamp=(x,z)=>{box(x-.2,z-.2,.4,.4,.4,['#6b7969','#52695f','#42574f'],.5);box(x-.06,z-.06,.12,.12,3.3,['#65756a','#53675b','#42574f'],.9);box(x-.3,z-.3,.6,.6,.7,['#7a8870','#f2d39a','#d9bc81'],4);box(x-.4,z-.4,.8,.8,.16,['#71836f','#56695d','#475c52'],4.7);};
 for(const z of[5,14,23])for(const x of[-8,8])lamp(x,z);
 for(const x of[-11,10]){building(x,21,3,3,x<0?'GIFTS':'PASSPORT',x<0?'#e3cea2':'#c5d4bd');}
 // Festival bunting is suspended at the edges, above walking space.
 for(const side of[-1,1]){const a=at(side*14,3,6),b=at(side*14,19,6);p.strokeStyle='#8c8c70';p.lineWidth=1;p.beginPath();p.moveTo(...a);p.quadraticCurveTo((a[0]+b[0])/2,(a[1]+b[1])/2+18,...b);p.stroke();for(let i=1;i<12;i++){const t=i/12,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t+12*Math.sin(t*Math.PI);poly([[x,y],[x+10,y+3],[x+3,y+16]],['#d7a58c','#b6cdb4','#e6ce8f'][i%3]);}}
 // Soft foreground shade anchors the scene without hiding the original characters.
 const shade=p.createLinearGradient(0,520,0,640);shade.addColorStop(0,'#6f775000');shade.addColorStop(1,'#6f775025');p.fillStyle=shade;p.fillRect(0,520,1120,120);
 if(interview){p.fillStyle='#e9dfc137';p.fillRect(0,0,1120,640);}
 p.restore();
}
