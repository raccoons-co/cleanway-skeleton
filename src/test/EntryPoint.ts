import {CleanWayBuilder} from "@raccoons-co/cleanway";
import YourTest from "./YourTest";

try {
    new CleanWayBuilder()
        .use(YourTest)
        .build();
} catch(exception) {
    console.log(exception);
}
