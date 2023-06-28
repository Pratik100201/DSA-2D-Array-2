var arrangeCoins = function(n) {
    let res = n
    if(n == 1){ return 1}
    for(i = 1 ; i <= n ; i++){
        res -=i
         if(res<0){
        return i-1
        }
    }
}