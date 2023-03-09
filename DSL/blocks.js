Blockly.Blocks['puzzle_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate")
        .appendField(new Blockly.FieldDropdown([["1","picture1"], ["2","picture2"], ["3","picture3"]]), "PictureRotate")
        .appendField("by")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_fblock'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move forward");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['move_back'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move backward");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['move_dblock'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move downward");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['move_up'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move upward");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['l2_main'] = {
    init: function() {
      this.appendValueInput("block")
          .setCheck(null)
          .appendField("if");
      this.appendStatementInput("1st")
          .setCheck(null)
          .appendField("do");
      this.appendStatementInput("2nd")
          .setCheck(null)
          .appendField("else");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

    Blockly.Blocks['compare_block'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("x")
            .appendField(new Blockly.FieldDropdown([["<","lesser"], [">","greater"], ["option","OPTIONNAME"]]), "compare")
            .appendField(new Blockly.FieldDropdown([["20","20"], ["40","40"], ["60","60"]]), "xCor");
            this.setOutput(true, null);
        this.setColour(45);
     this.setTooltip("");
     this.setHelpUrl("");
      }
    };


  Blockly.Blocks['mem_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 0, 7), "1st")
          .appendField("=")
          .appendField(new Blockly.FieldNumber(0, 0, 7), "2nd");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(15);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['repeat_block'] = {
    init: function() {
    this.appendDummyInput()
    .appendField("repeat")
    .appendField(new Blockly.FieldNumber(0, 0), "loop_var")
    .appendField("times");
    this.appendStatementInput("loop_blocks")
    .setCheck(null)
    .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("This block can repeat the embedded blocks.");
    this.setHelpUrl("");
    }
    };
  
