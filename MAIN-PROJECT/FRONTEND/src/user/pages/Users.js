import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Braedan Zinn',
      image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fjtv_user_pictures%2Fcc4c53a8-ea7a-4885-afa9-e17406f0e27e-profile_image-300x300.png&imgrefurl=https%3A%2F%2Fwww.twitch.tv%2Fbraedanzinn&tbnid=kHOhpzABrZStQM&vet=12ahUKEwiu94Wxmtf0AhV6hHIEHaH7CHUQMygBegQIARAT..i&docid=FfmZRAQNGW6Q3M&w=300&h=300&itg=1&q=braedanzinn&ved=2ahUKEwiu94Wxmtf0AhV6hHIEHaH7CHUQMygBegQIARAT',
      places: 3
    }
  ];

  return <UsersList items={USERS} />
};

export default Users;