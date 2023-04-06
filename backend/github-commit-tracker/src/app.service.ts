import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface Commit {
  author: string;
  date: number;
  message: string;
  url: string;
  branch: string;
}
@Injectable()
export class AppService {
  getCommits(): Promise<string> {
    const commitsUrl =
      'https://api.github.com/repos/michelsampil/github-commit-tracker/commits';

    const branchesUrl =
      'https://api.github.com/repos/michelsampil/github-commit-tracker/branches';

    const getBranches = async () => {
      let branches;

      // GET ALL BRANCHES
      try {
        const res = await axios.get(branchesUrl);
        const data = res?.data;
        branches = data.map((e) => e.name);
      } catch (error) {}

      // PREPARING ALL THE PROMISES FOR COMMITS
      const promises: [Promise<Commit>] = branches.map(async (e) => {
        const res = await axios.get(commitsUrl + `/${e}`);
        const data = res.data;
        const commits: Commit = {
          author: data.commit.author.name,
          date: data.commit.author.date,
          message: data.commit.message,
          url: data.html_url,
          branch: e,
        };
        return commits;
      });

      // GETTING ALL THE COMITS
      const allCommits: any = await Promise.all(promises);
      return JSON.stringify(allCommits);
    };
    return getBranches();
  }
}
