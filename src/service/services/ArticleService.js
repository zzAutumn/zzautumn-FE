import BaseService from './BaseService';

export default class ArticleService extends BaseService {
  async getArticles(data) {
    const url = this.API.article.getArticleList;
    const result = await this.post(url, data);
    return result;
  }

  async getArticleById(data) {
    const url = this.API.article.findById;
    const result = await this.post(url, data);
    return result;
  }
}
