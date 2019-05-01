export class App{
    add(x:number, y:number):number{
        return x+y;
    }
    sub(x:number, y:number):number{
        return x-y;
    }
    tm(x:number, y:number):number{
        /*here is a multiline comment
        inside a function*/
        console.log('before call');
        return x*y;
    }
    
}