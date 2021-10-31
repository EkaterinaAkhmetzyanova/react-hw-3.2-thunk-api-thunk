/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, getService } from '../actions/actionCreators';

function ServiceAdd({match, history}) {
  let {item, loading, error, success} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const {id} = match.params;

  useEffect(() => {
    if (id !=='add') {
      dispatch(getService(id));
    }
  }, []);

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit =  evt => {
    evt.preventDefault();
    dispatch(addService(id === "add" ? 0 : Number(id)));
  }

  const handleCancel = () => {
    history.push('/services');
  }

  if (success) {
    handleCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <input name='content' onChange={handleChange} value={item.content} />
      <button type='button' onClick={handleCancel}>Cancel</button>
      {loading ? (
        <div className='Loading'>
          Loading...
        </div>
      ) : (
        <button type='submit'>Save</button>
      )}
      {error && <p>Something went wrong try again</p>}
    </form>
  );
}

export default ServiceAdd;