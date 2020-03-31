class Github{
    constructor(){
        this.client_id='8fe88f41812d7712cc50';
        this.client_secret='ddcf43dc0101c0db651c01954337724f625a7b33';
        this.repo_count=5;
        this.repo_sort='created: asc';
    }
    async getUser(user){
        const profileResponse = fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await (await profileResponse).json();
        const repos=await (await repoResponse).json();
        return{
            profile,
            repos
        }

    }
}