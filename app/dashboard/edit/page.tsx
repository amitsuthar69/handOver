export default function EditProfile() {
  return (
    <div className="dark font-mono text-gray-50 h-screen flex flex-col gap-2 p-8">
      <h1 className="text-center">Edit Details</h1>
      <form className="flex flex-col gap-4">
        <input
          className="edit-form-input"
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          className="edit-form-input"
          placeholder="phone number"
          type="text"
          name="phone"
        />
        <button className="btn-cyan">Submit</button>
      </form>
    </div>
  );
}
