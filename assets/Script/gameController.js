cc.Class({
    extends: cc.Component,

    properties: {
        flipperLeft:cc.Node,
        flipperRight:cc.Node,
        ball:cc.Node
    },

    // use this for initialization
    onLoad: function () {
        
        cc.view.enableAntiAlias(false);
        
        var physicsManager = cc.director.getPhysicsManager();
            physicsManager.enabled = true;
        
//        physicsManager.debugDrawFlags = 
//        // 0;
//        // cc.PhysicsManager.DrawBits.e_aabbBit |
//        // cc.PhysicsManager.DrawBits.e_pairBit |
//        // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
//        cc.PhysicsManager.DrawBits.e_jointBit |
//        cc.PhysicsManager.DrawBits.e_shapeBit;
//        
//        cc.director.getCollisionManager().enabledDebugDraw = false;
        
        
        this.flipperLeft.rotation = 20;
        this.flipperRight.rotation = -20;
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(){  this.flipperLeft.rotation = -20;this.flipperRight.rotation = 20;}, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(){  this.flipperLeft.rotation = 20;this.flipperRight.rotation = -20;}, this);
        
        //TOUCH
        this.node.on(cc.Node.EventType.TOUCH_START,function(){  this.flipperLeft.rotation = -20;this.flipperRight.rotation = 20;}, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(){  this.flipperLeft.rotation = 20;this.flipperRight.rotation = -20;}, this);
    },
    
    update:function()
    {
      if(this.ball.getPositionY()<-250)
      {
          //RESET BALL POSITION
         this.ball.setPosition(-40,0)
      }  
    },
});
