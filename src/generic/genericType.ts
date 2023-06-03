function createPair<S, T>(v1: S, v2: T):[S, T] {
    return [v1, v2];
}

export function applyGeneric() {
    const pair = createPair<string, number>('hello', 50);
    console.log('pair', pair);
}
