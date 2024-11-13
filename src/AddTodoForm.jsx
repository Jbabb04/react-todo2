function AddTodoForm() {

    return (
        <form>
        <label htmlFor="todoTitle">Title</label> {/* A label for input */}
        <input id="todoTitle" type="text" /> {/* A text input field */}
        <button type="submit">Add</button> {/* A button to submit the form */}
      </form>
    );
}

export default AddTodoForm;