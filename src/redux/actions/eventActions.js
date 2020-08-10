export const createEvent = (event) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("events")
      .add({
        ...event,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_EVENT",
          event,
        });
      })
      .catch((error) => {
        dispatch({ type: "CREATE_EVENT_ERROR", error });
      });
  };
};
