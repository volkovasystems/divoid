"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "divoid",
              			"path": "divoid/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/divoid.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"divoid": "divoid"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var divoid = require("./divoid.support.js");
//: @end-client







//: @client:
describe("divoid", function () {

	describe("`divoid with class containing symbiotic initialization`", function () {
		it("should revert symbiotic initialization", function () {
			var CLASS = (0, _for2.default)("class");
			var DIATOMIC = (0, _symbol2.default)("diatomic");
			var INITIALIZE = (0, _for2.default)("initialize");
			var SYMBIOSIS = (0, _symbol2.default)("symbiosis");

			var Test = function Test() {};
			Test[CLASS] = CLASS;
			Test[DIATOMIC] = DIATOMIC;
			Test[INITIALIZE] = function initialize() {
				return "test";
			};
			Test.prototype.initialize = function initialize() {
				return "hello world";
			};
			Test.prototype.initialize[SYMBIOSIS] = SYMBIOSIS;

			divoid(Test);

			assert.equal(Test.prototype.initialize[SYMBIOSIS], undefined);

			// assert.equal( ( new Test( ) ).initialize( ), "test" );
		});
	});

	describe("`divoid( function Test( ){ } )`", function () {
		it("should not throw error", function () {
			assert.ok(divoid(function Test() {}));
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGl2b2lkIiwiZGVzY3JpYmUiLCJpdCIsIkNMQVNTIiwiRElBVE9NSUMiLCJJTklUSUFMSVpFIiwiU1lNQklPU0lTIiwiVGVzdCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJlcXVhbCIsInVuZGVmaW5lZCIsIm9rIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLHlEQUFWLEVBQXFFLFlBQU87QUFDM0VDLEtBQUksd0NBQUosRUFBOEMsWUFBTztBQUNwRCxPQUFNQyxRQUFRLG1CQUFZLE9BQVosQ0FBZDtBQUNBLE9BQU1DLFdBQVcsc0JBQVEsVUFBUixDQUFqQjtBQUNBLE9BQU1DLGFBQWEsbUJBQVksWUFBWixDQUFuQjtBQUNBLE9BQU1DLFlBQVksc0JBQVEsV0FBUixDQUFsQjs7QUFFQSxPQUFJQyxPQUFPLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRyxDQUE5QjtBQUNBQSxRQUFNSixLQUFOLElBQWdCQSxLQUFoQjtBQUNBSSxRQUFNSCxRQUFOLElBQW1CQSxRQUFuQjtBQUNBRyxRQUFNRixVQUFOLElBQXFCLFNBQVNHLFVBQVQsR0FBc0I7QUFDMUMsV0FBTyxNQUFQO0FBQ0EsSUFGRDtBQUdBRCxRQUFLRSxTQUFMLENBQWVELFVBQWYsR0FBNEIsU0FBU0EsVUFBVCxHQUFzQjtBQUNqRCxXQUFPLGFBQVA7QUFDQSxJQUZEO0FBR0FELFFBQUtFLFNBQUwsQ0FBZUQsVUFBZixDQUEyQkYsU0FBM0IsSUFBeUNBLFNBQXpDOztBQUVBTixVQUFRTyxJQUFSOztBQUVBVCxVQUFPWSxLQUFQLENBQWNILEtBQUtFLFNBQUwsQ0FBZUQsVUFBZixDQUEyQkYsU0FBM0IsQ0FBZCxFQUFzREssU0FBdEQ7O0FBRUE7QUFDQSxHQXRCRDtBQXVCQSxFQXhCRDs7QUEwQkFWLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPYyxFQUFQLENBQVdaLE9BQVEsU0FBU08sSUFBVCxHQUFnQixDQUFHLENBQTNCLENBQVg7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQWxDRDtBQW1DQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRpdm9pZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGl2b2lkL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kaXZvaWQuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImRpdm9pZFwiOiBcImRpdm9pZFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZGl2b2lkID0gcmVxdWlyZSggXCIuL2Rpdm9pZC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImRpdm9pZFwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBkaXZvaWQgd2l0aCBjbGFzcyBjb250YWluaW5nIHN5bWJpb3RpYyBpbml0aWFsaXphdGlvbmBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV2ZXJ0IHN5bWJpb3RpYyBpbml0aWFsaXphdGlvblwiLCAoICkgPT4ge1xuXHRcdFx0Y29uc3QgQ0xBU1MgPSBTeW1ib2wuZm9yKCBcImNsYXNzXCIgKTtcblx0XHRcdGNvbnN0IERJQVRPTUlDID0gU3ltYm9sKCBcImRpYXRvbWljXCIgKTtcblx0XHRcdGNvbnN0IElOSVRJQUxJWkUgPSBTeW1ib2wuZm9yKCBcImluaXRpYWxpemVcIiApO1xuXHRcdFx0Y29uc3QgU1lNQklPU0lTID0gU3ltYm9sKCBcInN5bWJpb3Npc1wiICk7XG5cblx0XHRcdGxldCBUZXN0ID0gZnVuY3Rpb24gVGVzdCggKXsgfTtcblx0XHRcdFRlc3RbIENMQVNTIF0gPSBDTEFTUztcblx0XHRcdFRlc3RbIERJQVRPTUlDIF0gPSBESUFUT01JQztcblx0XHRcdFRlc3RbIElOSVRJQUxJWkUgXSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHRcdHJldHVybiBcInRlc3RcIjtcblx0XHRcdH1cblx0XHRcdFRlc3QucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdFx0XHRyZXR1cm4gXCJoZWxsbyB3b3JsZFwiO1xuXHRcdFx0fVxuXHRcdFx0VGVzdC5wcm90b3R5cGUuaW5pdGlhbGl6ZVsgU1lNQklPU0lTIF0gPSBTWU1CSU9TSVM7XG5cblx0XHRcdGRpdm9pZCggVGVzdCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFRlc3QucHJvdG90eXBlLmluaXRpYWxpemVbIFNZTUJJT1NJUyBdLCB1bmRlZmluZWQgKTtcblxuXHRcdFx0Ly8gYXNzZXJ0LmVxdWFsKCAoIG5ldyBUZXN0KCApICkuaW5pdGlhbGl6ZSggKSwgXCJ0ZXN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGl2b2lkKCBmdW5jdGlvbiBUZXN0KCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIG5vdCB0aHJvdyBlcnJvclwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0Lm9rKCBkaXZvaWQoIGZ1bmN0aW9uIFRlc3QoICl7IH0gKSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
