config.jars = "jar/2005RealFootball_s40v2a.jar";
config.jad = "jar/2005RealFootball_s40v2a.jad";
config.midletClassName = "RealFootball"; 
MIDlet.shouldStartBackgroundService = function() {
  return fs.exists("/startBackgroundService");
};
