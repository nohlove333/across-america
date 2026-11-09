// Dispose each GPU resource once, including textures no longer on a material.
export function disposeSceneResources(scene,extraTextures=[]){
 const geometries=new Set(),materials=new Set(),textures=new Set(extraTextures);
 scene.traverse(object=>{if(object.geometry)geometries.add(object.geometry);for(const material of(Array.isArray(object.material)?object.material:[object.material])){if(!material)continue;materials.add(material);for(const value of Object.values(material))if(value?.isTexture)textures.add(value);}});
 if(scene.background?.isTexture)textures.add(scene.background);
 for(const resource of [...textures,...materials,...geometries])resource.dispose();
 scene.clear?.();return{textures:textures.size,materials:materials.size,geometries:geometries.size};
}
