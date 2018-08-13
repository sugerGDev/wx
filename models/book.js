import { Http } from "../utils/http-p";

class BookModel  extends Http {
    getHotList() {
       return this.request({
           uri:'book/hot_list'
       })
    }
}
export { BookModel }