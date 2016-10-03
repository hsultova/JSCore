function distance([v1,v2,t]) {
	[v1,v2,t] = [v1,v2,t].map(Number);
	let dist1 = v1*t/3600;
	let dist2 = v2*t/3600;
	return Math.abs(dist1-dist2)*1000;
}