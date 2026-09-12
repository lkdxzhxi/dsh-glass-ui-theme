window.__ModuleLoader__.load({ id: "dsh-glass-ui-theme", factory: (require) => {
var module = { exports: {} };
var exports = module.exports;
(()=>{const s=document.createElement('style');s.setAttribute('data-plugin',"dsh-glass-ui-theme");s.textContent=":root {\n  --glass-opacity: .45;\n  --glass-blur: 28px;\n  --glass-font: \"\";\n  --glass-font-url: \"\";\n  --glass-bg-type: none;\n  --glass-bg-image: none;\n  --glass-bg-video: none;\n  --glass-bg-mask: 0;\n  --glass-bg-fit: cover;\n  --glass-anim-level: soft;\n  --glass-frosted: 1;\n  --glass-frost-blur: 24px;\n  --glass-refraction: .4;\n  --glass-tint: #fff;\n  --glass-tint-opacity: .35;\n  --glass-edge-refraction-scale: 80;\n  --glass-brightness: 1;\n  --glass-glass-brightness: 1;\n  --glass-bg-blur: 5px;\n  --glass-surface-light: #ffffff73;\n  --glass-surface-dark: #10101873;\n  --glass-accent: #4fb8b8;\n}\n\nbody.dsh-glass-on, body.dsh-glass-on button, body.dsh-glass-on input, body.dsh-glass-on select, body.dsh-glass-on textarea {\n  font-family: var(--glass-font);\n}\n\n#dsh-glass-bg {\n  z-index: 0;\n  pointer-events: none;\n  opacity: 0;\n  background: radial-gradient(1200px 800px at 82% -10%, #4fb8b838, #0000 60%), radial-gradient(1000px 700px at 8% 112%, #00d2b429, #0000 55%), linear-gradient(165deg, #4fb8b814, #0000 45%);\n  transition: opacity .7s, transform .7s;\n  position: fixed;\n  inset: -48px;\n  overflow: hidden;\n}\n\nbody.dsh-glass-ready #dsh-glass-bg {\n  opacity: 1;\n}\n\n#dsh-glass-bg img, #dsh-glass-bg video {\n  object-fit: var(--glass-bg-fit, cover);\n  width: 100%;\n  height: 100%;\n  filter: blur(calc(var(--glass-blur) * .55))\n    saturate(1.12)\n    brightness(var(--glass-brightness, 1));\n  transition: filter .7s, opacity .7s;\n  position: absolute;\n  inset: 0;\n  transform: scale(1.06);\n}\n\nbody[data-glass-fit=\"contain\"] #dsh-glass-bg img, body[data-glass-fit=\"contain\"] #dsh-glass-bg video {\n  object-fit: contain;\n}\n\nbody[data-glass-fit=\"original\"] #dsh-glass-bg img, body[data-glass-fit=\"original\"] #dsh-glass-bg video {\n  object-fit: none;\n  width: auto;\n  max-width: none;\n  height: auto;\n  max-height: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.06);\n}\n\n#dsh-glass-bg:after {\n  content: \"\";\n  background: rgba(255, 255, 255, var(--glass-bg-mask));\n  transition: opacity .7s;\n  position: absolute;\n  inset: 0;\n}\n\nbody[data-ds-dark-theme] #dsh-glass-bg:after {\n  background: rgba(0, 0, 0, var(--glass-bg-mask));\n}\n\n#root {\n  z-index: 1;\n  position: relative;\n}\n\nbody.dsh-glass-on {\n  --dsh-scrollbar-thumb: #7f7f7f61;\n  --dsh-scrollbar-thumb-hover: #7f7f7f8c;\n}\n\nbody.dsh-glass-on [data-frost] {\n  isolation: isolate;\n  position: relative;\n}\n\nbody.dsh-glass-on [data-frost]:before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: -1;\n  pointer-events: none;\n  backdrop-filter: blur(var(--glass-frost-blur, 24px))\n    saturate(calc(1 + var(--glass-refraction, .4)))\n    url(\"#dsh-glass-edge-refraction\");\n  background: color-mix(in srgb,\n    var(--glass-tint, #fff)\n      calc(var(--glass-tint-opacity, .35) * 100%),\n    transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff59, inset 0 0 0 1px #ffffff26, inset 0 0 14px #ffffff0f, inset 2px 2px 6px 2px #ffffff1a, inset -2px -2px 4px -1px #ffffff1a, 0 0 16px #ffffff14;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-frost]:before {\n  background: color-mix(in srgb,\n    var(--glass-tint, #fff)\n      calc(var(--glass-tint-opacity, .35) * 60%),\n    transparent);\n  box-shadow: inset 0 1px #ffffff38, inset 0 0 0 1px #ffffff14, inset 0 0 14px #ffffff0a, inset 2px 2px 6px 2px #ffffff12, inset -2px -2px 4px -1px #ffffff12, 0 0 20px #ffffff0f;\n}\n\nbody.dsh-glass-on [data-composer-card] {\n  isolation: isolate;\n}\n\nbody.dsh-glass-on [data-composer-card]:before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: 0;\n  pointer-events: none;\n  backdrop-filter: blur(var(--glass-frost-blur, 24px))\n    saturate(calc(1 + var(--glass-refraction, .4)))\n    url(\"#dsh-glass-edge-refraction\");\n  background: color-mix(in srgb,\n    var(--glass-tint, #fff)\n      calc(var(--glass-tint-opacity, .35) * 80%),\n    transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff73, inset 0 0 0 1px #fff3, inset 0 0 18px #ffffff14, inset 0 0 36px #ffffff0a, inset 2px 2px 6px 2px #ffffff29, inset -2px -2px 4px -1px #ffffff29, 0 0 24px #ffffff1a;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card]:before {\n  background: color-mix(in srgb,\n    var(--glass-tint, #fff)\n      calc(var(--glass-tint-opacity, .35) * 50%),\n    transparent);\n  box-shadow: inset 0 1px #ffffff47, inset 0 0 0 1px #ffffff1a, inset 0 0 18px #ffffff0f, inset 0 0 40px #ffffff08, inset 2px 2px 6px 2px #ffffff1a, inset -2px -2px 4px -1px #ffffff1a, 0 0 28px #ffffff14;\n}\n\nbody.dsh-glass-on [data-composer-card] button[class*=\"_primary\"] {\n  backdrop-filter: blur(12px) url(\"#dsh-glass-edge-refraction\");\n  background: linear-gradient(180deg,\n    color-mix(in srgb, var(--glass-tint, #fff) 22%, transparent),\n    color-mix(in srgb, var(--glass-tint, #fff) 8%, transparent)) !important;\n  box-shadow: inset 0 1px #fff6, inset 0 0 0 1px #ffffff24, inset 0 -2px 6px #00000026, inset 2px 2px 6px 2px #ffffff1f, inset -2px -2px 4px -1px #ffffff1f !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button[class*=\"_primary\"]:hover:not(:disabled) {\n  background: linear-gradient(180deg,\n    color-mix(in srgb, var(--glass-tint, #fff) 32%, transparent),\n    color-mix(in srgb, var(--glass-tint, #fff) 12%, transparent)) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[class*=\"_primary\"] {\n  background: linear-gradient(180deg,\n    color-mix(in srgb, var(--glass-tint, #fff) 36%, transparent),\n    color-mix(in srgb, var(--glass-tint, #fff) 14%, transparent)) !important;\n  box-shadow: inset 0 1px #ffffff4d, inset 0 0 0 1px #ffffff1a, inset 0 -2px 8px #0000004d, inset 2px 2px 6px 2px #ffffff14, inset -2px -2px 4px -1px #ffffff14 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[class*=\"_primary\"]:hover:not(:disabled) {\n  background: linear-gradient(180deg,\n    color-mix(in srgb, var(--glass-tint, #fff) 48%, transparent),\n    color-mix(in srgb, var(--glass-tint, #fff) 20%, transparent)) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"], body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i] {\n  isolation: isolate;\n  z-index: 1;\n  position: relative;\n  background: none !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:before, body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: -1;\n  pointer-events: none;\n  backdrop-filter: blur(14px) url(\"#dsh-glass-edge-refraction\");\n  background: color-mix(in srgb, var(--glass-tint, #fff) 30%, transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff80, inset 0 0 0 1px #ffffff42, inset 0 0 10px #ffffff1a, inset 2px 2px 6px 2px #ffffff2e, inset -2px -2px 4px -1px #ffffff2e, 0 1px 3px #0000001a;\n}\n\nbody.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"] svg, body.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"] path, body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i] svg, body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i] path {\n  filter: drop-shadow(0 1px 1px #ffffff73);\n  stroke: #14151eeb !important;\n  fill: #14151eeb !important;\n  color: #14151eeb !important;\n  opacity: 1 !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:hover svg, body.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:hover path, body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:hover svg, body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:hover path {\n  stroke: #14151e !important;\n  fill: #14151e !important;\n  color: #14151e !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:hover:before, body.dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:hover:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 40%, transparent);\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:before, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 34%, transparent);\n  box-shadow: inset 0 1px #ffffff4d, inset 0 0 0 1px #ffffff1f, inset 2px 2px 6px 2px #ffffff1a, inset -2px -2px 4px -1px #ffffff1a, 0 1px 3px #00000038;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"命令\"] svg, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"命令\"] path, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i] svg, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i] path {\n  filter: drop-shadow(0 1px 2px #0000008c);\n  stroke: #f5f8fff5 !important;\n  fill: #f5f8fff5 !important;\n  color: #f5f8fff5 !important;\n  opacity: 1 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:hover svg, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:hover path, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:hover svg, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:hover path {\n  stroke: #f5f8ff !important;\n  fill: #f5f8ff !important;\n  color: #f5f8ff !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"命令\"]:hover:before, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label*=\"Command\" i]:hover:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 48%, transparent);\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]) {\n  isolation: isolate;\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]):before {\n  content: \"\";\n  z-index: -1;\n  backdrop-filter: blur(calc(var(--glass-frost-blur, 24px) * 1.2)) saturate(calc(1 + var(--glass-refraction, .4)));\n  position: absolute;\n  inset: 0;\n  -webkit-mask-image: linear-gradient(#000 0% 30%, #0000 100%);\n  mask-image: linear-gradient(#000 0% 30%, #0000 100%);\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]):after {\n  display: none;\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"] {\n  isolation: isolate;\n  color: var(--dsw-alias-label-secondary);\n  border-radius: 999px;\n  margin-bottom: 10px;\n  padding: 7px 18px;\n  position: relative;\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"]:before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: -1;\n  backdrop-filter: blur(12px) saturate(calc(1 + var(--glass-refraction, .4))) url(\"#dsh-glass-edge-refraction\");\n  background: color-mix(in srgb, var(--glass-tint, #fff) 8%, transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff61, inset 0 0 0 1px #ffffff29, inset 0 0 10px #ffffff12, inset 2px 2px 6px 2px #ffffff1f, inset -2px -2px 4px -1px #ffffff1f, 0 2px 10px #0000001a;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"]:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 10%, transparent);\n  box-shadow: inset 0 1px #ffffff38, inset 0 0 0 1px #ffffff14, inset 2px 2px 6px 2px #ffffff14, inset -2px -2px 4px -1px #ffffff14, 0 2px 10px #00000040;\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"][aria-selected=\"true\"] {\n  color: var(--dsw-alias-state-business-primary);\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"][aria-selected=\"true\"]:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 16%, transparent);\n  box-shadow: inset 0 1px #ffffff80, inset 0 0 0 1px #ffffff42, inset 0 0 14px #ffffff1f, inset 2px 2px 6px 2px #ffffff2e, inset -2px -2px 4px -1px #ffffff2e, 0 2px 12px #00000024;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"][aria-selected=\"true\"]:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 20%, transparent);\n  box-shadow: inset 0 1px #ffffff52, inset 0 0 0 1px #ffffff24, inset 0 0 14px #ffffff12, inset 2px 2px 6px 2px #ffffff1a, inset -2px -2px 4px -1px #ffffff1a, 0 2px 12px #0000004d;\n}\n\nbody.dsh-glass-on header:has([role=\"tablist\"]) [role=\"tab\"]:after {\n  display: none;\n}\n\nbody.dsh-glass-on div:has( > [data-conversation-scroll])[data-phase=\"active\"] {\n  isolation: isolate;\n  position: relative;\n}\n\nbody.dsh-glass-on div:has( > [data-conversation-scroll])[data-phase=\"active\"] > [data-slot=\"conversation.session.header\"] > header:has([role=\"tablist\"]) {\n  z-index: 5;\n  background: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\nbody.dsh-glass-on div:has( > [data-conversation-scroll])[data-phase=\"active\"] > [data-conversation-scroll] {\n  box-sizing: border-box;\n  padding-top: 88px;\n}\n\nbody.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button:not([aria-label*=\"访问模式\" i]):not([aria-label*=\"Access mode\" i]) {\n  isolation: isolate;\n  position: relative;\n}\n\nbody.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button:not([aria-label*=\"访问模式\" i]):not([aria-label*=\"Access mode\" i]):before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: -1;\n  pointer-events: none;\n  backdrop-filter: blur(12px) url(\"#dsh-glass-edge-refraction\");\n  background: color-mix(in srgb, var(--glass-tint, #fff) 8%, transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff47, inset 0 0 0 1px #ffffff1f, inset 0 0 8px #ffffff0d, inset 2px 2px 6px 2px #ffffff1a, inset -2px -2px 4px -1px #ffffff1a;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button:not([aria-label*=\"访问模式\" i]):not([aria-label*=\"Access mode\" i]):before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 10%, transparent);\n  box-shadow: inset 0 1px #ffffff2e, inset 0 0 0 1px #ffffff0f, inset 2px 2px 6px 2px #ffffff12, inset -2px -2px 4px -1px #ffffff12;\n}\n\nbody.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button[aria-label*=\"访问模式\" i], body.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button[aria-label*=\"Access mode\" i] {\n  isolation: auto !important;\n  -webkit-backdrop-filter: none !important;\n  position: static !important;\n}\n\nbody.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button[aria-label*=\"访问模式\" i]:before, body.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button[aria-label*=\"Access mode\" i]:before {\n  display: none !important;\n}\n\nbody.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) svg[aria-hidden=\"true\"] {\n  filter: none !important;\n  backdrop-filter: none !important;\n  box-shadow: none !important;\n  background: none !important;\n}\n\nbody.dsh-glass-on [class*=\"_root\"]:has([class*=\"_treeBody\"]) button:has(svg[aria-hidden=\"true\"]):before {\n  display: none !important;\n}\n\n[data-time-hover-root] [class*=\"_bubble\"] {\n  isolation: isolate;\n  position: relative;\n}\n\nbody.dsh-glass-on [data-time-hover-root] [class*=\"_bubble\"]:before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: -1;\n  backdrop-filter: blur(var(--glass-frost-blur, 24px))\n    saturate(calc(1 + var(--glass-refraction, .4)))\n    url(\"#dsh-glass-edge-refraction\");\n  background: color-mix(in srgb, var(--glass-tint, #fff) 8%, transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff61, inset 0 0 0 1px #ffffff21, inset 0 0 12px #ffffff0f, inset 2px 2px 6px 2px #ffffff1a, inset -2px -2px 4px -1px #ffffff1a;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-time-hover-root] [class*=\"_bubble\"]:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 10%, transparent);\n  box-shadow: inset 0 1px #ffffff3d, inset 0 0 0 1px #ffffff14, inset 2px 2px 6px 2px #ffffff12, inset -2px -2px 4px -1px #ffffff12;\n}\n\nbody.dsh-glass-on [data-queue-dock] > div {\n  backdrop-filter: blur(var(--glass-frost-blur, 24px))\n    saturate(calc(1 + var(--glass-refraction, .4)))\n    url(\"#dsh-glass-edge-refraction\");\n  box-shadow: inset 0 1px #fff3, inset 0 0 0 1px #ffffff12, inset 0 0 12px #ffffff0d;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] {\n  isolation: isolate;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby]:before {\n  content: \"\";\n  border-radius: inherit;\n  z-index: -1;\n  pointer-events: none;\n  backdrop-filter: blur(var(--glass-frost-blur, 24px)) saturate(calc(1 + var(--glass-refraction, .4)));\n  background: color-mix(in srgb, var(--glass-tint, #fff) 10%, transparent);\n  position: absolute;\n  inset: 0;\n  box-shadow: inset 0 1px #ffffff6b, inset 0 0 0 1px #ffffff2e, inset 0 0 18px #ffffff14, 0 0 24px #ffffff1a;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby]:before {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 10%, transparent);\n  box-shadow: inset 0 1px #ffffff42, inset 0 0 0 1px #ffffff1a, inset 0 0 18px #ffffff0f, 0 0 28px #ffffff14;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] {\n  overflow: visible !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"]:has(.scrollable) {\n  z-index: 1000 !important;\n  width: 100vw !important;\n  max-width: none !important;\n  height: 100vh !important;\n  max-height: none !important;\n  box-shadow: none !important;\n  background: none !important;\n  border: none !important;\n  border-radius: 0 !important;\n  justify-content: center !important;\n  align-items: center !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  inset: 0 !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"]:has(.scrollable):before {\n  content: \"\";\n  z-index: -1;\n  backdrop-filter: blur(6px);\n  background: #00000047;\n  position: fixed;\n  inset: 0;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"]:has(.scrollable):before {\n  background: #00000085;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] .scrollable {\n  backdrop-filter: blur(28px) saturate(160%);\n  box-shadow: inset 0 1px #ffffff6b, inset 0 0 0 1px #ffffff2b, 0 24px 60px #00000052;\n  background: color-mix(in srgb, var(--glass-tint, #fff) 76%, transparent) !important;\n  border-radius: 16px !important;\n  width: 92vw !important;\n  max-width: 600px !important;\n  max-height: min(80vh, 680px) !important;\n  margin: 0 auto !important;\n  overflow-y: auto !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"] .scrollable {\n  box-shadow: inset 0 1px #ffffff3d, inset 0 0 0 1px #ffffff1a, 0 24px 60px #00000080;\n  background: color-mix(in srgb, var(--glass-tint, #fff) 82%, transparent) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] > :first-child:not(.scrollable) {\n  backdrop-filter: blur(28px) saturate(160%);\n  box-shadow: inset 0 1px #ffffff6b, inset 0 0 0 1px #ffffff2b, 0 24px 60px #00000052;\n  background: none !important;\n  border-radius: 16px !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"] > :first-child:not(.scrollable) {\n  box-shadow: inset 0 1px #ffffff3d, inset 0 0 0 1px #ffffff1a, 0 24px 60px #00000080;\n  background: none !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitem\"] {\n  background: none !important;\n  border-radius: 8px !important;\n  margin: 0 !important;\n  padding: 8px 10px !important;\n  transition: background .15s !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitem\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 18%, transparent) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitem\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 24%, transparent) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitemradio\"] {\n  background: none !important;\n  border-radius: 8px !important;\n  margin: 0 !important;\n  padding: 8px 10px !important;\n  transition: background .15s !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitemradio\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 16%, transparent) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitemradio\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 22%, transparent) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitemradio\"][aria-checked=\"true\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 46%, transparent) !important;\n  box-shadow: inset 0 1px #ffffff8c, inset 0 0 0 1px #ffffff4d !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"] button[role=\"menuitemradio\"][aria-checked=\"true\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 34%, transparent) !important;\n  box-shadow: inset 0 1px #ffffff47, inset 0 0 0 1px #ffffff29 !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] .scrollable [role=\"group\"] {\n  grid-template-columns: 1fr 1fr !important;\n  gap: 2px !important;\n  padding: 0 10px 6px !important;\n  display: grid !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] .scrollable [role=\"group\"] > div:first-child {\n  text-shadow: 0 1px 2px #ffffff40;\n  background: color-mix(in srgb, var(--glass-tint, #fff) 30%, transparent) !important;\n  letter-spacing: .02em !important;\n  color: var(--dsw-alias-label-secondary, #2d2d3ae6) !important;\n  border-radius: 8px !important;\n  grid-column: 1 / -1 !important;\n  margin: 2px 4px 4px !important;\n  padding: 9px 12px !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"] .scrollable [role=\"group\"] > div:first-child {\n  text-shadow: 0 1px 2px #00000059;\n  background: color-mix(in srgb, var(--glass-tint, #fff) 24%, transparent) !important;\n  color: var(--dsw-alias-label-secondary, #ffffffe6) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] {\n  cursor: pointer;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"] .scrollable {\n  cursor: default;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) {\n  backdrop-filter: blur(var(--glass-frost-blur, 24px)) saturate(calc(1 + var(--glass-refraction, .4))) url(\"#dsh-glass-edge-refraction\");\n  border: 1px solid #ffffff29;\n  box-shadow: inset 0 1px #ffffff6b, inset 0 0 0 1px #ffffff29, inset 0 0 18px #ffffff12, 0 8px 32px #00000047;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) {\n  box-shadow: inset 0 1px #ffffff3d, inset 0 0 0 1px #ffffff1a, inset 0 0 18px #ffffff0d, 0 8px 32px #00000075;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) [role=\"presentation\"], body.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) [class*=\"_viewport\"], body.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) [class*=\"_itemWrap\"], body.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) [class*=\"_item\"], body.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) button[role=\"menuitem\"] {\n  backdrop-filter: none !important;\n  box-shadow: none !important;\n  background: none !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) button[role=\"menuitem\"]:hover, body.dsh-glass-on [data-composer-card] [role=\"menu\"]:not(:has(.scrollable)) button[role=\"menuitemradio\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 18%, transparent) !important;\n}\n\nbody.dsh-glass-on button:not(:disabled):hover, body.dsh-glass-on a:not(:disabled):hover, body.dsh-glass-on [role=\"button\"]:not(:disabled):hover, body.dsh-glass-on [role=\"tab\"]:not(:disabled):hover, body.dsh-glass-on [role=\"menuitem\"]:not(:disabled):hover, body.dsh-glass-on [role=\"link\"]:not(:disabled):hover {\n  filter: brightness(1.12);\n  transform: translateY(-1px);\n  box-shadow: 0 0 0 1px #ffffff1a, 0 4px 12px #00000017;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on button:not(:disabled):hover, body[data-ds-dark-theme].dsh-glass-on a:not(:disabled):hover, body[data-ds-dark-theme].dsh-glass-on [role=\"button\"]:not(:disabled):hover, body[data-ds-dark-theme].dsh-glass-on [role=\"tab\"]:not(:disabled):hover, body[data-ds-dark-theme].dsh-glass-on [role=\"menuitem\"]:not(:disabled):hover, body[data-ds-dark-theme].dsh-glass-on [role=\"link\"]:not(:disabled):hover {\n  filter: brightness(1.18);\n  box-shadow: 0 0 0 1px #ffffff17, 0 4px 12px #00000029;\n}\n\nbody.dsh-glass-on [data-variant] [data-disclosure-row] [class*=\"title\"] {\n  text-shadow: 0 1px 2px #00000012;\n}\n\nbody.dsh-glass-on [data-variant] [data-disclosure-row] [class*=\"summary\"] {\n  text-shadow: 0 1px 2px #0000000d;\n}\n\n@keyframes dsh-glass-fade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\nbody.dsh-glass-anim-soft #root > *, body.dsh-glass-anim-strong #root > * {\n  animation: .45s cubic-bezier(.2, .6, .3, 1) both dsh-glass-fade;\n}\n\nbody.dsh-glass-anim-soft button, body.dsh-glass-anim-soft [role=\"button\"], body.dsh-glass-anim-strong button, body.dsh-glass-anim-strong [role=\"button\"] {\n  transition: transform .18s, background-color .18s, opacity .18s, border-color .18s, box-shadow .18s;\n}\n\nbody.dsh-glass-anim-soft #dsh-glass-bg, body.dsh-glass-anim-soft #dsh-glass-bg img, body.dsh-glass-anim-soft #dsh-glass-bg video, body.dsh-glass-anim-strong #dsh-glass-bg, body.dsh-glass-anim-strong #dsh-glass-bg img, body.dsh-glass-anim-strong #dsh-glass-bg video {\n  transition-duration: .9s;\n}\n\n@keyframes dsh-glass-pop {\n  0% {\n    opacity: .6;\n    transform: translateY(2px) scale(.985);\n  }\n\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\nbody.dsh-glass-anim-strong #root > * {\n  animation: .5s cubic-bezier(.2, .6, .3, 1) both dsh-glass-pop;\n}\n\nbody.dsh-glass-anim-strong button:hover, body.dsh-glass-anim-strong [role=\"button\"]:hover {\n  transform: translateY(-1px) scale(1.02);\n  box-shadow: 0 4px 18px #638cff33;\n}\n\nbody.dsh-glass-anim-strong #dsh-glass-bg, body.dsh-glass-anim-strong #dsh-glass-bg img, body.dsh-glass-anim-strong #dsh-glass-bg video {\n  transition-duration: 1.4s;\n}\n\nbody.dsh-glass-anim-none #root > * {\n  animation: none !important;\n}\n\nbody.dsh-glass-anim-none #dsh-glass-bg, body.dsh-glass-anim-none #dsh-glass-bg img, body.dsh-glass-anim-none #dsh-glass-bg video {\n  transition: none !important;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  body.dsh-glass-anim-soft #root > *, body.dsh-glass-anim-strong #root > * {\n    animation: none;\n  }\n\n  body.dsh-glass-anim-soft #dsh-glass-bg, body.dsh-glass-anim-soft #dsh-glass-bg img, body.dsh-glass-anim-soft #dsh-glass-bg video, body.dsh-glass-anim-strong #dsh-glass-bg, body.dsh-glass-anim-strong #dsh-glass-bg img, body.dsh-glass-anim-strong #dsh-glass-bg video {\n    transition: none;\n  }\n}\n\nbody.dsh-glass-on [data-composer-card] {\n  color: var(--dsw-alias-label-primary, #1c1d26);\n}\n\nbody.dsh-glass-on [data-composer-card] ::placeholder, body.dsh-glass-on [data-composer-card] input::placeholder, body.dsh-glass-on [data-composer-card] textarea::placeholder, body.dsh-glass-on [data-composer-card] [contenteditable] [data-placeholder], body.dsh-glass-on [data-composer-card] [contenteditable]:empty:before, body.dsh-glass-on [data-composer-card] [data-placeholder], body.dsh-glass-on [data-composer-card] [class*=\"_placeholder\"] {\n  text-shadow: 0 1px 2px #ffffff59, 0 2px 6px #0000002e;\n  color: #0f101aeb !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #0f101aeb !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] ::placeholder, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] input::placeholder, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] textarea::placeholder, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [contenteditable] [data-placeholder], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [contenteditable]:empty:before, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [data-placeholder], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [class*=\"_placeholder\"] {\n  text-shadow: 0 1px 3px #000000a6, 0 0 10px #00000059;\n  color: #f0f4fff2 !important;\n  -webkit-text-fill-color: #f0f4fff2 !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [contenteditable] {\n  text-shadow: 0 0 4px #0000000f;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  -webkit-text-fill-color: var(--dsw-alias-label-primary, #1c1d26) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [contenteditable] {\n  text-shadow: 0 1px 3px #0006;\n  color: var(--dsw-alias-label-primary, #fffffffa) !important;\n  -webkit-text-fill-color: var(--dsw-alias-label-primary, #fffffffa) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] [data-slot=\"composer.dock\"], body.dsh-glass-on [data-composer-card] [class*=\"_stats\"], body.dsh-glass-on [data-composer-card] [class*=\"_meta\"], body.dsh-glass-on [data-composer-card] [class*=\"_dock\"] {\n  text-shadow: 0 1px 2px #ffffff4d, 0 2px 5px #00000038;\n  color: var(--dsw-alias-label-secondary, #282836f2) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] [data-slot=\"composer.dock\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [class*=\"_stats\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [class*=\"_meta\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [class*=\"_dock\"] {\n  text-shadow: 0 1px 3px #000000a6;\n  color: var(--dsw-alias-label-secondary, #fffffff2) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button, body.dsh-glass-on [data-composer-card] [role=\"combobox\"], body.dsh-glass-on [data-composer-card] [role=\"button\"], body.dsh-glass-on [data-composer-card] [class*=\"_preset\"], body.dsh-glass-on [data-composer-card] [class*=\"_effort\"], body.dsh-glass-on [data-composer-card] [data-effort] {\n  text-shadow: 0 1px 2px #ffffff4d, 0 1px 4px #00000029;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  opacity: 1 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"combobox\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [role=\"button\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [class*=\"_preset\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [class*=\"_effort\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] [data-effort] {\n  text-shadow: 0 1px 3px #0000008c;\n  color: var(--dsw-alias-label-primary, #fffffffa) !important;\n}\n\nbody.dsh-glass-on [class*=\"_treeBody\"] {\n  color: var(--dsw-alias-label-primary, #1c1d26);\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [class*=\"_treeBody\"] {\n  color: var(--dsw-alias-label-primary, #fffffff7);\n}\n\nbody.dsh-glass-on [data-time-hover-root] [class*=\"_bubble\"] {\n  color: var(--dsw-alias-label-primary, #1c1d26);\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-time-hover-root] [class*=\"_bubble\"] {\n  color: var(--dsw-alias-label-primary, #fffffff7);\n}\n\nbody.dsh-glass-on button, body.dsh-glass-on [role=\"button\"], body.dsh-glass-on [role=\"tab\"], body.dsh-glass-on [role=\"menuitem\"], body.dsh-glass-on [role=\"menuitemradio\"], body.dsh-glass-on input, body.dsh-glass-on textarea, body.dsh-glass-on select {\n  text-shadow: 0 1px 2px #ffffff2e, 0 1px 3px #0000001a;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on button, body[data-ds-dark-theme].dsh-glass-on [role=\"button\"], body[data-ds-dark-theme].dsh-glass-on [role=\"tab\"], body[data-ds-dark-theme].dsh-glass-on [role=\"menuitem\"], body[data-ds-dark-theme].dsh-glass-on [role=\"menuitemradio\"], body[data-ds-dark-theme].dsh-glass-on input, body[data-ds-dark-theme].dsh-glass-on textarea, body[data-ds-dark-theme].dsh-glass-on select {\n  text-shadow: 0 1px 3px #00000073;\n}\n\nbody.dsh-glass-on [data-composer-card] button {\n  isolation: isolate;\n  -webkit-backdrop-filter: blur(14px) url(\"#dsh-glass-edge-refraction\");\n  position: relative;\n  background: color-mix(in srgb, var(--glass-tint, #fff) 22%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  border: 1px solid #ffffff38 !important;\n  box-shadow: 0 1px 4px #00000014 !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button svg, body.dsh-glass-on [data-composer-card] button path, body.dsh-glass-on [data-composer-card] button span {\n  stroke: #14151ee6 !important;\n  fill: #14151ee6 !important;\n  color: #14151ee6 !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 34%, transparent) !important;\n  border-color: #ffffff5c !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button:active {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 40%, transparent) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 26%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n  border: 1px solid #ffffff1f !important;\n  box-shadow: 0 1px 4px #0000002e !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button svg, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button path, body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button span {\n  stroke: #f5f8fff0 !important;\n  fill: #f5f8fff0 !important;\n  color: #f5f8fff0 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 38%, transparent) !important;\n  border-color: #ffffff38 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button:active {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 44%, transparent) !important;\n}\n\nbody.dsh-glass-on [data-composer-card] button[aria-label=\"发送\"], body.dsh-glass-on [data-composer-card] button[class*=\"send\"], body.dsh-glass-on [data-composer-card] button[class*=\"Submit\"] {\n  color: #fffffffa !important;\n  background: #4fb8b8d9 !important;\n  border-color: #4fb8b8eb !important;\n  box-shadow: 0 2px 8px #4fb8b847 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[aria-label=\"发送\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[class*=\"send\"], body[data-ds-dark-theme].dsh-glass-on [data-composer-card] button[class*=\"Submit\"] {\n  background: #649bffd9 !important;\n  border-color: #649bffeb !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [data-slot=\"settings.action\"] {\n  flex-wrap: wrap !important;\n  justify-content: flex-end !important;\n  align-items: center !important;\n  gap: 8px !important;\n  display: flex !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [data-slot=\"settings.action\"] button {\n  -webkit-backdrop-filter: blur(12px) saturate(140%);\n  background: color-mix(in srgb, var(--glass-tint, #fff) 26%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  white-space: nowrap !important;\n  border: 1px solid #ffffff3d !important;\n  border-radius: 8px !important;\n  margin: 0 !important;\n  padding: 6px 12px !important;\n  box-shadow: 0 1px 3px #00000014 !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [data-slot=\"settings.action\"] button:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 40%, transparent) !important;\n  border-color: #ffffff5c !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] [data-slot=\"settings.action\"] button {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 30%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n  border: 1px solid #ffffff1f !important;\n  box-shadow: 0 1px 3px #0003 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] [data-slot=\"settings.action\"] button:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 44%, transparent) !important;\n  border-color: #ffffff38 !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [class*=\"_header\"] button[class*=\"_close\"], body.dsh-glass-on [role=\"dialog\"][aria-labelledby] button[aria-label*=\"close\" i], body.dsh-glass-on [role=\"dialog\"][aria-labelledby] [data-slot=\"settings.close\"] {\n  -webkit-backdrop-filter: blur(12px) saturate(140%);\n  background: color-mix(in srgb, var(--glass-tint, #fff) 26%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  border: 1px solid #ffffff3d !important;\n  border-radius: 8px !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] button[aria-label*=\"close\" i] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 30%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n  border: 1px solid #ffffff1f !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] {\n  border-bottom: 1px solid #ffffff24 !important;\n  gap: 6px !important;\n  display: flex !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] [role=\"tab\"] {\n  -webkit-backdrop-filter: blur(12px) saturate(140%);\n  background: color-mix(in srgb, var(--glass-tint, #fff) 16%, transparent) !important;\n  color: var(--dsw-alias-label-secondary, #2d2d3ae6) !important;\n  white-space: nowrap !important;\n  border: 1px solid #ffffff29 !important;\n  border-bottom: none !important;\n  border-radius: 8px 8px 0 0 !important;\n  margin: 0 !important;\n  padding: 8px 16px !important;\n  transition: background .15s, color .15s !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] [role=\"tab\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 28%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] [role=\"tab\"][aria-selected=\"true\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 40%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  border-color: #ffffff4d !important;\n  font-weight: 600 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] [role=\"tab\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 18%, transparent) !important;\n  color: var(--dsw-alias-label-secondary, #ffffffd9) !important;\n  border: 1px solid #ffffff1a !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] [role=\"tab\"]:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 28%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] [role=\"tablist\"] [role=\"tab\"][aria-selected=\"true\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 38%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n  border-color: #ffffff2e !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button {\n  -webkit-backdrop-filter: blur(16px) saturate(150%);\n  background: color-mix(in srgb, var(--glass-tint, #fff) 14%, transparent) !important;\n  color: var(--dsw-alias-label-secondary, #2d2d3ae6) !important;\n  border: 1px solid #ffffff24 !important;\n  border-radius: 999px !important;\n  transition: background .15s, border-color .15s, color .15s !important;\n  box-shadow: inset 0 1px #ffffff42, inset 0 0 0 1px #ffffff12, 0 1px 3px #0000000f !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 24%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  border-color: #ffffff3d !important;\n}\n\nbody.dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button[aria-current], body.dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button[data-active=\"true\"], body.dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button[data-state=\"active\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 36%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #1c1d26) !important;\n  border-color: #ffffff4d !important;\n  font-weight: 600 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 16%, transparent) !important;\n  color: var(--dsw-alias-label-secondary, #ffffffe6) !important;\n  border: 1px solid #ffffff1a !important;\n  box-shadow: inset 0 1px #ffffff29, inset 0 0 0 1px #ffffff0f, 0 1px 3px #00000029 !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button:hover {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 26%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n  border-color: #ffffff2e !important;\n}\n\nbody[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button[aria-current], body[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button[data-active=\"true\"], body[data-ds-dark-theme].dsh-glass-on [role=\"dialog\"][aria-labelledby] nav button[data-state=\"active\"] {\n  background: color-mix(in srgb, var(--glass-tint, #fff) 34%, transparent) !important;\n  color: var(--dsw-alias-label-primary, #fffffff7) !important;\n  border-color: #fff3 !important;\n}\n\nbody.dsh-glass-on [data-dsh-better-sidebar-settings-nav] > svg:first-child {\n  flex: none !important;\n  width: 16px !important;\n  height: 16px !important;\n  display: inline-flex !important;\n}\n\nbody.dsh-glass-on [data-dsh-better-sidebar-settings-nav]:before {\n  display: none !important;\n}\n.u7X3Ha_panel {\n  flex-direction: column;\n  gap: 16px;\n  max-width: 640px;\n  padding: 4px 0 16px;\n  display: flex;\n}\n\n.u7X3Ha_card {\n  background: #7f7f7f0d;\n  border: 1px solid #7f7f7f2e;\n  border-radius: 10px;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px 16px;\n  display: flex;\n}\n\n.u7X3Ha_cardTitle {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.u7X3Ha_field {\n  flex-direction: column;\n  gap: 4px;\n  display: flex;\n}\n\n.u7X3Ha_fieldHead {\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  display: flex;\n}\n\n.u7X3Ha_value {\n  font-variant-numeric: tabular-nums;\n  opacity: .75;\n}\n\n.u7X3Ha_range {\n  width: 100%;\n  accent-color: var(--glass-accent, #4fb8b8);\n}\n\n.u7X3Ha_hint {\n  opacity: .6;\n  margin: 0;\n  font-size: 12px;\n}\n\n.u7X3Ha_pills {\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  display: flex;\n}\n\n.u7X3Ha_row {\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  display: flex;\n}\n\n.u7X3Ha_grow {\n  flex: 220px;\n}\n\n.u7X3Ha_fileName {\n  opacity: .85;\n  font-size: 13px;\n}\n\n.u7X3Ha_toggleRow {\n  cursor: pointer;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  display: flex;\n}\n\n.u7X3Ha_toggleRow input {\n  accent-color: var(--glass-accent, #4fb8b8);\n}\n\n.u7X3Ha_fieldLabel {\n  opacity: .85;\n  font-size: 13px;\n}\n\n.u7X3Ha_interval {\n  width: 90px;\n}\n\n.u7X3Ha_imageList {\n  flex-direction: column;\n  gap: 6px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n}\n\n.u7X3Ha_imageRow {\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  display: flex;\n}\n\n.u7X3Ha_imageName {\n  min-width: 0;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background: none;\n  border: 1px solid #0000;\n  border-radius: 6px;\n  flex: auto;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  font-size: 12px;\n  display: inline-flex;\n  overflow: hidden;\n}\n\n.u7X3Ha_imageName em {\n  background: color-mix(in srgb, var(--glass-accent, #4fb8b8) 20%, transparent);\n  color: var(--glass-accent, #4fb8b8);\n  border-radius: 8px;\n  padding: 1px 6px;\n  font-size: 10px;\n  font-style: normal;\n}\n\n.u7X3Ha_imageName[data-active] {\n  border-color: color-mix(in srgb, var(--glass-accent, #4fb8b8) 40%, transparent);\n}\n\n.u7X3Ha_cssArea {\n  width: 100%;\n  min-height: 110px;\n  color: inherit;\n  resize: vertical;\n  box-sizing: border-box;\n  background: #0000000a;\n  border: 1px solid #7f7f7f40;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-family: SF Mono, JetBrains Mono, Consolas, monospace;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.u7X3Ha_saveState {\n  opacity: .7;\n  font-size: 12px;\n}\n";(document.head||document.documentElement).appendChild(s)})();Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let react = require("react");
let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/client/engine.ts
const BG_ID = "dsh-glass-bg";
const FONT_FACE_ID = "dsh-glass-fontface";
const CUSTOM_CSS_ID = "dsh-glass-custom";
const GLASS_FILTER_ID = "dsh-glass-filter-svg";
/** The custom font family name used when a font file is uploaded. */
const CUSTOM_FONT_FAMILY = "GlassCustomFont";
const SURFACE_LIGHT = "255, 255, 255";
const SURFACE_DARK = "16, 16, 24";
/**
* A glass-matched accent: hue-shift the user's tint toward a calm teal/cyan
* so sliders/toggles stop using the stock bright blue and instead echo the
* glass's color temperature. Returns an opaque hex for reliable contrast.
*/
function glassAccent(tint) {
	const match = /^#?([0-9a-fA-F]{6})/.exec(tint.trim());
	if (match === null) return "#4fb8b8";
	const hex = match[1];
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	return `#${[
		Math.round(r * .55),
		Math.round(r * .15 + g * .55 + b * .3),
		Math.round(r * .05 + g * .3 + b * .65)
	].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("")}`;
}
var GlassEngine = class {
	disposers = [];
	applied = false;
	carouselTimer;
	/** double-buffered wallpaper images (alternate as active) */
	imgA = null;
	imgB = null;
	active = "A";
	imageSeq = 0;
	currentVideo = null;
	videoSeq = 0;
	/** Mount the background host element (idempotent). */
	ensureBgHost() {
		let host = document.getElementById(BG_ID);
		if (host !== null) return host;
		host = document.createElement("div");
		host.id = BG_ID;
		document.body.appendChild(host);
		const remove = () => {
			host?.remove();
		};
		this.disposers.push(remove);
		return host;
	}
	/** Apply a config to the live page. Safe to call repeatedly. */
	apply(config) {
		const root = document.documentElement;
		const cssFont = config.font === "" ? "inherit" : config.font;
		root.style.setProperty("--glass-opacity", String(config.opacity));
		root.style.setProperty("--glass-blur", `${config.blur}px`);
		root.style.setProperty("--glass-font", cssFont);
		root.style.setProperty("--glass-font-url", config.fontUrl === "" ? "none" : `url("${config.fontUrl}")`);
		root.style.setProperty("--glass-bg-type", config.bgType);
		root.style.setProperty("--glass-bg-image", config.bgImage === "" ? "none" : `url("${config.bgImage}")`);
		root.style.setProperty("--glass-bg-video", config.bgVideo === "" ? "none" : `url("${config.bgVideo}")`);
		root.style.setProperty("--glass-bg-mask", String(config.bgMask));
		root.style.setProperty("--glass-bg-fit", config.bgFit);
		root.style.setProperty("--glass-anim-level", config.animLevel);
		root.style.setProperty("--glass-surface-light", `rgba(${SURFACE_LIGHT}, ${config.opacity})`);
		root.style.setProperty("--glass-surface-dark", `rgba(${SURFACE_DARK}, ${config.opacity})`);
		root.style.setProperty("--glass-frosted", config.frosted ? "1" : "0");
		root.style.setProperty("--glass-frost-blur", `${config.frostBlur}px`);
		root.style.setProperty("--glass-refraction", String(config.refraction));
		root.style.setProperty("--glass-tint", config.tint);
		root.style.setProperty("--glass-tint-opacity", String(config.tintOpacity));
		root.style.setProperty("--glass-edge-refraction-scale", String(config.edgeRefractionScale));
		root.style.setProperty("--glass-brightness", String(config.brightness));
		root.style.setProperty("--glass-glass-brightness", String(config.glassBrightness));
		root.style.setProperty("--glass-bg-blur", `${config.bgBlur}px`);
		root.style.setProperty("--glass-accent", glassAccent(config.tint));
		const body = document.body;
		body.classList.add("dsh-glass-on");
		body.classList.toggle("dsh-glass-frosted-on", config.frosted);
		body.dataset.glassFit = config.bgFit;
		body.classList.toggle("dsh-glass-anim-soft", config.animLevel === "soft");
		body.classList.toggle("dsh-glass-anim-strong", config.animLevel === "strong");
		body.classList.toggle("dsh-glass-anim-none", config.animLevel === "none");
		this.updateFontFace(config);
		this.updateBackground(config);
		this.updateCustomCss(config.customCss);
		this.ensureGlassFilter(config);
		body.classList.add("dsh-glass-ready");
		this.applied = true;
	}
	updateFontFace(config) {
		const existing = document.getElementById(FONT_FACE_ID);
		if (config.fontUrl === "" || !config.font.includes("GlassCustomFont")) {
			existing?.remove();
			return;
		}
		const css = `@font-face{font-family:${CUSTOM_FONT_FAMILY};src:url("${config.fontUrl}") format("woff2"),url("${config.fontUrl}") format("woff"),url("${config.fontUrl}") format("truetype");font-display:swap}`;
		if (existing !== null) {
			if (existing.textContent !== css) existing.textContent = css;
			return;
		}
		const style = document.createElement("style");
		style.id = FONT_FACE_ID;
		style.textContent = css;
		document.head.appendChild(style);
		this.disposers.push(() => style.remove());
	}
	/** Inject the SVG feDisplacementMap filter once (idempotent). */
	ensureGlassFilter(config) {
		if (document.getElementById(GLASS_FILTER_ID)) return;
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.id = GLASS_FILTER_ID;
		svg.setAttribute("width", "0");
		svg.setAttribute("height", "0");
		svg.style.cssText = "position:fixed;pointer-events:none;visibility:hidden;top:0;left:0;overflow:hidden";
		const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
		filter.id = "dsh-glass-edge-refraction";
		filter.setAttribute("x", "-10%");
		filter.setAttribute("y", "-10%");
		filter.setAttribute("width", "120%");
		filter.setAttribute("height", "120%");
		filter.setAttribute("filterUnits", "objectBoundingBox");
		filter.setAttribute("color-interpolation-filters", "sRGB");
		const disp = document.createElementNS("http://www.w3.org/2000/svg", "feDisplacementMap");
		disp.setAttribute("scale", String(config.edgeRefractionScale));
		filter.appendChild(disp);
		svg.appendChild(filter);
		document.body.appendChild(svg);
		this.disposers.push(() => svg.remove());
	}
	updateCustomCss(css) {
		const existing = document.getElementById(CUSTOM_CSS_ID);
		if (css === "") {
			existing?.remove();
			return;
		}
		if (existing === null) {
			const style = document.createElement("style");
			style.id = CUSTOM_CSS_ID;
			document.head.appendChild(style);
			this.disposers.push(() => style.remove());
		}
		const el = document.getElementById(CUSTOM_CSS_ID);
		if (el !== null && el.textContent !== css) el.textContent = css;
	}
	stopCarousel() {
		if (this.carouselTimer !== void 0) {
			window.clearInterval(this.carouselTimer);
			this.carouselTimer = void 0;
		}
	}
	/**
	* Crossfade to a new wallpaper with double buffering: the new image is
	* preloaded first and only then faded in over the still-visible old one.
	* The background never goes blank, so there is no black flash while
	* switching/uploading wallpapers in the settings panel.
	*/
	imageEl(key) {
		const host = this.ensureBgHost();
		let el = key === "A" ? this.imgA : this.imgB;
		if (el === null || !host.contains(el)) {
			el = document.createElement("img");
			el.alt = "";
			el.style.opacity = "0";
			host.appendChild(el);
			if (key === "A") this.imgA = el;
			else this.imgB = el;
		}
		return el;
	}
	/**
	* Canonical absolute form of a wallpaper URL. Element `.src` getters return
	* absolute URLs while config values are relative (`/glass-ui/media/…`), so
	* raw string comparison can never dedupe — every apply() would re-probe the
	* wallpaper. Resolve both sides through here.
	*/
	absUrl(url) {
		return new URL(url, window.location.href).href;
	}
	renderImage(url) {
		const host = this.ensureBgHost();
		const abs = this.absUrl(url);
		const activeEl = this.imageEl(this.active);
		if (activeEl.src === abs) return;
		const seq = ++this.imageSeq;
		const probe = new Image();
		probe.onload = () => {
			if (seq !== this.imageSeq) return;
			if (!host.isConnected) return;
			const nextKey = this.active === "A" ? "B" : "A";
			const nextEl = this.imageEl(nextKey);
			nextEl.src = abs;
			nextEl.style.opacity = "0";
			nextEl.offsetWidth;
			nextEl.style.transition = "opacity 0.45s ease";
			nextEl.style.opacity = "1";
			activeEl.style.transition = "opacity 0.45s ease";
			activeEl.style.opacity = "0";
			this.active = nextKey;
		};
		probe.onerror = () => {};
		probe.src = abs;
	}
	/**
	* Video wallpaper with readiness gating: a bare <video> paints BLACK while
	* its source loads or switches, which is exactly the flash users saw. So a
	* hidden probe video preloads the new URL first; only when the first frame
	* is available (loadeddata) does it fade in over the still-visible old
	* video, which is then released. The gradient backdrop stays visible the
	* whole time, so the background never goes black — on upload, switch,
	* carousel, or page refresh.
	*/
	renderVideo(url) {
		const host = this.ensureBgHost();
		const abs = this.absUrl(url);
		if (this.currentVideo !== null && this.currentVideo.src === abs) return;
		const seq = ++this.videoSeq;
		const probe = document.createElement("video");
		probe.muted = true;
		probe.loop = true;
		probe.playsInline = true;
		probe.preload = "auto";
		probe.style.opacity = "0";
		const onReady = () => {
			if (seq !== this.videoSeq || !host.isConnected) {
				probe.remove();
				return;
			}
			probe.removeEventListener("loadeddata", onReady);
			probe.removeEventListener("error", onError);
			const old = this.currentVideo;
			this.currentVideo = probe;
			probe.offsetWidth;
			probe.style.transition = "opacity 0.5s ease";
			probe.style.opacity = "1";
			probe.play().catch(() => void 0);
			if (old !== null && old !== probe) {
				old.style.transition = "opacity 0.5s ease";
				old.style.opacity = "0";
				window.setTimeout(() => {
					if (old !== null && old !== this.currentVideo) {
						old.pause();
						old.removeAttribute("src");
						old.load();
						old.remove();
					}
				}, 560);
			}
		};
		const onError = () => {
			if (seq !== this.videoSeq) return;
			probe.removeEventListener("loadeddata", onReady);
			probe.remove();
		};
		probe.addEventListener("loadeddata", onReady);
		probe.addEventListener("error", onError);
		probe.src = abs;
		probe.load();
		host.appendChild(probe);
	}
	updateBackground(config) {
		this.ensureBgHost();
		this.stopCarousel();
		if (config.bgType === "image") {
			this.currentVideo?.remove();
			this.currentVideo = null;
			const slides = config.bgImages.length > 0 ? config.bgImages : config.bgImage !== "" ? [config.bgImage] : [];
			if (slides.length === 0) {
				this.imgA?.remove();
				this.imgA = null;
				this.imgB?.remove();
				this.imgB = null;
				return;
			}
			if (config.bgRotate && slides.length > 1) {
				let index = Math.max(0, slides.indexOf(config.bgImage));
				const first = slides[index];
				if (first !== void 0) this.renderImage(first);
				this.carouselTimer = window.setInterval(() => {
					index = (index + 1) % slides.length;
					const url = slides[index];
					if (url !== void 0) this.renderImage(url);
				}, config.bgRotateInterval * 1e3);
			} else this.renderImage(config.bgImage);
		} else if (config.bgType === "video") {
			this.imgA?.remove();
			this.imgA = null;
			this.imgB?.remove();
			this.imgB = null;
			if (config.bgVideo !== "") this.renderVideo(config.bgVideo);
			else {
				this.currentVideo?.remove();
				this.currentVideo = null;
			}
		} else {
			this.imgA?.remove();
			this.imgA = null;
			this.imgB?.remove();
			this.imgB = null;
			this.currentVideo?.remove();
			this.currentVideo = null;
		}
	}
	/** Remove everything the engine created (plugin unload / HMR). */
	dispose() {
		this.imageSeq += 1;
		this.videoSeq += 1;
		this.stopCarousel();
		for (const dispose of this.disposers.splice(0)) dispose();
		document.getElementById(BG_ID)?.remove();
		document.getElementById(FONT_FACE_ID)?.remove();
		document.getElementById(CUSTOM_CSS_ID)?.remove();
		document.getElementById(GLASS_FILTER_ID)?.remove();
		const root = document.documentElement;
		for (const name of [
			"--glass-opacity",
			"--glass-blur",
			"--glass-font",
			"--glass-font-url",
			"--glass-bg-type",
			"--glass-bg-image",
			"--glass-bg-video",
			"--glass-bg-mask",
			"--glass-bg-fit",
			"--glass-anim-level",
			"--glass-surface-light",
			"--glass-surface-dark",
			"--glass-frosted",
			"--glass-frost-blur",
			"--glass-refraction",
			"--glass-tint",
			"--glass-tint-opacity",
			"--glass-edge-refraction-scale",
			"--glass-brightness",
			"--glass-glass-brightness",
			"--glass-bg-blur"
		]) root.style.removeProperty(name);
		const body = document.body;
		body.classList.remove("dsh-glass-on", "dsh-glass-frosted-on", "dsh-glass-anim-soft", "dsh-glass-anim-strong", "dsh-glass-anim-none", "dsh-glass-ready");
		delete body.dataset.glassFit;
		this.imgA = null;
		this.imgB = null;
		this.currentVideo = null;
		this.applied = false;
	}
};
//#endregion
//#region src/client/config.ts
const DEFAULT_CONFIG = {
	opacity: .45,
	blur: 28,
	font: "",
	fontUrl: "",
	bgType: "none",
	bgImage: "",
	bgImages: [],
	bgVideo: "",
	bgRotate: false,
	bgRotateInterval: 15,
	bgMask: 0,
	bgFit: "cover",
	animLevel: "soft",
	customCss: "",
	frosted: true,
	frostBlur: 24,
	refraction: .4,
	tint: "#ffffff",
	tintOpacity: .35,
	edgeRefractionScale: 80,
	brightness: 1,
	glassBrightness: 1,
	bgBlur: 5
};
/** Migrate a raw (possibly legacy) config into the current shape. */
function normalizeConfig(raw) {
	const merged = {
		...DEFAULT_CONFIG,
		...raw
	};
	if (raw.animations === false && merged.animLevel === "soft") merged.animLevel = "none";
	if (merged.bgImage !== "" && !merged.bgImages.includes(merged.bgImage)) merged.bgImages = [merged.bgImage, ...merged.bgImages];
	merged.bgImages = merged.bgImages.filter((u) => typeof u === "string" && u !== "");
	if (merged.bgImages.length === 0) merged.bgImage = "";
	else merged.bgImage = merged.bgImages[0] ?? "";
	return merged;
}
async function loadConfig() {
	const res = await fetch("/glass-ui/config", { cache: "no-store" });
	if (!res.ok) throw new Error(`load config: HTTP ${res.status}`);
	return normalizeConfig(await res.json());
}
async function saveConfig(config) {
	const res = await fetch("/glass-ui/config", {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(config)
	});
	if (!res.ok) throw new Error(`save config: HTTP ${res.status}`);
	return normalizeConfig(await res.json());
}
async function uploadMedia(blob, kind) {
	const res = await fetch("/glass-ui/media", {
		method: "POST",
		headers: { "x-media-kind": kind },
		body: blob
	});
	if (!res.ok) throw new Error(`upload ${kind}: HTTP ${res.status}`);
	return await res.json();
}
async function deleteMedia(url) {
	const res = await fetch(url, { method: "DELETE" });
	if (!res.ok) throw new Error(`delete media: HTTP ${res.status}`);
}
//#endregion
//#region src/client/locales.ts
/** zh/en dictionaries for the glass UI settings section. */
const zh = {
	nav: "自定义UI设计",
	subtitle: "毛玻璃风格、背景壁纸与交互动画",
	glassTitle: "毛玻璃强度",
	opacityLabel: "透明度",
	opacityHint: "数值越大玻璃越实、越不透明",
	blurLabel: "背景模糊",
	blurHint: "背景图的模糊半径（px）",
	fontTitle: "字体",
	fontPresets: "预设字体",
	fontCustom: "自定义字体族",
	fontCustomPlaceholder: "输入字体族名称，如 \"HarmonyOS Sans SC\"",
	fontUpload: "上传字体文件",
	fontUploading: "上传中…",
	fontUploaded: "已应用：{name}",
	fontRemove: "恢复默认",
	bgTitle: "背景壁纸",
	bgNone: "无背景",
	bgImage: "图片背景",
	bgVideo: "动态壁纸",
	bgUploadImage: "上传图片",
	bgUploadVideo: "上传视频",
	bgCurrent: "当前：{name}",
	bgRemove: "移除背景",
	bgTypeHint: "动态壁纸支持 mp4 / webm / mov（≤1GB）",
	maskLabel: "背景遮罩",
	maskHint: "加深背景，提高文字可读性",
	fitLabel: "铺放方式",
	fitCover: "铺满",
	fitContain: "完整显示",
	fitOriginal: "原始大小",
	rotateLabel: "多图轮播",
	rotateHint: "定时在背景图之间平滑切换",
	rotateInterval: "切换间隔（秒）",
	imagesLabel: "背景图列表",
	currentBadge: "当前",
	removeImage: "移除",
	setCurrent: "设为当前",
	animTitle: "交互动画",
	animNone: "无",
	animSoft: "轻柔",
	animStrong: "明显",
	animHint: "无：完全静止；轻柔：渐显与柔和过渡；明显：更强的浮现与悬停微光",
	customCssTitle: "自定义 CSS",
	customCssHint: "高级用户：粘贴自定义样式，即时生效并自动保存",
	customCssPlaceholder: "例如：/* 微调某个界面元素 */\n.sidebar { border-right: 1px solid rgba(255,255,255,.08) }",
	transferTitle: "配置分享",
	exportButton: "导出配置",
	importButton: "导入配置",
	importDone: "已导入配置",
	importFail: "导入失败：{error}",
	resetTitle: "重置",
	resetButton: "恢复默认设置",
	resetDone: "已恢复默认",
	resetAllButton: "重置并清除",
	resetAllConfirm: "确定要重置所有设置并清除所有数据吗？",
	resetAllDone: "已重置并清除所有数据",
	resetAllFail: "重置失败：{error}",
	saving: "保存中…",
	saved: "已保存",
	saveFail: "保存失败：{error}",
	uploadFail: "上传失败：{error}",
	liquidTitle: "液态玻璃",
	liquidSubtitle: "磨砂玻璃效果、边缘折射与色调",
	frostedLabel: "磨砂玻璃",
	frostedHint: "启用后为输入框、对话气泡、侧边栏按钮等添加磨砂效果",
	frostBlurLabel: "磨砂强度",
	frostBlurHint: "磨砂模糊半径（px），越大越模糊",
	refractionLabel: "边缘折射",
	refractionHint: "玻璃边缘的透镜光晕强度（0 = 无，1 = 最强）",
	tintLabel: "玻璃色调",
	tintHint: "玻璃表面的色调颜色",
	tintOpacityLabel: "色调浓度",
	tintOpacityHint: "色调的透明度（0 = 透明，1 = 纯色）",
	brightnessLabel: "壁纸亮度",
	brightnessHint: "背景壁纸亮度调节（0.2 = 暗，1 = 正常，1.6 = 亮）",
	glassBrightLabel: "玻璃亮度",
	glassBrightHint: "玻璃色调明暗（<1 偏暗，>1 偏亮）",
	edgeRefractionLabel: "边缘折射强度",
	edgeRefractionHint: "SVG 边缘折射强度（0 = 无，200 = 最强）",
	bgBlurLabel: "背景层模糊",
	bgBlurHint: "背景层的独立模糊（与壁纸模糊分开调节）"
};
const en = {
	nav: "UI Design",
	subtitle: "Glassmorphism, wallpapers and motion",
	glassTitle: "Glass strength",
	opacityLabel: "Opacity",
	opacityHint: "Higher = more solid, less transparent",
	blurLabel: "Blur",
	blurHint: "Background blur radius (px)",
	fontTitle: "Font",
	fontPresets: "Presets",
	fontCustom: "Custom font family",
	fontCustomPlaceholder: "e.g. \"HarmonyOS Sans SC\"",
	fontUpload: "Upload font file",
	fontUploading: "Uploading…",
	fontUploaded: "Applied: {name}",
	fontRemove: "Reset to default",
	bgTitle: "Wallpaper",
	bgNone: "None",
	bgImage: "Image",
	bgVideo: "Live wallpaper",
	bgUploadImage: "Upload image",
	bgUploadVideo: "Upload video",
	bgCurrent: "Current: {name}",
	bgRemove: "Remove wallpaper",
	bgTypeHint: "Videos: mp4 / webm / mov (≤1GB)",
	maskLabel: "Wallpaper dim",
	maskHint: "Darken the wallpaper for readability",
	fitLabel: "Fit",
	fitCover: "Cover",
	fitContain: "Contain",
	fitOriginal: "Original",
	rotateLabel: "Carousel",
	rotateHint: "Rotate through background images smoothly",
	rotateInterval: "Interval (seconds)",
	imagesLabel: "Background images",
	currentBadge: "current",
	removeImage: "remove",
	setCurrent: "make current",
	animTitle: "Motion",
	animNone: "None",
	animSoft: "Soft",
	animStrong: "Strong",
	animHint: "None: fully static · Soft: fades and gentle transitions · Strong: pronounced entrances and hover glow",
	customCssTitle: "Custom CSS",
	customCssHint: "Advanced: paste your own styles — applied instantly and saved",
	customCssPlaceholder: "/* tweak a surface */\n.sidebar { border-right: 1px solid rgba(255,255,255,.08) }",
	transferTitle: "Share settings",
	exportButton: "Export config",
	importButton: "Import config",
	importDone: "Config imported",
	importFail: "Import failed: {error}",
	resetTitle: "Reset",
	resetButton: "Restore defaults",
	resetDone: "Defaults restored",
	resetAllButton: "Reset all",
	resetAllConfirm: "Reset all settings and clear all data?",
	resetAllDone: "All settings and data cleared",
	resetAllFail: "Reset failed: {error}",
	saving: "Saving…",
	saved: "Saved",
	saveFail: "Save failed: {error}",
	uploadFail: "Upload failed: {error}",
	liquidTitle: "Liquid Glass",
	liquidSubtitle: "Frosted glass, edge refraction and tint",
	frostedLabel: "Frosted glass",
	frostedHint: "Enable frosted-glass effect on composer, bubbles, sidebar buttons and more",
	frostBlurLabel: "Frost blur",
	frostBlurHint: "Backdrop-filter blur radius on cards (px)",
	refractionLabel: "Edge refraction",
	refractionHint: "Lens rim luminosity (0 = none, 1 = maximum)",
	tintLabel: "Glass tint",
	tintHint: "Tint color applied to all glass surfaces",
	tintOpacityLabel: "Tint opacity",
	tintOpacityHint: "Tint saturation (0 = transparent, 1 = full)",
	brightnessLabel: "Wallpaper brightness",
	brightnessHint: "Background brightness filter (0.2 = dark, 1 = normal, 1.6 = bright)",
	glassBrightLabel: "Glass brightness",
	glassBrightHint: "Tint lightness scaling (<1 = dark glass, >1 = light glass)",
	edgeRefractionLabel: "Refraction scale",
	edgeRefractionHint: "SVG displacement map strength (0 = none, 200 = maximum)",
	bgBlurLabel: "Background blur",
	bgBlurHint: "Separate blur for the background layer (independent of wallpaper blur)"
};
const FONT_PRESETS = [
	{
		id: "",
		label: "默认"
	},
	{
		id: "'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif",
		label: "系统 UI"
	},
	{
		id: "'SF Mono', 'JetBrains Mono', Consolas, monospace",
		label: "等宽代码"
	},
	{
		id: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
		label: "圆润中文"
	},
	{
		id: "'Georgia', 'Times New Roman', serif",
		label: "衬线"
	}
];
//#endregion
//#region src/client/GlassPanel.module.css
var GlassPanel_module_default = {
	"card": "u7X3Ha_card",
	"cardTitle": "u7X3Ha_cardTitle",
	"cssArea": "u7X3Ha_cssArea",
	"field": "u7X3Ha_field",
	"fieldHead": "u7X3Ha_fieldHead",
	"fieldLabel": "u7X3Ha_fieldLabel",
	"fileName": "u7X3Ha_fileName",
	"grow": "u7X3Ha_grow",
	"hint": "u7X3Ha_hint",
	"imageList": "u7X3Ha_imageList",
	"imageName": "u7X3Ha_imageName",
	"imageRow": "u7X3Ha_imageRow",
	"interval": "u7X3Ha_interval",
	"panel": "u7X3Ha_panel",
	"pills": "u7X3Ha_pills",
	"range": "u7X3Ha_range",
	"row": "u7X3Ha_row",
	"saveState": "u7X3Ha_saveState",
	"toggleRow": "u7X3Ha_toggleRow",
	"value": "u7X3Ha_value"
};
//#endregion
//#region src/client/GlassPanel.tsx
/** The "UI Design" settings section: tune the glass look in real time. */
const BG_TYPES = [
	{
		id: "none",
		labelKey: "bgNone"
	},
	{
		id: "image",
		labelKey: "bgImage"
	},
	{
		id: "video",
		labelKey: "bgVideo"
	}
];
const BG_FITS = [
	{
		id: "cover",
		labelKey: "fitCover"
	},
	{
		id: "contain",
		labelKey: "fitContain"
	},
	{
		id: "original",
		labelKey: "fitOriginal"
	}
];
const ANIM_LEVELS = [
	{
		id: "none",
		labelKey: "animNone"
	},
	{
		id: "soft",
		labelKey: "animSoft"
	},
	{
		id: "strong",
		labelKey: "animStrong"
	}
];
function mediaName(url) {
	const name = url.split("/").pop() ?? url;
	return name.length > 36 ? `${name.slice(0, 33)}…` : name;
}
function GlassPanel({ t, engine }) {
	const [config, setConfig] = (0, react.useState)({ ...DEFAULT_CONFIG });
	const [saveState, setSaveState] = (0, react.useState)("idle");
	const [uploading, setUploading] = (0, react.useState)(null);
	const [toast, setToast] = (0, react.useState)(null);
	const saveTimer = (0, react.useRef)(void 0);
	/** monotonically increasing save id — a stale save response must not
	*  overwrite newer local edits (the debounce only gates the request). */
	const saveSeq = (0, react.useRef)(0);
	const imageInput = (0, react.useRef)(null);
	const videoInput = (0, react.useRef)(null);
	const fontInput = (0, react.useRef)(null);
	const importInput = (0, react.useRef)(null);
	(0, react.useEffect)(() => {
		let cancelled = false;
		loadConfig().then((cfg) => {
			if (cancelled) return;
			setConfig(cfg);
			engine.apply(cfg);
		}).catch(() => {
			if (cancelled) return;
			engine.apply({ ...DEFAULT_CONFIG });
		});
		return () => {
			cancelled = true;
			window.clearTimeout(saveTimer.current);
		};
	}, []);
	/** Apply a change immediately, persist it debounced. */
	function update(next) {
		setConfig(next);
		engine.apply(next);
		setSaveState("saving");
		window.clearTimeout(saveTimer.current);
		const seq = ++saveSeq.current;
		saveTimer.current = window.setTimeout(() => {
			saveConfig(next).then((saved) => {
				if (seq !== saveSeq.current) return;
				setConfig(saved);
			}).then(() => {
				if (seq !== saveSeq.current) return;
				setSaveState("saved");
			}).catch((err) => {
				if (seq !== saveSeq.current) return;
				setSaveState("fail");
				setToast(t("saveFail", { error: err instanceof Error ? err.message : String(err) }));
			});
		}, 600);
	}
	async function onUpload(file, kind) {
		setUploading(kind);
		try {
			const { url } = await uploadMedia(file, kind);
			if (kind === "font") update({
				...config,
				fontUrl: url,
				font: `'${CUSTOM_FONT_FAMILY}', sans-serif`
			});
			else if (kind === "image") {
				const bgImages = config.bgImages.includes(url) ? config.bgImages : [...config.bgImages, url];
				update({
					...config,
					bgType: "image",
					bgImage: url,
					bgImages,
					bgVideo: ""
				});
			} else update({
				...config,
				bgType: "video",
				bgVideo: url
			});
		} catch (err) {
			setToast(t("uploadFail", { error: err instanceof Error ? err.message : String(err) }));
		} finally {
			setUploading(null);
		}
	}
	function pickFile(ref, kind) {
		const input = ref.current;
		if (input === null) return;
		input.accept = kind === "image" ? "image/jpeg,image/png,image/webp,image/gif,image/avif" : kind === "video" ? "video/mp4,video/webm,video/quicktime" : "font/woff2,font/woff,font/ttf,font/otf,.woff2,.woff,.ttf,.otf";
		input.onchange = () => {
			const file = input.files?.[0];
			if (file !== void 0) onUpload(file, kind);
			input.value = "";
		};
		input.click();
	}
	async function removeImage(url) {
		const bgImages = config.bgImages.filter((u) => u !== url);
		const next = {
			...config,
			bgImages,
			bgImage: bgImages[0] ?? ""
		};
		if (next.bgImage === "") next.bgType = "none";
		try {
			await deleteMedia(url);
		} catch {}
		update(next);
	}
	async function removeBackground() {
		const next = {
			...config,
			bgType: "none"
		};
		const urls = [...config.bgImages, config.bgVideo].filter((u) => u !== "");
		for (const url of urls) try {
			await deleteMedia(url);
		} catch {}
		next.bgImage = "";
		next.bgImages = [];
		next.bgVideo = "";
		update(next);
	}
	async function removeFont() {
		if (config.fontUrl !== "") try {
			await deleteMedia(config.fontUrl);
		} catch {}
		update({
			...config,
			fontUrl: "",
			font: ""
		});
	}
	function reset() {
		window.clearTimeout(saveTimer.current);
		const next = { ...DEFAULT_CONFIG };
		saveConfig(next).then(() => {
			setConfig(next);
			engine.apply(next);
			setSaveState("saved");
			setToast(t("resetDone"));
		}).catch((err) => {
			setToast(t("saveFail", { error: err instanceof Error ? err.message : String(err) }));
		});
	}
	async function resetAll() {
		if (!window.confirm(t("resetAllConfirm"))) return;
		window.clearTimeout(saveTimer.current);
		setSaveState("saving");
		try {
			const next = { ...DEFAULT_CONFIG };
			setConfig(next);
			engine.apply(next);
			await saveConfig(next);
			setSaveState("saved");
			setToast(t("resetAllDone"));
		} catch (err) {
			setSaveState("fail");
			setToast(t("resetAllFail", { error: err instanceof Error ? err.message : String(err) }));
		}
	}
	function exportConfig() {
		const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "dsh-glass-ui-config.json";
		a.click();
		URL.revokeObjectURL(url);
	}
	async function onImportFile(file) {
		try {
			const next = normalizeConfig(JSON.parse(await file.text()));
			await saveConfig(next);
			setConfig(next);
			engine.apply(next);
			setSaveState("saved");
			setToast(t("importDone"));
		} catch (err) {
			setToast(t("importFail", { error: err instanceof Error ? err.message : String(err) }));
		}
	}
	const hasBg = config.bgImage !== "" || config.bgVideo !== "";
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: GlassPanel_module_default.panel,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("glassTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("opacityLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: GlassPanel_module_default.value,
									children: [Math.round(config.opacity * 100), "%"]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 10,
								max: 95,
								value: Math.round(config.opacity * 100),
								onChange: (e) => update({
									...config,
									opacity: Number(e.target.value) / 100
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("opacityHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("blurLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: GlassPanel_module_default.value,
									children: [config.blur, "px"]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 4,
								max: 40,
								value: config.blur,
								onChange: (e) => update({
									...config,
									blur: Number(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("blurHint")
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("fontTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: GlassPanel_module_default.pills,
						children: FONT_PRESETS.map((preset) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
							active: config.font === preset.id,
							onClick: () => update({
								...config,
								font: preset.id
							}),
							children: preset.label
						}, preset.label))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
							className: GlassPanel_module_default.grow,
							placeholder: t("fontCustomPlaceholder"),
							value: config.font.includes("GlassCustomFont") ? "" : config.font.replaceAll("'", ""),
							onChange: (e) => update({
								...config,
								font: e.target.value.trim()
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							size: "sm",
							variant: "outline",
							disabled: uploading === "font",
							onClick: () => pickFile(fontInput, "font"),
							children: uploading === "font" ? t("fontUploading") : t("fontUpload")
						})]
					}),
					config.fontUrl !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: GlassPanel_module_default.fileName,
							children: t("fontUploaded", { name: mediaName(config.fontUrl) })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => void removeFont(),
							children: t("fontRemove")
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						ref: fontInput,
						type: "file",
						hidden: true
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("bgTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: GlassPanel_module_default.pills,
						children: BG_TYPES.map((type) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
							active: config.bgType === type.id,
							onClick: () => update({
								...config,
								bgType: type.id
							}),
							children: t(type.labelKey)
						}, type.id))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.row,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "outline",
								disabled: uploading === "image",
								onClick: () => pickFile(imageInput, "image"),
								children: uploading === "image" ? t("fontUploading") : t("bgUploadImage")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "outline",
								disabled: uploading === "video",
								onClick: () => pickFile(videoInput, "video"),
								children: uploading === "video" ? t("fontUploading") : t("bgUploadVideo")
							}),
							hasBg && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => void removeBackground(),
								children: t("bgRemove")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: GlassPanel_module_default.hint,
						children: t("bgTypeHint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						ref: imageInput,
						type: "file",
						hidden: true
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						ref: videoInput,
						type: "file",
						hidden: true
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("maskLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: GlassPanel_module_default.value,
									children: [Math.round(config.bgMask * 100), "%"]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 0,
								max: 70,
								value: Math.round(config.bgMask * 100),
								onChange: (e) => update({
									...config,
									bgMask: Number(e.target.value) / 100
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("maskHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: GlassPanel_module_default.fieldLabel,
							children: t("fitLabel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: GlassPanel_module_default.pills,
							children: BG_FITS.map((fit) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
								active: config.bgFit === fit.id,
								onClick: () => update({
									...config,
									bgFit: fit.id
								}),
								children: t(fit.labelKey)
							}, fit.id))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: GlassPanel_module_default.toggleRow,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: config.bgRotate,
								onChange: (e) => update({
									...config,
									bgRotate: e.target.checked
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("rotateLabel") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: GlassPanel_module_default.hint,
								children: t("rotateHint")
							})
						]
					}),
					config.bgRotate && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: GlassPanel_module_default.fieldLabel,
							children: t("rotateInterval")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
							className: GlassPanel_module_default.interval,
							type: "number",
							min: 5,
							max: 300,
							value: String(config.bgRotateInterval),
							onChange: (e) => {
								const n = Number(e.target.value);
								if (Number.isFinite(n) && n >= 5 && n <= 300) update({
									...config,
									bgRotateInterval: n
								});
							}
						})]
					}),
					config.bgImages.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: GlassPanel_module_default.fieldLabel,
							children: t("imagesLabel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
							className: GlassPanel_module_default.imageList,
							children: config.bgImages.map((url) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
								className: GlassPanel_module_default.imageRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: GlassPanel_module_default.imageName,
									"data-active": url === config.bgImage || void 0,
									title: t("setCurrent"),
									onClick: () => update({
										...config,
										bgType: "image",
										bgImage: url,
										bgVideo: ""
									}),
									children: [mediaName(url), url === config.bgImage && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("em", { children: t("currentBadge") })]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => void removeImage(url),
									children: t("removeImage")
								})]
							}, url))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("animTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: GlassPanel_module_default.pills,
						children: ANIM_LEVELS.map((level) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
							active: config.animLevel === level.id,
							onClick: () => update({
								...config,
								animLevel: level.id
							}),
							children: t(level.labelKey)
						}, level.id))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: GlassPanel_module_default.hint,
						children: t("animHint")
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("liquidTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: GlassPanel_module_default.hint,
						style: { marginTop: 0 },
						children: t("liquidSubtitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: GlassPanel_module_default.toggleRow,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: config.frosted,
								onChange: (e) => update({
									...config,
									frosted: e.target.checked
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("frostedLabel") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: GlassPanel_module_default.hint,
								children: t("frostedHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("frostBlurLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: GlassPanel_module_default.value,
									children: [config.frostBlur, "px"]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 0,
								max: 40,
								value: config.frostBlur,
								onChange: (e) => update({
									...config,
									frostBlur: Number(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("frostBlurHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("refractionLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassPanel_module_default.value,
									children: config.refraction.toFixed(2)
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 0,
								max: 100,
								value: Math.round(config.refraction * 100),
								onChange: (e) => update({
									...config,
									refraction: Number(e.target.value) / 100
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("refractionHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.row,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: GlassPanel_module_default.fieldLabel,
								children: t("tintLabel")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "color",
								value: config.tint,
								onChange: (e) => update({
									...config,
									tint: e.target.value
								}),
								style: {
									width: 36,
									height: 28,
									border: "none",
									padding: 0,
									cursor: "pointer",
									background: "transparent"
								}
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: GlassPanel_module_default.grow,
								value: config.tint,
								onChange: (e) => {
									const v = e.target.value.trim();
									if (/^#[0-9a-f]{6}$/i.test(v) || v === "") update({
										...config,
										tint: v
									});
								},
								placeholder: "#ffffff"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: GlassPanel_module_default.hint,
						children: t("tintHint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("tintOpacityLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: GlassPanel_module_default.value,
									children: [Math.round(config.tintOpacity * 100), "%"]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 0,
								max: 100,
								value: Math.round(config.tintOpacity * 100),
								onChange: (e) => update({
									...config,
									tintOpacity: Number(e.target.value) / 100
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("tintOpacityHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("edgeRefractionLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassPanel_module_default.value,
									children: config.edgeRefractionScale
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 0,
								max: 200,
								value: config.edgeRefractionScale,
								onChange: (e) => update({
									...config,
									edgeRefractionScale: Number(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("edgeRefractionHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("brightnessLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassPanel_module_default.value,
									children: config.brightness.toFixed(2)
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 20,
								max: 160,
								value: Math.round(config.brightness * 100),
								onChange: (e) => update({
									...config,
									brightness: Number(e.target.value) / 100
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("brightnessHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("glassBrightLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassPanel_module_default.value,
									children: config.glassBrightness.toFixed(2)
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 20,
								max: 160,
								value: Math.round(config.glassBrightness * 100),
								onChange: (e) => update({
									...config,
									glassBrightness: Number(e.target.value) / 100
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("glassBrightHint")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.field,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassPanel_module_default.fieldHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("bgBlurLabel") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: GlassPanel_module_default.value,
									children: [config.bgBlur, "px"]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "range",
								className: GlassPanel_module_default.range,
								min: 0,
								max: 40,
								value: config.bgBlur,
								onChange: (e) => update({
									...config,
									bgBlur: Number(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: GlassPanel_module_default.hint,
								children: t("bgBlurHint")
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("customCssTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
						className: GlassPanel_module_default.cssArea,
						placeholder: t("customCssPlaceholder"),
						spellCheck: false,
						value: config.customCss,
						onChange: (e) => update({
							...config,
							customCss: e.target.value
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: GlassPanel_module_default.hint,
						children: t("customCssHint")
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: GlassPanel_module_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: GlassPanel_module_default.cardTitle,
						children: t("transferTitle")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassPanel_module_default.row,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								onClick: exportConfig,
								children: t("exportButton")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								onClick: () => importInput.current?.click(),
								children: t("importButton")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								onClick: () => void reset(),
								children: t("resetButton")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								onClick: () => void resetAll(),
								children: t("resetAllButton")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: GlassPanel_module_default.saveState,
								"data-state": saveState,
								children: [
									saveState === "saving" && t("saving"),
									saveState === "saved" && t("saved"),
									saveState === "fail" && t("saveFail", { error: "…" })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						ref: importInput,
						type: "file",
						accept: "application/json,.json",
						hidden: true,
						onChange: (e) => {
							const file = e.target.files?.[0];
							if (file !== void 0) onImportFile(file);
							e.target.value = "";
						}
					})
				]
			}),
			toast !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Toast, {
				text: toast,
				onDone: () => setToast(null)
			})
		]
	});
}
//#endregion
//#region src/client/index.ts
/**
* dsh-glass-ui browser half.
*
* Registers the glass look:
*  1. the compiled glass.css ships inside this bundle — the build script
*     wraps it in a style-injection preamble that runs before apply();
*  2. overrides the core surface tokens to translucent glass values
*     (via ctx.theme.overrideTokens — values are var() references so the
*     opacity slider only touches :root variables);
*  3. runs the GlassEngine (background layer, fonts, root variables);
*  4. registers a "UI Design" section in the Settings dialog.
*
* Everything is fiber-owned: dispose() tears the glass off cleanly.
*/
const NS = "dsh-glass-ui";
function hexToRgb(hex) {
	const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex.trim());
	if (!m) return [
		255,
		255,
		255
	];
	return [
		parseInt(m[1], 16),
		parseInt(m[2], 16),
		parseInt(m[3], 16)
	];
}
function scaleTint(hex, factor) {
	const [r, g, b] = hexToRgb(hex);
	if (factor >= 1) {
		const t = Math.min(1, (factor - 1) / .6);
		return [
			Math.round(r + (255 - r) * t),
			Math.round(g + (255 - g) * t),
			Math.round(b + (255 - b) * t)
		];
	}
	const t = Math.min(1, (1 - factor) / .8);
	return [
		Math.round(r * (1 - t)),
		Math.round(g * (1 - t)),
		Math.round(b * (1 - t))
	];
}
function glassAlpha(a, base) {
	return `rgba(${base[0]}, ${base[1]}, ${base[2]}, ${a})`;
}
function buildTokens(cfg) {
	const [tr, tg, tb] = scaleTint(cfg.tint, cfg.glassBrightness);
	const a = cfg.tintOpacity;
	const tintLight = [
		tr,
		tg,
		tb
	];
	const tintDark = [
		Math.round(tr * .2),
		Math.round(tg * .2),
		Math.round(tb * .2)
	];
	const g = (alpha, dark = false) => {
		return [glassAlpha(alpha, dark ? tintDark : tintLight), glassAlpha(alpha, dark ? tintLight : tintDark)];
	};
	const transparent = cfg.bgImage !== "" || cfg.bgVideo !== "" ? {
		light: "transparent",
		dark: "transparent"
	} : {
		light: g(.3)[0],
		dark: g(.3)[1]
	};
	const tokens = {};
	const set = (name, light, dark) => {
		tokens[name] = {
			light,
			dark
		};
	};
	set("--dsw-alias-bg-base", transparent.light, transparent.dark);
	set("--dsw-alias-bg-layer-1", g(a * .55)[0], g(a * .55)[1]);
	set("--dsw-alias-bg-layer-2", g(a * .66)[0], g(a * .66)[1]);
	set("--dsw-alias-bg-layer-3", g(a * .78)[0], g(a * .78)[1]);
	set("--dsw-alias-bg-module-platform", g(a * .5)[0], g(a * .5)[1]);
	set("--dsw-alias-bg-multi-select", g(a * .6)[0], g(a * .6)[1]);
	set("--dsw-specific-sidebar-fill", g(a * .5)[0], g(a * .5)[1]);
	set("--dsw-alias-bg-overlay", g(.92)[0], g(.92)[1]);
	set("--dsw-specific-menu", g(.92)[0], g(.92)[1]);
	set("--dsw-specific-bubble", g(.5)[0], g(.5)[1]);
	set("--dsw-specific-bubble-highlight", g(.38)[0], g(.38)[1]);
	set("--dsw-specific-input-major", g(.35)[0], g(.35)[1]);
	set("--dsw-specific-login-input", g(.6)[0], g(.6)[1]);
	set("--dsw-specific-tip", g(.45)[0], g(.45)[1]);
	set("--dsw-specific-selector", g(a * .5)[0], g(a * .5)[1]);
	set("--dsw-alias-markdown-code-block", g(.7)[0], g(.7)[1]);
	set("--dsw-alias-markdown-code-block-banner", g(.6)[0], g(.6)[1]);
	set("--dsw-alias-markdown-inline-code", g(.6)[0], g(.6)[1]);
	set("--dsw-alias-button-elevated-fill", g(a * .55)[0], g(a * .55)[1]);
	set("--dsw-alias-button-floating-fill", g(a * .55)[0], g(a * .55)[1]);
	set("--dsw-alias-button-floating-hover", g(a * .66)[0], g(a * .66)[1]);
	set("--dsw-alias-button-tool-bar-fill", g(a * .62)[0], g(a * .62)[1]);
	set("--dsw-alias-button-tool-bar-hover", g(a * .72)[0], g(a * .72)[1]);
	set("--dsw-alias-button-tool-bar-fill-invisible", g(a * .4)[0], g(a * .4)[1]);
	set("--dsw-alias-interactive-bg-hover", g(.16)[0], g(.16)[1]);
	set("--dsw-alias-interactive-bg-active", g(.2)[0], g(.2)[1]);
	set("--dsw-alias-interactive-bg-hover-accent", g(.24)[0], g(.24)[1]);
	set("--dsw-alias-border-l1", `rgba(0,0,0,${cfg.refraction * .4})`, `rgba(255,255,255,${cfg.refraction * .4})`);
	set("--dsw-alias-border-l2", `rgba(0,0,0,${cfg.refraction * .35})`, `rgba(255,255,255,${cfg.refraction * .35})`);
	set("--dsw-alias-border-l2-darkmode-thin", `rgba(0,0,0,${cfg.refraction * .45})`, `rgba(255,255,255,${cfg.refraction * .45})`);
	set("--dsw-alias-border-l3", `rgba(0,0,0,${cfg.refraction * .45})`, `rgba(255,255,255,${cfg.refraction * .45})`);
	set("--dsw-alias-border-l4", `rgba(0,0,0,${cfg.refraction * .55})`, `rgba(255,255,255,${cfg.refraction * .55})`);
	set("--dsw-alias-label-primary", "rgba(20, 20, 28, 0.96)", "rgba(255, 255, 255, 0.97)");
	set("--dsw-alias-label-secondary", "rgba(45, 45, 58, 0.82)", "rgba(255, 255, 255, 0.82)");
	set("--dsw-alias-label-tertiary", "rgba(60, 60, 76, 0.68)", "rgba(255, 255, 255, 0.68)");
	set("--dsw-alias-label-disabled", "rgba(60, 60, 76, 0.40)", "rgba(255, 255, 255, 0.40)");
	set("--dsw-alias-toast-bg", g(a * .82)[0], g(a * .82)[1]);
	set("--dsw-alias-tooltip-bg", g(a * .85)[0], g(a * .85)[1]);
	set("--dsw-alias-brand-primary", "rgba(79,184,184,0.92)", "rgba(126,200,200,0.94)");
	set("--dsw-alias-button-primary", "rgba(79,184,184,0.92)", "rgba(126,200,200,0.94)");
	set("--dsw-alias-button-primary-fill", "rgba(79,184,184,0.92)", "rgba(126,200,200,0.94)");
	set("--dsw-alias-button-primary-fill-hover", "rgba(79,184,184,1.00)", "rgba(126,200,200,1.00)");
	set("--dsw-alias-button-primary-hover", "rgba(79,184,184,1.00)", "rgba(126,200,200,1.00)");
	set("--dsw-alias-state-business-primary", "rgba(79,184,184,0.95)", "rgba(126,200,200,0.95)");
	set("--dsw-alias-accent-soft", "rgba(79,184,184,0.14)", "rgba(126,200,200,0.16)");
	return tokens;
}
const name = NS;
const inject = [
	"slots",
	"locale",
	"theme"
];
function apply(ctx) {
	const engine = new GlassEngine();
	let tokenDispose;
	ctx.effect(() => {
		let disposed = false;
		loadConfig().then((config) => {
			if (disposed) return;
			tokenDispose?.();
			tokenDispose = ctx.theme.overrideTokens(NS, buildTokens(config));
			engine.apply(config);
		}).catch(() => {
			if (disposed) return;
			tokenDispose?.();
			tokenDispose = ctx.theme.overrideTokens(NS, buildTokens(DEFAULT_CONFIG));
			engine.apply({ ...DEFAULT_CONFIG });
		});
		return () => {
			disposed = true;
			engine.dispose();
			tokenDispose?.();
		};
	}, "dsh-glass-ui: glass engine");
	ctx.effect(() => ctx.locale.register(NS, {
		zh,
		en
	}), "dsh-glass-ui: dictionaries");
	const t = ctx.locale.bind(NS);
	ctx.slots.inject("settings.section", () => ctx.slots.register({
		name: "settings.section",
		id: "glass-ui",
		order: 80,
		label: () => t("nav"),
		locale: NS,
		inject: () => ({ t })
	}, () => (0, react.createElement)(GlassPanel, {
		t,
		engine
	})));
}
//#endregion
exports.apply = apply;
exports.inject = inject;
exports.name = name;

return module.exports;
}});

//# sourceMappingURL=index.cjs.map