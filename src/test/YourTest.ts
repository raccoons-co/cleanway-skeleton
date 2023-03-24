import {Immutable, Test} from "@raccoons-co/cleanway";
import {assert} from "chai";

@Immutable
export default class YourTest {

    @Test
    public nothing() {
        assert.ok("But your assertions here.");
    }

    @Test
    public else() {
        assert.ok("More assertions.");
    }

    @Test
    public matters() {
        assert.ok("For your clean code.");
    }
}
