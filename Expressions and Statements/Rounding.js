function solve([n, p]) {
	[n, p] = [n, p].map(Number);
	if(p>15)
	{
		p=15;
	}
	return Number(n.toFixed(p));
}