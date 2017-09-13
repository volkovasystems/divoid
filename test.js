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
*/

const assert = require( "should/as-function" );

//: @server:
const divoid = require( "./divoid.js" );
//: @end-server






//: @server:
describe( "divoid", ( ) => {

	describe( "`divoid with class containing symbiotic initialization`", ( ) => {
		it( "should revert symbiotic initialization", ( ) => {
			const CLASS = Symbol.for( "class" );
			const DIATOMIC = Symbol( "diatomic" );
			const INITIALIZE = Symbol.for( "initialize" );
			const SYMBIOSIS = Symbol( "symbiosis" );

			let Test = function Test( ){ };
			Test[ CLASS ] = CLASS;
			Test[ DIATOMIC ] = DIATOMIC;
			Test[ INITIALIZE ] = function initialize( ){
				return "test";
			}
			Test.prototype.initialize = function initialize( ){
				return "hello world";
			}
			Test.prototype.initialize[ SYMBIOSIS ] = SYMBIOSIS;

			divoid( Test );

			assert.equal( Test.prototype.initialize[ SYMBIOSIS ], undefined );

			// assert.equal( ( new Test( ) ).initialize( ), "test" );
		} );
	} );

	describe( "`divoid( function Test( ){ } )`", ( ) => {
		it( "should not throw error", ( ) => {
			assert.ok( divoid( function Test( ){ } ) );
		} );
	} );

} );
//: @end-server






