import {
  Http
} from '../utils/http.js'

class LikeModel extends Http {
    like(artId ,behavior, category) {
      let uri = (behavior == 'like' ? 'like' : 'like/cancel');
      this.request({
        uri: uri,
        method : 'POST',
        data : {
          'art_id' : artId,
          'type' : category
        },
        
      })
    }
}


export { LikeModel }