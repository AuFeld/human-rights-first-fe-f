import { fetchIncidents } from '.../state/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Test = () => {
  // const [fetchIncidents, setFetchIncidents] = useState([]);
  // const dispatch = useSelector()

  // useEffect(() => {

  //     dispatch(fetchIncidents());
  // }, [dispatch])

  const counter = useSelector(state => state.counter);
  return <div>{counter}</div>;
};
