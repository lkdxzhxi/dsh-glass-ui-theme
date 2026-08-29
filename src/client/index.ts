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
import { createElement as h } from 'react'
import './glass.css'
import { GlassEngine } from './engine.ts'
import { DEFAULT_CONFIG, loadConfig, type GlassConfig } from './config.ts'
import { en, zh } from './locales.ts'
import type { Translate } from './locales.ts'
import { GlassPanel } from './GlassPanel.tsx'

const NS = 'dsh-glass-ui'

/** The subset of the slots service this plugin touches. */
interface SlotsService {
  inject(slot: string, register: () => unknown): void
  register(meta: Record<string, unknown>, component: () => unknown): unknown
}

/** The subset of the locale service this plugin touches. */
interface LocaleService {
  register(namespace: string, dicts: { zh: Record<string, string>; en: Record<string, string> }): unknown
  bind(namespace: string): Translate
}

/** The subset of the theme service this plugin touches. */
interface ThemeService {
  overrideTokens(
    source: string,
    tokens: Record<string, { light: string; dark: string }>,
  ): () => void
}

/** The client cordis context shape this plugin relies on (structural). */
interface GlassClientContext {
  effect(callback: () => unknown | (() => void), label?: string): void
  locale: LocaleService
  slots: SlotsService
  theme: ThemeService
}

// ---------------------------------------------------------------------------
// dynamic token builder (mirrors the reference liquid-glass approach)
// ---------------------------------------------------------------------------

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex.trim())
  if (!m) return [255, 255, 255]
  return [
    parseInt(m[1]!, 16),
    parseInt(m[2]!, 16),
    parseInt(m[3]!, 16),
  ]
}

function darkGlass(hex: string): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgba(${Math.round(r * 0.2)}, ${Math.round(g * 0.2)}, ${Math.round(b * 0.2)}, `
}

function scaleTint(hex: string, factor: number): [number, number, number] {
  const [r, g, b] = hexToRgb(hex)
  if (factor >= 1) {
    const t = Math.min(1, (factor - 1) / 0.6)
    return [
      Math.round(r + (255 - r) * t),
      Math.round(g + (255 - g) * t),
      Math.round(b + (255 - b) * t),
    ] as [number, number, number]
  }
  const t = Math.min(1, (1 - factor) / 0.8)
  return [
    Math.round(r * (1 - t)),
    Math.round(g * (1 - t)),
    Math.round(b * (1 - t)),
  ] as [number, number, number]
}

function glassAlpha(a: number, base: [number, number, number]): string {
  return `rgba(${base[0]}, ${base[1]}, ${base[2]}, ${a})`
}

function buildTokens(cfg: GlassConfig): Record<string, { light: string; dark: string }> {
  const [tr, tg, tb] = scaleTint(cfg.tint, cfg.glassBrightness)
  const a = cfg.tintOpacity
  const tintLight: [number, number, number] = [tr, tg, tb]
  const tintDark: [number, number, number] = [Math.round(tr * 0.2), Math.round(tg * 0.2), Math.round(tb * 0.2)]
  const g = (alpha: number, dark = false): [string, string] => {
    const base = dark ? tintDark : tintLight
    return [
      glassAlpha(alpha, base),
      glassAlpha(alpha, dark ? tintLight : tintDark),
    ]
  }
  const bgActive = cfg.bgImage !== '' || cfg.bgVideo !== ''
  const transparent = bgActive
    ? { light: 'transparent', dark: 'transparent' }
    : { light: g(0.3)[0], dark: g(0.3)[1] }

  const tokens: Record<string, { light: string; dark: string }> = {}
  const set = (name: string, light: string, dark: string) => { tokens[name] = { light, dark } }

  set('--dsw-alias-bg-base',      transparent.light, transparent.dark)
  set('--dsw-alias-bg-layer-1',   g(a * 0.55)[0],    g(a * 0.55)[1])
  set('--dsw-alias-bg-layer-2',   g(a * 0.66)[0],    g(a * 0.66)[1])
  set('--dsw-alias-bg-layer-3',   g(a * 0.78)[0],    g(a * 0.78)[1])
  set('--dsw-alias-bg-module-platform', g(a * 0.5)[0], g(a * 0.5)[1])
  set('--dsw-alias-bg-multi-select',    g(a * 0.6)[0], g(a * 0.6)[1])
  set('--dsw-specific-sidebar-fill',    g(a * 0.5)[0], g(a * 0.5)[1])
  set('--dsw-alias-bg-overlay',         g(0.92)[0],    g(0.92)[1])
  set('--dsw-specific-menu',            g(0.92)[0],    g(0.92)[1])
  // bubbles / input / cards
  set('--dsw-specific-bubble',          g(0.50)[0],    g(0.50)[1])
  set('--dsw-specific-bubble-highlight',g(0.38)[0],    g(0.38)[1])
  set('--dsw-specific-input-major',     g(0.35)[0],    g(0.35)[1])
  set('--dsw-specific-login-input',     g(0.60)[0],    g(0.60)[1])
  set('--dsw-specific-tip',             g(0.45)[0],    g(0.45)[1])
  set('--dsw-specific-selector',        g(a * 0.5)[0], g(a * 0.5)[1])
  // code blocks
  set('--dsw-alias-markdown-code-block',           g(0.70)[0], g(0.70)[1])
  set('--dsw-alias-markdown-code-block-banner',    g(0.60)[0], g(0.60)[1])
  set('--dsw-alias-markdown-inline-code',          g(0.60)[0], g(0.60)[1])
  // buttons
  set('--dsw-alias-button-elevated-fill',  g(a * 0.55)[0], g(a * 0.55)[1])
  set('--dsw-alias-button-floating-fill',  g(a * 0.55)[0], g(a * 0.55)[1])
  set('--dsw-alias-button-floating-hover', g(a * 0.66)[0], g(a * 0.66)[1])
  set('--dsw-alias-button-tool-bar-fill',  g(a * 0.62)[0], g(a * 0.62)[1])
  set('--dsw-alias-button-tool-bar-hover', g(a * 0.72)[0], g(a * 0.72)[1])
  set('--dsw-alias-button-tool-bar-fill-invisible', g(a * 0.40)[0], g(a * 0.40)[1])
  // interactive
  set('--dsw-alias-interactive-bg-hover',       g(0.16)[0], g(0.16)[1])
  set('--dsw-alias-interactive-bg-active',      g(0.20)[0], g(0.20)[1])
  set('--dsw-alias-interactive-bg-hover-accent',g(0.24)[0], g(0.24)[1])
  // borders
  set('--dsw-alias-border-l1',   `rgba(0,0,0,${cfg.refraction * 0.4})`,   `rgba(255,255,255,${cfg.refraction * 0.4})`)
  set('--dsw-alias-border-l2',   `rgba(0,0,0,${cfg.refraction * 0.35})`,  `rgba(255,255,255,${cfg.refraction * 0.35})`)
  set('--dsw-alias-border-l2-darkmode-thin', `rgba(0,0,0,${cfg.refraction * 0.45})`, `rgba(255,255,255,${cfg.refraction * 0.45})`)
  set('--dsw-alias-border-l3',   `rgba(0,0,0,${cfg.refraction * 0.45})`,  `rgba(255,255,255,${cfg.refraction * 0.45})`)
  set('--dsw-alias-border-l4',   `rgba(0,0,0,${cfg.refraction * 0.55})`,  `rgba(255,255,255,${cfg.refraction * 0.55})`)
  // text / label contrast — bump alpha so text stays readable over glass
  set('--dsw-alias-label-primary',   'rgba(20, 20, 28, 0.96)',  'rgba(255, 255, 255, 0.97)')
  set('--dsw-alias-label-secondary', 'rgba(45, 45, 58, 0.82)',  'rgba(255, 255, 255, 0.82)')
  set('--dsw-alias-label-tertiary',  'rgba(60, 60, 76, 0.68)',  'rgba(255, 255, 255, 0.68)')
  set('--dsw-alias-label-disabled',  'rgba(60, 60, 76, 0.40)',  'rgba(255, 255, 255, 0.40)')
  // toast / tooltip
  set('--dsw-alias-toast-bg',    g(a * 0.82)[0], g(a * 0.82)[1])
  set('--dsw-alias-tooltip-bg',  g(a * 0.85)[0], g(a * 0.85)[1])
  // brand color — unified teal for the entire glass theme
  set('--dsw-alias-brand-primary', 'rgba(79,184,184,0.92)', 'rgba(126,200,200,0.94)')
  set('--dsw-alias-button-primary', 'rgba(79,184,184,0.92)', 'rgba(126,200,200,0.94)')
  set('--dsw-alias-button-primary-fill', 'rgba(79,184,184,0.92)', 'rgba(126,200,200,0.94)')
  set('--dsw-alias-button-primary-fill-hover', 'rgba(79,184,184,1.00)', 'rgba(126,200,200,1.00)')
  set('--dsw-alias-button-primary-hover', 'rgba(79,184,184,1.00)', 'rgba(126,200,200,1.00)')
  set('--dsw-alias-state-business-primary', 'rgba(79,184,184,0.95)', 'rgba(126,200,200,0.95)')
  set('--dsw-alias-accent-soft', 'rgba(79,184,184,0.14)', 'rgba(126,200,200,0.16)')
  return tokens
}

export const name = NS
export const inject = ['slots', 'locale', 'theme']

export function apply(ctx: GlassClientContext): void {
  // shared engine: the settings panel applies live previews through it
  const engine = new GlassEngine()

  // 1) translucent surface tokens (regenerated on each apply via re-effect)
  let tokenDispose: (() => void) | undefined
  ctx.effect(() => {
    let disposed = false
    void loadConfig()
      .then((config) => {
        if (disposed) return
        tokenDispose?.()
        tokenDispose = ctx.theme.overrideTokens(NS, buildTokens(config))
        engine.apply(config)
      })
      .catch(() => {
        if (disposed) return
        tokenDispose?.()
        tokenDispose = ctx.theme.overrideTokens(NS, buildTokens(DEFAULT_CONFIG))
        engine.apply({ ...DEFAULT_CONFIG } as GlassConfig)
      })
    return () => {
      disposed = true
      engine.dispose()
      tokenDispose?.()
    }
  }, 'dsh-glass-ui: glass engine')

  // 2) dictionaries + settings section
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-glass-ui: dictionaries')
  const t = ctx.locale.bind(NS)

  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'glass-ui',
    order: 80,
    label: () => t('nav'),
    locale: NS,
    inject: () => ({ t }),
  }, () => h(GlassPanel, { t, engine })))
}
