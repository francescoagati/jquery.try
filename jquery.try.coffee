do () ->
  jQuery.fn.try= (method,args...) ->
    try
      @[method].apply(@,args)        
    catch e
      @
  
  jQuery.fn.tryCatch= (method,args...,obj_exception) ->
    try
      @[method].apply(@,args)        
    catch e
      obj_exception
    