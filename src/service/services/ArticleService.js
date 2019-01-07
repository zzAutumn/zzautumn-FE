import BaseService from './BaseService';

export default class ArticleService extends BaseService {
  async saveArticle(data) {
    const url = this.API.article.saveArticle;
    const result = await this.post(url, data);
    return result;
  }
}
