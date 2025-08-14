import { todoType } from "./types/todo.model";
import { useRef, useState } from "react";
import { add, remove, edit } from "./slice/slice";
import { useAppDispatch, useAppSelector } from "./store/store";

const App = () => {
    const todos = useAppSelector((state: any) => state.todo);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [editingId, setEditingId] = useState<string | null>(null);

    const formSubmited = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            dispatch(edit({ id: editingId, newText: inputRef.current!.value }));
            setEditingId(null);
        } else {
            dispatch(add(inputRef.current!.value));
        }
        inputRef.current!.value = "";
    };

    const handleDelete = (id: string) => {
        dispatch(remove(id));
    };

    const handleEdit = (todo: todoType) => {
        const newText = window.prompt("Edit your todo:", todo.text);
        if (newText !== null && newText.trim() !== "") {
            dispatch(edit({ id: todo.id, newText }));
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="my-5">Todo App</h1>
            <div className="col-5">
                <form onSubmit={formSubmited} className="input-group mb-3">
                    <input ref={inputRef} type="text" className="form-control" placeholder="Enter item" />
                    <button className="btn btn-dark" type="submit">
                        {editingId ? "Update" : "Add"}
                    </button>
                </form>

                <ul className="list-group">
                    {todos.map((item: todoType) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.text}
                            <div>
                                <button onClick={() => handleEdit(item)} className="btn btn-warning me-2">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(item.id)} className="btn btn-danger">
                                    X
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
