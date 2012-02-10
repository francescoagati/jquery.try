do ->
  jQuery.fn.try= (method,args...) ->
    try
      @[method].apply(@,args)        
    catch e
      @
