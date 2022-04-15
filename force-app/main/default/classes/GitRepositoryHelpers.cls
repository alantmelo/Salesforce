public with sharing class GitRepositoryHelpers {

    @future(callout=true)
    public static void retrieveRepositoriesData(){
        GitRepositoryUtils gitUtil = new GitRepositoryUtils();
        Map<String, String> mapResp = new Map<String, String>();
        GitRepositoryResponse gitRepositoryResponse = new GitRepositoryResponse();
        List<Repository__c> lstRepositories = new List<Repository__c>();
        mapResp = gitUtil.getRepositories();
        System.debug(mapResp);
        if(mapResp.containsKey('statusCode') && mapResp.get('statusCode') == '200') {
            gitRepositoryResponse = (gitRepositoryResponse) JSON.deserialize(mapResp.get('body'),gitRepositoryResponse.class);
            for (GitItemResponse item : gitRepositoryResponse.items) {
                Repository__c repository = new Repository__c(
                    name = item.name,
                    Full_Name__c = item.full_name,
                    Stargazers_Count__c = item.stargazers_count
                );
                lstRepositories.add(repository);
            }
            upsert lstRepositories;
        }
    }
}
