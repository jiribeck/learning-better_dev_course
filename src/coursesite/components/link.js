import React from 'react';

export default function Link({ url, text }) {
  return (
    <a href={url} className="hidden lg:inline-block hover:text-gray-900">
      {text}
    </a>
  );
}
