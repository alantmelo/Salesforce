public with sharing class GitRepositoryResponse {
    public List<GitItemResponse> items {get;set;}
    public string  total_count {get;set;}
    public GitRepositoryResponse() {
        items = new List<GitItemResponse>();
        total_count = '';
    }
}
