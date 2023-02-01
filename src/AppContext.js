import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { paginate } from './helper';

const ContactsContext = React.createContext();

const url = process.env.REACT_APP_URL;

export const AppProvider = ({ children }) => {
      const [fetchData, setFetchData] = useState([]);
      const [contacts, setContacts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [page, setPage] = useState(0);
      const [modal, setModal] = useState(false);
      const [filterContacts, setFilterContacts] = useState([]);

      const fetchContacts = async (url) => {
            try {
                  const response = await axios.get(url);
                  const data = await response.data;
                  setFetchData(paginate(data));
                  setLoading(false);
            }
            catch(err) {
                  console.log(err);
            }
      }

      const handlePage = (index) => {
            setPage(index);
      }

      const openModal = (id) => {
            setModal(prevModal => prevModal = true);
            const filter = contacts.filter(item => item.id === id);
            setFilterContacts(filter);
      }

      const closeModal = () => {
            setModal(prevModal => prevModal = false);
      }

      useEffect(() => {
            setLoading(true);
            fetchContacts(url);            
      }, []);

      useEffect(() => {
            if (!loading) {
                  setContacts(fetchData[page]);
            }
      }, [fetchData, loading, page]);

      return (
            <ContactsContext.Provider value={{
                  fetchData,
                  contacts,
                  handlePage,
                  page,
                  setPage,
                  modal,
                  openModal,
                  closeModal,
                  filterContacts
            }}>
            {children}
            </ContactsContext.Provider>
      )
}

export const useContactsContext = () => {
      return useContext(ContactsContext);
}