import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
    query clients {
        clients {
            name
            id
            email
            phone
          }
    }
`

const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <tr>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>

            </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Clients;