import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  getData(): Article[] {
    let articles: Article[] = [];

    data.forEach((d) => {
      articles.push(new Article(d.title, d.description, d.author, d.imageUrl));
    });

    return articles;
  }
}
