public with sharing class GitRepositoryUtils {
    public GitRepositoryUtils(){}

    public Map<String, String> getRepositories(){
        Map<String, String> mapResp = new Map<String, String>();
        try{
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint('callout:Github_Api/search/repositories?q=language:Java&sort=stars&page=1');
            request.setMethod('GET');
            HTTPResponse res = http.send(request);
            System.debug(res.getBody());
        }catch(Exception ex){
            mapResp.put('Body', '');
            mapResp.put('Mensagem', ex.getMessage());
        }
        return mapResp;
    }
}
