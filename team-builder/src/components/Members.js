import React from 'react';

const Members = props => {
    return (
        <div className="container">
          {props.team.map(user => (
            <div className="list">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          ))}
        </div>
      )
    }

export default Members