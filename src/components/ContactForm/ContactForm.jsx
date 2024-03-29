import { useState } from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import { Wrapper, Forma, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    setContacts({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrapper>
      <Forma onSubmit={handelSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handelChange}
            pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">
          <RiUserAddLine style={{ marginRight: '10px' }} />
          Add Contact
        </Button>
      </Forma>
    </Wrapper>
  );
};
