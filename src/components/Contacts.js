import { useContactsContext } from "../AppContext";
import { title } from "../helper";

const Contacts = () => {
      const { fetchData, handlePage, contacts, setPage, page, modal, openModal, closeModal, filterContacts } = useContactsContext();

      return (
            <div className="">
                  <div className="contact-container">
                        <table>
                              <thead>
                                    <tr>
                                          {title.map(label => {
                                                const { id, content } = label;
                                                return (
                                                      <th key={id}>{content}</th>
                                                )
                                          })}
                                    </tr>
                              </thead>
                              <tbody>
                                    {contacts.map(contact => {
                                          const { id, name, address: { city, street }, company: { name: company } } = contact;
                                          return (
                                                <tr key={id}>
                                                      <td>{id}</td>
                                                      <td>{company}</td>
                                                      <td>{name}</td>
                                                      <td>{city}</td>
                                                      <td>{street}</td>
                                                      <td>
                                                            <button className="table-btn" onClick={() => openModal(id)}>
                                                                  View Details
                                                            </button>
                                                            <div className="modal" style={{ display: modal ? "block" : "none" }}>
                                                                  <div className="modal-content">
                                                                        <div className="desc">
                                                                        <div>
                                                                                     <h2>Description</h2>
                                                                                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, suscipit?</p>
                                                                        </div>
                                                                        <div>
                                                                        <button onClick={closeModal} className="close">&times;</button>
                                                                        </div>
                                                                        </div>
                                                                        {filterContacts.map(contact => {
                                                                              const { name, address: { city, street, suite, zipcode }, company: { name: company }, email, phone } = contact;
                                                                              return (
                                                                                    <div className="modal-flex">
                                                                                          <div className="text">
                                                                                          <h3>Contact Person</h3>
                                                                                          <p>{name}</p>
                                                                                          <h3>City</h3>
                                                                                          <p>{city}</p>
                                                                                          <h3>Email</h3>
                                                                                          <p>{email}</p>
                                                                                          </div>
                                                                                          <div className="text">
                                                                                          <h3>Address</h3>
                                                                                          <p>{`${street}, ${suite}, ${zipcode}, ${city}`}</p>
                                                                                          <h3>Company</h3>
                                                                                          <p>{company}</p>
                                                                                          <h3>Phones</h3>
                                                                                          <p>{phone}</p>
                                                                                          </div>
                                                                                    </div>
                                                                              )
                                                                        })}
                                                                  </div>
                                                            </div>
                                                      </td>
                                                </tr>

                                          )
                                    })}
                              </tbody>
                        </table>
                  </div>
                  <div className="page">
                        <div className="page-container">
                              <button className="btn" onClick={() => setPage(prevIndex => prevIndex === 0 ? prevIndex + (fetchData.length - 1) : prevIndex - 1)}>&lsaquo;</button>
                              {fetchData.map((item, index) => {
                                    return (
                                          <button key={index} className={`${page === index ? "active btn" : "btn"}`} onClick={() => handlePage(index)}>{index + 1}</button>
                                    )
                              })}
                              <button className="btn" onClick={() => setPage(nextInd => nextInd >= (fetchData.length - 1) ? 0 : nextInd + 1)}>&rsaquo;</button>
                        </div>
                  </div>
            </div>
      )
}

export default Contacts