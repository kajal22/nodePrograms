function volume( l, w, h ) {
  return l * w * h;
}
var curried = curry( volume );
curried( 1 )( 2 )( 3 ); // 6


