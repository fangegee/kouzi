/** 
 * api接口统一管理
 */
import { get } from './axios';

/**
 * 
 * @param {string} params 
 * 我们定义了一个topics方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */

// 主题首页
//大神说推荐数据
export const recommentListApi = params => get('bbs/web-api/v1/loan-app/find-post-loan-app-encyclopedia-list', params);
//下款真口子数据
export const reallyKouziApi = params => get('banka/category-access/v1/find-category-list', params)
//热门帖子列表
export const hotPostApi = params => get('bbs/post/v1/wap/recommend-post', params)
//最新帖子列表
export const newPostApi = params => get('bbs/post/v1/wap/recommend-post', params)
//大神说列表
export const godSayListApi = params => get('bbs/web-api/v1/loan-app/loan-app-list-with-baike', params)
//首页投诉列表
export const complaintListApi = params => get('bbs/web-api/v1/ts21cn/stream-post', params)
//发送验证码
export const sendPasswordApi = params => get('user/web-api/v1/sms/send', params)
//登录
export const userLoginApi = params => get('bbs/web-api/v1/user-center/login', params)
//获取用户信息
export const getUserDateApi = params => get('bbs/user-info/v1/get-user', params)
//大神说推荐细节
export const godRecommendApi = params => get('bbs/web-api/v1/loan-app-encyclopedia/find-encyclopedia-detail', params)
//大神说推荐细节下的评论
export const godCommentApi = params => get('bbs/web-api/v1/encyclopedia/comments', params)
//帖子细节
export const postDetailApi = params => get('bbs/post/v1/get-post-detail', params)
//热门帖子细节评论
export const postCommentApi = params => get('bbs/post-comment/v1/get-post-comment-page', params)
//帖子细节下的列表
export const postDetailListApi = params => get('bbs/web-api/v2/loan-app/find-post-to-post-page', params)
//口子=》热门口子/极速申请/大额长期/其他口子
export const KouziApi = params => get('banka/category-access/v1/find-category-list', params)
//专栏
export const articleListApi = params => get('billcms/web-api/v1/free/loan/article/page', params)
//办卡=>今日推荐/热门银行/热门卡片
export const BankaApi = params => get('banka/category-access/v1/find-category-list', params)
//老哥投诉=>最新or
export const ComBastNewApi = params => get('bbs/web-api/v1/ts21cn/stream-post', params)
//老哥投诉=>热榜
export const hotListApi = params => get('bbs/web-api/v1/ts21cn/merchants', params)
//老哥投诉=>已解决
export const ComOkApi = params => get('bbs/web-api/v1/ts21cn/stream-post', params)
//口子===分类
export const kouziClassityApi = params => get('bbs/web-api/v1/spider-loan/category', params)
//口子===口子列表
export const AllKouziListApi = params => get('bbs/web-api/v1/spider-loan/list', params)
//搜索框=>获取输入文字id
export const getWordApi = params => get('bbs/web-api/v1/search/get-word-id', params)
//搜索结果=>全部
export const allSearchApi = params => get('bbs/web-api/v1/search/find-post', params)
//搜索结果=>大神说
export const GodSearchApi = params => get('bbs/web-api/v1/search/find-post', params)
//搜索结果=>投诉
export const complaintSearchApi = params => get('bbs/web-api/v1/search/find-post', params)
//搜索结果=>帖子
export const postSearchApi = params => get('bbs/web-api/v1/search/find-post', params)