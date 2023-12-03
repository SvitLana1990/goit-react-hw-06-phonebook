import { ContactInfo, ContactItem, DeleteButton } from './ContactItem.styled';

export const Item = ({ name, number, id, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactItem>
  );
};
