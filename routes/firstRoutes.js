import { Router } from "express";

let firstRoute = Router();

export default firstRoute;


firstRoute
.route("/")
.get((req, res, next) => {
    console.log(req.body)
    console.log("a");

})

.post((req, res, next) => {
    console.log("b");
});

firstRoute
.route("/job")
.get((req, res, next) => {
    console.log("c");
});

firstRoute
.route("/:id/a/:id2")// colone halyo vane dynamic parameter ho, jasko value url bata aauxa ani id vanne parameter ko value url bata aauxa, jasto ki /123 ma 123 id ko value hoda, /abc ma abc id ko value hoda
.get((req, res, next) => {
    console.log("dynamic params");
    console.log(req.params);
});
