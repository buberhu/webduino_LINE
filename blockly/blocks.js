Blockly.Blocks['line_ifttt'] = {
  init: function () {
    this.appendValueInput("line_ifttt_event")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( IFTTT )")
      .appendField("Event :");
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
    this.setHelpUrl("");
  }
};

Blockly.Blocks['line_notify'] = {
  init: function () {
    this.appendValueInput("line_notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( Notify )")
      .appendField(Blockly.Msg.LINE_TOKEN);
    this.appendValueInput("line_notify_msg")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_MSG);
    this.appendValueInput("line_notify_stickerPackageId")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_STKPKG);
    this.appendValueInput("line_notify_stickerId")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_STK);
   this.appendValueInput("line_notify_imagefullsize")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_IMGFULL);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
// ---------------------------
Blockly.Blocks['linebot_set'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Set LINE Bot")
        .appendField(new Blockly.FieldVariable("linebot"), "name_");
    this.appendValueInput("linebot_token")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("token :");
    this.appendValueInput("linebot_userid")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("user ID :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Start Receiving Message");
    this.appendStatementInput("on_")
        .setCheck(null)
        .appendField("Do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Received Message");
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_sendmsg'] = {
  init: function() {
    this.appendValueInput("bot_sendmsg")
        .setCheck("String")
        .appendField("Set")
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Send Message :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_sendstk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Send Sticker，");
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
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_sendimg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Send Image");
    this.appendValueInput("bot_sendimg_s")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Preview URL :");
    this.appendValueInput("bot_sendimg")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Original URL :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_sendvideo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Send Video");
    this.appendValueInput("bot_sendvideo_s")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image URL :");
    this.appendValueInput("bot_sendvideo")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Video URL :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linebot_sendaudio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldVariable("linebot"), "name_")
        .appendField("Send Audio");
    this.appendValueInput("bot_sendaudio_s")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("duration :");
    this.appendValueInput("bot_sendaudio")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Audio URL :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};







