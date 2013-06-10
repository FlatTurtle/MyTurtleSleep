var hostname = '';
var alias = '';

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
        saveState('on');
        if (typeof application == "object")
            application.enableScreen(true);
        console.log('enable');
        document.location.href = 'https://go.flatturtle.com/' + hostname;
    },

    disable : function() {
        saveState('off');
        if (typeof application == "object")
            application.enableScreen(false);
        console.log('disable');
    }
};


/**
 * Save power state
 */
function saveState(state){
    if(alias){
        $.ajax({
            url : '/' + alias + '/plugins/screen/power_state',
            type: 'post',
            dataType: "json",
            data: {
                state: state
            }
        });
    }
}

/**
 * Load screen configuration
 */
function loadConfig(api) {
    $.ajax({
        url : api,
        dataType: "json",
        success : function(config) {


            // Create jobs
            for(var id in config.jobs) {
                var job = config.jobs[id];
                Jobs.add(job);
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