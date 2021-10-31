/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices } from '../actions/actionCreators';

function ServiceList({history}) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch])

  const handleRemove = id => {
    return () => {
      dispatch(removeService(id));
    }
}

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p>Something went wrong try again</p>;
  }

  return (
    <div className='ServiceList'>
      <button className='AddBtn' onClick={() => history.push('/services/add')}>Add</button>
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => history.push(`/services/${o.id}`)}>
          &#9998;
          </button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default ServiceList