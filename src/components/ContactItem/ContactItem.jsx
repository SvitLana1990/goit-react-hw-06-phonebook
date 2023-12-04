import { ContactInfo, ContactItem, DeleteButton } from './ContactItem.styled';

export const Item = ({ name, number, id, onClick }) => {
  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton onClick={() => onClick(id)}>Delete</DeleteButton>
    </ContactItem>
  );
};
