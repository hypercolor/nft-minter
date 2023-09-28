import React from 'react';
import LoginForm from './LoginForm';

const LoggedOut = () => {
  const handleLogIn = () => {
  //   TODO: Navigate to/Show login form
  }

  return (

      <div>
        <div>
          <h1>Welcome to [Project Name]!</h1>

          <h2>🎉 Dive into the future of digital art and collectibles with [Project Name] - a unique and groundbreaking NFT collection that stands at the intersection of creativity, technology, and innovation.</h2>

          <div>
            <h3>
              🖼 What's [Project Name] all about?
            </h3>
            <p>
              Our project is more than just pixels and code; it's a blend of passion, artistic vision, and the endless possibilities of the blockchain. By becoming a part of our community, you are not only securing a piece of digital art but also supporting the ever-evolving landscape of digital creators and enthusiasts.
            </p>
          </div>

          <div>
            <h3>
              🪄 Ready to Mint Your Token?
            </h3>
            <p>
              You're in the right place! This is the dedicated space where you can mint new tokens, expanding your collection and securing a piece of [Project Name]'s legacy. Just follow the instructions below, and you'll be the proud owner of a unique NFT in no time!
            </p>
          </div>

          <div>
            <h3>
              💡 Not Familiar with NFTs?
            </h3>
            <p>
              No worries! NFT stands for Non-Fungible Token. In simpler terms, it's a one-of-a-kind digital asset verified by blockchain technology, ensuring its authenticity and uniqueness. Think of it as a collectible digital trading card or artwork!

            </p>
          </div>

          <div>
            <h3>
              🤝 Join Our Community!
            </h3>
            <p>
              The real magic happens when enthusiasts like you come together. Connect with fellow collectors, share your insights, and stay updated on the latest [Project Name] news and releases by joining our community channels.
            </p>
          </div>
          <p>
            Thank you for being a part of this journey with us. Let's mint the future together! 🚀
          </p>
        </div>

        <br />

        <LoginForm />
      </div>
  );
}

export default LoggedOut;
