import api from "../api";

export async function getAllTopics(callback){
    await api.get('api/v1/topic/get-all')
    .then(callback)
    .catch(err => console.log('error when fetching topics: ' + err));
}

export async function getTopic(id, callback){
    await api.get('api/v1/topic/get/'+id)
    .then(callback)
    .catch(err => console.log('error when fetching topic '+ id + ': ' + err));
}

export async function approveAnswer(approveData, callback){
    await api.put('api/v1/answer/approve', approveData)
    .then(callback)
    .catch(err => console.log(err))
}

export async function disapproveAnswer(disapproveData, callback){
    await api.put('api/v1/answer/disapprove', disapproveData)
    .then(callback)
    .catch(err => console.log(err))
}

export async function getTopicsBySearch(searchKey, callback){
    await api.get('api/v1/topic/search/'+searchKey)
    .then(callback)
    .catch(err => console.log('error when searching topics: ' + err));
}

export async function createTopic(newTopicData, callback){
    await api.post('api/v1/topic/create', newTopicData)
    .then(callback)
    .catch(err => console.log('error when creating topic: ' + err));
}