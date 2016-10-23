function solve(input) {
    let n = Number(input[0]);

    for (let i = 0; i <= n; i++) {
        console.log("*".repeat(i));
    }
    for (let j = n-1; j >0; j--) {
        console.log("*".repeat(j));
    }
}