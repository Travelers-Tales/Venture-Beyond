onEvent('server.load', event => {
    event.server.runCommandSilent('gamerule doVanillaAttack ' + global.allowVanillaAttack)
  })