# Persona Claude Themes

Two looks for Claude Code, inspired by the Persona games. Both use original art, no game assets.

| Theme | Inspired by | Look |
| --- | --- | --- |
| `phantom-red` | Persona 5 | Jet black panels, blood-red accent, animated red and black collage of shards, halftone dots and spinning stars |
| `midnight-static` | Persona 4 | Midnight panels, electric-yellow accent, an old TV full of static, rain and rolling fog |

Themes draw in the Claude desktop and mobile apps. The terminal and editors don't draw themes. Install one theme at a time: if both are on, the last one to load wins.

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install phantom-red --marketplace 999mmartinn/persona-claude-themes
```

or

```
/plugin install midnight-static --marketplace 999mmartinn/persona-claude-themes
```

Answer `y` to add the marketplace, then pick the **user** scope (the first one) so it loads in every session.

From a shell:

```bash
claude plugin install phantom-red --marketplace 999mmartinn/persona-claude-themes
```

In the desktop app, where `/plugin` does not run: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `999mmartinn/persona-claude-themes`, then **Add plugin**.

To switch themes, uninstall one and install the other:

```
/plugin uninstall phantom-red
```

## License

MIT
