public with sharing class GitItemResponse {
    public string name{get;set;}
    public string description{get;set;}
    public string full_name{get;set;}
    public Decimal stargazers_count{get;set;}
    public GitItemResponse() {
        name = '';
        description = '';
        full_name = '';
        stargazers_count = 0;
    }
}
