
Blockly.JavaScript['move_fblock'] = function(block) {
		return "movingBotFwd(); \n";
		};  

Blockly.JavaScript['move_dblock'] = function(block) {
		return "movingBotDown();\n";
		}; 
		Blockly.JavaScript['move_up'] = function(block) {
			return "movingBotUp();\n";
			}; 
	
Blockly.JavaScript['move_back'] = function(block) {
			return "movingBotBack();\n";
			}; 
		
Blockly.JavaScript['puzzle_block'] = function(block) {
		    var dropdown_picture = block.getFieldValue('PictureRotate');
			var angle_angle = block.getFieldValue('angle');
			return ["rotate_puzzle(\" "+ dropdown_picture + "\"," +angle_angle+ ")", Blockly.JavaScript.ORDER_ATOMIC];
		};

Blockly.JavaScript['l2_main'] = function(block) {
	var value_block = Blockly.JavaScript.valueToCode(block, 'block', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_1st = Blockly.JavaScript.statementToCode(block, '1st');
	var statements_2nd = Blockly.JavaScript.statementToCode(block, '2nd');

	return [
		'if (' + value_block + ') {\n' +
		statements_1st +
		'} else {\n' +
		statements_2nd +
		'}\n', 
		 Blockly.JavaScript.ORDER_ATOMIC]

	//return ['if_elseBlock(' + statements_2nd + ',' + statements_1st + ')', Blockly.JavaScript.ORDER_ATOMIC];
	};

Blockly.JavaScript['compare_block'] = function(block) {
	var dropdown_compare = block.getFieldValue('compare');
	var dropdown_xcor = block.getFieldValue('xCor');

	return ["compare_Bot(\""+dropdown_compare+"\","+dropdown_xcor+ ")", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['mem_block'] = function(block) {
var number_1st = block.getFieldValue('1st');
var number_2nd = block.getFieldValue('2nd');
return ["mem_puzzle(\ "+ number_1st + "\," +number_2nd+ ")", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['repeat_block'] = function(block) {
var loop_var = block.getFieldValue('loop_var');
var statements_loop_blocks = Blockly.JavaScript.statementToCode(block, 'loop_blocks');

return [ 'var repeats = 0;\n' +
 'while (repeats <' + loop_var +') {\n'+
 statements_loop_blocks +
 'repeats++;\n' +
 '}\n;'
 , Blockly.JavaScript.ORDER_ATOMIC
];
};
		   

		  