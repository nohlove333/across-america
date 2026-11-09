# Current NPC art · version 4

The master is the actual AA Avatar Studio renderer. Nine native source sheets were composed from the existing player art. Image generation edited those sheets to add country clothing, small props and restrained action poses while preserving the short rounded body and original face construction. The successful small costume edit and native source sheets are retained in art-source/npc-studio-reference, outside the served assets. Every generated PNG and its role prompt are retained in v4. No global recoloring, sharpening or outline filters were applied.

All 108 people have four complete directional drawings. Component extraction rejects missing bodies and large directional height differences. Runtime keeps four views on a shared foot origin and common canvas; world headings and positions remain fixed during orbit. Manual sheet review confirmed front/back/left/right column order for the new sheets; no old v3 profile corrections are reused.

The original player sprites, masks, customization, all audited placement coordinates, roles, groupings and path rules remain unchanged. Guides remain at their named stations with reachable public approaches. Brazil keeps its 18 stage-facing festival residents and clear central entrance. This is still placement-only NPC behavior.

Validation for this revision: 108 people × four complete frames; shared frame/foot alignment; directional hysteresis; station and public approach checks; native all-country rotation renders. Native canvas rendering is a fallback QA path, not a real phone/browser GPU test. Actual mobile interaction/frame rate remains unverified.

Historical v3 implementation notes follow; v3 art is superseded and kept in Git history.

# Current NPC correction · version 3

Replaced the version-2 NPC drawing set after the user reported a style mismatch and a severed Brazil guide. The source of the severing was a per-column alpha valley chosen at the guide's neck: the first right-profile crop had height118 while other views were182. The next right-profile crop then included the prior person's detached torso. Such speculative row cuts are no longer used.

All version-3 images are generated from the exact original player reference, with simpler flat shading, sparse broad highlights, short compact bodies and fewer fine hair strokes. The original player images, masks and customization remain unchanged. No contrast/saturation/outline filters were added. Nine original PNGs and full prompts are in `v3/`; built-in image generation was used. Historical v1/v2 assets are retained in Git history; unused old atlases are omitted from the deployed bundle.

The atlas builder requires48 whole connected drawings per sheet and rejects four-view height ratios above1.2 rather than silently guessing neck/waist cut lines. Both supported sheet layouts are read from whole components. Manual direction review corrects swapped profiles and records runtime horizontal mirroring where two supplied profiles looked in the same direction. Source pixels, line/color/texture are retained.

Runtime pads every person's four frames to one shared canvas and foot origin; no head/body part is independently resized. Orbit changes directional drawings with a small angular hysteresis to prevent boundary flicker, while the person's world heading remains fixed. All four directional textures are prepared before walking/turning, reducing first-use work.

Movement now sweeps the combined diagonal vector first and uses small collision substeps. NPC detours use eight neighbors and safe line-of-sight smoothing; free routes go directly to the tapped point. Reaching a waypoint does not insert a standing frame. Separate touch-pointer tracking keeps simultaneous direction presses intact. Walking frame preparation is done during avatar load; unchanged HUD/button text is not rewritten every walking frame.

Validation:108 people ×4 complete frames, stable per-person canvas dimensions, directional boundary checks, native all-map/rotation images, all observation/four-guide approach route pairs, actual app diagonal movement, independent touch releases, collision substeps, framework, gesture, stage jump and dance regressions. Actual phone/browser rendering and frame rate remain unverified.

