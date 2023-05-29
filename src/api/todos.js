import axios from 'axios';

const baseUrl = ' http://localhost:3001/todos';

export const getTodos = async () => {
  try {
   const res = axios.get(`${baseUrl}/todos`)

   return res.data
  } catch(error) {
    console.error('[Get Todos failed]:', error)
  }
}

export const createTodo = async (payload) => {
  try {
    const {title, isDone} = payload
    const res = await axios.post(`${baseUrl}/todos`, {
      title,
      isDone,
    })
    return res.data
  } catch (error) {
    console.error('[Create Todos failed]:', error);
  }
};

const patchTodo = async () => {
  try {
  } catch (error) {
    console.error('[Get Todos failed]:', error);
  }
};

const deleteTodo = async () => {
  try {
  } catch (error) {
    console.error('[Get Todos failed]:', error);
  }
};