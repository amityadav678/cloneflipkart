import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const url =
        'mongodb+srv://amit-web:9793151506@amit-web.5132jjg.mongodb.net/?retryWrites=true&w=majority&appName=amit-web';

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};
export default Connection;
