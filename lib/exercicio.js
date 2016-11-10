var st =  function() {
    return {
    	getNumber: function(value){
    		var arr = value.split(""),
    			num = '';


    		for(var i=0;i<arr.length;i++){
    			num += this.start(arr[i]);
    			
    		}

    		return num;
    	},
        start: function(value) {
        	if( typeof value == 'string' ){
        		value  = value.toUpperCase();
        	}

        	switch(value) {
			case 'A':
			case 'B':
			case 'C':
				return 2;
			case 'D':
			case 'E':
			case 'F':
				return 3;
			case 'G':
			case 'H':
			case 'I':
				return 4;
			case 'J':
			case 'K':
			case 'L':
				return 5;
			case 'M':
			case 'N':
			case 'O':
				return 6;
			case 'P':
			case 'Q':
			case 'R':
			case 'S':
				return 7;
			case 'T':
			case 'U':
			case 'V':
				return 8;
			case 'W':
			case 'X':
			case 'Y':
			case 'Z':
				return 9;
			default:
				return value;
		}
	}
    };
};

module.exports = new st();
