"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "divoid",
              			"path": "divoid/divoid.js",
              			"file": "divoid.js",
              			"module": "divoid",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/divoid.git",
              			"test": "divoid-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Revert symbiotic initialization.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"kein": "kein",
              			"mrkd": "mrkd"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var kein = require("kein");
var mrkd = require("mrkd");

var CLASS = (0, _for2.default)("class");
var INITIALIZE = (0, _for2.default)("initialize");

var divoid = function divoid(blueprint) {
	/*;
                                         	@meta-configuration:
                                         		{
                                         			"blueprint:required": "function"
                                         		}
                                         	@end-meta-configuration
                                         */

	if (falzy(blueprint) || typeof blueprint != "function") {
		throw new Error("invalid blueprint");
	}

	if (mrkd(CLASS, blueprint, true) && mrkd("diatomic", blueprint) &&
	kein(INITIALIZE, blueprint) && mrkd("symbiosis", blueprint.prototype.initialize))
	{
		blueprint.prototype.initialize = blueprint[INITIALIZE];
	}

	return blueprint;
};

module.exports = divoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdm9pZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsImtlaW4iLCJtcmtkIiwiQ0xBU1MiLCJJTklUSUFMSVpFIiwiZGl2b2lkIiwiYmx1ZXByaW50IiwiRXJyb3IiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsbUJBQVksT0FBWixDQUFkO0FBQ0EsSUFBTUMsYUFBYSxtQkFBWSxZQUFaLENBQW5COztBQUVBLElBQU1DLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsU0FBakIsRUFBNEI7QUFDMUM7Ozs7Ozs7O0FBUUEsS0FBSVAsTUFBT08sU0FBUCxLQUFzQixPQUFPQSxTQUFQLElBQW9CLFVBQTlDLEVBQTBEO0FBQ3pELFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTCxLQUFNQyxLQUFOLEVBQWFHLFNBQWIsRUFBd0IsSUFBeEIsS0FBa0NKLEtBQU0sVUFBTixFQUFrQkksU0FBbEIsQ0FBbEM7QUFDSEwsTUFBTUcsVUFBTixFQUFrQkUsU0FBbEIsQ0FERyxJQUM4QkosS0FBTSxXQUFOLEVBQW1CSSxVQUFVRSxTQUFWLENBQW9CQyxVQUF2QyxDQURsQztBQUVBO0FBQ0NILFlBQVVFLFNBQVYsQ0FBb0JDLFVBQXBCLEdBQWlDSCxVQUFXRixVQUFYLENBQWpDO0FBQ0E7O0FBRUQsUUFBT0UsU0FBUDtBQUNBLENBcEJEOztBQXNCQUksT0FBT0MsT0FBUCxHQUFpQk4sTUFBakIiLCJmaWxlIjoiZGl2b2lkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGl2b2lkXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRpdm9pZC9kaXZvaWQuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZGl2b2lkLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiZGl2b2lkXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Rpdm9pZC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGl2b2lkLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UmV2ZXJ0IHN5bWJpb3RpYyBpbml0aWFsaXphdGlvbi5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxyXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xyXG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcclxuXHJcbmNvbnN0IENMQVNTID0gU3ltYm9sLmZvciggXCJjbGFzc1wiICk7XHJcbmNvbnN0IElOSVRJQUxJWkUgPSBTeW1ib2wuZm9yKCBcImluaXRpYWxpemVcIiApO1xyXG5cclxuY29uc3QgZGl2b2lkID0gZnVuY3Rpb24gZGl2b2lkKCBibHVlcHJpbnQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGJsdWVwcmludCApIHx8IHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBibHVlcHJpbnRcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIG1ya2QoIENMQVNTLCBibHVlcHJpbnQsIHRydWUgKSAmJiBtcmtkKCBcImRpYXRvbWljXCIsIGJsdWVwcmludCApICYmXHJcblx0XHRrZWluKCBJTklUSUFMSVpFLCBibHVlcHJpbnQgKSAmJiBtcmtkKCBcInN5bWJpb3Npc1wiLCBibHVlcHJpbnQucHJvdG90eXBlLmluaXRpYWxpemUgKSApXHJcblx0e1xyXG5cdFx0Ymx1ZXByaW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gYmx1ZXByaW50WyBJTklUSUFMSVpFIF07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYmx1ZXByaW50O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXZvaWQ7XHJcbiJdfQ==
//# sourceMappingURL=divoid.support.js.map
