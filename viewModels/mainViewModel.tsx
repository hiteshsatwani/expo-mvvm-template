import { action, makeAutoObservable, observable } from "mobx";

class MainViewModel {
    constructor() {
        makeAutoObservable(this)
    }

    @observable public testString = "Test 1";

    @action public setTestString = (val: string) : void => {
        this.testString = val;
    }

    @action public handleButtonPress = (): void => {
        this.setTestString("Test Complete")
    }
    
}

export default MainViewModel