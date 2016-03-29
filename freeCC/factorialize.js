function factorialize(num) {
var factorial=1 ;
  for (var i = num; i>0; i--){
        factorial = i*factorial;
  }
  return factorial;
}
