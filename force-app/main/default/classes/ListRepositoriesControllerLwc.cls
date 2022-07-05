public with sharing class ListRepositoriesControllerLwc {
    public ListRepositoriesControllerLwc(){}
    @AuraEnabled(cacheable=true)
    public static List<Repository__c> getRepositories() {
        return [
            SELECT Id, Name, Description__c, Stargazers_Count__c
            FROM Repository__c
            ORDER BY Name
        ];
    }
}
