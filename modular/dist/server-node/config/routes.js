System.register([], function (_export) {
    "use strict";

    function isLoggedIn(req, res, next) {
        return next();
    }
    return {
        setters: [],
        execute: function () {
            module.exports = function (staticClient, app) {
                app.use("/", staticClient);

                app.use("/api", require("../routes/api"));

                require("./error-handling")(app);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1ub2RlL2NvbmZpZy9yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdCQUFZLENBQUM7O0FBa0JiLGFBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBRWhDLGVBQU8sSUFBSSxFQUFFLENBQUM7S0FVakI7Ozs7QUE3QkQsa0JBQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxZQUFZLEVBQUUsR0FBRyxFQUFvQztBQUduRSxtQkFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7O0FBRzNCLG1CQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs7QUFRMUMsdUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDLENBQUMiLCJmaWxlIjoic2VydmVyLW5vZGUvY29uZmlnL3JvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSAoc3RhdGljQ2xpZW50LCBhcHAvKiwgW2F1dGhlbnRpY2F0b3J8cGFzc3BvcnRdICovKSA9PiB7XG5cbiAgICAvL1RPRE86IERlZmluZSBhcHBsaWNhdGlvbiByb3V0ZXMuIEN1cnJlbnRseSBjb25maWd1cmVkIGFzIGEgc2luZ2xlIHBhZ2UgY2xpZW50IGFwcGxpY2F0aW9uXG4gICAgYXBwLnVzZShcIi9cIiwgc3RhdGljQ2xpZW50KTtcblxuICAgIC8vVE9ETzogTmVlZCBhIFJFU1QgQVBJIHRvIHNlbmQgYmFjayBKU09OIGRhdGE/XG4gICAgYXBwLnVzZShcIi9hcGlcIiwgcmVxdWlyZShcIi4uL3JvdXRlcy9hcGlcIikpO1xuXG4gICAgLy9UT0RPOiBQcm90ZWN0ZWQgcm91dGU/XG4gICAgLy9hcHAudXNlKFwiL3N1cGVyLXNlY3JldC1yb3V0ZVwiLCBpc0xvZ2dlZEluLCByZXF1aXJlKFwiLi4vcm91dGVzL3N1cGVyLXNlY3JldC9yZXNvdXJjZVwiKSk7XG5cbiAgICAvKipcbiAgICAgKiA0MDQgYW5kIGVycm9yIGhhbmRsaW5nXG4gICAgICovXG4gICAgcmVxdWlyZShcIi4vZXJyb3ItaGFuZGxpbmdcIikoYXBwKTtcbn07XG5cbmZ1bmN0aW9uIGlzTG9nZ2VkSW4ocmVxLCByZXMsIG5leHQpIHtcbiAgICAvL1RPRE86IEltcGxlbWVudGF0aW9uIGRlcGVuZHMgb24geW91ciBhdXRoZW50aWNhdGlvbiBpbXBsZW1lbnRhdGlvblxuICAgIHJldHVybiBuZXh0KCk7XG5cbiAgICAvKlxuICAgIGlmICggcmVxLmlzQXV0aGVudGljYXRlZCgpICkge1xuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cblxuICAgIC8vVE9ETzogUHJvdGVjdGVkIHJvdXRlcyB3aXRob3V0IHRoZSB1c2VyIGJlaW5nIGF1dGhlbnRpY2F0ZWQgc2hvdWxkIHJlZGlyZWN0IHdoZXJlP1xuICAgIHJlcy5yZWRpcmVjdChcIi9cIik7XG4gICAgKi9cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
