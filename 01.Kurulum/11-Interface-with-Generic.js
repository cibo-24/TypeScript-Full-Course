// Interface'de Generic kullanımı
var month = {
    key: 1,
    value: "January"
};
console.log(month);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push[0];
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
// <number> yukarıda ki <T> 'ye karşılık gelmektedir.
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
