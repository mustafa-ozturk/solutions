// https://www.codewars.com/kata/55f73be6e12baaa5900000d4
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return Object.values(arguments).reduce((a,c) => a + c)
}