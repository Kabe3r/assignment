export const paginate = (contacts) => {
      const contactsPerPage = 3;
      const noOfPages = Math.ceil(contacts.length / contactsPerPage);

      const newContacts = Array.from({ length: noOfPages}, (_, index) => {
            const start = index * contactsPerPage;
            return contacts.slice(start, start + contactsPerPage);
      });

      return newContacts;
}

export const title = [
      { id: 1, content: 'SR' },
      { id: 2, content: 'COMPANY' },
      { id: 3, content: 'CONTACT' },
      { id: 4, content: 'CITY' },
      { id: 5, content: 'STREET'},
      { id: 6, content: 'Details'}
]