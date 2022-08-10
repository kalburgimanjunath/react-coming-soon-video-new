import React from 'react';
export default function About() {
  return (
    <div className="about">
      <h1>Coming soon</h1>
      <p>
        Blandit massa enim nec dui nunc. Non pulvinar neque amet laoreet amet
        interdum et consequat.
      </p>
      <div>{/* social icons */}</div>
      <div style={{ flex: 1, paddingTop: 20 }}>
        <input
          type="text"
          placeholder="Email address"
          className="email"
          style={{
            
          }}
        />
        <span className="button" style={{ marginLeft: 20 }}>
          <button type="submit">Sign Up</button>
        </span>
      </div>
    </div>
  );
}
