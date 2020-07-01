class Test{

    foo(){
        console.log("in foo", this);
    }
}

var obj = new Test();
obj.foo();  //===> foo(obj)

var bar = obj.foo;

bar(); //===> foo()


var user = {
    id: 100,
    print: function(){
        console.log("Id", this.id);
    }
}
user.print();

var emp = {
    id: 200
}

//emp.print();
const fn = user.print.bind(emp);
fn();