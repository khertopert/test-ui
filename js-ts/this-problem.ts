export function ThisProblem() {
    class Test {
        value = '123';
        func() {
            console.log(this.value);
        } // change
        func1 = () => {
            console.log(this.value);
        }; // not change
    }

    const obj: any = {
        value: '456'
    };
    const test = new Test();

    obj.func = test.func;
    obj.func(); //456

    obj.func = test.func1;
    obj.func(); //123
}