import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// Midnight Static: a Persona 4-inspired look. Midnight panels, electric yellow,
// over a TV left on in the rain, with fog rolling in.
const { theme, problems } = makeColors({
  label: 'Midnight Static',
  only: 'dark',
  roles: {
    accent: '#ffd400',
    danger: '#ff4d4d',
    success: '#7ddc6a',
    warning: '#ff9f1c',
    pro: '#b98cff',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#09090d',
        'surface-1': '#111116',
        'surface-2': '#18171d',
        'surface-3': '#1f1e24',
        'text-primary': '#fffbea',
        'text-secondary': '#e6dfc4',
        'text-muted': '#b8b096',
      },
    },
    git: {
      added: '#7ddc6a',
      removed: '#ff4d4d',
      modified: '#ffd400',
      merged: '#b98cff',
      closed: '#c4b9a0',
      conflicting: '#ff9f1c',
      draft: '#b8b096',
    },
  },
  codeTheme: { dark: 'monokai' },
})

export const PROBLEMS = problems

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'midnight-channel', glass: { blur: 20, tint: '#09090d', opacity: 0.72 } },
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
    if ((e.surface !== 'desktop' && e.surface !== 'mobile') || e.props.scene !== 'midnight-channel') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="An old TV glowing with static at midnight, yellow bars, rain and rolling fog" isInteractive />
  })
}
