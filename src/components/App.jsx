import { Title } from "./Title/Title";

import { Feedback } from "./Feedback/Feedback";
// import { findByLabelText } from "@testing-library/react";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Title title={"Please Leave Feedback"} />
      <Feedback/>
    </div>
  );
};
