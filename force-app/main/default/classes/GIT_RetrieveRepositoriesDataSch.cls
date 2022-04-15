global with sharing class GIT_RetrieveRepositoriesDataSch implements Schedulable {
    global void execute(SchedulableContext sc){
        Id scheduleId = sc.getTriggerId();
        try{
            GitRepositoryHelpers.retrieveRepositoriesData();
            if(scheduleId != null){
                System.abortJob(scheduleId);
            }
            schedule(this);
        }catch(Exception ex){
            System.debug('Erro: ' + ex.getMessage());
        }
    }

    global static String executarScheduler(){
        return schedule(new GIT_RetrieveRepositoriesDataSch());
    }

    private static String schedule(GIT_RetrieveRepositoriesDataSch sch){
        String message = '';
        try{
            Datetime dt = System.now().addMinutes(5);
            String minute = dt.format('mm');
            String cron = '0 ' + minute +' * * * ?';
            String jobName = (!Test.isRunningTest() ? 'GIT Retrive Repositories Data' : 'GIT Retrive Repositories Data Test');
            System.schedule(jobName, cron, sch);
        }catch(Exception ex){
            message = ex.getMessage();
        }
        return message;
    }
}