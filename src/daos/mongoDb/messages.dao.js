import {messagesModel} from "./models/messages.model.js"

export default class MessagesDaoMongoDB {
    async getAllMessages(){
        try {
            const response = await messagesModel.find({});
            return response            
        } catch (error) {
            console.log(error);
        }
    }

    async createMessage(){
        try {
            const newMessage = await messagesModel.create({
                userName: userName,
                message: message,
            })
            return newMessage;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getMessageById(id){
        try {
            const response = await messagesModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}