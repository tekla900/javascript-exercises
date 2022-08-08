const findTheOldest = function(inventors) {
    
        
    for (let k in inventors) {
        if (inventors[k]['yearOfDeath'] !== undefined) {
            const oldest = inventors.sort((a, b) => {
                const lastInventor = a.yearOfDeath - a.yearOfBirth;
                const nextInventor = b.yearOfDeath - b.yearOfBirth;
                return lastInventor > nextInventor ? -1 : 1;
             });
             return oldest[Object.keys(oldest)[0]];
        } else {
            inventors[k]['yearOfDeath'] == new Date().getFullYear();
            const oldest = inventors.sort((a, b) => {
                const lastInventor = a.yearOfDeath - a.yearOfBirth;
                const nextInventor = b.yearOfDeath - b.yearOfBirth;
                return lastInventor > nextInventor ? -1 : 1;
             });
             return oldest[Object.keys(oldest)[0]];
        }
    }
}    
  
// Do not edit below this line
module.exports = findTheOldest;
