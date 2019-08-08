import {ArticleController} from "../controller/ArticleController";

export default [{
    method: "post",
    route: "/article",
    controller: ArticleController,
    action: "save"
}, {
    method: "get",
    route: "/article/list",
    controller: ArticleController,
    action: "find"
}, {
    method: "get",
    route: "/article/:id",
    controller: ArticleController,
    action: "findByID"
}, {
    method: "delete",
    
    route: "/users",
    controller: ArticleController,
    action: "remove"
}];