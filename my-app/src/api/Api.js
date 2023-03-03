import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
});

export const elementsAPI = {

    getImagesList: () => {
        return instance.get('photos/')
        .then(response => {
            return response.data;
        })
    },   

    getCard: (imageId) => {

        return instance.get(`photos/` + imageId)
        .then(response => {
            return response.data;
        })
    },
    
    addComments: (cardData) => {
        const id = cardData.cardId
        const imageUrl = cardData.cardImage
        const comments = cardData.newComments
        
        return instance.put(`photos/` + id, {id: id, imageUrl: imageUrl, comments: comments} )
        .then(response => {
            return response.data;
        })
    },

}





//GET https://boiling-refuge-66454.herokuapp.com/images - получение списка фотографий.
//GET https://boiling-refuge-66454.herokuapp.com/images/:imageId - получения большого изображения и списка комментариев.
//POST https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments - добавление комментария (204 – OK, комментарий не сохраняется).