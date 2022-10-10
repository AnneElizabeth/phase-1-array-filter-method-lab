const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase();
    });
};


function fuzzyMatch (driver, string) {
    return drivers.filter(function(driver) {
        return driver.charAt(0) === string.charAt(0);
    });
};

function matchName (drivers, string) {
    return drivers.filter (function (driver) {
        return driver.name === string;
    });
};
