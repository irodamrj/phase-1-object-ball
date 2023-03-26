function gameObject(){
    const gameObject = {
        home : {
            teamName : "Brooklyn Nets",
            colors : ["black", "white"],
            players : {
                "Alan Anderson" : { 
                    "number" : 0, 
                    "shoe" : 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDrunks": 1
                },
                "Reggie Evans" : { 
                    "number" : 30, 
                    "shoe" : 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDrunks": 7
                },
                "Brook Lopez" : { 
                    "number" : 11, 
                    "shoe" : 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDrunks": 15
                },
                "Mason Plumlee" : { 
                    "number" : 1, 
                    "shoe" : 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDrunks": 5
                },
                "Jason Terry" : { 
                    "number" : 31, 
                    "shoe" : 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDrunks": 1
                },

            },

        },

        away : {
            teamName : "Charlotte Hornets",
            colors : ["Turquoise", "Purple"],
            players : {
                "Jeff Adrien" : { 
                    "number" : 4, 
                    "shoe" : 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDrunks": 2
                },
                "Bismak Biyombo" : { 
                    "number" : 0, 
                    "shoe" : 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDrunks": 10
                },
                "DeSagna Diop" : { 
                    "number" : 2, 
                    "shoe" : 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDrunks": 5
                },
                "Ben Gordon" : { 
                    "number" : 8, 
                    "shoe" : 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDrunks": 0
                },
                "Brendan Haywood" : { 
                    "number" : 33, 
                    "shoe" : 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDrunks": 12
                },

            },

        }
    };
    return gameObject;
}

function numPointsScored(playerName){
    const object = gameObject();
    for(let key in object){
        if(object[key].players[playerName])
            return object[key].players[playerName]["points"];
    }

    // return Object.keys(object).forEach(team => {
    //     if(object[team].players[playerName])
    //         return object[team].players[playerName]["points"]; 
    // })
        
}

function shoeSize(playerName){
    const object = gameObject();
    for(let key in object){
        if(object[key].players[playerName])
            return object[key].players[playerName]["shoe"];
    }
}

function teamColors(teamsName){
    const object = gameObject();
    for(let key in object){
        if(object[key].teamName === teamsName)
            return object[key].colors;
    }
}

function teamNames(){
    const object = gameObject();
    const teamNames = [];
    for(let key in object){
        teamNames.push(object[key].teamName)
    }
    return teamNames;
}

function playerNumbers(teamName){
    const object = gameObject();
    const teamNumbers = [];
    for(let key in object){
        if(object[key].teamName === teamName){
            for(let player in object[key].players){
                teamNumbers.push(object[key].players[player]["number"]);
            }
                
        }
    }
    return teamNumbers;
}
function playerStats(playerName){
    const object = gameObject();
    for(let key in object){
        if(object[key].players[playerName]){
            return object[key].players[playerName];
        }
    }
}

function bigShoeRebounds(){
    const object = gameObject();
    let maxShoe = Number.MIN_VALUE;
    let rebound;
    for(let key in object){
        for(let key2 in object[key].players){
            if(object[key].players[key2]["shoe"] > maxShoe){
                maxShoe = object[key].players[key2]["shoe"];
                rebound = object[key].players[key2]["rebounds"]
            }
        }
    }
    return rebound;
}

function mostPointsScored(){
    const object = gameObject();
    let maxPoints = Number.MIN_VALUE;
    let playerWithMostPoints;
    let nameOfThePlayer;
    for(let key in object){
        for(let key2 in object[key].players){
            if(object[key].players[key2]["points"] > maxPoints){
                maxPoints = object[key].players[key2]["points"];
                playerWithMostPoints = key2;
            }
        }
    }
    return playerWithMostPoints + " has most points of " + maxPoints;
}

function winningTeam(){
    const object = gameObject();
    let total = 0;
    let winningTeam;
    for(let key in object){
        let temp= 0;
        for(let key2 in object[key].players){
            temp += object[key].players[key2]["points"];
        }
        
        if(temp > total){
            total = temp;
            winningTeam = object[key].teamName;
        }
        
    }
    
    return winningTeam + " has total points " + total;

}

function playerWithLongestName(){
    const object = gameObject();
    let length = 0;
    let name;
    for(let key1 in object){
        let tempLength = 0;
        for(let key2 in object[key1].players){
            tempLength = key2.trim().length;
            if(tempLength > length){
                length = tempLength;
                name = key2;
            }
        }
    }
    return name + " has max length " + length;
}









// console.log(playerWithLongestName());
// console.log(gameObject());
// console.log(numPointsScored("Alan Anderson"));
// console.log(shoeSize("Jason Terry"));
// console.log(teamColors("Brooklyn Nets"));
// console.log(teamNames());
// console.log(playerNumbers("Brooklyn Nets"));
// console.log(playerStats("Alan Anderson"));
// console.log(bigShoeRebounds());
// console.log(mostPointsScored());
// console.log(winningTeam());
