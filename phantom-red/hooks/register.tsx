import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// Phantom Red: a Persona-inspired heist look. Jet-black panels, blood-red
// accent, white-hot text, over a restless red-and-black collage.
const { theme, problems } = makeColors({
  label: 'Phantom Red',
  only: 'dark',
  roles: {
    accent: '#e60023',
    danger: '#ff3b3b',
    success: '#4fd37a',
    warning: '#ffcc00',
    pro: '#ff5fa2',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0b0607',
        'surface-1': '#140a0c',
        'surface-2': '#1c0e11',
        'surface-3': '#241215',
        'text-primary': '#fff7f5',
        'text-secondary': '#e8cfcf',
        'text-muted': '#c09a9c',
      },
    },
    git: {
      added: '#4fd37a',
      removed: '#ff3b3b',
      modified: '#ffcc00',
      merged: '#ff5fa2',
      closed: '#c28f92',
      conflicting: '#ff7a00',
      draft: '#b8a6a7',
    },
  },
  codeTheme: { dark: 'monokai' },
})

export const PROBLEMS = problems

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'calling-card', glass: { blur: 18, tint: '#0b0607', opacity: 0.74 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if ((e.surface !== 'desktop' && e.surface !== 'mobile') || e.props.scene !== 'calling-card') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Red and black collage of jagged shards, halftone dots and spinning white stars" isInteractive />
  })
}
