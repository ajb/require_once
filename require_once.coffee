scripts = {}

window.requireOnce = (path, cb) ->
  # never requested this script
  if typeof scripts[path] == 'undefined'
    scripts[path] = []
    scripts[path].push cb if cb?
    $.getScript path, ->
      cb() for cb in scripts[path]
      scripts[path] = true

  # this script is loaded
  else if scripts[path] == true
    cb?()

  # the request for this script is pending
  else
    scripts[path].push cb if cb?
