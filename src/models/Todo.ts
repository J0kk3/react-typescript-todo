import { v4 as uuidv4 } from 'uuid';
class Todo
{
    id: string;
    text: string;

    constructor ( todoText: string )
    {
        this.text = todoText;
        this.id = uuidv4();
        // this.id = new Date().toISOString();
    };
}


export default Todo;