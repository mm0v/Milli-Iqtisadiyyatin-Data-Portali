import { todoType } from "./todo.model";

interface todoListProps {
  items: todoType[];
  onDelete: (id: string | number) => void;
  onEdit: (id: string | number, newText: string) => void;
}

const TodoList: React.FC<todoListProps> = (props) => {

  const deleteItem = (id: string | number) => {
    props.onDelete(id);
  };

  const editItem = (id: string | number) => {
    const newText = prompt("Edit your Input");
    if (newText !== null) {
      props.onEdit(id, newText); 
    }
  };
  
  return (
    <>
      <ul className="list-group">
        {props.items.map((item: todoType, index: number) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {item.text}
            <div className="buttons">
              <button onClick={() => { editItem(item.id) }} className="btn btn-warning mx-3">Edit</button>
              <button onClick={() => { deleteItem(item.id) }} className="btn btn-danger">X</button>
            </div>
          </li>

        ))}
      </ul>
    </>
  );
};

export default TodoList;