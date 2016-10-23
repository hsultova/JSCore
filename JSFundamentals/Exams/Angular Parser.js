function main(input) {
    let createAppPattern = /\$app=\'(.+)\'/;
    let appPattern = /\&app\=\'(.+)\'/;
    let controllerPattern = /\$controller\='(.+?)'/;
    let modelPattern = /\$model\='(.+?)'/;
    let viewPattern = /\$view\='(.+?)'/;

    let parserData = {};

    for (let line of input) {
        let appMatch = createAppPattern.exec(line);

        if (appMatch) {
            var app = appMatch[1];

            if (!parserData[app]) {
                parserData[app] = {
                    "controllers": [],
                    "models": [],
                    "views": []
                };
            }
        }
    }

    for (let line of input) {
        let appMatch = appPattern.exec(line);
        let controllerMatch = controllerPattern.exec(line);
        let modelMatch = modelPattern.exec(line);
        let viewMatch = viewPattern.exec(line);

        if (appMatch) {
            let app = appMatch[1];

            if (parserData[app]) {
                if (controllerMatch) {
                    parserData[app]["controllers"].push(controllerMatch[1]);
                }
                if (modelMatch) {
                    parserData[app]["models"].push(modelMatch[1]);
                }
                if (viewMatch) {
                    parserData[app]["views"].push(viewMatch[1]);
                }
            }
        }

    }
    Object.keys(parserData).forEach(function (key) {
        let appKeys = Object.keys(parserData[key]);
        for(let appKey of appKeys) {
            parserData[key][appKey].sort(function (a, b) {
                return a.localeCompare(b);
            });
        }
    });

    let keys = Object.keys(parserData);
    keys.sort(function (a, b) {
        let first = parserData[a]["controllers"].length;
        let second = parserData[b]["controllers"].length;
        let result = second - first;

        if (result == 0) {
            first = parserData[a]["models"].length;
            second = parserData[b]["models"].length;
            result = first - second;
        }

        return result;
    });

    let sortedData = {};
    keys.forEach(function (el) {
        sortedData[el] = parserData[el];
    });

    console.log(JSON.stringify(sortedData));
}

main(["$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"]);

