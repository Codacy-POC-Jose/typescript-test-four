class User {
    ok() {
        return "ok";
    }

}

async function foo(things: string[]) {
    const results = [];
    for (const thing of things) {
        // Bad: each loop iteration is delayed until the entire asynchronous operation completes
        results.push(await bar(thing));
    }
    return results;
}
