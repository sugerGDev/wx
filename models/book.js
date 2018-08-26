import { Http } from "../utils/http-p";

class BookModel extends Http {
    getHotList() {
        return this.request({
            uri: 'book/hot_list'
        })
    }

    getMyBookCount() {
        return this.request({
            uri: "/book/favor/count"
        })
    }
}
export { BookModel }