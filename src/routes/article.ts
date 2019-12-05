import { ArticleController } from "../controller/ArticleController";

export default [
  {
    method: "post",
    route: "/article/update",
    controller: ArticleController,
    action: "save"
  },
  {
    method: "get",
    route: "/article/list",
    controller: ArticleController,
    action: "find"
  },
  {
    method: "get",
    route: "/article/findById",
    controller: ArticleController,
    action: "findById"
  },
  {
    method: "get",
    route: "/article/deleteById",
    controller: ArticleController,
    action: "removeById"
  }
];
