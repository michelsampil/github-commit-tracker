import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  getHello(): Promise<string> {
    const branchesUrl =
      'https://api.github.com/repos/michelsampil/github-commit-tracker/commits';

    const getBranches = async () => {
      try {
        const res = await axios.get(branchesUrl);
        const data = res?.data;
        const commits = data.map((e) => ({
          author: e.commit.author.name,
          date: e.commit.author.date,
          message: e.commit.message,
        }));
        return JSON.stringify(commits);
      } catch (error) {
        console.log('érror: ', error);
      }
    };

    return getBranches();
  }
}
