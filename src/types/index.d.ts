type naviMenu = {
  /**
   * 菜单名称
   */
  name: string;
  /**
   * 菜单id
   */
  id: number;
  /**
   * 路径
   */
  path: string;
  /**
   * 是否激活
   */
  active: boolean;
};
interface Article {
  /**
   * 文章id
   */
  aId: number | string;
  /**
   * 文章标题
   */
  title: string;
  /**
   * 文章摘要
   */
  summary?: string;
  /**
   * 文章内容
   */
  content?: string;
  /**
   * 文章分类
   */
  category?: string;
  /**
   * 分类ID
   */
  cId?: number | string;
  /**
   * 发布时间
   */
  publishTime: Timestamp;
  /**
   * 更新时间
   */
  modifyTime: Timestamp;
  /**
   * 访问次数
   */
  viewCount: number;
  /**
   * 封面图片
   */
  cover: string
}

type BannerState = {
  /**
   * 图片url
   */
  imgUrl: string;
  /**
   * 文章
   */
  article: Article;
};
