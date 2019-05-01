import { expect } from 'chai';
import { App } from './App';

describe("123",()=>{
    let app:App;
    before(()=>{
        app=new App();
    });

    it("ok",()=>{
        expect(app.add(0,1)).to.equal(1);
    });
});

describe("456",()=>{
    let app:App;
    before(()=>{
        app=new App();
    });

    it("ok",()=>{
        expect(app.sub(2,-1)).to.equal(3);
    });
});
