import React from "react";
import Button from "react-bootstrap/Button";

export default function Buttons(props) {
  const { txt, href, link, src, marginTop } = props;
  return (
    <a href={link}>
      <Button
        variant='outline-primary'
        style={{
          marginTop: marginTop,
          color: "#e6af2e", // goldenrod
          borderColor: "#e6af2e", // goldenrod
        }}
        href={href}
        src={src}
        download
      >
        {txt}
      </Button>
    </a>
  );
}
