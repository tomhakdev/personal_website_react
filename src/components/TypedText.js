import React, { useEffect, useState } from 'react';
import './TypedText.css';

const TypedText = () => {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Updated typing and deleting speeds
  const typingSpeed = 100; // Speed of typing in milliseconds (faster)
  const deletingSpeed = 80; // Speed of deleting in milliseconds (faster)
  const pauseDuration = 1000; // Pause duration after completing a message (in milliseconds)

  const messages = [
    "Hello! Welcome to my website :)",
    "Check out my projects!",
    "Contact me at haklaitom@gmail.com"
  ];

  useEffect(() => {
    let timer;

    if (isDeleting) {
      // Delete characters
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // Pause before starting the next message
        timer = setTimeout(() => {
          setIsDeleting(false);
          setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, pauseDuration);
      }
    } else {
      const currentMessage = messages[messageIndex];
      if (text.length < currentMessage.length) {
        // Type characters
        timer = setTimeout(() => {
          setText(currentMessage.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting to delete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, messageIndex]);

  return (
    <p id="Typed-Text">
      {text}
    </p>
  );
};

export default TypedText;
