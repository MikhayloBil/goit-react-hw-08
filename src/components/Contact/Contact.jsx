import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.li}>
      {contact.name} <br />
      {contact.number}
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
