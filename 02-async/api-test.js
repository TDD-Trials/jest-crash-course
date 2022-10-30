import axios from 'axios';

const getAllComments = async () => {
    const results = await axios.get(
        `https://my-json-server.typicode.com/typicode/demo/comments`
    ).then((response) => {
        console.log(response.data)
        return response.data;
        }).catch((error) => {
            console.log(error);
        });
}

// console.log(getAllComments())

export default getAllComments