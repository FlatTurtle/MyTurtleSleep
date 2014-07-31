var hostname = '';
var alias = '';
// width of the cronjob randomization (in seconds)
var cron_randomization_width = 60;

window.Jobs = (function() {

    /*
     * Execute all functions for passed config
     */
    function add(job) {
        var str = job.minutes + " " + job.hours + " " + job.day_of_month + " " + job.month + " " + job.day_of_week;

        //parse the string into a scheduler
        var scheduler = cronParser().parse(str, false);

        //execute a job every next time
        var thisjob = later(1, true); //1 second = min time between 2 occurences, true => use Local time
        thisjob.exec(scheduler, new Date(), execute, job);
    }

    function execute(job){
        try {
            eval(job.javascript);
        } catch(err) {
            //do nothing
        }
    }

    /*
     * Public interface to this object
     */
    return {
        add : add
    };

}());

var Power = {
    enable : function() {
        saveState('on', redirectToGo);
        if (typeof application == "object")
            application.enableScreen(true);
        console.log('enable');
    },

    disable : function() {
        // onlys savestate if application is defined, otherwise web browsers
        // surfing to the sleep page will also set the screen state on off,
        // while the screen could still be on
        if (typeof application == "object"){
            saveState('off', null);
            application.enableScreen(false);
        }
        console.log('disable');
    }
};

/**
 * Redirect to Go (callback)
 */
function redirectToGo(){
    //document.location.href = 'https://go.flatturtle.com/' + hostname;
    if (typeof application == "object")
        application.loadURL('https://go.flatturtle.com/' + hostname);
    else
        document.location.href = 'https://go.flatturtle.com/' + hostname;
}


/**
 * Save power state
 */
function saveState(state, callback){
    if(alias){
        $.ajax({
            url : '/' + alias + '/plugins/screen/power_state',
            type: 'post',
            dataType: "json",
            data: {
                state: state
            },
            success: function(){
                if(callback != null){
                    callback();
                }
            },
            error: function(){
                setTimeout(function(){
                    saveState(state, callback);
                }, 8000);
            }
        });
    }
}

/**
 * Randomize the minute of a job time
 * @param job: (by reference) the job that needs to be randomized
 * @param amount: the amount of seconds that the time may differ from the original
 */
function randomizeJobTime(job, amount) {
    // spread amount before and after
    var rand = randomInt(0, 2 * amount) - amount;
   
    // add (or subtract) the random amount of time
    job.seconds += rand;
    job.minutes += Math.floor(job.seconds / 60);
    job.hours += Math.floor(job.minutes / 60);

    // normalize upper bound
    job.seconds %= 60;
    job.minutes %= 60;
    job.hours %= 24;
  
    // check the zero boundaries
    if (job.seconds < 0) {
        job.seconds += 60 ;
    }

    if (job.minutes < 0) {
        job.minutes += 60;
    }

    if (job.hours < 0) {
        job.hours += 24;
    }
}

/**
 * return a random integer between min and max (inclusive)
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Load screen configuration
 */
function loadConfig(api, noCron) {
    $.ajax({
        url : api,
        dataType: "json",
        success : function(config) {
            // if noCron is false create jobs, don't create them if noCron is
            // specified
            if(!noCron){
                // Create jobs
                for(var id in config.jobs) {
                    var job = config.jobs[id];

                    if (job.name == "screen_on") {
                        randomizeJobTime(job, 60);
                    }
                   
                    Jobs.add(job);
                }
            }

            // Get hostname
            if(config.interface.hostname){
                hostname = config.interface.hostname;
            }

            // Get alias
            if(config.interface.alias){
                alias = config.interface.alias;
            }

            // Default disable power
            Power.disable();
        }
    });
}

// Default disable
if (typeof application == "object")
    application.enableScreen(false);
