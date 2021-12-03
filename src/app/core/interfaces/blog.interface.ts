import {Author} from "./author.interface";

export interface Blog {
  id: number,
  title: string,
  description: string;
  createdAt: Date,
  author: Author,
  likesCount: number
}
