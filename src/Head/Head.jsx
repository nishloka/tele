import React, { useState } from 'react';
import { HeadWrapper, Greeting, Label, Time } from './Head.styles';
import moment from "moment";

const Head = (props) => {
  const date = moment().format('MM/DD/YYYY hh:mm:ss');
  const [now, setNow] = useState(date);

  setTimeout( ()=> {
    const date = moment().format('MM/DD/YYYY hh:mm:ss');
    setNow(date);
  }, 1000);

  return (
  <HeadWrapper>
    <img src="logo.jpg" alt="Logo" />
    <Greeting>
      <Label>telestrations</Label>
      <Time>{now}</Time>
    </Greeting>
  </HeadWrapper>
)};
export default Head;
