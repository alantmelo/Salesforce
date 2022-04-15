public with sharing class GitRepositoryUtils {
    public GitRepositoryUtils(){}

    public Map<String, String> getRepositories(){
        Map<String, String> mapResp = new Map<String, String>();
        String sResponseBody;
        try{
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint('callout:Github_Api/search/repositories?q=language:Java&sort=stars&page=1');
            request.setMethod('GET');
            HTTPResponse response = http.send(request);
            sResponseBody = response.getBody();
            mapResp.put('statusCode', String.valueOf(response.getStatusCode()));
            mapResp.put('body', sResponseBody);
            System.debug(response.getBody());
        }catch(Exception ex){
            mapResp.put('Body', '');
            mapResp.put('Mensagem', ex.getMessage());
        }
        return mapResp;
    }
}
