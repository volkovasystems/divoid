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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdm9pZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsImtlaW4iLCJtcmtkIiwiQ0xBU1MiLCJJTklUSUFMSVpFIiwiZGl2b2lkIiwiYmx1ZXByaW50IiwiRXJyb3IiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsbUJBQVksT0FBWixDQUFkO0FBQ0EsSUFBTUMsYUFBYSxtQkFBWSxZQUFaLENBQW5COztBQUVBLElBQU1DLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsU0FBakIsRUFBNEI7QUFDMUM7Ozs7Ozs7O0FBUUEsS0FBSVAsTUFBT08sU0FBUCxLQUFzQixPQUFPQSxTQUFQLElBQW9CLFVBQTlDLEVBQTBEO0FBQ3pELFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTCxLQUFNQyxLQUFOLEVBQWFHLFNBQWIsRUFBd0IsSUFBeEIsS0FBa0NKLEtBQU0sVUFBTixFQUFrQkksU0FBbEIsQ0FBbEM7QUFDSEwsTUFBTUcsVUFBTixFQUFrQkUsU0FBbEIsQ0FERyxJQUM4QkosS0FBTSxXQUFOLEVBQW1CSSxVQUFVRSxTQUFWLENBQW9CQyxVQUF2QyxDQURsQztBQUVBO0FBQ0NILFlBQVVFLFNBQVYsQ0FBb0JDLFVBQXBCLEdBQWlDSCxVQUFXRixVQUFYLENBQWpDO0FBQ0E7O0FBRUQsUUFBT0UsU0FBUDtBQUNBLENBcEJEOztBQXNCQUksT0FBT0MsT0FBUCxHQUFpQk4sTUFBakIiLCJmaWxlIjoiZGl2b2lkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRpdm9pZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGl2b2lkL2Rpdm9pZC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGl2b2lkLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRpdm9pZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGl2b2lkLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGl2b2lkLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UmV2ZXJ0IHN5bWJpb3RpYyBpbml0aWFsaXphdGlvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1ya2QgPSByZXF1aXJlKCBcIm1ya2RcIiApO1xuXG5jb25zdCBDTEFTUyA9IFN5bWJvbC5mb3IoIFwiY2xhc3NcIiApO1xuY29uc3QgSU5JVElBTElaRSA9IFN5bWJvbC5mb3IoIFwiaW5pdGlhbGl6ZVwiICk7XG5cbmNvbnN0IGRpdm9pZCA9IGZ1bmN0aW9uIGRpdm9pZCggYmx1ZXByaW50ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBibHVlcHJpbnQgKSB8fCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XG5cdH1cblxuXHRpZiggbXJrZCggQ0xBU1MsIGJsdWVwcmludCwgdHJ1ZSApICYmIG1ya2QoIFwiZGlhdG9taWNcIiwgYmx1ZXByaW50ICkgJiZcblx0XHRrZWluKCBJTklUSUFMSVpFLCBibHVlcHJpbnQgKSAmJiBtcmtkKCBcInN5bWJpb3Npc1wiLCBibHVlcHJpbnQucHJvdG90eXBlLmluaXRpYWxpemUgKSApXG5cdHtcblx0XHRibHVlcHJpbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBibHVlcHJpbnRbIElOSVRJQUxJWkUgXTtcblx0fVxuXG5cdHJldHVybiBibHVlcHJpbnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpdm9pZDtcbiJdfQ==
//# sourceMappingURL=divoid.support.js.map
