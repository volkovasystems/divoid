
const assert = require( "assert" );
const divoid = require( "./divoid.js" );

assert.ok( divoid( function Test( ){ } ) );

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

assert.ok( divoid( Test ) );

assert.equal( ( new Test( ) ).initialize( ), "test", "should be equal" );

console.log( "ok" );
