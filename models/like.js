import {
  Http
} from '../utils/http.js'

class LikeModel extends Http {


    like(artId ,behavior, category) {

      
      let isLike = behavior == 'like';
      let uri = ( isLike ? 'like' : 'like/cancel');
      this.request({
        uri: uri,
        method : 'POST',
        data : {
          'art_id' : artId,
          'type' : category
        },
        
      })
    }


    getLikeStatus(artId,category,sCallBak) {
      this.request({
        uri : `classic/${category}/${artId}/favor`,
        success:sCallBak,
      })
    }
}


export { LikeModel }