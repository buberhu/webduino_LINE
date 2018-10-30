Blockly.Blocks['line_ifttt'] = {
  init: function () {
    this.appendValueInput("line_ifttt_event")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( IFTTT )")
      .appendField("Event Name :");
    this.appendValueInput("line_ifttt_key")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Key :");
    this.appendValueInput("line_ifttt_value1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value1");
    this.appendValueInput("line_ifttt_value2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value2");
    this.appendValueInput("line_ifttt_value3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineifttt.html");
  }
};
// ---------------------------
Blockly.Blocks['linenotify_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_");
    this.appendValueInput("linenotify_token")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENotify_Token);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
  }
};

Blockly.Blocks['linenotify_sendmsg'] = {
  init: function() {
    this.appendValueInput("notify_sendmsg")
        .setCheck("String")
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendmsg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
  }
};

Blockly.Blocks['linenotify_sendstk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendstk);
    this.appendValueInput("notify_sendstkpkg")
        .setCheck("Number")
        .appendField("STKPKGID :");
    this.appendValueInput("notify_sendstkid")
        .setCheck("Number")
        .appendField("STKID :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
  }
};

Blockly.Blocks['linenotify_sendimg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINENotify_Set)
        .appendField(new Blockly.FieldVariable("linenotify"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendimg);
    this.appendValueInput("notify_sendimg_s")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendimgP);
    this.appendValueInput("notify_sendimg")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendimgO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-notify.html");
  }
};
// ---------------------------
Blockly.Blocks['linebot_set'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_Set)
        .appendField(new Blockly.FieldVariable("linebot"), "name_");
    this.appendValueInput("linebot_token")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_Token);
    this.appendValueInput("linebot_userid")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_Userid);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Onrece);
    this.appendStatementInput("on_")
        .setCheck(null)
        .appendField(Blockly.Msg.LINEBot_Ondo);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Recemsg);
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_sendmsg'] = {
  init: function() {
    this.appendValueInput("bot_sendmsg")
        .setCheck("String")
        .appendField(Blockly.Msg.LINEBot_Set)
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendmsg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_sendstk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINEBot_Set)
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendstk);
    this.appendValueInput("bot_sendstkpkg")
        .setCheck("Number")
        .appendField("STKPKGID :");
    this.appendValueInput("bot_sendstkid")
        .setCheck("Number")
        .appendField("STKID :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_sendimg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINEBot_Set)
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendimg);
    this.appendValueInput("bot_sendimg_s")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendimgP);
    this.appendValueInput("bot_sendimg")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendimgO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_sendvideo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINEBot_Set)
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendvideo);
    this.appendValueInput("bot_sendvideo_s")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendvideoP);
    this.appendValueInput("bot_sendvideo")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendvideoO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};

Blockly.Blocks['linebot_sendaudio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINEBot_Set)
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField(Blockly.Msg.LINEBot_Sendaudio);
    this.appendValueInput("bot_sendaudio_s")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendaudioP);
    this.appendValueInput("bot_sendaudio")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINEBot_SendaudioO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineline-bot.html");
  }
};







