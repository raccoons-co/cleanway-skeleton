import {CleanWayBuilder} from "@raccoons-co/cleanway";
import YourTest from "./YourTest";

try {
    CleanWayBuilder.instance()
        .assign(new YourTest())
        .build();
} catch(exception) {
    console.log(exception);
}