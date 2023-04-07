import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Octokit } from 'octokit';

interface Commit {
  author: string;
  date: number;
  message: string;
  url: string;
  branch: string;
}
@Injectable()
export class AppService {
  async getCommits(): Promise<string> {
    const commitsUrl =
      'https://api.github.com/repos/michelsampil/github-commit-tracker/commits';

    const branchesUrl =
      'https://api.github.com/repos/michelsampil/github-commit-tracker/branches';

    // const octokit = new Octokit({});

    // const getBranches = async () => {
    //   let branches;

    //   // GET ALL BRANCHES
    //   try {
    //     const res = await axios.get(branchesUrl);
    //     const data = res?.data;
    //     branches = data.map((e) => e.name);
    //   } catch (error) {}

    //   // PREPARING ALL THE PROMISES FOR COMMITS
    //   const promises: [Promise<Commit>] = branches.map(async (e) => {
    //     const res = await axios.get(commitsUrl + `/${e}`);
    //     const data = res.data;
    //     const commits: Commit = {
    //       author: data.commit.author.name,
    //       date: data.commit.author.date,
    //       message: data.commit.message,
    //       url: data.html_url,
    //       branch: e,
    //     };
    //     return commits;
    //   });

    //   // GETTING ALL THE COMITS
    //   const allCommits: any = await Promise.all(promises);
    //   return JSON.stringify(allCommits);
    // };
    // return getBranches();

    const octokit = new Octokit({});

    const data = await octokit.paginate(
      'GET /repos/michelsampil/github-commit-tracker/commits',
      {
        owner: 'michelsampil',
        repo: 'github-commit-tracker',
        per_page: 100,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    const commits = data.map((e: any) => {
      return {
        author: e.commit.author.name,
        date: e.commit.author.date,
        message: e.commit.message,
        url: e.html_url,
        branch: 'aaaa',
      };
    });

    console.log('commits: ', commits);
    return JSON.stringify(commits);

    console.log(data);
  }
}
