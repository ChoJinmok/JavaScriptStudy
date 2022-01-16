function func() {
    if(global === this) { //this는 agguments와 같이 함수안에서 사용되는 키워드(변수)
        console.log('global === this');
    }
}
func();

var o = {
    func : function() {
        if(o === this) {
            console.log('o === this');
        }
    }
}
o.func();