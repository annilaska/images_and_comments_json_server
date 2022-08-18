import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/images'
});

export const elementsAPI = {

    getImagesList: () => {

        return instance.get('')
        .then(response => {
            return response.data;
        })
    },   

    getLargeImagesAndComments: (imageId) => {

        return instance.get(`/` + imageId)
        .then(response => {
            return response.data;
        })
    },
    
    addComments: (imageId, newComment) => {
        
        return instance.post(`/` + imageId + '/comments', {name: 'Ricardo', comment: newComment} )
        .then(response => {
            return response.data;
        })
    },

}





//GET https://boiling-refuge-66454.herokuapp.com/images - получение списка фотографий.
//GET https://boiling-refuge-66454.herokuapp.com/images/:imageId - получения большого изображения и списка комментариев.
//POST https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments - добавление комментария (204 – OK, комментарий не сохраняется).